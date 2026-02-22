import ServicePillars from "@/components/ServicePillars";

export const metadata = { title: "Services | clarixai" };

export default function Services() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white/70">
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        Capability pillars
      </div>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
        Services built for regulated enterprise environments
      </h1>
      <p className="mt-4 max-w-3xl text-white/70">
        Five core capability areas — delivered independently or as a full transformation program.
      </p>

      <div className="mt-12">
        <ServicePillars variant="full" />
      </div>
    </main>
  );
}
