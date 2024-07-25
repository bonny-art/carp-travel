"use client";

import { HERO } from "@/constants";
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type IconSize = "sm" | "md" | "lg";

const Hero = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [iconSize, setIconSize] = useState<IconSize>("sm");

  useEffect(() => {
    if (isDesktop) {
      setIconSize("lg");
    } else if (isTablet) {
      setIconSize("md");
    } else {
      setIconSize("sm");
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <section className=" pb-14 md:pb-16 lg:pb-20 bg-hero-xs sm+:bg-hero-sm md+:bg-hero-md lg+:bg-hero-lg -mt-[105px] pt-[105px] md:-mt-[121px] md:pt-[121px] lg:-mt-[106px] lg:pt-[106px]">
      <div className="outline outline-2 outline-red-400 max-container padding-container flexBetween flex-col md:flex-row gap-6 md:justify-between overflow-hidden ">
        {isMobile && (
          <>
            <div className="self-end uppercase">
              <div className="flexStart">
                <p className="medium-37-auto-0 ">{HERO.subtitle.accent}</p>
                <p className="thin-37-auto-4_5">{HERO.subtitle.big}</p>
              </div>
              <p className="light-12-auto-79 -mt-3">{HERO.subtitle.small}</p>
            </div>

            <h1 className="thin-40-56--4 uppercase">
              <span className="medium-40-56--4">{HERO.title.accent}</span>
              {HERO.title.text}
            </h1>

            <p className="extraLight-10-16-0 w-[157px] break-words">
              {HERO.places}
            </p>

            <p className="extraLight-14-20-0 text-justify">
              {HERO.description}
            </p>

            <Link
              href="contacts"
              className="bold-18-48-0 inline-flex w-full justify-between items-center bg-white-10 uppercase"
            >
              <Image
                src={`/btn-${iconSize}-left.svg`}
                alt="button-frame"
                width={42}
                height={53}
              />
              {HERO.button.label}
              <Image
                src={`/btn-${iconSize}-right.svg`}
                alt="button-frame"
                width={42}
                height={53}
              />
            </Link>
          </>
        )}

        {!isMobile && (
          <>
            <div className="w-[426px] lg:w-[646px] flexBetween flex-col">
              <h1 className="w-full thin-67-auto--4 lg:thin-98-auto--4 uppercase">
                <span className="font-medium">{HERO.title.accent}</span>
                {HERO.title.text}
              </h1>

              <p className="extraLight-14-16-9 lg:extraLight-16-24-9 w-[263px] lg:w-full break-words">
                {HERO.places}
              </p>
            </div>

            <div className="w-[230px] lg:w-[305px]">
              <div className="self-end uppercase mb-14 lg:mb-[181px]">
                <div className="flexStart">
                  <p className="medium-67-auto-0 lg:medium-98-auto-0">
                    {HERO.subtitle.accent}
                  </p>
                  <p className="thin-67-auto-13 lg:thin-98-auto-0">
                    {HERO.subtitle.big}
                  </p>
                </div>
                <p className="light-14-auto-185 lg:light-16-auto-228 -mt-6">
                  {HERO.subtitle.small}
                </p>
              </div>

              <p className="extraLight-16-20-0 lg:extraLight-18-24-0 text-justify mb-7">
                {HERO.description}
              </p>

              <Link
                href="contacts"
                className="bold-18-auto-bold lg:bold-32-auto-0 inline-flex w-full justify-between items-center bg-white-10 uppercase"
              >
                <Image
                  src={`/btn-${iconSize}-left.svg`}
                  alt="button-frame"
                  width={42}
                  height={53}
                />
                {HERO.button.label}
                <Image
                  src={`/btn-${iconSize}-right.svg`}
                  alt="button-frame"
                  width={42}
                  height={53}
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
