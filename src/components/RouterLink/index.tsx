import { closeDrawer, goTo } from "mobrix-engine-plugins";
import { Button } from "mobrix-ui";
import { useDispatch } from "react-redux";

import { RouterLinkProps } from "./types";

/**
 * Internal routing link
 *
 * @param to Destination path
 * @param children component showed into the button
 * @param className A custom className applied on main container
 *
 */
const RouterLink = ({ children, className, to }: RouterLinkProps) => {
  const dispatch = useDispatch();
  return (
    <Button
      unstyled
      onClick={() => {
        dispatch(goTo(to));
        dispatch(closeDrawer());
      }}
      className="text-gray-700 hover:text-blue-700 py-1 text-lg focus-visible:bg-transparent"
    >
      {children}
    </Button>
  );
};

export default RouterLink;
