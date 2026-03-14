import React from 'react'

export default function BannerA() {
  return (
    <div className="rounded-3xl bg-white/[0.06] text-white flex justify-between mx-auto">
    <div className="py-2 sm:py-2 md:py-4 lg:py-4 xl:py-5 2xl:py-6  px-2 sm:px-2 md:px-4 lg:px-4 xl:px-5 2xl:px-6">
      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px]">
        Мы предлагаем вам варианты автомобилей, которые соответствуют заданным параметрам. Вы выбираете ПОНРАВИВШИЙСЯ автомобиль. В рамках выставленного коммерческого предложения Вы получите информацию о всех расходах, формирующих итоговую стоимость автомобиля под ключ.
      </p>
    </div>
    <div className="w-[400px] h-auto bg-red-700 rounded-r-3xl [clip-path:polygon(50%_0%,100%_0%,100%_100%,0%_100%)]"></div>
  </div>
  )
}