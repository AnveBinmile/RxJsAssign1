import axios from "axios";
import { setData, fetchData, errorFetchedData } from "../app/slices/fetchSlice";
import { Observable, of, from } from "rxjs";
import {
  filter,
  debounceTime,
  catchError,
  takeUntil,
  map,
} from "rxjs/operators";
import { StateObservable } from "redux-observable";
import { RootAction, RootState } from "../type";

async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  return res.data;
}

export const fetchEpic = (
  action$: Observable<RootAction>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(filter(fetchData.match), debounceTime(500), () => {
    return from(getData()).pipe(
      map((res) => {
        return setData(res);
      }),
      takeUntil(action$.pipe(filter(fetchData.match))),
      catchError((error) => {
        return of(errorFetchedData(error.message));
      })
    );
  });
