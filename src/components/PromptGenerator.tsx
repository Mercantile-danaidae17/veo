import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Wand2, Loader2, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PromptGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePrompt = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a detailed, cinematic AI video prompt for Google Veo based on this idea: "${input}". 
        The prompt should include details about lighting, camera movement, atmosphere, and specific visual elements. 
        Format the response as a single, well-structured paragraph.`,
        config: {
          systemInstruction: "You are an expert AI video prompt engineer specializing in Google Veo. Your goal is to create highly descriptive, cinematic, and effective prompts.",
        },
      });
      setResult(response.text || '');
    } catch (error) {
      console.error('Error generating prompt:', error);
      setResult('Failed to generate prompt. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 bg-[#111] border border-white/10 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-orange-500/10 rounded-lg">
          <Wand2 className="w-5 h-5 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold">AI Prompt Generator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
            Your Idea
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., A futuristic city in the clouds at sunset..."
            className="w-full bg-black border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-orange-500/50 transition-colors min-h-[100px] resize-none"
          />
        </div>

        <button
          onClick={generatePrompt}
          disabled={loading || !input.trim()}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5" />
              Generate Veo Prompt
            </>
          )}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-2"
            >
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  Generated Prompt
                </label>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 text-xs font-medium text-orange-500 hover:text-orange-400 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Prompt
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 bg-black border border-white/10 rounded-xl text-white/80 leading-relaxed text-sm font-mono">
                {result}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
