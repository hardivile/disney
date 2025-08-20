import React from "react";
import Disney from "./../images/logo.png";
import Pixar from "./../images/pixar.png";
import Marvel from "./../images/mvl1.jpeg";
import starwar from "./../images/stw.png";
import nationalG from "./../images/ng.png";



import DisneyV from "./../Videos/DisneyV.mp4";
import PixarV from "./../Videos/PixarV.mp4";
import MarvelV from "./../Videos/MarvelV.mp4";
import starwarV from "./../Videos/starwarV.mp4";
import nationalGV from "./../Videos/nationalGV.mp4";

function ProductionHouse() {
  const ProductionHouseList = [
    {
      id: 1,
      Image: Disney,
      video: DisneyV,
    },

    {
      id: 2,
      Image: Pixar,
      video: PixarV,
    },

    {
      id: 3,
      Image: Marvel,
      video: MarvelV,
    },

    {
      id: 4,
      Image: starwar,
      video: starwarV,
    },

    {
      id: 5,
      Image: nationalG,
      video: nationalGV,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 items-center justify-between">
      {ProductionHouseList.map((item) => (
        
<div
  className="group border-[2px] border-gray-600  rounded-lg hover:scale-110 
  transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
>
  <img src={item.Image} className="w-[150px] relative z-[1]" />
  <video
    src={item.video}
    autoPlay muted
    loop
    playsInline
    
    className="absolute top-0 w-[150px] rounded-md z-0 opacity-0 group-hover:opacity-100 group-hover:z-[2] transition-opacity duration-300"
  ></video>
</div>


      ))}
    </div>
  );
}

export default ProductionHouse;
