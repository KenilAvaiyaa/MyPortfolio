import React from 'react'
import Loader from './Components/Loader/Loader'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'


const page = () => {
  return (
    <div className='relative w-full h-screen'>
      < Loader/>
      < Navbar/> 
      < Hero/>
      < About/>
    </div>
  )
}

export default page
