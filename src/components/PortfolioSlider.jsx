import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import CarFoto from "../assets/images/portfolio/buggati.jpg"
import SlidePicture from "../assets/images/portfolio/slidePicture.png"

import 'swiper/css';
import 'swiper/css/navigation';

const PortfolioSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    { id: 1, image: SlidePicture},
    { id: 2, image: CarFoto},
    { id: 3, image: SlidePicture},   
    { id: 4, image: SlidePicture},
    { id: 5, image: CarFoto},
    { id: 6, image: SlidePicture},
  ];

  return (
    <div className="w-[95%] mx-auto px-4 mt-6 sm:xl:mt-8 md:mt-10 xl:mt-15">
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[170px] xs:h-[200px] sm:h-[400px] md:h-[500px] xl:h-[600px]">
                <img
                  src={slide.image}
                  alt="slide"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white p-6 max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-lg sm:text-xl">
                      {slide.desc}
                    </p>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
          
          {/* Кнопки навигации Swiper */}
          <div className="swiper-button-prev !w-10 !h-10 sm:!w-12 sm:!h-12 !text-white !bg-black/30 hover:!bg-black/50 rounded-full after:!text-xl"></div>
          <div className="swiper-button-next !w-10 !h-10 sm:!w-12 sm:!h-12 !text-white !bg-black/30 hover:!bg-black/50 rounded-full after:!text-xl"></div>
        </Swiper>

        {/* 6 горизонтальных индикаторов */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 xs:mt-4  sm:mt-6 md:mt-8 xl:mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`
                h-1 sm:h-1
                transition-all duration-300
                ${activeIndex === index 
                  ? 'bg-red-600 w-15 xs:w-18 sm:w-20 md:w-30 xl:w-25' 
                  : 'border-1 border-red-600 w-15 xs:w-18 sm:w-20 md:w-30 xl:w-25 hover:border-gray-400'
                }
              `}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.swiper.slideTo(index);
                }
              }}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default PortfolioSlider;