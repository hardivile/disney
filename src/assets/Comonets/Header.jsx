import React , {useState} from "react";
import logo from "./../images/logo.png";
import avatar from "./../images/useravatar.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

import { HiPlus, HiDotsVertical, HiUser } from "react-icons/hi";
import Headeritem from "./Headeritem";

function Header() {
  const  [toggle , SetToggle]= useState(false)
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },

    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },

    {
      name: "Watch List",
      icon: HiPlus,
    },

    {
      name: "Originals",
      icon: HiStar,
    },

    {
      name: "Movies",
      icon: HiPlayCircle,
    },

    {
      name: "Series",
      icon: HiTv,
    },
  ];
  return (
<div className="flex w-full items-center justify-between p-5  ">
  <div className="flex items-center gap-8">
    <img
      src={logo}
      alt="disney"
      className="w-[80px] 
      md:w-[115px] object-cover"/>

      <div className=" hidden  md:flex gap-8">
    {menu.map((item, index) => (
      <Headeritem key={index} name={item.name} Icon={item.icon} />
    ))}
    </div>

    <div className="flex md:hidden    gap-5">
      {menu.map((item, index) =>index<3&& (
        <Headeritem  name={''} Icon={item.icon} />
      ))}
          <div className="md:hidden" onClick={()=>SetToggle(!toggle)}>
          <Headeritem  name={''} Icon={HiDotsVertical} />
             {toggle? <div className=" absolute border-gray-700 mt-3 bg-[#121212] 
              
              border-[1px] p-3 px-5 py-4
              
              ">
              {menu.map((item, index) =>index>2&& (
                <Headeritem  name={item.name} Icon={item.icon} />
              ))}
              </div>:null }

          </div>

    </div>







  </div>

  

  <img src={avatar} alt="" className="w-[40px] rounded-full " />
</div>

  );
}

export default Header;
