import { Prompt, Category, Tool } from './types';

export const CATEGORIES: Category[] = [
  { id: 'nature', name: 'Natural Wonders', icon: 'Trees' },
  { id: 'architecture', name: 'Architectural Marvels', icon: 'Building2' },
  { id: 'emotions', name: 'People & Emotions', icon: 'Users' },
  { id: 'fantasy', name: 'Fantasy & Magic', icon: 'Sparkles' },
  { id: 'scifi', name: 'Sci-Fi Future', icon: 'Rocket' },
  { id: 'animals', name: 'Animal Kingdom', icon: 'Dog' },
  { id: 'art', name: 'Artistic Styles', icon: 'Palette' },
  { id: 'food', name: 'Food Culture', icon: 'Utensils' },
  { id: 'performance', name: 'Dramatic Performance', icon: 'Clapperboard' },
  { id: 'forces', name: 'Forces of Nature', icon: 'Zap' },
  { id: 'sports', name: 'Sports & Athletics', icon: 'Trophy' },
  { id: 'tech', name: 'Tech Life', icon: 'Cpu' },
];

export const FEATURED_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'Ant Carrying a Leaf',
    prompt: 'Macro photo of an ant carrying a leaf, detailed textures, natural lighting, 4k resolution.',
    category: 'nature',
    thumbnailUrl: 'https://picsum.photos/seed/ant/800/450',
  },
  {
    id: '2',
    title: 'Starry Sky Timelapse',
    prompt: 'Timelapse of a brilliant starry sky over a mountain range, milky way visible, cinematic lighting.',
    category: 'nature',
    thumbnailUrl: 'https://picsum.photos/seed/stars/800/450',
  },
  {
    id: '3',
    title: 'Kitten Interaction',
    prompt: 'Warm interaction with a kitten in the early morning, soft sunlight, cozy atmosphere.',
    category: 'animals',
    thumbnailUrl: 'https://picsum.photos/seed/kitten/800/450',
  },
  {
    id: '4',
    title: 'Morning Greeting',
    prompt: 'A person greeting the morning sun from a balcony overlooking a city, cinematic, golden hour.',
    category: 'emotions',
    thumbnailUrl: 'https://picsum.photos/seed/morning/800/450',
  },
];

export const TOOLS: Tool[] = [
  { id: 'generator', name: 'AI Prompt Generator', description: 'Generate high-quality Veo prompts using Gemini.', icon: 'Wand2' },
  { id: 'checker', name: 'AI Prompt Checker', description: 'Analyze and optimize your prompts for better results.', icon: 'CheckCircle2' },
  { id: 'json', name: 'Veo3 JSON Generator', description: 'Create structured JSON for Veo API integration.', icon: 'Code2' },
  { id: 'asmr', name: 'AI ASMR Generator', description: 'Generate prompts for immersive ASMR video experiences.', icon: 'Mic2' },
  { id: 'guide', name: 'Veo Prompt Guide', description: 'Comprehensive guide to mastering Veo prompt engineering.', icon: 'BookOpen' },
];
