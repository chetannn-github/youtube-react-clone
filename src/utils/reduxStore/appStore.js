import { configureStore } from "@reduxjs/toolkit";
import videoList from "./VideoSlice";
const appStore = configureStore({
    reducer:{
        videoList:videoList
    }
})

export default appStore