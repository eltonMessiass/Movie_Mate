import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'
import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=66f558ba'
function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])

    const searchMovie = async (title) => {
      const response = await axios.get(`${API_URL}&s=${title}`)
      .then((response) => setMovies(response.data.Search))
      
    }
    // console.log(movies)

    useEffect(() => {
      searchMovie("Spiderman")
    }, [])
    

    

  return (
    <div>
        <Header />
        <div className='w-full items-center justify-center'> 
          { 
          movies?.length > 0
            ? (
              <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie}/>
                  // <h1 key={movie.id}>{movie.Title}</h1>
                ))}
              </div>
            ) :
            (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
          }
        </div>

    </div>
  )
}

export default Home
