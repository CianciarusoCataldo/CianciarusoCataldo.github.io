//Shared types
declare type Status = "EMPTY" | "BUSY" | "READY" | "ERROR";
declare type AnimationKey = "NONE" | "FADE" | "SLIDE";
declare type ToastKey = "success" | "warning" | "error" | "info" | "dark";
declare type UnionOf<T> = T[keyof T];
declare interface Skill {
  name: string;
  expertise: number;
}

declare interface Work {
  company: string;
  role: string;
  icon: JSX.Element;
  start: string;
  end?: string;
}

declare interface Widget {
  compact?: boolean;
}
