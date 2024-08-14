import React from 'react'

const Header = () => {
  return (
    <div className='bg-emerald-400 w-full h-16 flex sm:flex-col lg:flex-row items-center justify-center'>
  <h1 className='text-3xl text-blue-800 font-bold mr-4'>Movie Mate</h1>
  <form action="" className=''>
    <input type="search" name="search" id="search" className='outline-none rounded  bg-emerald-400 border border-white' />
    <input type="submit" value="Search" className=''/>
  </form>
</div>

  )
}

export default Header
