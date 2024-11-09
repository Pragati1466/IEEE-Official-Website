'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import photo1 from "@/assets/logos/white_logo.png";
import './Hero.css';

const Hero = () => {
    const [loading, setLoading] = useState(true);
    const [members, setMembers] = useState(0);
    const [awards, setAwards] = useState(0);
    const [recognitions, setRecognitions] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            startCounting();
        }, 2000);
    }, []);

    const startCounting = () => {
        const targetMembers = 230;
        const targetAwards = 30;
        const targetRecognitions = 50;

        let memberCount = 0;
        let awardsCount = 0;
        let recognitionCount = 0;
        const duration = 7000;

        const memberIntervalTime = duration / targetMembers;
        const awardsIntervalTime = duration / targetAwards;
        const recognitionIntervalTime = duration / targetRecognitions;

        const memberInterval = setInterval(() => {
            if (memberCount < targetMembers) {
                memberCount += 1;
                setMembers(memberCount);
            } else {
                clearInterval(memberInterval);
            }
        }, memberIntervalTime);

        const awardsInterval = setInterval(() => {
            if (awardsCount < targetAwards) {
                awardsCount += 1;
                setAwards(awardsCount);
            } else {
                clearInterval(awardsInterval);
            }
        }, awardsIntervalTime);

        const recognitionInterval = setInterval(() => {
            if (recognitionCount < targetRecognitions) {
                recognitionCount += 1;
                setRecognitions(recognitionCount);
            } else {
                clearInterval(recognitionInterval);
            }
        }, recognitionIntervalTime);
    };

    return (
        <section className="hero-section">
  {loading ? (
    <div className="loading-screen">
      <Image src={photo1} alt="IGDTUW PIC" className="loading-logo" />
    </div>
  ) : (
    <div className="hero-content">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-slide-up">
        Welcome to <span className="ocean-text">IEEE IGDTUW</span>
      </h1>

      <p className="text-lg md:text-xl mb-6 text-gray-300 font-bold animate-slide-up">
        Institute of Electrical and Electronics Engineers IGDTUW Student Branch.
      </p>

      <button className="explore-button animate-slide-up" style={{ cursor: 'default' }}>
        Explore our student branch
      </button>

      {/* Social Media Icons */}
      <div className="social-icons animate-slide-up">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Counters */}
      <div className="counters">
        <div className="counter">
          <h2>Members</h2>
          <p>{members}+</p>
        </div>
        <div className="counter">
          <h2>Awards</h2>
          <p>{awards}+</p>
        </div>
        <div className="counter">
          <h2>Events</h2>
          <p>{recognitions}+</p>
        </div>
      </div>
    </div>
  )}
</section>

    );
};

export default Hero;
