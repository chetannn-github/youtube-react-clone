import { useDispatch } from "react-redux";
import { YT_API_KEY, YT_SEARCH_VIDEO } from "../constant";
import { addSearchResult, addVideoSearchResult } from "../reduxStore/VideoSlice";



const useSearchVideo = () =>{
    let dispatch = useDispatch();
    let handleSearch = async(searchQuery) =>{
        dispatch(addSearchResult([]));
        let result = await fetch(`${YT_SEARCH_VIDEO}${searchQuery}&key=${YT_API_KEY}`);
        let json = await result.json();
        // console.log(json.items)
        dispatch(addVideoSearchResult(json.items))
      
          
      }

    return handleSearch
    
}

export default useSearchVideo;