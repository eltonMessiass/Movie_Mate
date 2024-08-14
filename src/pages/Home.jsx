import React from 'react'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'

function Home() {
  return (
    <div className=''>
        <Header />
        <div className='mx-2'><MovieCard /></div>
    </div>
  )
}

export default Home
