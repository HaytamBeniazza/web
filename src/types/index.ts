export interface Project {
  title: string;
  desc: string;
  stack: string[];
  github?: string;
}

export interface TechIcon {
  [key: string]: () => JSX.Element;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  description: string;
}

export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: () => JSX.Element;
  description: string;
}

export interface ExperienceMetric {
  label: string;
  value: string;
}

export interface TechCard {
  category: string;
  technology: string;
  description: string;
  gradient: string;
} 