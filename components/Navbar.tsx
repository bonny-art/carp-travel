"use client";

import Image from "next/image";
import Link from "next/link";
import content from "@/public/data/content.json";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { Link as NavLink } from "react-scroll";

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
          aria-label="Homepage"
          className="group relative transition-transform duration-300 hover:scale-110 focus:scale-110 focus:outline-none "
        >
          <Image src="/logo.svg" alt="logo" width={61} height={36} />
          <span
            className="absolute -bottom-1 left-0 w-full h-[1px] bg-white
                transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"
          />
        </Link>

        <ul className="hidden md:flex gap-6 lg:gap-14">
          {content.nav.links.map((link) => (
            <li key={link.key} className="group relative self-end">
              <NavLink
                to={link.key}
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
                className="group cursor-pointer regular-14-auto-10 focus:outline-none"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-white
                transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {!isModalOpened && (
          <button
            type="button"
            area-label="menu"
            className="uppercase md:hidden regular-14-auto-10 inline-block"
            onClick={openModal}
          >
            {content.nav.button.menu}
          </button>
        )}

        {isModalOpened && <MobileMenu closeModal={closeModal} />}
      </div>
    </nav>
  );
};

export default Navbar;
