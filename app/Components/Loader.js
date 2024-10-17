"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

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

  //   const textWrapper = textRef.current;
  //   if (textWrapper) {
  //     textWrapper.innerHTML = textWrapper.textContent.replace(
  //       /\S/g,
  //       `<span class="letter">$&</span>`
  //     );

  //     //   const loderanime = anime.timeline()
  //     //     loderanime.add({
  //     //       targets: ".maintext .letter",
  //     //       translate: [-100, 0],
  //     //       easing: "power4.inOut",
  //     //       duration: 1500,
  //     //       delay: (el, i) => 30 * i,
  //     //     })
  //     //     loderanime.add({
  //     //       targets: ".maintext .letter",
  //     //       translate: [0, 100],
  //     //       easing: "power4.inOut",
  //     //       duration: 3000,
  //     //       delay: (el, i) => 2000 + 30 * i,
  //     //     });
  //   }
  // }, []);

  // const animetext = useRef(null);
  // useEffect(() => {
  //   if (animetext.current) {
  //     const loderanime = anime.timeline()
  //       loderanime.add({
  //         targets: ".maintext .letter",
  //         translate: [-100, 0],
  //         easing: "power4.inOut",
  //         duration: 1500,
  //         delay: (el, i) => 30 * i,
  //       })
  //       loderanime.add({
  //         targets: ".maintext .letter",
  //         translate: [0, 100],
  //         easing: "power4.inOut",
  //         duration: 3000,
  //         delay: (el, i) => 2000 + 30 * i,
  //       });
  //   }
  // }, []);


  useGSAP(() => {
    if (textRef.current) {
      const text = textRef.current.innerText;
      textRef.current.innerHTML = text.split('').map(char => 
        `<span class="letter">${char}</span>`
      ).join('');
    }
    gsap.from(".maintext .letter", {
      y: -50,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.05,
    });

    gsap.to(".maintext .letter", {
      y: 50,
      ease: "power4.out",
      duration: 1.5,
      delay: 2.2,
      stagger: 0.03,
    });

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
    // gsap.to(".contaner",{
    //   opacity:0,
    //   duration:0.01,
    //   delay:6
    // })
  });

  return (
    <div className="contaner">
      <div className="pre-loder fixed top-0 w-[100vw] h-[100vh]">
        <div className="loder absolute top-0 w-full h-screen bg-black text-white flex justify-center items-center"></div>
        <div className="loder-bg absolute top-0 w-full h-screen z-[-1] bg-red-600"></div>
      </div>
      <div className="loder-con absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] flex z-[2] text-white">
        <div className="count text-base text-right leading-none ">
          {currentValue}
        </div>
        <div className="copy text-3xl uppercase">
          <div className="maintext overflow-hidden" ref={textRef}>
            <p>Kenil Avaiya</p>
          </div>
        </div>
      </div>
      <div className="loder-2 absolute top-0 w-full h-screen bg-cover bg-center">
      </div>
    </div>
  );
};

export default Loader;
