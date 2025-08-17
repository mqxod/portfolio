"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";

const NAV_LINKS = [
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" }
];

const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/maqsood.__.1/"
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100077402168618"
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/maqsood_ahmed_1"
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0  bg-[#03001427] backdrop-blur-md px-10 border-b border-slate-700 ">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-10">
        {/* Logo + Name */}
        <Link href="#about" className="flex items-center">
          <div className="hidden text-2xl font-bold md:flex md:selffont-bold ml-[10px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border-5 p-1 border-[rgba(112,66,248,0.38)]">
            MA
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-2 border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map(link =>
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] hover:text-bold transition"
              >
                {link.title}
              </Link>
            )}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) =>
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white hover:scale-125" />
            </Link>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl cursor-pointer hover:text-[rgb(112,66,248)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen
            ? <RxCross2 className="text-red-500" />
            : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
        <div className="top-[65px] left-0 w-full min-h-screen bg-[#030014] p-8 flex flex-col items-center text-gray-300 md:hidden ">
          {/* Links */}
          <div className="flex flex-col items-center gap-8">
            {NAV_LINKS.map(link =>
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer w-100 h-[20] hover:text-[rgb(112,66,248)] transition text-center  border-2 border-amber-600 rounded-full hover:bg-amber-300 hover:text-white p-4 text-2xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) =>
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white hover:scale-150" />
              </Link>
            )}
          </div>
        </div>}
    </div>
  );
};

export default Navbar;
