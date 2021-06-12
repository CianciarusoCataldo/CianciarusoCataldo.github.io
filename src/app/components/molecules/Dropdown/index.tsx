import React, { useState } from "react";
import classnames from "classnames";

import { DropdownProps } from "./types";

import { DownArrowIcon } from "assets/images";
import classNames from "classnames";

const Dropdown = ({
  className: parentClassName,
  content,
  defaultValue,
}: DropdownProps) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className={classnames(``, parentClassName)}>
      <div
        className={`inline-flex text-gray-700 bg-gradient-to-r from-white to-gray-100 border rounded-md shadow-sm`}
      >
        <button
          type="button"
          onClick={() => setVisible(!isVisible)}
          className="flex flex-row p-1 pl-2 text-sm font-medium text-gray-700 hover:to-gray-400 focus:outline-none hover:ring-2 focus:ring-offset-2 hover:ring-offset-gray-100 hover:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <div className="pr-1">{defaultValue}</div>
          <div
            className={classNames(
              "motion-safe:hover:animate-pulse transition duration-300 ease-in-out",
              { "transform rotate-180": isVisible }
            )}
          >
            <DownArrowIcon />
          </div>
        </button>
        <div
          className={classnames(
            "fixed mt-8 mr-4 z-10 bg-gradient-to-r from-white to-gray-100 text-sm border rounded-md shadow-lg",
            {
              hidden: !isVisible,
            }
          )}
        >
          {content &&
            content.map((item, index) => {
              const borderType =
                index === content.length - 1 ? "rounded-b-md" : "";

              return (
                <div key={`dropdown_element_${item.name}`}>
                  <button
                    onClick={() => {
                      setVisible(false);
                      item.action();
                    }}
                    key={`item_${index}_${item.name}`}
                    className={classnames(
                      "p-1 flex flex-row outline-none focus:outline-none hover:outline-none hover:bg-blue-200",
                      borderType
                    )}
                  >
                    <div className="flex flex-row">
                      {item.icon}
                      <div className="ml-1">{item.name}</div>
                    </div>
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
