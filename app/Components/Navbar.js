"use client";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className=" w-full h-[10vh] px-3 sm:px-10 py-5 flex justify-between text-[#2f2f2f] items-center">
      <motion.div
      className="register_text bg-red-200 flex text-sm sm:text-base gap-1 justify-start items-center"
      onMouseEnter={() => {
        document.querySelector('.copyright').style.transform = 'rotate(360deg)';
      }}
      >
          <span className="copyright">©</span>
          <span>CODE BY</span>
          <span>KENIL AVAIYA</span>
      </motion.div>
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
        {/* <div className="group w-fit h-fit flex flex-col -left-10 -top-5 relative overflow-hidden ">
          <a className="hidden sm:inline-block absolute transition-transform duration-300 translate-y-0 group-hover:-translate-y-full   " href="#">
            Work
          </a>
          <a className="hidden sm:inline-block absolute transition-transform duration-300 translate-y-full group-hover:-translate-y-0" href="#">
            Work
          </a>
        </div>
        <h3 className=" flex flex-col relative overflow-hidden">
          <a className="hidden sm:inline-block" href="#">
            About
          </a>
          <a className="hidden absolute left-0 top-7 sm:inline-block" href="#">
            About
          </a>
        </h3>
        <h3 className=" flex flex-col relative overflow-hidden">
          <a className="hidden sm:inline-block " href="#">
            Contact
          </a>
          <a className="hidden absolute left-0 top-7 sm:inline-block" href="#">
            Contact
          </a>
        </h3> */}
        {/* <h3><a  className='hidden sm:inline-block' href="#">About</a></h3> */}
        {/* <h3><a  className='hidden sm:inline-block' href="#">Contact</a></h3> */}
        {/* <h3>
          <a
            className="sm:hidden text-nav flex justify-end items-center text-sm font-[500]"
            href="#"
          >
            Menu
          </a>
        </h3> */}
      </div>
    </div>
  );
};

export default Navbar;
