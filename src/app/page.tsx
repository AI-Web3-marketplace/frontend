"use client"
import Image from "next/image";
import HeroSection from "./landing page/HeroSection";
import Navbar from "./landing page/Navbar";
import FeaturesSection from "./landing page/FeaturesSection";
import PricingSection from "./landing page/PricingSection";
import ContactSection from "./landing page/ContactSection";
import Footer from "./landing page/Footer";
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import AboutUsPage from "./landing page/aboutus";

export default function Home() {
  
  return (
    <>
    <Navbar/><HeroSection/>
    <FeaturesSection/>
    <PricingSection/> <ContactSection/><AboutUsPage/>
    <Footer/></>
    
  );
}
