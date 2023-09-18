import axios from "axios";
import { Observable, of, from } from "rxjs";
import {
  filter,
  debounceTime,
  map,
  mergeMap,
  takeUntil,
  catchError,
} from "rxjs/operators";
import { RootAction, RootState } from "../type";
import { StateObservable } from "redux-observable";
import { postDetails, postedDetails } from "../app/slices/postSlice";
async function postData() {
//   console.log("postdata before");
  const postdetails = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      userId: "3242533",
      title: "Anvesha Karn",
      body: "jjfojefeporjfpojofjdfojd ojfoejrofjre fr jjgrjgpojgopejer",
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  console.log("postdetails.data", postdetails.data);
  return postdetails.data;
}
// postData()
export const postEpic = (
  actions$: Observable<RootAction>,
  state$: StateObservable<RootState>
) =>
  actions$.pipe(
    filter(postedDetails.match),
    debounceTime(500),
    mergeMap(() => {
      return from(postData()).pipe(
        map((res: Record<string, string>) => {
          console.log("CALLED API");
          console.log(res);
          return postDetails(res);
        })
      );
    })
  );
