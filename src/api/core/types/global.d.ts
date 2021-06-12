declare type RouteKey = "HOME" | "INFO" | "PROJECTS";
declare type SupportedLanguage = "en" | "es" | "de" | "fr" | "it";

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
