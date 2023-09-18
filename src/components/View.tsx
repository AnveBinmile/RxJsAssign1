import { fetchData } from "../app/slices/fetchSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { store } from "../app/store";
import { useEffect } from "react";
export default function View() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.fetchApi);
  const { loading, data, error } = state;

  const handleClick = () => {
    dispatch(fetchData());
  };

  return (
    <div>
      <button onClick={handleClick}>GET DATA</button>
      <h1>{data?.title}</h1>;
    </div>
  );
}
