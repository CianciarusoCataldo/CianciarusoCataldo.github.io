import { useTranslation } from "react-i18next";

/** Return `common` namespace translation hook */
export const useQuickLinksTranslation = () => {
  const { t } = useTranslation("quick-links");
  return t;
};

/** Return `page-titles` namespace translation hook (used to set every page title) */
export const usePageTitlesTranslation = () => {
  const { t } = useTranslation("pages");
  return t;
};

/** Return `home` namespace translation hook (used into `HOME_PAGE`) */
export const useHomePageTranslation = () => {
  const { t } = useTranslation("home-page");
  return t;
};

/** Return `modal-titles` namespace translation hook (used to set every custom modal title) */
export const useModalTranslation = () => {
  const { t } = useTranslation("modals");
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
