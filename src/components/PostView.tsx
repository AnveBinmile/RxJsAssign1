import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { postDetails,postedDetails } from '../app/slices/postSlice';

export default function PostView() {

  const dispatch = useAppDispatch();

  const state= useAppSelector((state)=>state.post);

  const {data}  = state;

  console.log(data);


  return (
    <div>
  
  
      <button onClick={()=>{dispatch(postedDetails([]))}}>POST DATA</button>
      <h1>{data.title}</h1>
    </div>
  )
}
