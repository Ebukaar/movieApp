import React from 'react'
import './Movies.css'

const Movies = (props) => {
  return (
    <div>
         {/* <h1 className='movie-list-header'>Action</h1> */}
        <div className='movie-list'>
        {props.movies.map((movie, index)=> 
        <div>
            <img className='movie-image' src={movie.Poster} alt="movie"></img>
        </div>)}
        </div>
    </div>
  )
}

export default Movies;