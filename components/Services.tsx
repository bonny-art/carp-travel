"use client";

import { SERVICES } from "@/constants";
import ServicesSwiper from "./ServicesSwiper";

const Services = () => {
  return (
    <section className="relative h-[851px] md:h-[621px] lg:h-[779px]">
      <h2 className="absolute z-10 top-[54px] md:top-[65px] lg:top-[104px] left-5 sm:left-1/2 sm:transform sm:-translate-x-[220px] md:-translate-x-[352px] lg:-translate-x-[592px] thin-40-56--4 md:thin-67-auto--4 lg:thin-98-auto--4 uppercase">
        {SERVICES.title.text}
        <span className="font-medium">{SERVICES.title.accent}</span>
      </h2>

      <ServicesSwiper />
    </section>
  );
};

export default Services;
