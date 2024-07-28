"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/constants";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up function to remove the style when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpened]);

  return (
    <nav
      className="max-container padding-container 
    bg-transparent relative z-10"
    >
      <div className="flexBetween py-9 md:pt-6 md:pb-[60px] lg:pb-[46px] lg:px-6">
        <Link
          href="/"
          className="group relative transition-transform duration-300 hover:scale-110 focus:scale-110 focus:outline-none "
        >
          <Image src="/logo.svg" alt="logo" width={61} height={36} />
          <span
            className="absolute -bottom-1 left-0 w-full h-[1px] bg-white
                transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"
          />
        </Link>

        <ul className="hidden md:flex gap-6 lg:gap-14">
          {NAV.links.map((link) => (
            <li key={link.key} className="group relative self-end">
              <Link
                className="group cursor-pointer regular-14-auto-10 focus:outline-none"
                href={link.key}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-white
                transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>

        {!isModalOpened && (
          <button
            type="button"
            className="uppercase md:hidden regular-14-auto-10"
            onClick={openModal}
          >
            {NAV.button.menu}
          </button>
        )}

        {isModalOpened && <MobileMenu closeModal={closeModal} />}
      </div>
    </nav>
  );
};

export default Navbar;
