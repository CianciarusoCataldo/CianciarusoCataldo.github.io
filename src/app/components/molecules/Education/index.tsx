import React from "react";

import { IMAGES } from "assets/images";

import { STUDIES } from "app/constants/education";

import { useEducationTranslation } from "app/hooks/localization";

const Education = () => {
  const t = useEducationTranslation();

  return (
    <div>
      {STUDIES.map((university, index) => {
        return (
          <div
            key={`studies_${index}`}
            className="flex flex-row border-b-2 border-gray-400"
          >
            <div className="flex flex-col">
              {university.icon || IMAGES.ICONS.DEGREE}
            </div>
            <div className="flex flex-col ml-2 mb-1">
              <p className="mt-2 text-xl">
                {t(university.degree)}
                {university.specialization && ` - ${university.specialization}`}
              </p>
              <p className="mt-2 text-lg">{t(university.type)}</p>
              <p className="mt-2 text-base">{t(university.university)}</p>
              <p className="mt-2 text-sm">{`${university.start} - ${university.end}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
