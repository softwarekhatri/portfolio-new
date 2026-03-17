export interface Experience {
  role: string;
  company: string;
  website?: string;
  location?: string;
  duration: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Blog {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category:
    | "Backend"
    | "Cloud"
    | "Architecture"
    | "Artificial Intelligence"
    | "Data Infrastructure";
}
