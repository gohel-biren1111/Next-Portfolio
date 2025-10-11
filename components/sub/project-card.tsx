"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  buttonText?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  buttonText = "View Project",
}: ProjectCardProps) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition-transform duration-500 hover:scale-[0.95] flex flex-col">
        {/* Image */}
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-70 object-contain"
        />

        {/* Content */}
        <div className="flex flex-col justify-between flex-grow p-4 bg-[#0d0d0d]/60 backdrop-blur-sm">
          <div>
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>

          {/* Fancy ClipPath Button */}
          <div className="mt-5 flex justify-start">
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
              }}
              className="py-3 text-center text-white cursor-pointer rounded-lg max-w-[170px] w-full transition-transform duration-500 ease-in-out text-sm font-medium"
              style={{
                clipPath:
                  "polygon(98.522% 2.534%, 7.143% 2.534%, .493% 25.096%, .493% 92.78%, 83.99% 92.78%, 86.453% 100%, 100% 100%, 100% 30.51%, 98.522% 25.096%, 98.522% 2.534%)",
                WebkitClipPath:
                  "polygon(98.522% 2.534%, 7.143% 2.534%, .493% 25.096%, .493% 92.78%, 83.99% 92.78%, 86.453% 100%, 100% 100%, 100% 30.51%, 98.522% 25.096%, 98.522% 2.534%)",
                background:
                  "linear-gradient(135deg, #3B82F6, #000000, #FACC15)",
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
              {buttonText}
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};
