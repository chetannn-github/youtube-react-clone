import { Search } from 'lucide-react'
import React, { useState } from 'react'
import "../../stylesheets/SearchBar.css"
import SearchResult from '../SearchResult'

import { useDispatch } from 'react-redux'
import {toggleShowSearchResult } from '../../utils/reduxStore/VideoSlice'
import { Link } from 'react-router-dom'
import usefetchSearchQuery from '../../utils/customHooks/usefetchSearchQuery'
import useSearchVideo from '../../utils/customHooks/useSearchVIdeo'

const SearchBar= () => {
  let [searchQuery,setSearchQuery] = useState("");
  let dispatch = useDispatch();
  usefetchSearchQuery(searchQuery);
  let handleSearch = useSearchVideo();
  
  let handleShowSearchResult =(show) =>{
    dispatch(toggleShowSearchResult(show))
  }
    

  return (<>
    <div id= "searchbar" >
        <input  type="text"  placeholder='Search' value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} onFocus={()=>handleShowSearchResult(true)} onBlur={()=>handleShowSearchResult(false)}/>
        <Link to={"/search"}>
          <Search onClick={()=>handleSearch(searchQuery)}/>
        </Link>
    </div>
    <SearchResult/></>
  )
}

export default SearchBar