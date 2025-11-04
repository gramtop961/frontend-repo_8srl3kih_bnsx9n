export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} FlamesBlue. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}
