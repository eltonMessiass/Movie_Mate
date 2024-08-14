import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className='flex flex-col mt-4 w-64'>
      <Link to='./MovieDetails'>
        <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2tuLGjtex92lAjBwmG2i8P8Zxa_8Dz1MEg&s" alt="movie_image" />
      </Link>
      <span className='text-black font-semibold text-2xl text-center'>The kings man</span>
    </div>
  )
}

export default MovieCard
