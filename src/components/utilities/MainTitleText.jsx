import React from 'react'

export default function MainTitleText({children}) {
  return (
    <div className='text-white leading-none uppercase text-center font-semibold text-[20px] xs:text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] 2xl:text-[60px]'>
        {children}
    </div>
  )
}