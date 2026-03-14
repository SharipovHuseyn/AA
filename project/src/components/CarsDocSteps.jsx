import React from 'react'
import TriangleUpRight from "../assets/images/home/Polygon 3.svg";
import TriangleUpLeft from "../assets/images/home/Polygon 2.svg";
import TriangleDownRight from "../assets/images/home/Polygon 4.svg";
import TriangleDownLeft from "../assets/images/home/Polygon 1.svg";

export default function CarsDocSteps({title, subtitle, subSubtitle=""}) {
  return (
    <div className="relative max-w-fit w-full transition-all duration-300 text-white mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-15 px-12 py-4">
  
      <span
          className={`block ml-5 md:ml-0 absolute transition-all duration-500 left-0 top-0 stroke-white`}
        >
        <img src={TriangleUpLeft} className='w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]' alt="TriangleUpLeft" />
        </span>
        <span
          className={`block mr-5 md:mr-0 absolute transition-all duration-500 right-0 top-0 stroke-white`}
        >
          <img src={TriangleUpRight} className='w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]' alt="TriangleUpRight" />
        </span>
        <span
          className={`block ml-5 md:ml-0 absolute transition-all duration-500 left-0 bottom-0 stroke-white`}
        >
        <img src={TriangleDownLeft} className='w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]' alt="TriangleDownLeft" />
        </span>
        <span
          className={`block mr-5 md:mr-0 absolute transition-all duration-500 right-0 bottom-0 stroke-white`}
        >
          <img src={TriangleDownRight} className='w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]' alt="TriangleDownRight" />
        </span>


      <h1 className="text-[32px] xs:text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-semibold text-[#FF0000] uppercase">
        {title}
      </h1>
      
      <h2 className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
        {subtitle}
      </h2>
      <p className="text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">{subSubtitle}</p>
    </div>
  )
}