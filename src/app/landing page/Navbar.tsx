// components/Navbar.js
"use client"
// components/Navbar.js
// components/Navbar.js// components/Navbar.js
// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineAppstore, AiOutlineDollar } from 'react-icons/ai';
import logo from "./logo.svg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-darkblue to-blue-800 text-white shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src={logo} alt="Quicklix Logo" width={100} height={100} />
          </div>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="flex items-center hover:text-lightblue cursor-pointer transition">
              <AiOutlineHome className="mr-1" />
              Home
            </span>
          </Link>
          <Link href="#features">
            <span className="flex items-center hover:text-lightblue cursor-pointer transition">
              <AiOutlineAppstore className="mr-1" />
              Features
            </span>
          </Link>
          <Link href="#pricing">
            <span className="flex items-center hover:text-lightblue cursor-pointer transition">
              <AiOutlineDollar className="mr-1" />
              Pricing
            </span>
          </Link>
          <Link href="#contact">
            <span className="flex items-center hover:text-lightblue cursor-pointer transition">
              <AiOutlineDollar className="mr-1" />
              Contact
            </span>
          </Link>
          <Link href="../api/login">
            <button className="border border-lightblue text-lightblue px-4 py-2 rounded-md hover:bg-lightblue hover:text-darkblue transition">
              Login
            </button>
          </Link>
          <Link href="../api/signup">
            <button className="border border-lightblue text-lightblue px-4 py-2 rounded-md hover:bg-lightblue hover:text-darkblue transition">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-darkblue bg-opacity-90 fixed inset-0 z-50`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link href="/">
            <div className="flex items-center cursor-pointer hidden md:block" onClick={toggleNavbar}>
              <Image src={logo} alt="Quicklix Logo" width={100} height={100} />
            </div>
          </Link>
          <Link href="#features">
            <span className="flex items-center hover:text-lightblue cursor-pointer transition" onClick={toggleNavbar}>
              <AiOutlineAppstore className="mr-1" />
              Features
            </span>
          </Link>
          <Link href="#pricing">
            <span className="flex items-center hover:text-lightblue cursor-pointer transition" onClick={toggleNavbar}>
              <AiOutlineDollar className="mr-1" />
              Pricing
            </span>
          </Link>
          <Link href="#contact">
            <span className="flex items-center hover:text-lightblue cursor-pointer transition" onClick={toggleNavbar}>
              <AiOutlineDollar className="mr-1" />
              Contact
            </span>
          </Link>
          <Link href="../api/login">
            <button className="border border-lightblue text-lightblue px-4 py-2 rounded-md hover:bg-lightblue hover:text-darkblue transition" onClick={toggleNavbar}>
              Login
            </button>
          </Link>
          <Link href="../api/signup">
            <button className="border border-lightblue text-lightblue px-4 py-2 rounded-md hover:bg-lightblue hover:text-darkblue transition" onClick={toggleNavbar}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;