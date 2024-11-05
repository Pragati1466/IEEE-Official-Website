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

    const handleMouseMove = (event: MouseEvent) => {
        if (crsr && blur) {
            crsr.style.left = `${event.clientX}px`;
            crsr.style.top = `${event.clientY}px`;
            blur.style.left = `${event.clientX - 150}px`;
            blur.style.top = `${event.clientY - 150}px`;
        }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
        document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
      <Header />
      <Hero />
      <PhotoSlider />
      <AboutSb />
      <AimAndMission />
      <Events/>
      <Team/>
      <Faq/>
      <Footer />
    </>
  );
};

export default Home;
