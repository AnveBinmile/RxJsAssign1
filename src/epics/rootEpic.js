import { combineEpics } from "redux-observable";
import { fetchEpic } from "./fetchEpic";
import { postEpic } from "./PostEpic";

const epics = [fetchEpic,postEpic];

export const RootEpics = combineEpics(...epics);
