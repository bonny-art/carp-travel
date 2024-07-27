import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SERVICES } from "@/constants";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useRef, useState } from "react";

import { Swiper as SwiperType } from "swiper";

const formatNumber = (number: number): string => {
  return number.toString().padStart(2, "0");
};

const formatText = (text: string) => {
  if (text === "Hot air ballooning") {
    return (
      <>
        Hot air
        <br />
        ballooning
      </>
    );
  }
  return text;
};

const getMarginBottom = (activeIndex: number) => {
  const margins = [15, 63, 111, 183, 231];
  const margin = margins[activeIndex] || 15;
  return `lg:mb-[${margin}px]`;
};

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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
        {SERVICES.slides.content.map((item, index) => (
          <SwiperSlide
            key={item.title}
            className={`w-full bg-services-${formatNumber(
              index + 1
            )}-xs py-14 md:py-16 lg:py-20`}
          >
            <div className="outline outline-2 outline-red-400 h-full max-container padding-container overflow-hidden">
              <div className="lg:p-6 h-full md:relative">
                <div className="flexBetween flex-col h-full md:w-[221px] lg:w-[605px] md:ml-auto">
                  <p
                    className={`mt-[78px] md:mt-0 thin-43-auto-0 md:thin-67-78-0 lg:thin-98-auto-0 self-end lg:self-start mb-4 md:mb-[237px] ${getMarginBottom(
                      activeIndex
                    )}`}
                  >
                    {formatNumber(index + 1)}/
                    <span className="text-white/20">
                      {formatNumber(SERVICES.slides.content.length)}
                    </span>
                  </p>

                  <div className="w-full md:w-[463px] lg:w-[607px] h-[213px] md:h-[370px] lg:h-[429px] mb-3 self-center shadow-slide-shadow md:absolute md:top-[118px] md:left-0 lg:top-[166px] lg:left-6">
                    <Image
                      src={`/img-servicer-${formatNumber(index + 1)}.jpg`}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="services-pagination">
        {SERVICES.slides.list.map((item, index) => (
          <button
            key={index}
            className={`services-pagination-bullet ${
              index === activeIndex ? "services-pagination-bullet-active" : ""
            }`}
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
            {formatText(item)}
          </button>
        ))}
      </div>
    </>
  );
};

export default ServicesSwiper;
