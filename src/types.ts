export type PageView = 
  | 'home' 
  | 'module' 
  | 'activity' 
  | 'resources' 
  | 'blog' 
  | 'about' 
  | 'contact';

export interface Lesson {
  id: string;
  number: number;
  title: string;
  duration: string;
  summary: string;
  content: string[];
  keyFact: string;
  completed?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  itemImage?: string;
  itemName: string;
  itemType: 'plastic' | 'organic' | 'paper' | 'glass';
  correctContainer: 'organic' | 'plastic' | 'paper';
  explanation: string;
}

export interface DownloadResource {
  id: string;
  title: string;
  type: string;
  pages: string;
  fileSize: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

export interface UserProfile {
  name: string;
  role: 'Estudiante' | 'Docente';
  institution: string;
  completedLessons: number;
  points: number;
  badges: string[];
}
