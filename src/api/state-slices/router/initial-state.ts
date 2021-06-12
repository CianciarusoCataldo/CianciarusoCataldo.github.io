import { RouterState } from "./types";

const ROUTER_INITIAL_STATE: RouterState = {
  location: {
    pathname: "/",
    hash: "",
    search: "",
    state: "",
  },
  action: "PUSH",
};

export default ROUTER_INITIAL_STATE;
