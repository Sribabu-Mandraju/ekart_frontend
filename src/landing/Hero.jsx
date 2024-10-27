// Hero.js
import React from "react";

const Hero = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="outer h-[100vh] md:h-[80vh] w-full flex justify-center items-center bg-[#787878] flex-wrap">
        <div className="box h-[70vh] sm:h-[70vh] w-full sm:w-[90%] lg:w-[80%] bg-[aqua] relative pl-[50px] md:pl-[100px] flex flex-col md:flex-row flex-wrap justify-between">
          <div className="content w-full md:w-[500px] mt-[100px] relative z-10">
            <h6 className="text-[dodgerblue] text-[14px] pb-[25px]">SUMMER 2020</h6>
            <h1 className="heading text-[5vh] font-bold pb-[20px]">NEW COLLECTION</h1>
            
            {/* Dashed Line Hidden on Small Screens */}
            <div className="design h-[1px] w-[300px] lg:w-[500px] border-[1px] border-dashed border-[dodgerblue] md:flex justify-center ml-[150px] mb-[15px] relative z-20 hidden">
              <div className="cross h-[1px] w-[30px] border-[1px] border-dashed border-[dodgerblue] rotate-[60deg] absolute"></div>
              <div className="cross h-[1px] w-[30px] border-[1px] border-dashed border-[dodgerblue] rotate-[-60deg] absolute"></div>
            </div>

            <p className="text-[#787878] pb-[15px] w-[240px] text-[18px]">
              We know how large will act, but things on a small scale
            </p>
            <button className="h-[40px] w-[150px] bg-[dodgerblue] text-white rounded-lg font-bold">
              SHOP NOW
            </button>
          </div>
          <div className="circles relative">
            <div className="circle-small bg-[#787878] h-[50px] w-[50px] rounded-full absolute right-[350px] top-0"></div>
            
            {/* Big Circle with Image */}
            <div className="circle-big bg-[#787878] h-[370px] w-[370px] rounded-full absolute right-0 top-0 z-0">
              <div className="image-display absolute right-0 top-[27px] lg:top-[61px]">
                <img src="displayimg.png" alt="Display" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;