"use client"
import React from 'react'
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const page = () => {
  return (
    <>
    <Loader />
    <div className=" w-full min-h-screen bg-main-body font-[Neue_Montreal] -z-10 text-maintext text-xl">
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default page
"in this code animejs is not working and also need to chage index, loder-2 not woking as wall as also kenil avaiy atext in loder have to add some animation "