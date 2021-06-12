import React from "react";
import classnames from "classnames";

import { CardProps } from "./types";

import Divider from "app/components/atoms/Divider";

const Card = ({
  title,
  className: parentClassName,
  icon,
  header,
  body,
  footer,
}: CardProps) => {
  return (
    <div className="flex flex-col p-1 m-2">
      {header}
      <div
        className={classnames(
          `mt-3 bg-gradient-to-r from-white to-gray-200 dark:bg-#2d3748 rounded-sm text-black dark:text-white shadow-lg`,
          parentClassName
        )}
      >
        {title && (
          <>
            <div className="flex flex-row p-3">
              {icon}
              <div className="m-auto text-2xl font-bold text-center text-black">
                {title}
              </div>
            </div>
            <Divider size={3} />
          </>
        )}

        <div className={`pb-1 px-1 mb-2 mx-2 text-sm text-black`}>{body}</div>
        {footer && (
          <>
            <Divider />
            <div className="p-3 mx-2 mt-1 text-center text-black">{footer}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
