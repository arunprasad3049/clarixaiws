"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Cloud solutions & migrations",
    desc: "Cloud foundations, landing zones, secure connectivity, and end-to-end migrations for regulated environments.",
    tags: ["Cloud", "Migration", "Security"]
  },
  {
    title: "GenAI + AI/ML + Data analysis",
    desc: "GenAI solution engineering, AI/ML models, analytics pipelines, and data-driven decision systems.",
    tags: ["GenAI", "ML", "Analytics"]
  },
  {
    title: "Agentic AI for BFSI, health insurance & fintech",
    desc: "Autonomous workflows for KYC, claims triage, fraud/anomaly routing, and compliance evidence generation.",
    tags: ["Agents", "RAG", "Audit"]
  },
  {
    title: "Cybersecurity solutions",
    desc: "Zero Trust architecture, threat detection, controls engineering, and compliance-aligned security programs.",
    tags: ["Zero Trust", "SOC", "Compliance"]
  },
  {
    title: "DevOps & container solutions",
    desc: "CI/CD, IaC, Kubernetes/container platforms, observability, and release governance for regulated delivery.",
    tags: ["CI/CD", "K8s", "IaC"]
  }
];

export default function ServicePillars({ variant = "home" }: { variant?: "home" | "full" }) {
  const cols = variant === "full" ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <section className={variant === "home" ? "border-t border-white/10 py-24" : ""}>
      <div className={variant === "home" ? "mx-auto max-w-7xl px-6" : ""}>
        {variant === "home" && (
          <>
            <h2 className="text-3xl font-extrabold">Service pillars</h2>
            <p className="mt-3 max-w-3xl text-white/70">
              A focused set of offerings designed for high-assurance enterprise delivery.
            </p>
          </>
        )}

        <div className={"mt-10 grid gap-4 " + cols}>
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-lg font-extrabold">{s.title}</div>
              <div className="mt-2 text-sm text-white/70">{s.desc}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-bold text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
