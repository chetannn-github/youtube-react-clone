import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videoList",
    initialState:{
        homepage:null,
        videoSearchResult:null,
        searchResult:null,
        showSearchResult:null,
    },
    reducers:{
        addVideos:(state,action)=>{
            state.homepage=  action.payload;
        },
        addSearchResult:(state,action) =>{
            state.searchResult= action.payload;
        },
        toggleShowSearchResult:(state,action) =>{
            state.showSearchResult = action.payload;
        },
        addVideoSearchResult:(state,action)=>{
            state.videoSearchResult=  action.payload;
        },
    }
});

export default videoSlice.reducer;
export const {addVideos , addSearchResult,toggleShowSearchResult,addVideoSearchResult} = videoSlice.actions;