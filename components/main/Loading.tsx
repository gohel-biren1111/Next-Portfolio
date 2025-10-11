"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
  "Initializing portfolio...",
  "Loading projects...",
  "Preparing experience...",
  "Setting up skills...",
  "Almost ready...",
];

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5;

        // Update loading text based on progress
        const textIndex = Math.min(
          Math.floor((newProgress / 100) * loadingTexts.length),
          loadingTexts.length - 1
        );
        setCurrentTextIndex(textIndex);

        if (newProgress >= 100) {
          clearInterval(interval);
          // Hide loading screen after completion animation
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    // Preload critical resources
    const preloadResources = () => {
      const video = document.createElement("video");
      video.src = "/videos/blackhole.mp4";
      video.load();
    };

    preloadResources();

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014] overflow-hidden"
        >
          {/* Background Video Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />

          <div className="flex flex-col items-center space-y-8 relative z-10">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center relative"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 40px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Biren Gohel
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"
              />
            </motion.div>

            {/* Advanced Loading Spinner */}
            <div className="relative">
              {/* Outer Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 border border-purple-500/20 rounded-full relative"
              >
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
              </motion.div>

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 w-16 h-16 border border-cyan-500/30 rounded-full"
              >
                <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-cyan-500 rounded-full" />
              </motion.div>

              {/* Inner Spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 w-12 h-12 border-2 border-t-purple-400 border-r-transparent border-b-cyan-400 border-l-transparent rounded-full"
              />

              {/* Center Core */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-7 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              />
            </div>

            {/* Progress Section */}
            <div className="w-80 max-w-sm space-y-4">
              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-800/50 rounded-full h-2 backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full relative overflow-hidden"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Progress Bar Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Progress Percentage */}
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Loading</span>
                  <motion.span
                    key={Math.round(progress)}
                    initial={{ scale: 1.2, color: "#06b6d4" }}
                    animate={{ scale: 1, color: "#9ca3af" }}
                    transition={{ duration: 0.2 }}
                  >
                    {Math.round(progress)}%
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Dynamic Loading Text */}
            <motion.div
              key={currentTextIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 text-sm font-medium tracking-wider"
            >
              {loadingTexts[currentTextIndex]}
            </motion.div>
          </div>

          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  y: [0, -100],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] opacity-40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
