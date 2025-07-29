export interface Module {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  link: string;
  progress: number;
  totalPrompts: number;
  completedPrompts: number;
}

export interface User {
  email: string;
  name?: string;
}