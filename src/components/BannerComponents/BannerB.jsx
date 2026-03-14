 
import React from 'react'

export default function BannerB() {
  return (
    <div className='mx-auto'>
      <div className="rounded-3xl border border-[#ff0000] text-white flex justify-between">
        <div className="py-2 sm:py-2 md:py-4 lg:py-4 xl:py-5 2xl:py-6  px-2 sm:px-2 md:px-4 lg:px-4 xl:px-5 2xl:px-6">
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px]">
            Штатный сотрудник в Корее выезжает на дилерскую площадку и проводит проверку ключевых параметров. <br />По итогам проверки <span className="font-bold">предоставляется подробный фото- и видеоотчет</span>
          </p>
        </div>
        <div className="w-[200px] h-auto bg-red-700 rounded-r-3xl [clip-path:polygon(50%_0%,100%_0%,100%_100%,0%_100%)]"></div>
      </div>
    </div>
  )
}