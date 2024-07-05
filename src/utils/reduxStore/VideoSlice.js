import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videoList",
    initialState:null,
    reducers:{
        addVideos:(state,action)=>{
            return action.payload;
        }
    }
});

export default videoSlice.reducer;
export const {addVideos} = videoSlice.actions;