"use client";

import { ABOUT } from "@/constants";
import useResponsive from "@/hooks/useResponsive";

const About = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <section className=" py-14 md:py-16 lg:py-20 bg-about-xs md:bg-about-md lg:bg-about-lg  ">
      <div className="max-container padding-container overflow-hidden ">
        <div className="lg:p-6 flexStart flex-col gap-5 md:gap-16 lg:flex-row lg:gap-6">
          {isMobile && (
            <>
              <div className="flexStart flex-col gap-2">
                <h2 className="thin-40-56--4 uppercase">
                  {ABOUT.title.text}
                  <span className="font-medium ">{ABOUT.title.accent}</span>
                </h2>

                <div className="w-[180px] flexStart flex-col gap-5">
                  <p className="extraLight-14-20-0">
                    <span className="font-normal">
                      {ABOUT.description.firstAccent}
                    </span>
                    {ABOUT.description.firstText}
                  </p>

                  <p className="extraLight-14-20-0">
                    <span className="font-normal">
                      {ABOUT.description.secondAccent}
                    </span>
                    {ABOUT.description.secondText}
                  </p>
                </div>
              </div>

              <div className="w-[180px] self-end">
                <p className="regular-14-20-0 uppercase">
                  {ABOUT.slogan.first}
                </p>
                <p className="regular-14-20-0 uppercase text-end">
                  {ABOUT.slogan.second}
                </p>
                <p className="extraLight-14-20--1 text-end">
                  {ABOUT.slogan.third}
                </p>
              </div>

              <p className="extraLight-14-20-0">
                <span className="font-normal">
                  {ABOUT.description.thirdAccent}
                </span>
                {ABOUT.description.thirdText}
              </p>
            </>
          )}

          {isTablet && (
            <>
              <div className="flexStart gap-[76px]">
                <div className="flexBetween flex-col w-[408px]">
                  <h2 className="thin-67-auto--4 uppercase">
                    {ABOUT.title.text}
                    <span className="font-medium ">{ABOUT.title.accent}</span>
                  </h2>

                  <div className="w-[220px]">
                    <p className="regular-16-20-0 uppercase">
                      {ABOUT.slogan.first}
                    </p>
                    <p className="regular-16-20-0 uppercase text-end">
                      {ABOUT.slogan.second}
                    </p>
                    <p className="extraLight-16-20-2 text-end">
                      {ABOUT.slogan.third}
                    </p>
                  </div>
                </div>

                <div className="w-[220px] flexStart flex-col gap-4">
                  <p className="extraLight-16-20-0">
                    <span className="font-normal">
                      {ABOUT.description.firstAccent}
                    </span>
                    {ABOUT.description.firstText}
                  </p>
                  <p className="extraLight-16-20-0">
                    <span className="font-normal">
                      {ABOUT.description.secondAccent}
                    </span>
                    {ABOUT.description.secondText}
                  </p>
                </div>
              </div>

              <p className="extraLight-16-20-0">
                <span className="font-normal">
                  {ABOUT.description.thirdAccent}
                </span>
                {ABOUT.description.thirdText}
              </p>
            </>
          )}

          {isDesktop && (
            <>
              <div className="flexBetween flex-col">
                <h2 className="w-[606px] thin-98-auto--4 uppercase">
                  {ABOUT.title.text}

                  <span className="font-medium">{ABOUT.title.accent}</span>
                </h2>

                <p className="w-[606px] extraLight-18-24-0">
                  <span className="font-normal">
                    {ABOUT.description.thirdAccent}
                  </span>
                  {ABOUT.description.thirdText}
                </p>
              </div>

              <div className="w-full flexStart flex-col gap-[72px] lg:mt-4">
                <div className="w-[292px] flexStart flex-col gap-6">
                  <p className="extraLight-18-24-0">
                    <span className="font-normal">
                      {ABOUT.description.firstAccent}
                    </span>
                    {ABOUT.description.firstText}
                  </p>
                  <p className="extraLight-18-24-0">
                    <span className="font-normal">
                      {ABOUT.description.secondAccent}
                    </span>
                    {ABOUT.description.secondText}
                  </p>
                </div>

                <div className="self-end">
                  <p className="regular-18-24-0 uppercase">
                    {ABOUT.slogan.first}
                  </p>
                  <p className="regular-18-24-0 uppercase text-end">
                    {ABOUT.slogan.second}
                  </p>
                  <p className="extraLight-18-24-12 text-end">
                    {ABOUT.slogan.third}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
