export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  current: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
