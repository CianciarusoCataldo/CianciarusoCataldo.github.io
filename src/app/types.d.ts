export interface Skill {
  name: string;
  expertise: number;
}

export interface Work {
  company: string;
  role: string;
  icon: JSX.Element;
  start: string;
  end?: string;
}

export interface Widget {
  compact?: boolean;
}
