import { useSelector } from "react-redux";

import { FRAMEWORKS, PROGRAMMING_LANGUAGESS, SKILLS } from "constants/skills";

import { useHomePageTranslation } from "hooks/localization";
import { getRoutes } from "mobrix-engine-plugins";

import { Card } from "mobrix-ui";
import Education from "components/Education";
import ProjectList from "components/ProjectsList";
import SkillSet from "components/SkillSet";
import SongsList from "components/SongsList";
import Work from "components/Work";
import AppPage from "components/AppPage";
import RouterLink from "components/RouterLink";

const HomePage = () => {
  const t = useHomePageTranslation();
  const PAGES: Record<string, any> = useSelector(getRoutes);
  return (
    <AppPage>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-3/5">
          <Card
            className="mb-5 mr-0 sm:flex-col md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3"
            body={
              <p className=" p-3 text-2xl">{t("info", { context: "body" })}</p>
            }
          />
          <Card
            headerClassName="font-bold text-xl"
            shadow
            className="mb-5 mr-0 sm:flex-col md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3"
            header={t("projects", { context: "header" })}
            body={<ProjectList compact />}
            footer={
              <RouterLink className="text-lg font-bold" to={PAGES.Projects}>
                {t("projects", { context: "footer" })}
              </RouterLink>
            }
          />
          <Card
            headerClassName="font-bold text-xl"
            shadow
            className="mb-5 mr-0 sm:flex-col md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3"
            header={t("skills", { context: "header" })}
            body={<SkillSet skills={SKILLS} />}
          />
        </div>
        <div className="w-full flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-2/5">
          <Card
            headerClassName="font-bold text-xl"
            className="mb-5 mr-0 sm:flex-col md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3"
            shadow
            header={t("work", { context: "header" })}
            body={<Work />}
          />
          <Card
            headerClassName="font-bold text-xl"
            className="mb-5 mr-0 sm:flex-col md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3"
            shadow
            header={t("education", { context: "header" })}
            body={<Education />}
          />
          <Card
            headerClassName="font-bold text-xl"
            className="mb-5 mr-0 sm:flex-col md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3"
            shadow
            header={t("programming_languages", { context: "header" })}
            body={<SkillSet skills={PROGRAMMING_LANGUAGESS} />}
          />
          <Card
            headerClassName="font-bold text-xl"
            className="mb-5 mr-0 sm:flex-col md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3"
            shadow
            header={t("frameWorks", { context: "header" })}
            body={<SkillSet skills={FRAMEWORKS} />}
          />
          <Card
            headerClassName="font-bold text-xl"
            className="mb-5 mr-0 sm:flex-col md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3"
            shadow
            header={t("songs", { context: "header" })}
            body={<SongsList compact />}
          />
        </div>
      </div>
    </AppPage>
  );
};

export default HomePage;
