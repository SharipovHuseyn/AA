import React from 'react'
import FrameBtn from "./images/FrameRedBtn.svg"

export default function ApplicationBtn({onClick}) {
    return (
        <button onClick={onClick} className='uppercase text-[14px] md:text-[16px] 2xl:text-[18px] text-[#DB1E1E] font-semibold bg-[#DB1E1E1A] hover:bg-[#1e1e1e] w-[190px] md:w-[222px] 2xl:w-[260px] px-2 lg:px-4 2xl:px-6 h-12 rounded-lg flex items-center justify-center  duration-300'>
            Оставить заявку
            <img src={FrameBtn} alt="" className="ml-2 sm:ml-2 lg:ml-3 2xl:ml-4" />
        </button>
    )
}
