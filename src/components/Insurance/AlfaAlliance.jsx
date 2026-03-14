import React from 'react'
import AllianceLogo from "../../assets/images/Insurance/logoAllianceBigSize.svg"
import AlfastrahovanieLogo from "../../assets/images/Insurance/logoAlfastrahovanie.svg"
import FrameX from "../../assets/images/Insurance/FrameX.svg"

export default function AlfaAlliance() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 
    mx-auto py-6 xs:py-4 sm:py-8 md:py-10 border-1 border-red-500 rounded-xl 
    mt-12 sm:mt-16 md:mt-20 w-[90%] lg:w-[1000px] xl:w-[1250px] 2xl:w-[1300px]">

            {/* Alliance Logo */}
            <img
                src={AllianceLogo}
                alt="Asia Alliance"
                className="w-[100px] h-[25px] 
       xs:w-[172px] xs:h-[43px] 
       sm:w-[202px] sm:h-[51px] 
       md:w-[294px] md:h-[75px] 
       lg:w-[400px] lg:h-[102px] 
       xl:w-[530px] xl:h-[136px]
       object-contain"
            />

            {/* Frame X (Вектор) */}
            <img
                src={FrameX}
                alt="Partnership"
                className="w-[25px] h-[25px] 
       xs:w-[25px] xs:h-[25px] 
       sm:w-[37px] sm:h-[37px] 
       md:w-[37px] md:h-[37px] 
       lg:w-[37px] lg:h-[37px] 
       xl:w-[58px] xl:h-[58px]
       object-contain"
            />

            {/* Alfastrahovanie Logo */}
            <img
                src={AlfastrahovanieLogo}
                alt="Alfastrahovanie"
                className="w-[100px] h-[25px] 
       xs:w-[172px] xs:h-[43px] 
       sm:w-[202px] sm:h-[51px] 
       md:w-[294px] md:h-[75px] 
       lg:w-[400px] lg:h-[102px] 
       xl:w-[530px] xl:h-[136px]
       object-contain"
            />
        </div>
  )
}
