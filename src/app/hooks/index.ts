import { useSelector,useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../type";
export const useAppDispatch=()=>useDispatch();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector