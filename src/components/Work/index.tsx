import { IMAGES } from "assets/images/custom";

import WORKS from "constants/work";

import { useWorkTranslation } from "hooks/localization";

const Work = () => {
  const t = useWorkTranslation();

  return (
    <div>
      {WORKS.map((work, index) => {
        return (
          <div
            key={`studies_${index}`}
            className="flex flex-row border-b-2 border-gray-400"
          >
            <div className="my-auto">{work.icon || IMAGES.ICONS.WORK}</div>
            <div className="flex flex-col ml-2 mb-1 px-3">
              <p className="mt-2 text-xl">{t(work.role)}</p>
              <p className="mt-2 text-lg">{t(work.company)}</p>
              <p className="mt-2 text-base">
                {t("work_duration", {
                  context: work.end ? "notNow" : "now",
                  start: work.start,
                  end: work.end,
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
