"use client"
import React from 'react';
import Image from 'next/image';
import { FaLightbulb, FaRocket, FaShieldAlt, FaUserFriends, FaCheck } from 'react-icons/fa';
import image1 from "./feature-image1.jpeg"
import image2 from "./image2.jpeg"
import image3 from "./image3.jpeg"

const FeaturesSection = () => {
  return (
    <section className="bg-gray-800 py-20" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          Unleash the Power of AI with Quicklix
        </h2>
        <p className="text-lg text-white text-center mb-16">
          Discover the features that make Quicklix the ultimate AI Web3 marketplace.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg text-center">
            <div className="bg-lightblue p-4 rounded-full inline-block mb-6">
              <FaLightbulb size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Innovative AI Models</h3>
            <p className="text-white">
              Access cutting-edge AI models that push the boundaries of whats possible in the Web3 space.
            </p>
          </div>
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg text-center">
            <div className="bg-lightblue p-4 rounded-full inline-block mb-6">
              <FaRocket size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Blazing-Fast Performance</h3>
            <p className="text-white">
              Our AI models are optimized for lightning-fast performance, ensuring seamless integration and deployment.
            </p>
          </div>
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg text-center">
            <div className="bg-lightblue p-4 rounded-full inline-block mb-6">
              <FaShieldAlt size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Secure and Reliable</h3>
            <p className="text-white">
              Trust Quicklix to safeguard your data and provide a secure platform for your AI needs.
            </p>
          </div>
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg text-center">
            <div className="bg-lightblue p-4 rounded-full inline-block mb-6">
              <FaUserFriends size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Collaborative Ecosystem</h3>
            <p className="text-white">
              Join a vibrant community of AI enthusiasts and developers, fostering collaboration and innovation.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <Image src={image1} alt="Feature Image 1" width={500} height={400} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Seamless Integration</h3>
              <p className="text-gray-300 mb-6">
                Quicklix offers a user-friendly interface and powerful APIs that make integrating AI models a breeze.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>Plug-and-play integration</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>Dedicated support team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 hidden md:block">
              <Image src={image2} alt="Feature Image 2" width={500} height={400} />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-4 text-white">Scalable and Flexible</h3>
              <p className="text-gray-300 mb-6">
                Quicklix is designed to grow with your needs, offering scalable solutions and flexible pricing options.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>Scalable infrastructure</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>Flexible pricing plans</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>Customizable solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <Image src={image3} alt="Feature Image 3" width={500} height={400} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Cutting-Edge AI Technology</h3>
              <p className="text-gray-300 mb-6">
                Quicklix leverages the latest advancements in AI technology to deliver unparalleled performance and accuracy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>State-of-the-art AI models</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>Advanced machine learning algorithms</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-lightblue p-3 rounded-full mr-4">
                    <FaCheck size={18} className="text-white" />
                  </div>
                  <span>Continuous model updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
