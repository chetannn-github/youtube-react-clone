import { Search } from 'lucide-react'
import React from 'react'
import "../../stylesheets/SearchBar.css"

const SearchBar= () => {
  return (
    <div id= "searchbar" >
        <input type="text"  placeholder='Search'/>
        <Search/>
    </div>
  )
}

export default SearchBar