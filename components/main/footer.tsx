"use client";
import Link from "next/link";
import { FOOTER_DATA, FOOTER_NAV_LINKS } from "@/constants";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-16 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Branding */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center">
            <h2 className="text-xl 2xl:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text md:text-left">
              Biren Gohel
            </h2>
          </Link>

          <p className="text-gray-400 text-center md:text-left text-xs 2xl:text-sm">
            Building modern and unique web applications.
          </p>
        </div>

        {/* Footer Columns */}
        {FOOTER_DATA.map((column) => (
          <div
            key={column.title}
            className="flex flex-col items-center md:items-center"
          >
            <h3 className="font-semibold text-sm 2xl:text-base mb-4">
              {column.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {column.data.map(({ icon: Icon, name, link }) => (
                <li key={`${column.title}-${name}`}>
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-xs 2xl:text-sm"
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />}
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Quick Links */}
        <div className="col-span-1 flex flex-col items-center md:items-center">
          <h3 className="font-semibold text-sm 2xl:text-base mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {FOOTER_NAV_LINKS.map(({ title, link, icon: Icon }) => (
              <>
                <li key={`quick-${title}`}>
                  <Link
                    href={link}
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-xs 2xl:text-sm"
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />}
                    <span>{title}</span>
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#A855F7]/30"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-gray-400 text-[10px] 2xl:text-xs">
          &copy; {new Date().getFullYear()} Biren Gohel. All rights reserved.
        </span>
        <motion.div className="flex items-center text-[10px] 2xl:text-xs">
          <span>Made with</span>
          <motion.span
            className="mx-1 text-red-500"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0],
              color: ["#ff4444", "#d9fb06", "#ff4444"],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <FaHeart />
          </motion.span>
          <span>by Biren Gohel</span>
        </motion.div>
      </div>
    </footer>
  );
};
