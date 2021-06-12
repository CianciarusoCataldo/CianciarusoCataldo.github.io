import { useTranslation } from "react-i18next";

import NAMESPACES from "api/constants/namespaces";

export const useOverviewPageTranslation = () => {
  const { t } = useTranslation(NAMESPACES.OVERVIEW);

  return t;
};

export const useProjectsPageTranslation = () => {
  const { t } = useTranslation(NAMESPACES.PROJECTS);

  return t;
};

export const useInfoPageTranslation = () => {
  const { t } = useTranslation(NAMESPACES.INFO);

  return t;
};

export const useCommonTranslation = () => {
  const { t } = useTranslation(NAMESPACES.COMMON);

  return t;
};

export const useWorkTranslation = () => {
  const { t } = useTranslation(NAMESPACES.WORK);

  return t;
};

export const useEducationTranslation = () => {
  const { t } = useTranslation(NAMESPACES.EDUCATION);

  return t;
};
