import { projectsIcons } from "assets/images/custom";
import projects from "constants/projects";

import { useProjectsPageTranslation } from "hooks/localization";
import { Button } from "mobrix-ui";
import { Widget } from "types";

const ProjectList = ({ compact }: Widget) => {
  const t = useProjectsPageTranslation();

  return compact ? (
    <div className="h-64 overflow-auto">
      {projects.map(({ name, link }, index) => {
        return (
          <div
            className="flex flex-col py-2 border-b-2 border-gray-400"
            key={`${name}_${index}`}
          >
            <div className="m-2 text-left ml-2 flex flex-col">
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-xl 2xl:text-2xl mb-1 font-bold">
                {t(name, { context: "title" })}
              </p>
              <p className="text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                {t(name, { context: "subTitle" })}
              </p>
            </div>
            <div className="flex flex-col m-auto">
              <Button
                dark={true}
                shadow={false}
                onClick={() => window.open(link, "_blank")}
              >
                {t("item", { context: "checkItOut" })}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      {projects.map(({ name, link }, index) => {
        return (
          <div
            className="flex flex-col mt-4 py-2 border-b-2 border-gray-400"
            key={`${name}_${index}`}
          >
            <p className="m-auto text-4xl text-center py-1">
              {t(name, { context: "title" })}
            </p>
            {projectsIcons[name] && (
              <div className="m-auto mt-8">{projectsIcons[name]}</div>
            )}
            <p className="mt-4 text-xl px-2">
              {t(name, { context: "description" })}
            </p>
            <Button
              dark={true}
              shadow={false}
              onClick={() => window.open(link, "_blank")}
            >
              {t("item", { context: "checkItOut" })}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
