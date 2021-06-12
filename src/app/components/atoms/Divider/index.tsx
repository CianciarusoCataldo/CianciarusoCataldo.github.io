import React from "react";
import classnames from "classnames";

import { DividerProps } from "./types";

/**
 *
 * @param className A custom className applied on main container
 *
 */
const Divider = ({ className, size = 1 }: DividerProps) => {
  return (
    <div
      className={classnames("w-full shadow-xl", className)}
      style={{
        height: `${size}px`,
        background: "gray",
      }}
    />
  );
};

export default Divider;
