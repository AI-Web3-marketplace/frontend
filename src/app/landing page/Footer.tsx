// components/Footer.js
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from "./logo.svg"
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Image src={logo} alt="Quicklix Logo" width={50} height={50} />
              <h3 className="text-lg font-bold ml-2">Quicklix</h3>
            </div>
            <p className="text-gray-400">
              Unlock the power of AI with our innovative solutions and services.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-10">
              <h4 className="font-bold">Links</h4>
              <ul>
                <li className="mt-2">
                  <a href="#features" className="text-gray-400 hover:text-lightblue transition">
                    Features
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#pricing" className="text-gray-400 hover:text-lightblue transition">
                    Pricing
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#contact" className="text-gray-400 hover:text-lightblue transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-lightblue transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-lightblue transition">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-lightblue transition">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-gray-400 hover:text-lightblue transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Quicklix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;