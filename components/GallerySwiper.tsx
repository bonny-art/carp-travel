"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import content from "@/public/data/content.json";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";

const GallerySwiper = () => {
  const { isTablet, isDesktop } = useResponsive();
  const scale = isTablet ? 0.2916 : 0.5165;
  const stretch = isTablet ? 124 : 123;

  return (
    (isTablet || isDesktop) && (
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: stretch,
            depth: 0,
            modifier: 1,
            scale: scale,
          }}
          navigation={{
            nextEl: ".galley-swiper-button-next",
            prevEl: ".galley-swiper-button-prev",
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper w-full h-[294px] lg:h-[429px]"
        >
          {content.gallery.images.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="!w-[415px] lg:!w-[606px] h-[294px] lg:h-[429px] bg-center bg-cover"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={isTablet ? 415 : 606}
                height={isTablet ? 294 : 429}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-controller absolute bottom-[17px] lg:bottom-6 left-1/2 transform -translate-x-[50%] z-10 flexBetween w-[629px] lg:w-[1232px]">
          <div className="w-[85px] lg:w-[289px] flex justify-end">
            <button
              type="button"
              className="galley-swiper-button-prev thin-33-auto-0 uppercase inline-flex focus:outline-none group relative"
            >
              {content.gallery.buttons.prev}
              <span
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-white
                transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"
              />
            </button>
          </div>
          <div className="w-[85px] lg:w-[289px] flex justify-start">
            <button
              type="button"
              className="galley-swiper-button-next thin-33-auto-0 uppercase inline-flex focus:outline-none group relative"
            >
              {content.gallery.buttons.next}
              <span
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-white
                transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default GallerySwiper;
