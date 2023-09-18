import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data:{},
  error: "",
};

const fetchSlice = createSlice({
  name: "fetchData",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.loading = true;
    },
    setData: (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    errorFetchedData: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.data = [];
    },
  },

});

export const { fetchData, setData, errorFetchedData } = fetchSlice.actions;
export default fetchSlice.reducer;
export type DataActions =
  | ReturnType<typeof fetchData>
  | ReturnType<typeof setData>;
