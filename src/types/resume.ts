export interface Profile {
  name: string;
  tagline: string;
  avatar: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  twitter: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'marketing' | 'platforms';
}

export interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface ResumeData {
  profile: Profile;
  summary: {
    title: string;
    content: string[];
  };
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  tools: Tool[];
  certifications: Certification[];
  interests: string[];
}
