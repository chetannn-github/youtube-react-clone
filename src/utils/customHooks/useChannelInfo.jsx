import { useEffect } from "react";
import { YT_API_KEY, YT_CHANNEL_INFO } from "../constant";
import { useDispatch } from "react-redux";
import { addChannelInfo } from "../reduxStore/VideoSlice";


const useChannelInfo = (id) => {
    let dispatch = useDispatch();

  const channelInfo = async() =>{

    
    let res= await fetch(`${YT_CHANNEL_INFO}${id}&key=${YT_API_KEY}`);
    let json =await res.json();
    dispatch(addChannelInfo(json.items[0]));
  }

  useEffect(()=>{channelInfo(id)},[])


}

export default useChannelInfo




