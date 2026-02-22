export const metadata = { title: "Contact | clarixai" };

export default function Contact() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white/70">
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        Contact
      </div>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
        Talk to clarixai
      </h1>
      <p className="mt-4 max-w-3xl text-white/70">
        Share your scope and constraints. This form is UI-only by default (no data storage).
        If you want a working form, we can wire it to Formspree or Cloudflare Worker.
      </p>

      <form className="mt-10 grid max-w-2xl gap-4">
        <input className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm" placeholder="Your name" />
        <input className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm" placeholder="Your email" />
        <textarea className="min-h-[180px] rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm" placeholder="Tell us what you want to build..." />
        <button className="rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 px-5 py-3 text-sm font-bold text-black">
          Send message
        </button>
        <div className="text-xs text-white/60">
          Tip: If you prefer email-only contact, replace this form with a mailto link.
        </div>
      </form>
    </main>
  );
}
