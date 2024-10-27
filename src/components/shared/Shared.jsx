import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";
import { MdReviews } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
const Shared=()=>{
  return(
<div className="flex items-center justify-center gap-[40px]">
<div className="h-[550px] w-[350px] bg-black">
  <div className="mt-[200px] ml-[40px] mr-[40px] flex flex-col gap-[10px]">


<div className="flex justify-between gap-[3px]">
<div className="text-blue-500">Electronics</div>
<button className="h-[20px] w-[50px] rounded-[20px] bg-gray-600 flex items-center justify-center">
  <div className="text-[#FFBF00]"><IoIosStar /></div>
  <div className="text-white">4.9</div></button>
</div>


<div className="text-white text-bold text-[20px]">Boat Head set</div>
<div className="text-gray-700">We focus on ergonomics and meeting you where you work.It's only a  keystroke away.</div>
<div className="text-gray-500 flex flex-row gap-[10px]"><div className="text-2xl"><FiDownload /></div> <div>15 Sales</div></div>


<div className="flex flex-row gap-[20px]">
<div className="text-white flex items-center justify-center flex-col">
  <div>$16.4</div>
  <div className="font-bold items-center">B</div>
  </div>
<div className="text-[#004000] flex items-center justify-center flex-col">
  <div>$6.4</div>
  <div className="font-bold">B</div>
  </div>
</div>




<div className="flex justify-between text-gray-700">

  
<div className="flex flex-row gap-[5px] items-center">
    <div className="text-[#E04C16]"><MdReviews /></div>
  <div>64 Reviwes</div>
  </div>
  <div className="flex flex-row gap-[5px] items-center">
    <div className="text-[#004000]"><GiProgression /></div>
  <div>Programs</div>
  </div>
</div>

<div className=" flex items-center justify-center gap-[5px] border-2 border-blue-500  h-[40px] w-[150px] rounded-[20px] text-blue-500">
  <div>Know more</div>
  <div><FaAngleRight /></div>
  </div>


</div>
</div>
</div>

  );
}
export default Shared;