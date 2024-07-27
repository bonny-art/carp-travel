import { NAV } from "@/constants";
import Link from "next/link";
import React from "react";

type MobileMenuProps = {
  closeModal: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ closeModal }) => {
  return (
    <div className="bg-green-10/75 backdrop-blur-[50px] block top-0 left-0 bottom-0 right-0 fixed flexCenter z-20   ">
      <button
        type="button"
        className="absolute top-[43px] right-5 transition-transform duration-300 focus:outline-none focus:ring-[1px] focus:ring-white/50 px-2
        regular-14-auto-10 uppercase"
        onClick={closeModal}
      >
        {NAV.button.close}
      </button>

      <ul className="flex-col justify-center items-center gap-12 inline-flex">
        {NAV.links.map((link) => (
          <li key={link.key} className="group relative">
            <Link
              className="group cursor-pointer regular-18-auto-10 focus:outline-none"
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
    </div>
  );
};

export default MobileMenu;
