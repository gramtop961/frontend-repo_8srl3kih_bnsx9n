import { Video, Phone, MessageSquare, ShieldCheck, Camera, Mic, Smile, Image, File, Globe, Bell } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">All the ways to stay close</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Video calls, voice chats, and instant messages — built with performance and privacy at the core.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card title="Video Call" description="High-quality HD video with live reactions and smooth switching.">
            <Item icon={<Video size={16} />} text="HD video quality" />
            <Item icon={<Camera size={16} />} text="Switch front/back camera" />
            <Item icon={<Smile size={16} />} text="Live reactions & emojis" />
          </Card>

          <Card title="Audio Call" description="Crystal-clear sound with background support and favorites.">
            <Item icon={<Phone size={16} />} text="Unlimited audio calls" />
            <Item icon={<Mic size={16} />} text="Background call support" />
            <Item icon={<StarIcon />} text="Favorite contacts" />
          </Card>

          <Card title="Messages & Chat" description="Fast, secure messaging with rich media and smart indicators.">
            <Item icon={<MessageSquare size={16} />} text="Texts, photos, videos, files" />
            <Item icon={<Image size={16} />} text="Emojis, GIFs & stickers" />
            <Item icon={<TypingIcon />} text="Seen & typing indicators" />
            <Item icon={<PaletteIcon />} text="Themes & backgrounds" />
          </Card>

          <Card id="security" title="Security & Privacy" description="End‑to‑end encryption and control over your conversations.">
            <Item icon={<ShieldCheck size={16} />} text="End-to-end encryption" />
            <Item icon={<LockIcon />} text="Chat lock & fingerprint" />
            <Item icon={<BlockIcon />} text="Report & block accounts" />
          </Card>

          <Card title="Discover & Connect" description="Find people and share moments with your world.">
            <Item icon={<Globe size={16} />} text="Global search" />
            <Item icon={<UserIcon />} text="Profiles, status & avatars" />
            <Item icon={<Bell size={16} />} text="Custom notifications" />
          </Card>

          <Card title="Themes" description="Beautiful dark and light modes that match your vibe.">
            <ThemePreview />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, children, id }) {
  return (
    <div id={id} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 sm:p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function Item({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200">
        {icon}
      </div>
      <p className="text-sm text-neutral-800 dark:text-neutral-100">{text}</p>
    </div>
  );
}

function ThemePreview() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="h-3 w-20 bg-neutral-200 rounded" />
        <div className="mt-3 space-y-2">
          <div className="h-2.5 w-32 bg-neutral-200 rounded" />
          <div className="h-2.5 w-24 bg-neutral-200 rounded" />
        </div>
      </div>
      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm">
        <div className="h-3 w-20 bg-neutral-700 rounded" />
        <div className="mt-3 space-y-2">
          <div className="h-2.5 w-32 bg-neutral-700 rounded" />
          <div className="h-2.5 w-24 bg-neutral-700 rounded" />
        </div>
      </div>
    </div>
  );
}

// Inline simple icons built from Lucide primitives to avoid missing names
function StarIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;
}
function TypingIcon() {
  return (
    <div className="flex items-center gap-1 text-neutral-500">
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:-.2s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:-.1s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce" />
    </div>
  );
}
function PaletteIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-fuchsia-500"><path d="M12 3a9 9 0 0 0 0 18h1a3 3 0 0 0 3-3 2 2 0 0 1 2-2h1a2 2 0 0 0 0-4h-1a2 2 0 0 1-2-2 7 7 0 0 0-7-7zM7 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>;
}
function LockIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500"><path d="M17 8V7a5 5 0 0 0-10 0v1H5v14h14V8h-2zm-8 0V7a3 3 0 0 1 6 0v1H9zm3 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>;
}
function BlockIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-rose-500"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-7 10a7 7 0 0 1 11.9-5.1L6.9 16.9A6.96 6.96 0 0 1 5 12zm7 7a6.96 6.96 0 0 1-4.9-1.9L17.1 7.1A7 7 0 0 1 12 19z"/></svg>;
}
function UserIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-sky-500"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6h16c0-4-4-6-8-6z"/></svg>;
}
