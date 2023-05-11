import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./valueReducer";
import dataInfoReducer from "./dataInfoReducer";

//combine reducers
const store = configureStore({
    reducer:{
        value:valueReducer,
        dataInfo :dataInfoReducer
    }
})

export default store;