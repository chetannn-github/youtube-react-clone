import { useDispatch } from "react-redux";
import { YT_VIDEO_INFO_P1, YT_VIDEO_INFO_P2 } from "../constant";
import {  addVideoInfo } from "../reduxStore/VideoSlice";
import { useEffect } from "react";

const useVideoInfo = (id) =>{
    let dispatch = useDispatch();
    
    const getVideoInfo = async (id) =>{
        dispatch(addVideoInfo(null));
     let data =   await fetch(`${YT_VIDEO_INFO_P1}${id}${YT_VIDEO_INFO_P2}`);
       let json = await data.json();
    //    console.log(json.items[0]);
       dispatch(addVideoInfo(json.items[0]));
    }
    useEffect(()=> {getVideoInfo(id)},[])
}


export default useVideoInfo;