import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import fetchSlice from "./slices/fetchSlice";
import { RootEpics } from "../epics/rootEpic";
import postSlice from "./slices/postSlice";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer:{
        fetchApi:fetchSlice,
        post:postSlice
    },
    middleware:[epicMiddleware]
})

epicMiddleware.run(RootEpics);