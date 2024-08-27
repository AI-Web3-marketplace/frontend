"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import teamMember1 from "./team.jpg"; // Replace with actual image paths
import teamMember2 from "./WhatsApp Image 2024-02-17 at 12.10.50_7a95ce6d.jpg";
import teamMember3 from "./team1.jpg";

const AboutUsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-800" id="aboutus">
        <header className="bg-blue-600 text-white text-center py-12">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn more about our mission and team.
          </motion.p>
        </header>

        <section className="max-w-7xl mx-auto p-6">
          <motion.h2
            className="text-3xl font-semibold mt-10 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Founded in 2024, Quicklix was created to revolutionize the way
            people access and share knowledge in the digital age. Our journey
            began with a simple idea: to make information accessible to
            everyone, everywhere.
          </motion.p>
        </section>

        <section className="max-w-7xl mx-auto p-6">
          <motion.h2
            className="text-3xl font-semibold mt-10 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <motion.div
              className="bg-gray-700 p-4 rounded shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={teamMember1}
                alt="Subhankar Das"
                className="rounded-full h-32 w-32 mx-auto"
              />
              <h3 className="text-xl font-semibold text-center mt-4 text-white">
                Subhankar Das
              </h3>
              <p className="text-center text-white">CEO & Founder</p>
              <p className="mt-2 text-center text-white">
                Subhankar is a visionary leader with experience in multiple
                businesses and industry.
              </p>
              <p className="mt-2 text-center italic text-white">
                Responsibilities: Overseeing company strategy and operations.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-4 rounded shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src={teamMember2}
                alt="Shivansh Raj"
                className="rounded-full h-32 w-32 mx-auto"
              />
              <h3 className="text-xl font-semibold text-center mt-4 text-white">
                Shivansh Raj
              </h3>
              <p className="text-center text-white">Head Technical Manager</p>
              <p className="mt-2 text-center text-white">
                Shivansh is an expert in software development and has a passion
                for building innovative solutions.
              </p>
              <p className="mt-2 text-center italic text-white">
                Responsibilities: Managing technical projects and leading the
                development team.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-4 rounded shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={teamMember3}
                alt="Surya"
                className="rounded-full h-32 w-32 mx-auto"
              />
              <h3 className="text-xl font-semibold text-center mt-4 text-white">
                Surya
              </h3>
              <p className="text-center text-white">CTO</p>
              <p className="mt-2 text-center text-white">
                Surya is an experienced developer with high experience and
                visionary goals to be achieved.
              </p>
              <p className="mt-2 text-center italic text-white">
                Responsibilities: Overseeing technology strategy and product
                development.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
