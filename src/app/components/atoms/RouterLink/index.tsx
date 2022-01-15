import { NavLink } from "react-router-dom";

import { RouterLinkProps } from "./types";
import { Link } from "@cianciarusocataldo/modular-ui";

/**
 *
 * @param to Destination path
 * @param children Label showed into the button
 * @param className A custom className applied on main container
 *
 */
const RouterLink = ({ to, children, className }: RouterLinkProps) => {
  return (
    <NavLink to={to}>
      <Link className={className}>{children}</Link>
    </NavLink>
  );
};

export default RouterLink;
