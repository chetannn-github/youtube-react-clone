import { useDispatch } from "react-redux";
import { YT_API_KEY, YT_COMMENT_API } from "../constant";
import { addComments } from "../reduxStore/VideoSlice";
import { useEffect } from "react";

const usefetchComments = (id) =>{
    let dispatch = useDispatch();
    
    const getComments = async (id) =>{
        dispatch(addComments([]));
     let data =   await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${YT_API_KEY}`);
       let json = await data.json();
    //    console.log(json.items);
       dispatch(addComments(json.items));
    }
    useEffect(()=> {getComments(id)},[])
}


export default usefetchComments;