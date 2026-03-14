import React from 'react'
import FrameBtn from "./images/FrameWhiteBtn.svg"

export default function MoreDetailsButton() {
    return (
        <button className='uppercase text-[15px] 2xl:text-[18px] text-white font-semibold bg-[#DB1E1E] hover:bg-[#1e1e1e] px-4 lg:px-4 2xl:px-6 h-12 rounded-lg flex items-center justify-center w-[150px] md:w-[200px] duration-300 md:mt-4'>
            подробнее
            <img src={FrameBtn} alt="" className="ml-2 sm:ml-2 lg:ml-3 2xl:ml-4" />
        </button>
    )
}
