import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <Features />

        <section id="download" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 opacity-90" />
              <div className="relative p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Start your first HD call in seconds</h3>
                  <p className="mt-2 text-white/90 max-w-xl">Download FlamesBlue and enjoy crystal-clear video, smooth voice, and instant messaging in one beautiful app.</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#" className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-white text-neutral-900 font-semibold shadow hover:opacity-95">Get for iOS</a>
                  <a href="#" className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-black/20 text-white font-semibold ring-1 ring-white/40 hover:bg-black/30">Get for Android</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
