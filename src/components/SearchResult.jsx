import { Search } from 'lucide-react'
import React from 'react'
import "../stylesheets/SearchResult.css"
import { useSelector } from 'react-redux'

const SearchResult = () => {
    let searchResults = useSelector((store)=>(store.videoList.searchResult));
    let showSearchResult = useSelector((store)=>(store.videoList.showSearchResult));
    if (!searchResults ) return;
    if (! searchResults.length) return;
    if (!showSearchResult) return
  return  (
   <div id="search-result">
    {searchResults.map((search)=>(
      
        <div className="result">
          <Search /> 
          <div className="txt">{search}</div>
        </div>
        
    ))}
       
   </div>
  )
}

export default SearchResult