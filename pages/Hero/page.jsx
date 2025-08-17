"use client";

import { PixelImage } from "@/components/magicui/pixel-image";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-transparent">

      {/* Background Image */}
      <div className="w-full max-w-5xl h-[500px] md:h-[500px] flex items-center justify-center border-2 border-gray-300 rounded-3xl">
        <PixelImage
          src="/images/maqsood-pic.png"
          customGrid={{ rows: 12, cols: 12 }}
          grayscaleAnimation
          pixelFadeInDuration={2500}
          maxAnimationDelay={2000}
        />
      </div>

      {/* Content Overlapping the Image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 translate-y-1/3 w-full md:w-3/4 lg:w-1/2 text-white dark:bg-black/60 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center md:text-left"
        >
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[2.5rem] md:text-[3.5rem] font-semibold">
            Maqsood Ahmed<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.8}>
          <h2 className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Full Stack Developer | Backend Specialist | MERN | Next.js 
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={1.0}>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            Results-driven developer with{" "}
            <span className="font-semibold text-[#5046e6]">
              2+ years of experience
            </span>{" "}
            building scalable backend systems. Boosted API performance by{" "}
            <span className="font-semibold text-[#5046e6]">40%</span> and
            delivered{" "}
            <span className="font-semibold text-[#5046e6]">99.9% uptime</span>{" "}
            across multiple production apps. <br />
            Skilled in{" "}
            <span className="font-semibold text-[#5046e6]">
              Node.js, Express.js, MongoDB, GraphQL, Docker
            </span>{" "}
            with strong frontend expertise in{" "}
            <span className="font-semibold text-[#5046e6]">
              React.js & Next.js
            </span>
            . <br />
            Passionate about solving complex problems and delivering
            maintainable, high-performance systems.
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={1.3}>
          <button className="mt-6 px-6 py-3 rounded-lg bg-[#5046e6] text-white font-semibold hover:bg-[#4038c0] transition">
            View My Work
          </button>
        </BoxReveal>
      </motion.div>
      
    </section>
  );
}
