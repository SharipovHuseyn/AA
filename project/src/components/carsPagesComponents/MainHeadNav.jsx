import React from 'react'
import { Link } from 'react-router-dom'
import MainTitleText from "../../components/utilities/MainTitleText";
export default function MainHeadNav() {

    let classStyle = ""

    if (window.location.pathname.split('/')[2].toUpperCase() == "FL") {
        classStyle = <div className="flex flex-col sm:flex-row px-4 mx-auto items-center justify-center text-white w-full mt-2 xs:mt-3 sm:mt-4 md:mt-6 lg:mt-8 gap-4 ">
            <Link to={"/cars/FL"}><button className="p-4 text-[14px] xs:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] rounded-xl uppercase bg-[#DB1E1E]">Для физического лица</button></Link>
            <Link to={"/cars/UL"}><button className="p-4 text-[14px] xs:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] rounded-xl uppercase border border-[#DB1E1E] hover:border-white transition-all duration-500 ease-in-out">Для юридического лица</button></Link>
        </div>
    } else {
        classStyle = <div className="flex flex-col sm:flex-row px-4 mx-auto items-center justify-center text-white w-full mt-2 xs:mt-3 sm:mt-4 md:mt-6 lg:mt-8 gap-4 ">
            <Link to={"/cars/FL"}><button className="p-4 text-[14px] xs:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] rounded-xl uppercase  border border-[#DB1E1E] hover:border-white transition-all duration-500 ease-in-out">Для физического лица</button></Link>
            <Link to={"/cars/UL"}><button className="p-4 text-[14px] xs:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] rounded-xl uppercase bg-[#DB1E1E]">Для юридического лица</button></Link>
        </div>
    }

    return (
        <div className="text-white uppercase mx-auto px-1 xs:px-2 sm:px-3 md:px-4 max-w-[96vw] xs:max-w-[96vw] sm:max-w-[96vw] md:max-w-[96vw] lg:max-w-[96vw] xl:max-w-[90vw] 2xl:max-w-[80vw]">
            <div className="mx-auto text-center">
                <MainTitleText>Клиентский путь</MainTitleText>
                <p className="text-[14px] xs:text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px]  mt-2 sm:mt-3 lg:mt-4">этапы доставки</p>
            </div>

            {classStyle}
        </div>

    )
}
