import { combineEpics } from "redux-observable";
import { fetchEpic } from "./fetchEpic";

const epics = [fetchEpic];

export const RootEpics = combineEpics(...epics);
