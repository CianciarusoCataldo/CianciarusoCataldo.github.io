import { Card } from "@cianciarusocataldo/modular-ui";
import {
  FRAMEWORKS,
  PROGRAMMING_LANGUAGESS,
  SKILLS,
} from "api/constants/skills";
import { getPages } from "api/core/store/internal-slices/config/selectors";
import RouterLink from "app/components/atoms/RouterLink";
import AppPage from "app/components/molecules/AppPage";
import Education from "app/components/molecules/Education";
import ProjectList from "app/components/molecules/ProjectsList";
import SkillSet from "app/components/molecules/SkillSet";
import SongsList from "app/components/molecules/SongsList";
import Work from "app/components/molecules/Work";
import { useHomePageTranslation } from "app/hooks/localization";
import { IMAGES } from "assets/images";
import { useSelector } from "react-redux";

/** Modular-app home page */
const HomePage = () => {
  const t = useHomePageTranslation();
  const PAGES = useSelector(getPages);

  return (
    <AppPage>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-3/5">
          <Card
            icon={IMAGES.PAGES.INFO}
            title={t("info", { context: "header" })}
            className="w-full m-auto"
            body={
              <p className=" p-3 text-2xl">{t("info", { context: "body" })}</p>
            }
            footer={
              <RouterLink
                className="text-lg font-bold"
                to={PAGES.INFO}
                label={t("info", { context: "footer" })}
              />
            }
          />
          <Card
            icon={IMAGES.PAGES.PROJECTS}
            title={t("projects", { context: "header" })}
            className="w-full"
            body={<ProjectList compact />}
            footer={
              <RouterLink
                className="text-lg font-bold"
                to={PAGES.PROJECTS}
                label={t("projects", { context: "footer" })}
              />
            }
          />
          <Card
            icon={IMAGES.ICONS.SKILLS}
            title={t("skills", { context: "header" })}
            className="w-full"
            body={<SkillSet skills={SKILLS} />}
          />
        </div>
        <div className="w-full flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-2/5">
          <Card
            icon={IMAGES.ICONS.WORK}
            title={t("work", { context: "header" })}
            className="w-full"
            body={<Work />}
          />
          <Card
            icon={IMAGES.ICONS.EDUCATION}
            title={t("education", { context: "header" })}
            className="w-full"
            body={<Education />}
          />
          <Card
            icon={IMAGES.ICONS.DEVELOPING}
            title={t("programming_languages", { context: "header" })}
            className="w-full"
            body={<SkillSet skills={PROGRAMMING_LANGUAGESS} />}
          />
          <Card
            icon={IMAGES.ICONS.FRAMEWORKS}
            title={t("frameWorks", { context: "header" })}
            className="w-full"
            body={<SkillSet skills={FRAMEWORKS} />}
          />
          <Card
            icon={IMAGES.ICONS.MUSIC}
            title={t("songs", { context: "header" })}
            className="w-full"
            body={<SongsList compact />}
          />
        </div>
      </div>
    </AppPage>
  );
};

export default HomePage;
