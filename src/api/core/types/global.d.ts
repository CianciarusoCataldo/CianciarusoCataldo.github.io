declare type HeaderType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
declare type Status = "EMPTY" | "BUSY" | "READY" | "ERROR";
declare type ModalType = "EMPTY" | "CONFIRM" | "INFO";
declare type RouteKey = "HOME" | "INFO" | "PROJECTS";
declare type AnimationKey = "NONE" | "FADE" | "SLIDE";
declare type UnionOf<T> = T[keyof T];
declare type DynamicImportType = () => Promise<{
  default: React.ComponentType<any>;
}>;
declare type LazyComponentType = React.LazyExoticComponent<
  React.ComponentType<any>
>;
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
declare type SupportedLanguage = "en" | "es" | "de" | "fr" | "it";
declare interface Widget {
  compact?: boolean;
}
