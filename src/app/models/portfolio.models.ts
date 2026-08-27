export interface NavItem {
  label: string;
  anchor: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface StatTile {
  value: string;
  label: string;
  icon: string;
  isCounter: boolean;
  numericTarget?: number;
  suffix?: string;
}

export interface HighlightItem {
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  key: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface ProjectFeature {
  label: string;
}

export interface ArchitectureFlowStep {
  label: string;
}

export interface ProjectDetail {
  problem: string;
  solution: string;
  architecture: ArchitectureFlowStep[];
  myRole: string;
  technologies: string[];
  challenges: string[];
  implementation: string[];
  results: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  detail: ProjectDetail;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  column: number;
  row: number;
}

export interface ArchitectureConnection {
  from: string;
  to: string;
}

export interface ExpertiseCard {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  label: string;
  description: string;
  icon: string;
}

export interface AiCloudNode {
  label: string;
  icon: string;
  group: 'ai' | 'cloud' | 'data' | 'app';
}
