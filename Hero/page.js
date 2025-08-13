"use client";

import { Globe } from "@/components/magicui/globe";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full px-8 md:px-16 bg-transparent z-0">
      {/* Left Side - Big Globe */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Globe className="w-[550px] h-[550px]" />
      </div>

      {/* Right Side - Bio */}
      <div className="flex flex-col items-start justify-center w-full md:w-1/2 text-white space-y-6 mt-8 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-amber-400">Maqsood Ahmed</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
          🚀 Full-Stack Developer | MERN Expert | Backend Specialist |
          Microservices Enthusiast. I create modern, scalable, and
          high-performing applications that deliver results.
        </p>
        <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg transition-all">
          View My Work
        </button>
      </div>
    </section>
  );
}
