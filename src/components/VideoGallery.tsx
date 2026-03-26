import React from 'react';
import { Prompt } from '../types';
import { FEATURED_PROMPTS } from '../constants';
import { Play, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const VideoGallery: React.FC = () => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyPrompt = (id: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {FEATURED_PROMPTS.map((prompt, index) => (
        <motion.div
          key={prompt.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-500"
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={prompt.thumbnailUrl}
              alt={prompt.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80">
                {prompt.category}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold tracking-tight">{prompt.title}</h4>
              <button
                onClick={() => copyPrompt(prompt.id, prompt.prompt)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors group/btn"
              >
                {copiedId === prompt.id ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-white/40 group-hover/btn:text-white transition-colors" />
                )}
              </button>
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-mono line-clamp-2 italic">
              "{prompt.prompt}"
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
