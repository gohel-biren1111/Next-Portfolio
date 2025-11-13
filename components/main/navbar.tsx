"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[80px] fixed top-0 shadow-lg shadow-[#FEF62C]/20 bg-[#03001427] backdrop-blur-md z-50 px-4 lg:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Profile Picture + Name */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Profilepicture.png"
            alt="Profile Picture"
            width={40}
            height={40}
            draggable={false}
            className="cursor-pointer rounded-full"
          />
          <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-100">
            Biren Gohel
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between mr-0 lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

            {/* Source Code */}
            {/* <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Source Code
            </Link> */}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-[#030014] flex flex-col items-center text-gray-300 md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 p-5"
            : "max-h-0 opacity-0 p-0"
        }`}
      >
        {/* Links */}
        <div
          className={`flex flex-col items-center gap-4 transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.title}
              href={link.link}
              className={`cursor-pointer hover:text-[rgb(112,66,248)] transition-all duration-300 text-center transform hover:scale-105 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div
          className={`flex justify-center gap-6 mt-6 transition-all duration-500 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
        >
          {SOCIALS.map(({ link, name, icon: Icon }, index) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className={`transform hover:scale-110 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${400 + index * 100}ms`
                  : "0ms",
              }}
            >
              <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
