"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";


const Hero = () => {
  useGSAP(()=>{
    const time = gsap.timeline({})
    time.from('.headtext1',{
      y:144,
      duration:0.9,
      delay:5.7,
    },"maintext")
    time.from('.headtext2',{
      y:80,
      duration:1,
      delay:5.7,
    },"maintext")
  },[])
  return (
    <>
      <div className="hero relative w-full bg-slate-50 px-10 text-[--maintext] overflow-hidden h-screen">
        <div className="kenilavaiya flex flex-col justify-center items-start absolute top-[15vh] uppercase h-fit">
          <div className="cover overflow-hidden ">
            <h1 className="headtext1 text-[11vw] leading-none tracking-none font-extrabold">KEnil Avaiya</h1>
          </div>
          <div className="cover overflow-hidden">
            <h1 className="headtext2 text-[5.5vw] leading-none tracking-tighter font-extrabold">UI/UX AND FRONT-END DEVELOPER</h1>
          </div>
        </div>
        <motion.p 
          className="homeinfo absolute top-[50vh] text-3xl w-[50vw] font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.8 }}
        >
          A freelance designer with a tenacious spirit, empowering new enterprises worldwide to gain an unfair advantage in the digital landscape.
        </motion.p>
        <motion.div 
          className="emailbutton absolute top-[70vh] px-4 py-2 border-2 border-black rounded-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.8 }}
          >
          Hello@Kenil.Com
        </motion.div>
        <div className="mainfooter w-[100vw] flex justify-between text-[ktext] absolute bottom-0 left-0 px-3 sm:px-10 py-5">
          <div className="location  leading-none flex flex-col gap-0 justify-center">
          <span>40.737589,-74.055965</span>
          <span>New Jersey, USA</span>
          </div>
          <div className="discover uppercase flex justify-center items-center">
              <span className="text-sm">( scroll for more</span>
              <span className="text-lg"><GoArrowDown /></span>
              <span className="text-sm">)</span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
