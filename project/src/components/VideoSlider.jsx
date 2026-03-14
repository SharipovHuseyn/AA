import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import FsLightbox from 'fslightbox-react';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import video1 from "../video/reviews/reviews1.webm";
import video2 from "../video/reviews/reviews2.webm";
import video3 from "../video/reviews/reviews3.webm";
import video4 from "../video/reviews/reviews4.webm";
import video5 from "../video/reviews/reviews5.webm";
import video6 from "../video/reviews/reviews6.webm";
import video7 from "../video/reviews/reviews7.webm";

// Импорт иконок (создайте папку public/icons или используйте другие источники)
import playIcon from '../assets/images/about/play.svg';
import arrowIcon from '../assets/images/about/arrow.png';

export default function VideoSlider() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  const videos = [
    {
      id: 1,
      src: video1,
      title: "Maybach"
    },
    {
      id: 2,
      src: video2,
      title: "BMW"
    },
    {
      id: 3,
      src: video3,
      title: "Genesis"
    },
    {
      id: 4,
      src: video4,
      title: "Mercedes-Benz"
    },
    {
      id: 5,
      src: video5,
      title: "Hyundai"
    },
    {
      id: 6,
      src: video6,
      title: "Mercedes-Benz"
    },
    {
      id: 7,
      src: video7,
      title: "Mercedes-Benz"
    }
  ];

  const openLightboxOnSlide = (slideIndex) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slideIndex
    });
  };

  return (
    <section className="relative py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Слайдер */}
        <div className="reviews-slider relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: '.reviews-slider__prev',
              nextEl: '.reviews-slider__next',
            }}
            pagination={{
              clickable: true,
              el: '.reviews-slider__paginationWrapper',
              bulletClass: 'reviews-slider__pagination',
              bulletActiveClass: 'reviews-slider__pagination_active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="reviews-swiper"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <div 
                  className="reviews-slider__block group cursor-pointer relative rounded-xl overflow-hidden"
                  onClick={() => openLightboxOnSlide(index + 1)}
                >
                  {/* Видео превью */}
                  <video
                    className="reviews-slider__video w-[100%] h-[60vh] object-cover"
                    playsInline
                    preload="metadata"
                  >
                    <source src={`${video.src}#t=0.001`} type="video/webm" />
                  </video>
                  
                  {/* Затемнение при наведении */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Название видео */}
                  <p className="reviews-slider__title bg-[#ffffff22] backdrop-blur-md p-2 rounded-[10px]  absolute bottom-4 right-4 text-white text-[20px] font-bold z-10">
                    {video.title}
                  </p>
                  
                  {/* Иконка Play */}
                  <div className="reviews-slider__playIcon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300">
                    <img 
                      src={playIcon} 
                      alt="playIcon" 
                      width={58} 
                      height={58}
                      className="w-[40px] h-auto"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кнопки навигации */}
          <button className="reviews-slider__prev backdrop-blur-md absolute left-0 top-1/2 -translate-y-1/2 z-20  w-15 h-15 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 -ml-5">
            <img 
              src={arrowIcon} 
              alt="arrow prev" 
              width={22} 
              height={40}
              className="transform rotate-180"
            />
          </button>
          
          <button className="reviews-slider__next backdrop-blur-md absolute right-0 top-1/2 -translate-y-1/2 z-20 w-15 h-15 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 -mr-5">
            <img 
              src={arrowIcon} 
              alt="arrow next" 
              width={22} 
              height={40}
            />
          </button>

          {/* Пагинация */}
          <div className="reviews-slider__paginationWrapper flex justify-center gap-2 mt-8" />
        </div>
      </div>

      {/* FsLightbox для просмотра видео */}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={videos.map(v => v.src)}
        slide={lightboxController.slide}
        type="video"
        autoplay
        videos={videos.map(v => ({
          src: v.src,
          type: 'video/webm'
        }))}
      />
    </section>
  );
}