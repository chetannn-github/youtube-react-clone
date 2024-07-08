import { Search } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import "../../stylesheets/SearchBar.css"
import SearchResult from '../SearchResult'
import { YT_API_KEY } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { addSearchResult, addVideos, addVideoSearchResult, toggleShowSearchResult } from '../../utils/reduxStore/VideoSlice'
import { Link } from 'react-router-dom'

const SearchBar= () => {
  let searchQuery = useRef(null);
  let dispatch = useDispatch();

  let handleChange = async(searchQuery) =>{ console.log("hiiiiiiiii")
    let result = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery.current.value}`);
    let json = await result.json();
   
    dispatch(addSearchResult(json[1]))
  
      
  }

  let handleSearch = async(searchQuery) =>{
    dispatch(addSearchResult([]))
    let result = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery.current.value}&key=${YT_API_KEY}`);
    let json = await result.json();
    // console.log(json.items)
    dispatch(addVideoSearchResult(json.items))
  
      
  }

  let handleShowSearchResult =(show) =>{
    dispatch(toggleShowSearchResult(show))
  }
    

  return (<>
    <div id= "searchbar" >
        <input ref={searchQuery} type="text"  placeholder='Search' onChange={()=>{handleChange(searchQuery)}} onFocus={()=>handleShowSearchResult(true)} onBlur={()=>handleShowSearchResult(false)}/>
        <Link to={"/search"}>
          <Search onClick={()=>handleSearch(searchQuery)}/>
        </Link>
    </div>
    <SearchResult/></>
  )
}

export default SearchBar