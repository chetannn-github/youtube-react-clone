import { Search } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import "../../stylesheets/SearchBar.css"
import SearchResult from '../SearchResult'
import { YT_API_KEY } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { addSearchResult } from '../../utils/reduxStore/VideoSlice'

const SearchBar= () => {
  let searchQuery = useRef(null);
  let dispatch = useDispatch();

  let handleChange = async(searchQuery) =>{
    let result = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery.current.value}`);
    let json = await result.json();
    console.log(json[1])
    dispatch(addSearchResult(json[1]))
  
      
  }
    

  return (<>
    <div id= "searchbar" >
        <input ref={searchQuery} type="text"  placeholder='Search' onChange={()=>{handleChange(searchQuery)}}/>
        <Search/>
    </div>
    <SearchResult/></>
  )
}

export default SearchBar