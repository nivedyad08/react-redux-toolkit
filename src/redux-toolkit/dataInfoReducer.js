import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getUserData = createAsyncThunk("api/data", async () => {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  } catch (error) {
    console.log(error);
  }
});

const dataInfoSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getUserData.fulfilled]: (state, action) => {
      // state.loading=false,
      state.data = action.payload;
    },
    [getUserData.pending]: (state, action) => {
      // state.loading=true,
      state.data = action.payload;
    },
    [getUserData.rejected]: (state, action) => {
      // state.loading=false,
      state.error = "Some error occured";
    },
  },
});

export { getUserData };
export default dataInfoSlice.reducer;
