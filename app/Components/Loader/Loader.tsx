"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Loader = () => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const updateCounter = () => {
      if (currentValue < 100) {
        let increment = Math.floor(Math.random() * 10) + 1;
        setCurrentValue((prevValue) => Math.min(prevValue + increment, 100));

        let delay = Math.floor(Math.random() * 200) + 25;
        setTimeout(updateCounter, delay);
      }
    };

    updateCounter();
  }, []);

  useGSAP(() => {
    const t1 = gsap.timeline({ ease: "power4.out" });
    t1.from(
      ".anitext1",
      {
        y: -50,
        duration: 1,
        stagger: 0.15,
      },
      "nametext"
    );
    t1.from(
      ".anitext2",
      {
        y: -50,
        duration: 1,
        stagger: 0.15,
      },
      "nametext"
    );
    t1.to(
      ".textdiv",
      {
        opacity: 0,
        duration: 0.5,
        delay: 2.5,
      },
      "opacity"
    );
    t1.to(
      ".count",
      {
        opacity: 0,
        delay: 2.5,
        duration: 0.5,
      },
      "opacity"
    );
    t1.to(
      ".loder",
      {
        scale: 0.35,
        ease: "power4.inOut",
        duration: 1.5,
      }
    );
    t1.to(".main", {
      opacity:0,
      ease: "power4.inOut",
      duration: 0.3,
      delay: 0,
    },"HEIGHT");
    t1.to(".mainbelow", {
      height: 0,
      ease: "power4.inOut",
      duration: 0.5,
      delay: 0.2,
    },"HEIGHT");
  });

  return (
    <div className="loder z-[999] fixed top-0 w-full h-full">
      <div className="main absolute z-[10] w-full h-screen  top-0">
        <div className="h-[100vh] relative w-[100vw] bg-black ">
          <div className="textdiv absolute top-20 left-20 text-white uppercase font-[ktext] font-black">
            <div className="nametext overflow-hidden text-6xl">
              <div className="anitext1 flex gap-2">
                <span>KENIL</span>
                <span>AVAIYA</span>
              </div>
            </div>
            <div className="nametext overflow-hidden text-6xl">
              <div className="anitext2 flex gap-2">portfolio ©2024</div>
            </div>
          </div>
          <div className="count text-white absolute bottom-20 right-10 text-9xl font-black">
            {currentValue}
          </div>
        </div>
      </div>
      <div className="mainbelow absolute z-[5] w-full h-screen bg-red-700 top-0"></div>
    </div>
  );
};

export default Loader;
