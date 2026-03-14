import MainTitleText from "../components/utilities/MainTitleText"
import MainSubTitleText from "../components/utilities/MainSubTitleText"
import EvroPlanAlliance from "../components/Insurance/EvroPlanAlliance"
import EvroPlanCards from "../components/Insurance/EvroPlanCards"
import FeedBlackForm from "../components/feedBackForm/FeedBlackForm"
import Blur from "../components/Blur"

export default function PortfolioPage() {
    return (
        <div className="min-h-dvh bg-black">
            <div className="py-30 xs:py-32 sm:py-40 md:py-45 lg:py-52 xl:py-56 2xl:py-60">
                <section className="w-full mx-auto">
                    <MainTitleText><span className="text-[#FF0000]">Лизинг</span> от надежного партнера</MainTitleText>

                    <EvroPlanAlliance />
                    <div>
                        <MainSubTitleText>
                            Asia Alliance и Европлан заключили официальное партнёрство.
                            Теперь каждый клиент получает доступ к лизинговым программам от надежного партнера на эксклюзивных условиях.
                        </MainSubTitleText>
                    </div>
                </section>

                <section className="mt-30 xs:mt-20 sm:mt-30 md:mt-40 lg:mt-50 xl:mt-55 2xl:mt-60 w-full mx-auto">
                    <div className="relative">
                        <Blur />
                        <div className="w-[90%] mx-auto">
                            <MainTitleText><span className="text-[#FF0000]">почему </span>Европлан?</MainTitleText>
                        </div>
                        <EvroPlanCards />
                    </div>
                </section>



                <section className="mt-30 xs:mt-20 sm:mt-30 md:mt-40 lg:mt-50 xl:mt-55 2xl:mt-60 w-full mx-auto">
                    <div className="relative">
                        <Blur />
                        <div className="w-[90%] mx-auto">
                            <MainTitleText>оформление <span className="text-[#FF0000]">лизинга</span></MainTitleText>
                        </div>
                        <MainSubTitleText>
                            Заполните форму — специалист свяжется с Вами <br />
                            и подберёт оптимальную программу лизинга
                        </MainSubTitleText>
                    </div>

                    <FeedBlackForm />
                </section>
            </div>
        </div>
    )
}

