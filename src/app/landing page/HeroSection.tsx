import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline/next';

const HeroSection = () => {
  return (
    <section className="bg-darkblue py-20 sm:py-32 md:py-40 relative overflow-hidden flex flex-col h-screen">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/F3AnhAV6wEygC0c5/scene.splinecode"
          className="w-full h-full sm:h-96 md:h-full" // Adjust height for mobile
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side Content */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-6xl font-bold text-black mb-4 hidden md:block" // Hide on mobile, show on md and larger
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Empower Your AI Journey with Quicklix
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-3xl text-gray-600 mb-8 hidden md:block" // Hide on mobile, show on md and larger
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Access, monetize, and deploy top-tier AI models seamlessly.
            </motion.p>
          </div>
        </div>

        {/* Get Started Button - Positioned at the bottom on mobile, slightly upward on desktop */}
        <motion.a
          href="../api/login"
          className="bg-blue-300 text-darkblue px-6 py-3 rounded-full hover:bg-blue-600 transition inline-flex items-center mt-4 md:mt-0 md:self-start md:-mb-8" // Visible on all screens, positioned at the bottom on mobile, slightly upward on desktop
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get Started
          <FaArrowRight className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;