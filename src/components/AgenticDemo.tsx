"use client";

import { useState } from "react";

type DemoResp = {
  ok: boolean;
  request_id: string;
  summary: string;
  steps: { stage: string; message: string }[];
};

export default function AgenticDemo() {
  const [fileName, setFileName] = useState<string>("");
  const [stage, setStage] = useState<string>("Ready");
  const [log, setLog] = useState<string>("Upload a sample file and run the demo.");
  const [mode, setMode] = useState<"local" | "api">("local");

  async function runLocal() {
    if (!fileName) {
      setStage("Input required");
      setLog("Please upload a file first.");
      return;
    }
    const steps: [string, string][] = [
      ["Ingest", `Received: ${fileName}`],
      ["Extract", "OCR/NLP extraction (simulated)… entities/tables/codes detected."],
      ["Reason", "Policy/rules reasoning via agents (simulated)… recommendation created."],
      ["Risk", "Fraud/anomaly signals (simulated)… Risk band: LOW."],
      ["Decision", "Decision generated (simulated)… APPROVED / REVIEW."],
      ["Audit", "Audit evidence created (simulated)… trace ready."]
    ];

    setLog("");
    for (const [s, m] of steps) {
      setStage(s);
      setLog((p) => p + `\n[${s}] ${m}`);
      await new Promise((r) => setTimeout(r, 700));
    }
    setStage("Completed");
  }

  async function runApi() {
    if (!fileName) {
      setStage("Input required");
      setLog("Please upload a file first.");
      return;
    }

    setStage("Calling API");
    setLog("Requesting simulated workflow from /api/demo ...");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ fileName })
      });
      const data = (await res.json()) as DemoResp;

      if (!data.ok) throw new Error("API returned not ok");

      setLog("");
      for (const s of data.steps) {
        setStage(s.stage);
        setLog((p) => p + `\n[${s.stage}] ${s.message}`);
        await new Promise((r) => setTimeout(r, 500));
      }
      setStage("Completed");
    } catch (e) {
      setStage("Error");
      setLog("Could not reach /api/demo. If deploying to Cloudflare Pages, ensure /functions is included.");
    }
  }

  async function run() {
    if (mode === "local") return runLocal();
    return runApi();
  }

  function reset() {
    setFileName("");
    setStage("Ready");
    setLog("Upload a sample file and run the demo.");
  }

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-extrabold">Try the Agentic AI demo</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          Upload a sample file (name only used for demo). Choose <b>Local</b> or <b>API</b> mode. No data is stored.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-bold">
          <button
            className={
              "rounded-full px-3 py-1 transition " +
              (mode === "local" ? "bg-white/10 text-white" : "text-white/70 hover:text-white")
            }
            onClick={() => setMode("local")}
            type="button"
          >
            Local
          </button>
          <button
            className={
              "rounded-full px-3 py-1 transition " +
              (mode === "api" ? "bg-white/10 text-white" : "text-white/70 hover:text-white")
            }
            onClick={() => setMode("api")}
            type="button"
          >
            API
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-sm font-extrabold">Upload input</div>
            <input
              className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 p-3 text-sm"
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.txt"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
            <div className="mt-3 text-xs text-white/60">Selected: {fileName || "None"}</div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={run}
                className="rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 px-4 py-2 text-sm font-extrabold text-black"
                type="button"
              >
                Run demo
              </button>
              <button
                onClick={reset}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-extrabold"
                type="button"
              >
                Reset
              </button>
            </div>

            <div className="mt-4 text-xs text-white/60">
              Local mode runs in browser. API mode calls <code>/api/demo</code> (Cloudflare Pages Functions).
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold">Workflow output</div>
              <div className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-extrabold">
                {stage}
              </div>
            </div>
            <pre className="mt-4 min-h-[240px] whitespace-pre-wrap rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-white/80">
              {log}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
