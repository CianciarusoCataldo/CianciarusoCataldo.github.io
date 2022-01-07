import { PROJECTS_ICONS } from "assets/images";

import { useProjectsPageTranslation } from "app/hooks/localization";

const ProjectList = ({ compact }: Widget) => {
  const t = useProjectsPageTranslation();

  return compact ? (
    <div className="h-64 overflow-auto">
      {PROJECTS_ICONS.map(({ name, icon_small }, index) => {
        return (
          <div
            className="flex flex-row py-2 border-b-2 border-gray-400"
            key={`${name}_${index}`}
          >
            <div className="w-1/5 my-auto align-middle">{icon_small}</div>
            <div className="m-2 text-left ml-2 flex flex-col w-3/5">
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-xl 2xl:text-2xl mb-1 font-bold">
                {t(name, { context: "title" })}
              </p>
              <p className="text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                {t(name, { context: "subTitle" })}
              </p>
            </div>
            <a
              className="my-auto mt-4 mr-1 text-sm md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md p-3 text-center border-blue-900 bg-blue-900 text-white hover:text-blue-500 rounded-md"
              href={t(name, { context: "link" })}
            >
              {t("item", { context: "checkItOut" })}
            </a>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      {PROJECTS_ICONS.map(({ name, icon }, index) => {
        return (
          <div
            className="flex flex-col mt-4 py-2 border-b-2 border-gray-400"
            key={`${name}_${index}`}
          >
            <p className="m-auto text-4xl text-center py-1">
              {t(name, { context: "title" })}
            </p>
            <div className="m-auto mt-8">{icon}</div>
            <p className="mt-4 text-xl px-2">
              {t(name, { context: "description" })}
            </p>
            <a
              className="m-auto mt-4 text-center text-2xl px-4 py-3 border-blue-900 bg-blue-900 text-white hover:text-blue-500 rounded-md"
              href={t(name, { context: "link" })}
            >
              {t("item", { context: "checkItOut" })}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
