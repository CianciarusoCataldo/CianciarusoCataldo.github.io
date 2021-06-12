import React from "react";

import { PageProps } from "./types";

const ORIENTATIONS = {
  vertical: "col",
  orizontal: "row",
};

const Page = ({ children, orientation = "vertical" }: PageProps) => {

  return (
    <div
      className={`flex flex-${ORIENTATIONS[orientation]} m-2 ml-3 motion-safe:animate-fade-in-400`}
    >
      {children}
    </div>
  );
};

export default Page;
