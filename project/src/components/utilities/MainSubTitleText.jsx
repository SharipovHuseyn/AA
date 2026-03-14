import React from 'react'

export default function MainSubTitleText({ children }) {
  return (
    <div className='text-white  mt-10 font-[300] text-center
                    text-[14px] xs:text-[18px] sm:text-[22px] md:text-[25px] 
                    lg:text-[30px] xl:text-[34px] 2xl:text-[42px]
                    w-[90%] mx-auto'>
      {children}
    </div>
  )
}