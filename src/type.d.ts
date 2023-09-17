import { DataActions } from "./redux/slices"

export type RootState=ReturnType<typeof store.getState>

export type RootAction = DataActions 