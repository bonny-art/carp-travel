import useFocusTrap from "@/hooks/useFocusTrap";
import content from "@/public/data/content.json";
import { useRef } from "react";
import { Link as NavLink } from "react-scroll";

type MobileMenuProps = {
  closeModal: () => void;
};

const MobileMenu = ({ closeModal }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useFocusTrap(menuRef, closeModal);

  return (
    <div
      ref={menuRef}
      className="bg-green-10/75 backdrop-blur-[50px] block top-0 left-0 bottom-0 right-0 fixed flexCenter z-20"
    >
      <button
        type="button"
        className="absolute top-[43px] right-5 transition-transform duration-300  group regular-14-auto-10 uppercase inline-block"
        onClick={closeModal}
      >
        {content.nav.button.close}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300" />
      </button>

      <ul className="flex-col justify-center items-center gap-12 inline-flex">
        {content.nav.links.map((link) => (
          <li key={link.key} className="group relative">
            <NavLink
              to={link.key}
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              onClick={closeModal}
              tabIndex={0}
              className="group cursor-pointer regular-18-auto-10"
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
