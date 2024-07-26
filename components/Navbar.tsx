import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/constants";

const Navbar = () => {
  return (
    <nav
      className="max-container padding-container flexBetween 
    py-9
    md:pt-6 md:pb-[60px]
    lg:pb-[46px]
    bg-transparent relative z-10"
    >
      <Link
        href="/"
        className="group transition-transform duration-300 hover:scale-110 focus:scale-110 focus:outline-none "
      >
        <Image src="/logo.svg" alt="logo" width={61} height={36} />
        <span
          className="absolute -bottom-1 left-0 w-full h-[1px] bg-white
                transform scale-x-0 group-focus:scale-x-100 transition-transform duration-300"
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

      <button className="uppercase md:hidden regular-14-auto-10">
        {NAV.button.text}
      </button>
    </nav>
  );
};

export default Navbar;
