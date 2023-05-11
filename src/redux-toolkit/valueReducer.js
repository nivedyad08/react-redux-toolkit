import { createSlice } from "@reduxjs/toolkit";

const valueSLice = createSlice({
  name: "value",
  initialState: 0,
  
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
  },
  extraReducers: {
    logout: () => {
      return 0;
    },
  },
});

export const { increment, decrement } = valueSLice.actions;
export default valueSLice.reducer;
