import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Github, 
  Twitter, 
  Globe,
  Menu,
  X,
  Search
} from 'lucide-react';
import { VideoGallery } from './components/VideoGallery';
import { CategoryGrid } from './components/CategoryGrid';
import { ToolGrid } from './components/ToolGrid';
import { PromptGenerator } from './components/PromptGenerator';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <Play className="w-5 h-5 text-black fill-black" />
            </div>
            <span className="text-xl font-display uppercase tracking-tighter">Veo Prompt</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Explore', 'Tools', 'Guides', 'Models'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-orange-500 transition-colors">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-white/60 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Explore', 'Tools', 'Guides', 'Models'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-display uppercase tracking-tighter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-500/10 blur-[120px] rounded-full" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                The Ultimate Veo Prompt Repository
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-display uppercase leading-[0.85] tracking-tighter"
            >
              Master the Art of <span className="text-orange-500">AI Video</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-white/40 leading-relaxed"
            >
              Explore thousands of curated prompts, advanced engineering guides, and powerful tools 
              designed specifically for Google's revolutionary Veo video generation model.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-10 py-5 bg-orange-500 text-black font-bold uppercase tracking-widest rounded-2xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
                Explore Prompts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
                Learn Engineering
              </button>
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <div className="py-12 border-y border-white/5 overflow-hidden bg-white/2">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-6">
                <span className="text-4xl font-display uppercase tracking-tighter text-white/10">Cinematic Lighting</span>
                <span className="text-4xl font-display uppercase tracking-tighter text-orange-500/20">Macro Textures</span>
                <span className="text-4xl font-display uppercase tracking-tighter text-white/10">Fluid Motion</span>
                <span className="text-4xl font-display uppercase tracking-tighter text-orange-500/20">Dynamic Camera</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Prompts */}
        <section id="explore" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">
                Featured <span className="text-orange-500">Prompts</span>
              </h2>
              <p className="text-white/40 max-w-md">
                Hand-picked examples of what's possible with Veo. Copy the prompts and start creating.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search prompts..." 
                  className="pl-12 pr-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-orange-500/50 transition-colors w-64"
                />
              </div>
            </div>
          </div>
          <VideoGallery />
        </section>

        {/* Prompt Generator Section */}
        <section className="py-32 px-6 bg-white/2 border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none">
                AI Powered <br />
                <span className="text-orange-500">Prompt Engine</span>
              </h2>
              <p className="text-xl text-white/40 leading-relaxed">
                Struggling with the perfect description? Our AI engine uses Gemini to transform 
                your simple ideas into complex, cinematic prompts optimized for Veo's architecture.
              </p>
              <ul className="space-y-4">
                {[
                  'Optimized for cinematic results',
                  'Includes camera & lighting directives',
                  'Context-aware visual descriptions',
                  'One-click copy to clipboard'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/60">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <PromptGenerator />
          </div>
        </section>

        {/* Categories */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">
              Explore <span className="text-orange-500">Categories</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Browse our extensive library of prompts organized by visual style, subject matter, and emotional tone.
            </p>
          </div>
          <CategoryGrid />
        </section>

        {/* Tools */}
        <section id="tools" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">
                Veo Prompt <span className="text-orange-500">Tools</span>
              </h2>
              <p className="text-white/40 max-w-md">
                Everything you need to streamline your AI video creation workflow.
              </p>
            </div>
          </div>
          <ToolGrid />
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-black fill-black" />
                </div>
                <span className="text-xl font-display uppercase tracking-tighter">Veo Prompt</span>
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed">
                The world's leading community for AI video inspiration and prompt engineering. 
                Built for creators, by creators.
              </p>
              <div className="flex items-center gap-4">
                <Twitter className="w-5 h-5 text-white/20 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-white/20 hover:text-white cursor-pointer transition-colors" />
                <Globe className="w-5 h-5 text-white/20 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-white">Resources</h5>
              <ul className="space-y-4 text-sm text-white/40">
                <li className="hover:text-white cursor-pointer transition-colors">Prompt Guide</li>
                <li className="hover:text-white cursor-pointer transition-colors">Video Tutorials</li>
                <li className="hover:text-white cursor-pointer transition-colors">API Documentation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Community Forum</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-white">Legal</h5>
              <ul className="space-y-4 text-sm text-white/40">
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/20 font-bold uppercase tracking-widest">
            <p>© 2026 Veo Prompt Hub. All rights reserved.</p>
            <p>Built with Google Gemini & Veo</p>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
