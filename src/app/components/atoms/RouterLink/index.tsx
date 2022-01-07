import { NavLink } from "react-router-dom";
import classnames from "classnames";

import { RouterLinkProps } from "./types";

/**
 *
 * @param to Destination path
 * @param label Label showed into the button
 * @param className A custom className applied on main container
 *
 */
const RouterLink = ({ to, label, className }: RouterLinkProps) => {
  return (
    <NavLink to={to}>
      <p
        className={classnames(
          "text-base text-blue-400 hover:text-blue-600 active:font-bold",
          className
        )}
      >
        {label}
      </p>
    </NavLink>
  );
};

export default RouterLink;
