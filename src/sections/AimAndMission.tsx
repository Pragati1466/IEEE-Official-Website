'use client';

import React, { useEffect, useState, useRef } from 'react';
import { AIM } from '../constants/index'; // Ensure your AIM data is correctly imported
import { FaRegLightbulb, FaLaptopCode, FaRegHandshake, FaHistory } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import './1.css'; // Ensure your CSS file is correctly imported

const AimAndMission = () => {
    const icons = [FaRegLightbulb, FaLaptopCode, FaRegHandshake, FaHistory];
    const [animated, setAnimated] = useState(false);
    const sectionRef = useRef(null); // Create a ref for the section

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setAnimated(true); // Set animated state to true when in view
                        observer.unobserve(entry.target); // Stop observing after it's visible
                    }
                });
            },
            {
                threshold: 0.1 // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Start observing the section
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Cleanup observer
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-12">
            <div className="container mx-auto">
                <h2
                    className={`text-center text-3xl font-bold mb-8 text-white transition-transform duration-700 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    data-aos="fade-up" // AOS attribute for the main heading
                >
                    Our Aim & Mission
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {AIM.map((item, index) => {
                        const Icon = icons[index];
                        const aosAnimation = index % 2 === 0 ? 'slide-right' : 'slide-left'; // Determine AOS animation based on index

                        return (
                            <div
                                key={index}
                                className={`p-6 rounded-lg bg-transparent border border-gray-500 cursor-pointer hover:shadow-lg relative`}
                                data-aos={aosAnimation} // Apply AOS animation here
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <Icon className="text-4xl text-teal-400" />
                                </div>
                                <h3 className={`text-2xl font-semibold mb-4 text-center text-white transition-opacity duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                                    {item.heading}
                                </h3>
                                <p className={`text-gray-300 text-center transition-opacity duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                                    {item.description}
                                </p>
                                <div className="absolute inset-0 rounded-lg border border-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-[1500ms] ease-in-out" style={{ boxShadow: '0 0 15px rgb(112,66,248)' }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AimAndMission;
