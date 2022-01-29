import { IMAGES } from "assets/images/custom";
import { useSelector } from "react-redux";

import {
  FRAMEWORKS,
  PROGRAMMING_LANGUAGESS,
  SKILLS,
} from "app/constants/skills";

import { useHomePageTranslation } from "hooks/localization";
import { getPages } from "@cianciarusocataldo/modular-engine";

import { Card } from "@cianciarusocataldo/modular-ui";
import Education from "app/components/Education";
import ProjectList from "app/components/ProjectsList";
import SkillSet from "app/components/SkillSet";
import SongsList from "app/components/SongsList";
import Work from "app/components/Work";
import AppPage from "app/components/AppPage";
import RouterLink from "app/components/RouterLink";

/** Modular-app home page */
const HomePage = () => {
  const t = useHomePageTranslation();
  const PAGES = useSelector(getPages);

  return (
    <AppPage>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-3/5">
          <Card
            shadow
            icon={IMAGES.PAGES.INFO}
            header={t("info", { context: "header" })}
            className="w-full m-auto"
            body={
              <p className=" p-3 text-2xl">{t("info", { context: "body" })}</p>
            }
            footer={
              <RouterLink className="text-lg font-bold" to={PAGES.Info}>
                {t("info", { context: "footer" })}
              </RouterLink>
            }
          />
          <Card
            shadow
            icon={IMAGES.PAGES.PROJECTS}
            header={t("projects", { context: "header" })}
            className="w-full"
            body={<ProjectList compact />}
            footer={
              <RouterLink className="text-lg font-bold" to={PAGES.Projects}>
                {t("projects", { context: "footer" })}
              </RouterLink>
            }
          />
          <Card
            shadow
            icon={IMAGES.ICONS.SKILLS}
            header={t("skills", { context: "header" })}
            className="w-full"
            body={<SkillSet skills={SKILLS} />}
          />
        </div>
        <div className="w-full flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-2/5">
          <Card
            shadow
            icon={IMAGES.ICONS.WORK}
            header={t("work", { context: "header" })}
            className="w-full"
            body={<Work />}
          />
          <Card
            shadow
            icon={IMAGES.ICONS.EDUCATION}
            header={t("education", { context: "header" })}
            className="w-full"
            body={<Education />}
          />
          <Card
            shadow
            icon={IMAGES.ICONS.DEVELOPING}
            header={t("programming_languages", { context: "header" })}
            className="w-full"
            body={<SkillSet skills={PROGRAMMING_LANGUAGESS} />}
          />
          <Card
            shadow
            icon={IMAGES.ICONS.FRAMEWORKS}
            header={t("frameWorks", { context: "header" })}
            className="w-full"
            body={<SkillSet skills={FRAMEWORKS} />}
          />
          <Card
            shadow
            icon={IMAGES.ICONS.MUSIC}
            header={t("songs", { context: "header" })}
            className="w-full"
            body={<SongsList compact />}
          />
        </div>
      </div>
    </AppPage>
  );
};

export default HomePage;
