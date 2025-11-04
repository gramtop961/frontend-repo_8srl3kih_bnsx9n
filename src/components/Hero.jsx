import { Rocket, ShieldCheck, Video, Phone, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-rose-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/20 via-sky-500/20 to-indigo-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <Rocket size={14} /> Now with HD calls, live reactions, and chat themes
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300">
            Connect instantly with anyone, anywhere
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            FlamesBlue brings video, voice, and messaging together in a single, secure app with gorgeous design and lightning-fast performance.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#download" className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow hover:opacity-95">Download</a>
            <a href="#features" className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800">Explore features</a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <FeaturePill icon={<Video size={18} />} label="HD Video" />
          <FeaturePill icon={<Phone size={18} />} label="Crystal Audio" />
          <FeaturePill icon={<MessageSquare size={18} />} label="Instant Messaging" />
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
          <ShieldCheck size={16} /> End-to-end encryption and privacy-first by design
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 backdrop-blur mx-auto shadow-sm">
      <span className="text-neutral-700 dark:text-neutral-200">{icon}</span>
      <span className="text-neutral-800 dark:text-neutral-100 text-sm font-medium">{label}</span>
    </div>
  );
}
