import axios from "axios";
import { setData, fetchData, errorFetchedData } from "../app/slices/fetchSlice";
import {
  Observable,
  from,
  of,
  filter,
  debounceTime,
  catchError,
  takeUntil,
  mergeMap,
  map,
} from "rxjs";

async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  return res.data;
}

export const fetchEpic = (action$, state$) =>
  action$.pipe(
    filter(fetchData.match),
    debounceTime(500),
    mergeMap(() => {
      return from(getData()).pipe(
        map((res) => {
          console.log('RESPONSE ',res);
          return setData(res);
        }),
        takeUntil(action$.pipe(filter(fetchData.match))),
        catchError((error) => {
          console.log("error", typeof error);
          return of(errorFetchedData(error.message));
        })
      );
    })
  );
