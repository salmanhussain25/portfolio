export interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export interface EducationItem {
    degree: string;
    institute: string;
    grade: string;
    year: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    duration: string;
    points: string[];
    skills: string[];
}

export interface ProjectItem {
    title: string;
    subtitle: string;
    duration: string;
    points: string[];
    demoUrl: string;
}

export interface AchievementItem {
    text: string;
    linkText?: string;
    linkUrl?: string;
    details?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}