/* СТАРОЕ СОДЕРЖИМОЕ ПОРТФОЛИО - ЗАКОММЕНТИРОВАНО
import React from 'react'
import MainTitleText from "../components/utilities/MainTitleText"
import MainSubTitleText from '../components/utilities/MainSubTitleText'
import patternLeft from "../assets/images/portfolio/patternLeft.svg"
import patternRight from "../assets/images/portfolio/patternRight.svg"
import PortfolioSlider from '../components/PortfolioSlider'
import date from "../assets/images/portfolio/icons/date.svg"
import fuel from "../assets/images/portfolio/icons/fuel.svg"
import connect from "../assets/images/portfolio/icons/connect.svg"
import road from "../assets/images/portfolio/icons/road.svg"
import settings from "../assets/images/portfolio/icons/settings.svg"
import whatsApp from "../assets/images/portfolio/icons/whatsApp.svg"
import telegram from "../assets/images/portfolio/icons/telegram.svg"
import Car from "../assets/images/portfolio/car.png"
import MoreDetailsButton from '../components/Buttons/ MoreDetailsButton'
import PortfolioCards from '../components/PortfolioCards'
import BlurCenter from '../components/BlurCenter'
import Blur from '../components/Blur'

export default function PortfolioPageOld() {
    return (
        <div className="min-h-screen bg-[#030305] w-full overflow-x-hidden">
            <div className='py-30 relative xs:py-32 sm:py-40 md:py-45 lg:py-52 xl:py-56 2xl:py-60 w-full'>
                <section className='w-full'>
                    <BlurCenter />
                    <div className='flex justify-between items-center w-full px-4 md:px-8'>
                        <img src={patternLeft} alt="" className="w-[80px] h-[25px] xs:w-[100px] sm:h-[30px] sm:w-[150px] sm:h-[40px] md:w-[200px] md:h-[58px] lg:w-[300px] lg:h-[82px] xl:w-[410px] xl:h-[109px] 2xl:w-[490px] 2xl:h-[144px]" />
                        <MainTitleText>
                            top price
                        </MainTitleText>
                        <img src={patternRight} alt="" className="w-[80px] h-[30px] xs:w-[100px] sm:h-[30px] sm:w-[150px] sm:h-[40px] md:w-[200px] md:h-[58px] lg:w-[300px] lg:h-[82px] xl:w-[410px] xl:h-[109px] 2xl:w-[490px] 2xl:h-[144px]" />
                    </div>
                    <PortfolioSlider />

                    <div className='w-full mx-auto mt-4 xs:mt-6 sm:mt-8 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20'>
                        <div className='mx-auto flex lg:items-center flex-col lg:flex-row justify-between w-[90%] md:2xl:w-[95%] lg:2xl:w-[90%] xl:2xl:w-[80%] 2xl:w-[60%] text-white gap-4 md:gap-0'>
                            <div>
                                <p className='font-bold text-2xl md:text-4xl'>Mercedes-Benz S-klass</p>
                                <p className='text-xl md:text-4xl font-light mt-2'>E350 4MATIC Avant-GARDE</p>
                            </div>
                            <MoreDetailsButton />
                        </div>

                        <div className='bg-white/[0.03] w-[95%] xl:w-[90%] mx-auto px-4 md:px-8 py-4 mt-8 md:mt-15 rounded-lg'>
                            <div className='text-white grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-4'>
                                {[
                                    { icon: date, label: "Год", value: "2023" },
                                    { icon: fuel, label: "Топливо", value: "Бензин" },
                                    { icon: connect, label: "Привод", value: "Задний" },
                                    { icon: settings, label: "Трансмиссия", value: "Автоматическая" },
                                    { icon: road, label: "Пробег", value: "94 548 км" }
                                ].map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className='flex items-center lg:justify-center md:justify-start'>
                                            <div className='flex items-center'>
                                                <img src={item.icon} alt={item.label} className="w-8 h-8 md:w-10 md:h-10" />
                                                <div className='ml-3 md:ml-4'>
                                                    <p className='text-base md:text-lg font-light'>{item.label}</p>
                                                    <p className='text-lg md:text-xl font-bold'>{item.value}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {index < 4 && (
                                            <>
                                                <div className='hidden lg:block lg:h-[60px] lg:w-0.5 lg:bg-[#FFFFFF1A] lg:self-center'></div>
                                            </>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='relative mt-30 xs:mt-20 sm:mt-30 md:mt-40 lg:mt-50 xl:mt-55 2xl:mt-60 w-full mx-auto'>
                    <Blur />
                    <MainTitleText>
                        другие наши <span className="text-[#FF0000]">кейсы</span>
                    </MainTitleText>

                    <PortfolioCards />
                </section>

                <section className='relative mt-30 xs:mt-20 sm:mt-30 md:mt-40 lg:mt-50 xl:mt-55 2xl:mt-60 w-full mx-auto'>
                    <Blur />
                    <MainTitleText>
                        <span className="text-[#FF0000]">Закулисье </span>автоимпорта
                    </MainTitleText>

                    <MainSubTitleText className="mt-6 md:mt-10 text-center">
                        Следите за нашей работой в социальных сетях, <br className="hidden md:block" />
                        задавайте вопросы и обязательно подписывайтесь!
                    </MainSubTitleText>

                    <div className='flex justify-center mt-4 sm:mt-6 md:mt-8 xl:mt-10'>
                        <a href="https://t.me/+79151249545" target="_blank" className='mr-2 hover:opacity-80 transition duration-300'>
                            <img src={telegram} alt="Telegram" className="h-[35px] w-[35px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] 2xl:w-[65px] 2xl:h-[65px]" />
                        </a>
                        <a href="https://wa.me/79151249545" target="_blank" className='ml-2 hover:opacity-80 transition duration-300'>
                            <img src={whatsApp} alt="WhatsApp" className="h-[35px] w-[35px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] 2xl:w-[65px] 2xl:h-[65px]" />
                        </a>
                    </div>

                    <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-12 '>
                        <img className='mx-auto rounded-lg' src={Car} alt="Car showcase" />
                    </div>
                </section>
            </div>
        </div>
    )
}
*/