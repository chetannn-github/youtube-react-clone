import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { YT_SEARCH_QUERY } from "../constant";
import { addSearchResult } from "../reduxStore/VideoSlice";


const usefetchSearchQuery = (searchQuery) =>{
    let dispatch = useDispatch();
    useEffect(()=>{
      // console.log("Search query changed");
      let timer = setTimeout(()=>{handleSearchQuery(searchQuery)},200);
  
      return ()=>{
        clearTimeout(timer);
      }
    },[searchQuery]);

    let handleSearchQuery = async(searchQuery) =>{ 
      // console.log("hiiiiiiiii");
      let result = await fetch(`${YT_SEARCH_QUERY}${searchQuery}`);
      let json = await result.json();
     
      dispatch(addSearchResult(json[1]));
    
        
    }
}

export default usefetchSearchQuery;