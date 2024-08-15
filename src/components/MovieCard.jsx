/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className='flex flex-col mt-4 w-64'>
      <Link to='./MovieDetails'>
        <img className='w-full' src={movie.Poster !== 'N/A' ? movie.Poster :  "https://via.placeholder.com/400"} alt={movie.Title} />
      </Link>
      {/* <span>{movie.Type}</span> */}
      <span className='text-black font-semibold text-2xl text-center'>{movie.Title}</span>
    </div>
  )
}

export default MovieCard
