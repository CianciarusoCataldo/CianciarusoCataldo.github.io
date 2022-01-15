import { useTranslation } from "react-i18next";

/** Return `home` namespace translation hook (used into `HOME_PAGE`) */
export const useHomePageTranslation = () => {
  const { t } = useTranslation("home-page");
  return t;
};

export const useProjectsPageTranslation = () => {
  const { t } = useTranslation("projects");

  return t;
};

export const useInfoPageTranslation = () => {
  const { t } = useTranslation("info");

  return t;
};

export const useWorkTranslation = () => {
  const { t } = useTranslation("work");

  return t;
};

export const useEducationTranslation = () => {
  const { t } = useTranslation("education");

  return t;
};
