"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 sm:px-10 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-5 justify-center text-start mt-[100px] lg:mt-0">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 inline-block max-[479px]:text-white" />
          <h1 className="Welcome-text text-[13px] inline-block text-[#b49bff] font-normal max-[479px]:text-white max-[479px]:font-bold">
            Frontend Developer
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 max-w-[600px] w-auto h-auto"
        >
          <span
            className="
              font-bold text-white 
              text-4xl sm:text-[42px] md:text-[52px] xl:text-[60px] 2xl:text-[64px]
              leading-[1.2] sm:leading-[1.25] md:leading-[1.3] xl:leading-[1.35] 2xl:leading-[1.4]
            "
          >
            Your Vision, My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Next.js Expertise
            </span>
          </span>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-gray-400 my-5 max-w-full lg:max-w-[600px]
            leading-[1.5] sm:leading-[1.55] md:leading-[1.6] xl:leading-[1.65] 2xl:leading-[1.7]"
          style={{
            fontSize: "clamp(0.875rem, 1.4vw, 1.125rem)", // 14px–18px smoothly responsive
          }}
        >
          I&apos;m a Frontend Developer with 1.5+ years of experience building
          scalable websites and impactful software solutions. Take a look at my
          projects and skills.
        </motion.p>

        {/* Resume Button */}
        <motion.a
          onClick={() => {
            const projectSection = document.getElementById("projects");
            if (projectSection) {
              projectSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          variants={slideInFromLeft(1)}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
          className="py-3 text-center text-white cursor-pointer rounded-lg max-w-[170px] transition-transform duration-500 ease-in-out"
          style={{
            clipPath:
              "polygon(98.522% 2.534%, 7.143% 2.534%, .493% 25.096%, .493% 92.78%, 83.99% 92.78%, 86.453% 100%, 100% 100%, 100% 30.51%, 98.522% 25.096%, 98.522% 2.534%)",
            WebkitClipPath:
              "polygon(98.522% 2.534%, 7.143% 2.534%, .493% 25.096%, .493% 92.78%, 83.99% 92.78%, 86.453% 100%, 100% 100%, 100% 30.51%, 98.522% 25.096%, 98.522% 2.534%)",
            background: "linear-gradient(135deg, #3B82F6, #000000, #FACC15)",
            backgroundSize: "200% 100%",
            backgroundPosition: "left",
            transition:
              "background-position 0.5s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.5s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = "right";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = "left";
          }}
        >
          See project
        </motion.a>
      </div>

      {/* Hero Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex-1 w-full h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        <div className="relative w-full max-w-[650px] h-[400px] sm:h-[500px] lg:h-[650px]">
          <Image
            src="/hero-bg.svg"
            alt="work"
            fill
            className="object-contain select-none"
            draggable={false}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
