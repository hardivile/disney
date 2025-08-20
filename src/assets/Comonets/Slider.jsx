import React, { useRef } from "react";
import ant from "./../images/a1.webp";
import bl from "./../images/bl.webp";
import ext from "./../images/ext.webp";
import Ghosted from "./../images/ghf.webp";
import ranger from "./../images/r.webp";
import Ravage from "./../images/Ravage.webp";
import thunderbolts from "./../images/thunderbolts.webp";
import TLU from "./../images/TLU.webp";
import tlu1 from "./../images/an.webp";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const elementRef = useRef();
  const screenwidht = window.innerWidth;

  const sliderRight = (element) => {
    element.scrollLeft += screenwidht-110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenwidht-110;
  };

  return (
    <div>
      <HiChevronLeft
        className="  hidden md:block    text-white text-[30px] absolute mx-8  mt-[150px] 
        cursor-pointer left-0 
        "
        onClick={() => sliderLeft(elementRef.current)}
      />

      <HiChevronRight
        className="  hidden md:block    text-white text-[30px] absolute mx-8  mt-[150px] 
        cursor-pointer right-0 
        "
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto  w-full px-16 py-4 scrollbar-none
        scroll-smooth "
        ref={elementRef}
      >
        <img
          src={ant}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400 transition-all ease-in   "
        />
        <img
          src={bl}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400   "
        />
        <img
          src={ext}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400   "
        />
        <img
          src={Ghosted}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400   "
        />
        <img
          src={ranger}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400   "
        />
        <img
          src={Ravage}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400   "
        />
        <img
          src={thunderbolts}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400   "
        />
        <img
          src={TLU}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400   "
        />
        <img
          src={tlu1}
          className=" min-w-[500px] h-[350px] object-cover
        object-left-top mr-5  rounded-md  hover:border-[4px] border-gray-400   "
        />
      </div>
    </div>
  );
}

export default Slider;
