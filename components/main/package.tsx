"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { PACKAGES } from "@/constants";

export const Package = () => {
  return (
    <div id="package">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col items-center justify-center py-0"
      >
        {/* Heading Animation */}
        <motion.h2
          variants={slideInFromTop}
          className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
        >
          My NPM Packages
        </motion.h2>

        {/* Packages Grid */}
        <div className="flex flex-wrap gap-10 justify-center mb-[60px]">
          {PACKAGES.map((pkg, index) => (
            <motion.a
              key={index}
              href={pkg.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card cursor-pointer w-[300px] sm:w-[350px]">
                <div className="relative bg-black aspect-video flex items-center justify-center group transition-all duration-700">
                  {/* Card Content */}
                  <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                      {pkg.title}
                    </p>
                    <p className="px-10 text-[10px] sm:text-[12px] text-gray-700 text-center">
                      {pkg.description}
                    </p>
                    <p className="font-sans text-[10px] text-gray-700 pt-5 hover:underline">
                      SEE NOW
                    </p>
                  </div>

                  {/* Hover Layers */}
                  <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
                  <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
                  <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
                  <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
