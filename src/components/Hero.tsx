"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div
          className="orb"
          style={{
            left: "-320px",
            top: "-300px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(124,92,255,.95), rgba(124,92,255,0) 60%)"
          }}
        />
        <div
          className="orb"
          style={{
            right: "-420px",
            top: "-260px",
            width: 1080,
            height: 1080,
            opacity: 0.16,
            background:
              "radial-gradient(circle at 40% 35%, rgba(0,212,255,.95), rgba(0,212,255,0) 60%)"
          }}
        />
        <div
          className="orb"
          style={{
            left: "12%",
            bottom: "-560px",
            width: 1180,
            height: 1180,
            opacity: 0.12,
            background:
              "radial-gradient(circle at 30% 40%, rgba(82,255,184,.9), rgba(82,255,184,0) 62%)"
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white/70"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          Built for regulated industries
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl"
        >
          Agentic AI & enterprise engineering for{" "}
          <span className="bg-gradient-to-br from-violet-400 to-cyan-300 bg-clip-text text-transparent">
            BFSI, healthcare & insurance
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-6 max-w-3xl text-lg text-white/70"
        >
          clarixai delivers cloud migrations, GenAI/AI‑ML, agentic workflows, cybersecurity, and DevOps & container
          platforms — designed for governance, security, and measurable outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            href="/agentic-ai"
            className="rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 px-5 py-3 text-sm font-extrabold text-black shadow-[0_20px_70px_rgba(124,92,255,0.25)]"
          >
            Explore Agentic AI
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-extrabold"
          >
            View services
          </Link>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            { k: "Governed autonomy", v: "Agentic workflows with audit-ready traceability" },
            { k: "Secure delivery", v: "Identity-first, private networking, policy controls" },
            { k: "Measurable outcomes", v: "Evaluation harness + monitoring + operational readiness" }
          ].map((x) => (
            <div key={x.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm font-extrabold">{x.k}</div>
              <div className="mt-2 text-sm text-white/70">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
