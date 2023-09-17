import { fetchData } from "../app/slices/fetchSlice";
import { useAppDispatch } from "../app/hooks";
import { store } from "../app/store";
export default function View() {
  const dispatch = useAppDispatch();
  const { data } = store.getState().fetchApi;
  const arr: Array<number | string> = [];
  for (const key in data) {
    arr.push(data[key]);
  }

  return (
    <div>
      <button onClick={() => dispatch(fetchData())}>Click</button>
      {arr.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}
