import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/slices/fetchSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { store } from "../app/store";
export default function View() {
  const dispatch = useAppDispatch();
  // const titleData = store.getState();
  const { userId, title } = useAppSelector((state) => state.fetchApi);

  console.log("store.getState :", store.getState().fetchApi, userId, title);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(fetchData())}>Click</button>
      <p>{userId}</p>
      <h1>{title}</h1>
      <p>USER</p>
    </div>
  );
}
