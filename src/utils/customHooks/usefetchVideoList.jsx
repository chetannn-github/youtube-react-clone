import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { YT_API_LINK } from "../constant";
import { addVideos } from "../reduxStore/VideoSlice";

const usefetchVideoList = () =>{
    let dispatch = useDispatch();
    let fetchData =async()=>{
        console.log("hii");
       let res=  await fetch(YT_API_LINK);
       let json = await res.json();
    //    console.log(json.items);
       dispatch(addVideos(json.items));       
    }
   
    useEffect(()=>{fetchData()},[]);
}

export default usefetchVideoList;