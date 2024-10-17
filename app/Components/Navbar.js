"use client";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className=" w-full h-[10vh] px-3 sm:px-10 py-5 flex justify-between text-[#2f2f2f] items-center">
      <div className="logo"></div>
      <div className="service sm:flex gap-[1.5vw] text-nav text-[#2f2f2f] font-[400] justify-end items-center">
        <div className="hidden sm:flex items-start gap-x-4">
          <a
            className="link-text group flex flex-col relative h-fit text-nav overflow-hidden font-sm"
            href="/#works"
          >
            <span className="link1">Works</span>
            <span className="link2 ">Works</span>
          </a>
          <a
            className="link-text group flex flex-col relative h-fit text-nav overflow-hidden font-sm"
            href="/#about"
          >
            <span className="link1">About</span>
            <span className="link2 ">About</span>
          </a>
          <a
            className="link-text group flex flex-col relative h-fit text-nav overflow-hidden font-sm"
            href="/contact"
          >
            <span className="link1">Contact</span>
            <span className="link2 ">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
