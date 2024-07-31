import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import content from "@/public/data/content.json";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useRef, useState } from "react";

import { Swiper as SwiperType } from "swiper";
import { formatSlideNumber } from "@/helpers/formatSlideNumber";
import { formatSlideName } from "@/helpers/formatText";
import { getMarginBottomValue } from "@/helpers/getMarginBottomValue";

const ServicesSwiper = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const swiperRef = useRef<SwiperType | null>(null);

  const handleBulletClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
          bulletClass: "services-pagination-bullet",
          bulletActiveClass: "services-pagination-bullet-active",
        }}
        loop={true}
        modules={[EffectFade, Pagination]}
        className="mySwiper w-full h-full"
      >
        {content.services.slides.content.map((item, index) => (
          <SwiperSlide
            key={item.title}
            className={`w-full bg-services-${formatSlideNumber(
              index + 1
            )}-xs py-14 md:py-16 lg:py-20`}
          >
            <div className="h-full container md:relative lg:py-6">
              <div className="flexBetween flex-col h-full md:w-[221px] lg:w-[605px] md:ml-auto">
                <p
                  className={`mt-[78px] md:mt-0 thin-43-auto-0 md:thin-67-78-0 lg:thin-98-auto-0 self-end lg:self-start mb-4 md:mb-[237px] ${getMarginBottomValue(
                    activeIndex
                  )}`}
                >
                  {formatSlideNumber(index + 1)}/
                  <span className="text-white/20">
                    {formatSlideNumber(content.services.slides.content.length)}
                  </span>
                </p>

                <div className="w-full md:w-[463px] lg:w-[607px] h-[213px] md:h-[370px] lg:h-[429px] mb-3 self-center shadow-services-slide-shadow md:absolute md:top-[118px] md:left-8 lg:top-[166px] lg:left-6">
                  <Image
                    src={`/img-servicer-${formatSlideNumber(index + 1)}.jpg`}
                    alt={item.title}
                    width={560}
                    height={426}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="extraLight-12-24-20 self-end mb-auto lg:w-[293px]">
                  {item.slogan}
                </p>

                <p className="extraLight-14-20-0 md:extraLight-13-20-0 lg:extraLight-18-24-0 lg:w-[293px] lg:self-end md:text-justify ">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="services-pagination">
        {content.services.slides.list.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`services-pagination-bullet ${
              index === activeIndex ? "services-pagination-bullet-active" : ""
            } group relative inline-block`}
            onClick={() => handleBulletClick(index)}
          >
            {index === activeIndex && (
              <Image
                src="/services-active.svg"
                alt="Active pagination bullet"
                width={9}
                height={9}
              />
            )}
            {formatSlideName(item)}
            <span
              className="absolute -bottom-1 left-0 w-full h-[1px] bg-white
                transform scale-x-0 group-focus:scale-x-100 transition-transform duration-300"
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ServicesSwiper;
