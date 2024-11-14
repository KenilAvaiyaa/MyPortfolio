import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav z-[99] absolute top-0 w-full  px-3 sm:px-10 py-5 flex justify-between text-[#2f2f2f] items-center">
        {/* //this is tri and error code
          <div className="flex cursor-pointer group">
            <p className="m-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-360">
              ©
            </p>
            <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-[30px]">
              <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">
                Code by
              </p>
              <p className="relative pl-[0.3em] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[65px]">
                Kenil
              </p>
              <p className="absolute left-[100px] pl-[0.3em] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[65px]">
                Avaiya
              </p>
            </div>
          </div>
          <div className="services sm:flex gap-[1.5vw] text-nav text-[#2f2f2f] font-[400] justify-end items-center ">
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
          </div> */}
        <div className="flex cursor-pointer group">
          <p className="m-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-360">
            ©
          </p>
          <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-[30px]">
            <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">
              Code by
            </p>
            <p className="relative pl-[0.3em] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[65px]">
              Kenil
            </p>
            <p className="absolute left-[100px] pl-[0.3em] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[65px]">
              Avaiya
            </p>
          </div>
        </div>

        <div className="service sm:flex gap-[1.5vw] text-nav text-[#2f2f2f] font-[400] justify-end items-center">
          <div className="hidden sm:flex items-start gap-x-4">
            <a
              className="link-text group flex flex-col relative h-fit text-nav overflow-hidden"
              href="/#works"
            >
              <span className="link1 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-0 group-hover:-translate-y-[1.75rem]">
                Works
              </span>
              <span className="link2 absolute inset-0 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[1.75rem] group-hover:translate-y-0">
                Works
              </span>
            </a>
            <a
              className="link-text group flex flex-col relative h-fit text-nav overflow-hidden"
              href="/#about"
            >
              <span className="link1 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-0 group-hover:-translate-y-[1.75rem]">
                About
              </span>
              <span className="link2 absolute inset-0 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[1.75rem] group-hover:translate-y-0">
                About
              </span>
            </a>
            <a
              className="link-text group flex flex-col relative h-fit text-nav overflow-hidden"
              href="/contact"
            >
              <span className="link1 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-0 group-hover:-translate-y-[1.75rem]">
                Contact
              </span>
              <span className="link2 absolute inset-0 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[1.75rem] group-hover:translate-y-0">
                Contact
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
