import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import fetchSlice from "./slices/fetchSlice";
import { RootEpics } from "../epics/rootEpic";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer:{
        fetchApi:fetchSlice
    },
    middleware:[epicMiddleware]
})

epicMiddleware.run(RootEpics);