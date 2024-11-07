'use client';
import React, { useEffect } from 'react';
import Header from "@/sections/Header";
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Faq from '@/sections/Faq';
import PhotoSlider from '@/sections/PhotoSlider';
import AboutSb from '@/sections/AboutSb';
import Team from '@/sections/Team';
import AimAndMission from '@/sections/AimAndMission';
import Events from '@/sections/Events';

const Home = () => {
  useEffect(() => {
    const crsr = document.getElementById("cursor");
    const blur = document.getElementById("cursor-blur");

    // Throttle function to limit event frequency
    // Throttle function to limit event frequency
// Throttle function to limit event frequency
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return (...args: any[]) => {
    const context = this; // `this` will refer to the context of the surrounding scope (no issue here)

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};


    // Mouse move handler
    const handleMouseMove = (event:MouseEvent) => {
      if (crsr && blur) {
        // Use transform for smoother performance
        crsr.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        blur.style.transform = `translate(${event.clientX - 150}px, ${event.clientY - 150}px)`;
      }
    };

    // Throttle the mouse move event to run at a maximum of once every 50ms
    const throttledMouseMove = throttle(handleMouseMove, 50);

    // Event listener for mouse move
    document.addEventListener("mousemove", throttledMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor elements */}
      <div id="cursor"></div>
      <div id="cursor-blur"></div>

      {/* Main Sections */}
      <Header />
      <Hero />
      <PhotoSlider />
      <AboutSb />
      <AimAndMission />
      <Events />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
