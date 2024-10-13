"use client";
import { useGSAP } from "@gsap/react";
import anime from "animejs";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
// import Spline from '@splinetool/react-spline/next';


const Loader = () => {
  const [currentValue, setCurrentValue] = useState(0);
  useGSAP(() => {
    gsap.to(".count", {
      opacity: 0,
      delay: 3.5,
      duration: 0.5,
    });
  });
  useEffect(() => {
    // Function to update the counter
    const updateCounter = () => {
      if (currentValue < 100) {
        let increment = Math.floor(Math.random() * 10) + 1;
        setCurrentValue((prevValue) => Math.min(prevValue + increment, 100));

        let delay = Math.floor(Math.random() * 200) + 25;
        setTimeout(updateCounter, delay);
      }
    };

    // Start the counter when the component mounts
    updateCounter();
  }, []); // Depend on currentValue so it triggers updates

  const textRef = useRef();
  useEffect(() => {
    const textWrapper = textRef.current;
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span className='letter'>$&</span>"
      );
    }
  });

  const animetext = useRef(null);
  useEffect(() => {
    if (animetext.current) {
      anime
        .timeline()
        .add({
          targets: ".mla6 .letter",
          translate: [-100, 0],
          easing: "power4.inOut",
          duration: 1500,
          delay: (el, i) => 30 * i,
        })
        .add({
          targets: ".mla6 .letter",
          translate: [0, 100],
          easing: "power4.inOut",
          duration: 3000,
          delay: (el, i) => 2000 + 30 * i,
        });
    }
  }, []);


    // useGSAP(()=>{
    //     gsap.from(".mla6 .letter", {
    //         x: 0, // Final translate position
    //         from: -100, // Starting translate position
    //         ease: "power4.out", // Equivalent of "easeOutExpo" in GSAP
    //         duration: 1.5, // Duration in seconds
    //         stagger: 0.03, // Stagger the animation by 30ms per letter
    //     });
    
    //     // Second animation (translateY from 0 to 100)
    //     gsap.to(".mla6 .letter", {
    //         y: 100,
    //         ease: "power4.out", // Equivalent of "easeOutExpo"
    //         duration: 3, // Duration in seconds
    //         delay: 2, // Delay start by 2 seconds
    //         stagger: 0.03, // Stagger each letter
    //     });
    // })
    

  useGSAP(() => {
    gsap.to(".pre-loder", {
      scale: 0.5,
      ease: "power4.inOut",
      duration: 2,
      delay: 3,
    });
    gsap.to(".loder", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.75,
    });
    gsap.to(".loder-bg", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 4,
    });
    gsap.to(".loder-2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.5,
    });
  });

  return (
    <div className="contaner">
      <div className="pre-loder fixed top-0 w-full h-screen">
        <div className="loder absolute top-0 w-full h-screen bg-black text-white flex justify-center items-center"></div>
        <div className="loder-bg absolute top-0 w-full h-screen z-[-1] bg-red-600"></div>
      </div>
      <div className="loder-con absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] flex z-2 text-white">
        <div className="count text-base text-right leading-none px-[1em] py-0">
          {currentValue}
        </div>
        <div className="copy text-2xl uppercase leading-none">
          <div className="mla6 overflow-hidden" ref={textRef}>
            <p ref={animetext}>Kenil Avaiya</p>
          </div>
        </div>
      </div>
      <div className="loder-2 absolute top-0 w-full h-screen bg-cover bg-center">
        {/* <Spline
          scene="https://prod.spline.design/KLDJx5hhSmYUaQI3/scene.splinecode" 
        /> */}
      </div>
    </div>
  );
};

export default Loader;



