"use client";
import React, { useState } from "react";
import Link from 'next/link'
const Banner = () => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  const handleMouseMove = (e: any) => {
    const { clientX: x, clientY: y } = e;
    setXPosition((x / 15) - 10);
    setYPosition((y / 15) - 10);
  };

  return (
    <div className="w-full py-10 px-4">
      <div
        className="relative max-w-7xl mx-auto p-8 group rounded-2xl h-fit md:h-[400px] bg-[#164972] flex flex-col justify-center items-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setXPosition(0);
          setYPosition(0);
        }}
      >
        {/* Animated Background Pattern */}
        <div
          className="absolute inset-0 opacity-20 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${xPosition}px, ${yPosition}px)`,
            background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)`
          }}
        />

        {/* Floating Elements */}
        <div
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-10 transition-transform duration-300"
          style={{
            transform: `translate(${xPosition * 0.5}px, ${yPosition * 0.5}px)`
          }}
        />
        <div
          className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white opacity-10 transition-transform duration-300"
          style={{
            transform: `translate(${-xPosition * 0.3}px, ${-yPosition * 0.3}px)`
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Experience the Difference?
          </h1>
          <p className="text-blue-100 text-center max-w-2xl text-sm md:text-base mb-6 md:mb-10">
            Join thousands of satisfied customers who trust RapidCare for their emergency medical needs
          </p>
          <Link href={'/#form'}>
            <button className="px-6 py-3 rounded-2xl bg-white text-[#164972] font-bold text-sm md:text-base hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Request an Ambulance
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;