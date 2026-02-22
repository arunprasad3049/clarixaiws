import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10">
          <h2 className="text-3xl font-extrabold">Build enterprise-grade AI with confidence</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Talk to clarixai about your BFSI, health insurance or fintech roadmap — agentic workflows, GenAI/ML,
            cloud modernization, DevOps and security.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 px-5 py-3 text-sm font-extrabold text-black"
            >
              Schedule a consultation
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-extrabold"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
