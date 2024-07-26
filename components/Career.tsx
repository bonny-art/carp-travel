"use client";

import { ABOUT, CAREER } from "@/constants";
import useResponsive from "@/hooks/useResponsive";
import CareerForm from "./CareerForm";

const Career = () => {
  const { isMobile } = useResponsive();

  return (
    <section className=" md:py-16 lg:py-20 md:bg-career-md lg:bg-career-lg  ">
      {isMobile ? (
        <>
          <div className="py-14 bg-career-xs">
            <div className="outline outline-2 outline-red-400 max-container padding-container overflow-hidden flexStart flex-col gap-6">
              <h2 className="thin-40-56--4 uppercase">
                {CAREER.title.text}
                <span className="font-medium">{CAREER.title.accent}</span>
              </h2>

              <div className="flexStart flex-col gap-9">
                <div className="flexStart flex-col gap-9 w-[179px] self-end">
                  <p className="extraLight-14-20-0">{CAREER.description}</p>

                  <h3 className="extraLight-30-auto-0 uppercase">
                    {CAREER.subtitle}
                  </h3>
                </div>

                <ul className="flexStart flex-col gap-4 w-[181px]">
                  {CAREER.list.map((item, index) => (
                    <li key={index} className="text-end">
                      <h4 className="regular-14-20-0 mb-2">{item.title}</h4>
                      <p className="extraLight-12-20-0">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="py-14 bg-career-xs">
            <div className="outline outline-2 outline-red-400 max-container padding-container overflow-hidden flexStart flex-col gap-6 ">
              <p className="extraLight-14-20-0 w-[179px] self-end">
                {CAREER.slogan.first}
                <br /> {CAREER.slogan.second}
              </p>
              <CareerForm />
            </div>
          </div>
        </>
      ) : (
        <div className="outline outline-2 outline-red-400 max-container padding-container overflow-hidden">
          <div className="lg:p-6 flexStart flex-col gap-[5px]">
            <div className="flexBetween">
              <h2 className="thin-67-auto--4 lg:thin-98-auto--4 uppercase">
                {CAREER.title.text}
                <span className="font-medium">{CAREER.title.accent}</span>
              </h2>

              <p className="extraLight-13-20-0 lg:extraLight-18-24-0 w-[221px] lg:w-[293px] lg:mt-4 text-justify">
                {CAREER.description}
              </p>
            </div>

            <div className="grid grid-cols-[221px,463px] lg:grid-cols-[602px,606px] lg:grid-rows-[72px,1fr] gap-x-5 gap-y-14 lg:gap-x-6 lg:gap-y-[14px]">
              <div className="flexStart flex-col gap-9 text-end">
                <h3 className="extraLight-30-auto-0 lg:extraLight-36-39-0 uppercase lg:w-[293px] self-start">
                  {CAREER.subtitle}
                </h3>
              </div>

              <ul className="flexStart flex-col gap-6 col-start-1 row-start-2">
                {CAREER.list.map((item, index) => (
                  <li key={index} className="text-end lg:flexBetween">
                    <h4 className="regular-16-20-0 lg:regular-18-24-0 mb-2 lg:w-[293px]">
                      {item.title}
                    </h4>
                    <p className="extraLight-12-20-0 lg:extraLight-12-24-0 lg:w-[285px] lg:text-start">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="flexStart flex-col gap-9 lg:gap-[14px] col-start-2 row-start-2 lg:row-start-1 lg:row-span-2">
                <p className="extraLight-14-20-0 lg:extraLight-18-24-0 w-[221px] lg:w-[234px]">
                  {CAREER.slogan.first}
                  <br /> {CAREER.slogan.second}
                </p>
                <CareerForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Career;
