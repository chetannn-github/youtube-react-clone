import { useEffect, useState } from "react";
import { YT_API_KEY, YT_CHANNEL_INFO } from "../constant";
import { useDispatch } from "react-redux";
import { addChannelInfo } from "../reduxStore/VideoSlice";


const useChannelInfo = (id) => {
    let dispatch = useDispatch();
    let [channelDetails,setChannelDetails] = useState(null);

    const channelInfo = async(id) =>{
      let res= await fetch(`${YT_CHANNEL_INFO}${id}&key=${YT_API_KEY}`);
      let json =await res.json();
      // dispatch(addChannelInfo(json.items[0]));
      setChannelDetails(json.items[0])
    }

  useEffect(()=>{channelInfo(id)},[])

return channelDetails;
}

export default useChannelInfo




