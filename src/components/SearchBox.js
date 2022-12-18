import React from 'react'
import './SearchBox.css'
const SearchBox = (props) => {
    
  return (
    <div className='Container'>
      <p className='SearchBox-text'>Search</p>
      
      <div className='search-bar'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				></input>
		</div>



    </div>
  )
}

export default SearchBox