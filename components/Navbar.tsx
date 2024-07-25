import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/constants";

const Navbar = () => {
  return (
    <nav className="max-container padding-container flexBetween py-9 bg-transparent relative z-10">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={61} height={34} />
      </Link>

      <ul className="hidden md:flex gap-6 lg:gap-14">
        {NAV.links.map((link) => (
          <li key={link.key}>
            <Link className="cursor-pointer regular-14-auto-10" href={link.key}>
              {link.label}
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
