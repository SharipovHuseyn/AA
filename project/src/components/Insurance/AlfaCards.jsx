import React from 'react'
import IconFirstBlock from "../../assets/images/Insurance/cubok.svg"
import IconSecondBlock from "../../assets/images/Insurance/shield.svg"
import IconThirdBlock from "../../assets/images/Insurance/time.svg"
import IconfourthBlock from "../../assets/images/Insurance/gen.svg"


export default function AlfaCards() {
  return (
    <div className="w-full">
    {/* <img className=" " src={MaskImage} alt="" /> */}
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-[1800px] px-4 xs-6 md:px-8 lg:px-10 mx-auto mt-10 md:mt-16 lg:mt-20">

        <div className="flex flex-col justify-around items-center p-4 xs:h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px] bg-white/[0.03] backdrop-blur rounded-xl lg:rounded-2xl border border-white/10 mx-auto w-[90%] sm:w-[500px] md:w-[360px] xl:w-[400px] 2xl:w-[350px]">
            <img className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[85px] lg:h-[85px]" src={IconFirstBlock} alt="" />
            <p className="text-white font-semibold text-base sm:text-lg xs:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[28px] text-center leading-tight">
                Лидер российского страхового рынка
            </p>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px] text-center opacity-80 px-2">
                Более 20 лет в отрасли, высшие рейтинги надёжности
            </p>
        </div>

        <div className="flex flex-col justify-around items-center p-4 xs:h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px] bg-white/[0.03] backdrop-blur rounded-xl lg:rounded-2xl border border-white/10 mx-auto w-[90%] sm:w-[500px] md:w-[360px] xl:w-[400px] 2xl:w-[350px]">
            <img className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[85px] lg:h-[85px]" src={IconSecondBlock} alt="" />
            <p className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center leading-tight px-2">
                Защита от всех основных рисков
            </p>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px] text-center opacity-80 px-2">
                Более 20 лет в отрасли, высшие рейтинги надёжности
            </p>
        </div>

        <div className="flex flex-col justify-around items-center p-4 xs:h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px] bg-white/[0.03] backdrop-blur rounded-xl lg:rounded-2xl border border-white/10 mx-auto w-[90%] sm:w-[500px] md:w-[360px] xl:w-[400px] 2xl:w-[350px]">
            <img className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[85px] lg:h-[85px]" src={IconThirdBlock} alt="" />
            <p className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center leading-tight px-2">
                Быстрые выплаты и сопровождение
            </p>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px] text-center opacity-80 px-2">
                Минимум бюрократии, поддержка 24/7
            </p>
        </div>

        <div className="flex flex-col justify-around items-center p-4 xs:h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px] bg-white/[0.03] backdrop-blur rounded-xl lg:rounded-2xl border border-white/10 mx-auto w-[90%] sm:w-[500px] md:w-[360px] xl:w-[400px] 2xl:w-[350px]">
            <img className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[85px] lg:h-[85px]" src={IconfourthBlock} alt="" />
            <p className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center leading-tight px-2">
                Специальные условия для клиентов Asia Alliance
            </p>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px] text-center opacity-80 px-2">
                Специальные условия для клиентов Asia Alliance
            </p>
        </div>

    </div>
</div>
  )
}
