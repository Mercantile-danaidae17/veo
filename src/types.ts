export interface Prompt {
  id: string;
  title: string;
  prompt: string;
  category: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
}
