export const onRequestPost = async ({ request }: any) => {
  try {
    const body = await request.json().catch(() => ({} as any));
    const fileName = (body?.fileName || "sample.pdf") as string;

    const request_id = crypto.randomUUID();

    const steps = [
      { stage: "Ingest", message: `Received: ${fileName}` },
      { stage: "Extract", message: "OCR/NLP extraction (simulated)… entities/tables/codes detected." },
      { stage: "Reason", message: "Policy/rules reasoning via agents (simulated)… recommendation created." },
      { stage: "Risk", message: "Fraud/anomaly signals (simulated)… Risk band: LOW." },
      { stage: "Decision", message: "Decision generated (simulated)… APPROVED / REVIEW." },
      { stage: "Audit", message: "Audit evidence created (simulated)… trace ready." }
    ];

    return new Response(
      JSON.stringify({
        ok: true,
        request_id,
        summary: "Simulated agentic workflow completed.",
        steps
      }),
      {
        headers: {
          "content-type": "application/json",
          "cache-control": "no-store"
        }  
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, error: "bad_request" }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }
};
