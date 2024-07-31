"use client";

import content from "@/public/data/content.json";
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import GallerySwiper from "./GallerySwiper";

const Gallery = () => {
  const { isMobile } = useResponsive();

  return (
    <section
      id="gallery"
      className=" py-14 md:py-16 lg:py-20 bg-gallery-xs md:bg-gallery-md lg:bg-gallery-lg  "
    >
      <div className="container overflow-hidden lg:py-6 lg:px-0 flexStart flex-col gap-6 md:gap-[72px] lg:gap-6 relative">
        <h2 className="thin-67-auto--4 lg:thin-98-auto--4 lg:ml-6 uppercase">
          {content.gallery.title.text}
          <span className="font-medium">{content.gallery.title.accent}</span>
        </h2>
        {isMobile ? (
          <div className="flexStart flex-col gap-6">
            {content.gallery.images.slice(0, 3).map((slide) => (
              <div key={slide.src}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={280}
                  height={187}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <GallerySwiper />
        )}
      </div>
    </section>
  );
};

export default Gallery;
