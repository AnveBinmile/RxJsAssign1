import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  data: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postedDetails: (state, action) => {
      state.loading = true;
    },
    postDetails: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log("post data", state.data);
    },
  },
});
export const { postDetails, postedDetails } = postSlice.actions;
export default postSlice.reducer;
export type postActions =
  | ReturnType<typeof postedDetails>
  | ReturnType<typeof postDetails>;
