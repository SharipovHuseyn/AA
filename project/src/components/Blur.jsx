import React from 'react'

export default function Blur() {
  return <>
  <div className={`absolute left-0 top-0 bg-red-700 w-16 h-26 xs:w-18 xs:h-28 sm:w-20 sm:h-30 md:w-22 md:h-32 lg:w-24 lg:h-34 xl:w-26 xl:h-36 2xl:w-30 2xl:h-40 blur-[70px] sm:blur-[80px] md:blur-[90px] lg:blur-[100px] xl:blur-[120px] rounded-r-[50%]`}></div>
  <div className={`absolute right-0 top-0 bg-red-700 w-16 h-26 xs:w-18 xs:h-28 sm:w-20 sm:h-30 md:w-22 md:h-32 lg:w-24 lg:h-34 xl:w-26 xl:h-36 2xl:w-30 2xl:h-40 blur-[70px] sm:blur-[80px] md:blur-[90px] lg:blur-[100px] xl:blur-[120px] rounded-l-[50%]`}></div>
</>
}
