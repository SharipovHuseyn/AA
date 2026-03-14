import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import React, { useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react"; // переименовали здесь

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper as SwiperType } from "swiper";

export default function ImageSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full max-w-[665px] mx-auto">
      <SwiperComponent
        style={{
          "--swiper-navigation-size": "25px",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt=""
              className="w-full h-full object-cover rounded-[15px]"
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      
      <div className="w-full mt-3">
        <SwiperComponent
          onSwiper={setThumbsSwiper}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
          className="w-full"
          slidesPerView="auto"
          spaceBetween={8}
          centerInsufficientSlides={true}
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "calc(25% - 6px)" }}
            >
              <div className="w-full h-[80px] sm:h-[100px] lg:h-[120px]">
                <img
                  src={item}
                  alt=""
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
}
