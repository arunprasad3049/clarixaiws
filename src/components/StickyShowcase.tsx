"use client";

import { motion } from "framer-motion";

const stages = [
  {
    title: "1) Ingest & classify",
    desc: "Bring in documents/events and normalize payloads for downstream decisioning.",
    demo: [
      ["Input", "PDF / Images / Events"],
      ["Detect", "Doc type + confidence"],
      ["Output", "Normalized payload"]
    ]
  },
  {
    title: "2) Extract intelligence",
    desc: "OCR + NLP: entities, tables, codes and key signals.",
    demo: [
      ["OCR/NLP", "Entities + tables + codes"],
      ["Normalize", "ICD / policy fields"],
      ["Output", "Structured data"]
    ]
  },
  {
    title: "3) Reason with agents",
    desc: "Agents apply policy/rules and knowledge (RAG) to recommend actions.",
    demo: [
      ["RAG", "Policies + playbooks"],
      ["Tools", "Rules + checks"],
      ["Output", "Recommendation"]
    ]
  },
  {
    title: "4) Risk & compliance",
    desc: "Fraud/anomaly signals + governance controls + audit evidence trail.",
    demo: [
      ["Signals", "Fraud / anomaly scoring"],
      ["Controls", "Governance + audit"],
      ["Output", "Evidence trail"]
    ]
  }
];

export default function StickyShowcase() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-extrabold">How clarixai delivers agentic outcomes</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          A modern, governed workflow model designed for regulated enterprise systems.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="md:sticky md:top-24 h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glow">
            <div className="text-xs font-bold text-white/70">Live workflow preview</div>
            <div className="mt-2 text-lg font-extrabold">Document → Decision</div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  <span className="h-2 w-2 rounded-full bg-yellow-300/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-bold">
                  Simulated
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {stages[0].demo.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-xs"
                  >
                    <span className="text-white/70">{k}</span>
                    <span className="text-white/90">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-white/60">
                Scroll the stages on the right to see how each step behaves.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {stages.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-sm font-extrabold">{s.title}</div>
                <div className="mt-2 text-sm text-white/70">{s.desc}</div>
                <div className="mt-4 grid gap-2">
                  {s.demo.map(([k, v]) => (
                    <div
                      key={k + v}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs"
                    >
                      <span className="text-white/70">{k}</span>
                      <span className="text-white/90">{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
