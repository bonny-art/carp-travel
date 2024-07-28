import { NAV } from "@/constants";
import Link from "next/link";
import { Link as NavLink } from "react-scroll";

type MobileMenuProps = {
  closeModal: () => void;
};

const MobileMenu = ({ closeModal }: MobileMenuProps) => {
  return (
    <div className="bg-green-10/75 backdrop-blur-[50px] block top-0 left-0 bottom-0 right-0 fixed flexCenter z-20   ">
      <button
        type="button"
        className="absolute top-[43px] right-5 transition-transform duration-300  focus:outline-none group regular-14-auto-10 uppercase"
        onClick={closeModal}
      >
        {NAV.button.close}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white       transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300" />
      </button>

      <ul className="flex-col justify-center items-center gap-12 inline-flex">
        {NAV.links.map((link) => (
          <li key={link.key} className="group relative">
            <NavLink
              to={link.key}
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              onClick={closeModal}
              className="group cursor-pointer regular-18-auto-10 focus:outline-none"
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
    </div>
  );
};

export default MobileMenu;
