import StickyShowcase from "@/components/StickyShowcase";
import AgenticDemo from "@/components/AgenticDemo";
import CTA from "@/components/CTA";

export const metadata = { title: "Agentic AI | clarixai" };

export default function AgenticAI() {
  return (
    <main>
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid absolute inset-0" />
          <div
            className="orb"
            style={{
              left: "-340px",
              top: "-340px",
              background:
                "radial-gradient(circle at 30% 30%, rgba(124,92,255,.95), rgba(124,92,255,0) 60%)"
            }}
          />
          <div
            className="orb"
            style={{
              right: "-420px",
              top: "-280px",
              width: 1050,
              height: 1050,
              opacity: 0.16,
              background:
                "radial-gradient(circle at 40% 35%, rgba(0,212,255,.95), rgba(0,212,255,0) 60%)"
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Governed autonomy
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Agentic AI for BFSI, health insurance & fintech
          </h1>
          <p className="mt-4 max-w-4xl text-white/70">
            Autonomous workflows that plan, use tools, apply policy/rules, and produce audit-ready outputs.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-lg font-extrabold">Typical use cases</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>KYC & onboarding evidence collection</li>
                <li>Claims triage + policy reasoning + recommendations</li>
                <li>Fraud/anomaly triage with human-in-the-loop</li>
                <li>Compliance reporting automation</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-lg font-extrabold">Core stages</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>Ingest → Extract → Reason → Risk → Decision → Audit</li>
                <li>Governance controls + traceability</li>
                <li>Evaluation harness + monitoring</li>
                <li>Secure deployment patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StickyShowcase />
      <AgenticDemo />
      <CTA />
    </main>
  );
}
