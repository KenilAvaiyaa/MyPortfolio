import React from 'react'
import { IoArrowDown } from "react-icons/io5";
import { GoArrowDownRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className=' w-full h-[90vh] px-3 sm:px-10 py-5'>
        {/* hero name div */}
      <div className=" w-full h-[50%] sm:h-[40%] flex justify-center items-end ">
        <h1 className="hero_name w-full uppercase tracking-tight sm:tracking-normal text-[15vw] leading-[14vw] sm:text-[14.5vw] font-[900] ">kenil avaiya</h1>
      </div>
      {/* hero description div */}
      <div className="info relative w-full h-[50%] sm:h-[60%] bg-slate-500">
        <div className="infro_main">
            <GoArrowDownRight className='' />
            <h3 className="text-base">A freelance front-end developer and UI/UX designer with a tenacious spirit. empowering new enterprises worldwide to gain an unfair advantage in the digital landscape.</h3>
        </div>

        <div className="location absolute flex justify-between items-end bottom-0 right-0 w-full ">
            <div className="loca_left w-fit text-sm sm:text-[1.2vw] sm:leading-[1.1vw]">
                <p className="">21.23904, 72.81233</p>
                <p className="">GUJARAT, INDIA</p>
            </div>
            <div className="loca_right w-fit text-sm sm:text-[1vw] sm:leading-[1vw]">
                <p className=" uppercase flex items-center">(scroll for more <IoArrowDown />)</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
