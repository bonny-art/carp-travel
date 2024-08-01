"use client";

import content from "@/public/data/content.json";
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import Link from "next/link";
import { Link as NavLink } from "react-scroll";
import { useEffect, useState } from "react";

type IconSize = "sm" | "md" | "lg" | "";

const Hero = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [iconSize, setIconSize] = useState<IconSize>("");

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
    <section
      id="hero"
      className=" pb-14 md:pb-16 lg:pb-20 
    bg-hero-xs md:bg-hero-md lg:bg-hero-lg
    -mt-[108px] pt-[108px]
    md:-mt-[120px] md:pt-[120px]
    lg:-mt-[106px] lg:pt-[106px]"
    >
      <div className="container overflow-hidden flexBetween flex-col md:flex-row gap-6 md:justify-between lg:py-6">
        {isMobile && iconSize && (
          <>
            <div className="self-end uppercase">
              <div className="flexStart">
                <p className="medium-37-auto-0 ">
                  {content.hero.subtitle.accent}
                </p>
                <p className="thin-37-auto-4_5">{content.hero.subtitle.big}</p>
              </div>
              <p className="light-12-auto-79 -mt-3">
                {content.hero.subtitle.small}
              </p>
            </div>

            <h1 className="thin-40-56--4 uppercase">
              <span className="font-medium">{content.hero.title.accent}</span>
              {content.hero.title.text}
            </h1>

            <p className="extraLight-10-16-0 w-[157px] break-words">
              {content.hero.places}
            </p>

            <p className="extraLight-14-20-0 text-justify">
              {content.hero.description}
            </p>

            <NavLink
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              tabIndex={0}
              className="bold-18-48-0 inline-flex w-full justify-between items-center uppercase bg-white/10 hover:bg-white/20 focus:bg-white/20 cursor-pointer"
            >
              <Image
                src={`/btn-${iconSize}-left.svg`}
                alt="button-frame"
                width={content.hero.button.iconSize.sm.width}
                height={content.hero.button.iconSize.sm.height}
              />
              {content.hero.button.label}
              <Image
                src={`/btn-${iconSize}-right.svg`}
                alt="button-frame"
                width={content.hero.button.iconSize.sm.width}
                height={content.hero.button.iconSize.sm.height}
              />
            </NavLink>
          </>
        )}

        {!isMobile && iconSize && (
          <>
            <div className="w-[426px] lg:w-[646px] flexBetween flex-col">
              <h1 className="w-full thin-67-auto--4 lg:thin-98-auto--4 uppercase">
                <span className="font-medium">{content.hero.title.accent}</span>
                {content.hero.title.text}
              </h1>

              <p className="extraLight-14-16-9 lg:extraLight-16-24-9 w-[263px] lg:w-full break-words">
                {content.hero.places}
              </p>
            </div>

            <div className="w-[230px] lg:w-[305px]">
              <div className="self-end uppercase mb-14 lg:mb-[181px]">
                <div className="flexStart">
                  <p className="medium-67-auto-0 lg:medium-98-auto-0">
                    {content.hero.subtitle.accent}
                  </p>
                  <p className="thin-67-auto-13 lg:thin-98-auto-0">
                    {content.hero.subtitle.big}
                  </p>
                </div>
                <p className="light-14-auto-185 lg:light-16-auto-228 -mt-[15px]">
                  {content.hero.subtitle.small}
                </p>
              </div>

              <p className="extraLight-16-20-0 lg:extraLight-18-24-0 text-justify mb-7">
                {content.hero.description}
              </p>

              <NavLink
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
                tabIndex={0}
                className="bold-18-auto-bold lg:bold-32-auto-0 inline-flex w-full justify-between items-center uppercase bg-white/10 hover:bg-white/20 focus:bg-white/20"
              >
                <Image
                  src={`/btn-${iconSize}-left.svg`}
                  alt="button-frame"
                  width={
                    iconSize === "md"
                      ? content.hero.button.iconSize.md.width
                      : content.hero.button.iconSize.lg.width
                  }
                  height={
                    iconSize === "md"
                      ? content.hero.button.iconSize.md.height
                      : content.hero.button.iconSize.lg.height
                  }
                />
                {content.hero.button.label}
                <Image
                  src={`/btn-${iconSize}-right.svg`}
                  alt="button-frame"
                  width={
                    iconSize === "md"
                      ? content.hero.button.iconSize.md.width
                      : content.hero.button.iconSize.lg.width
                  }
                  height={
                    iconSize === "md"
                      ? content.hero.button.iconSize.md.height
                      : content.hero.button.iconSize.lg.height
                  }
                />
              </NavLink>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
