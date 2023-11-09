"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative dark:bg-gray-800 bg-white py-20 md:py-30 lg:py-40 xl:h-screen">
      <div className="absolute inset-0 bg-black opacity-90">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: 1 }}
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container relative mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify lg:mt-24 z-10">
        <div className="md:w-1/2 lg:w-2/3 md:pr-8 mb-6 md:mb-0">
          <div className="md:max-w-md lg:max-w-lg">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-white mb-4">
              Velkommen til NIF Gymnastik
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-white mb-6">
              Tilmeld dig vores hold 2023/2024
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Link href="/blog">
              <Button
                variant="outline"
                className="w-full md:w-[150px] text-sm md:text-base"
              >
                Blog
              </Button>
            </Link>
            <Link href="hold">
              <Button className="w-full md:w-[160px] text-sm md:text-base">
                Udforsk Holdne
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
