import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const page = () => {
  return (
    <>
    <div className=" w-full min-h-screen bg-main-body font-[Neue_Montreal] text-maintext text-3xl">
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default page
