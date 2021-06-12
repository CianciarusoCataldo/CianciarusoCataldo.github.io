import { Epic } from "redux-observable";
import {
  goBackEpic,
  requestRouteEpic,
  locationChangeEpic,
} from "api/state-slices/router/epics";
import { languageChangeEpic } from "api/state-slices/ui/epics";

const epics: Epic[] = [
  requestRouteEpic,
  goBackEpic,
  languageChangeEpic,
  locationChangeEpic,
];

export default epics;
