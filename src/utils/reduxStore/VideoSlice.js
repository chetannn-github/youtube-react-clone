import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videoList",
    initialState:{
        homepage:null,
        searchResult:null
    },
    reducers:{
        addVideos:(state,action)=>{
            state.homepage=  action.payload;
        },
        addSearchResult:(state,action) =>{
            state.searchResult= action.payload;
        }
    }
});

export default videoSlice.reducer;
export const {addVideos , addSearchResult} = videoSlice.actions;