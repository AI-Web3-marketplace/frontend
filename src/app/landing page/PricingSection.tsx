// components/PricingSection.js
"use client"
import React from 'react';

const PricingSection = () => {
  return (<section className='bg-gradient-to-r' id='pricing'>
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Flexible Credit-Based Pricing
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16">
          Choose a plan that suits your needs and unlock the power of AI with Quicklix.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
            <p className="text-4xl font-semibold mb-4">$10</p>
            <p className="text-gray-600 mb-6">100 Credits</p>
            <ul className="text-left mb-6">
              <li className="mb-2">Access to basic AI models</li>
              <li className="mb-2">Community support</li>
              <li className="mb-2">Monthly usage tracking</li>
            </ul>
            <button className="bg-lightblue text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Standard Plan</h3>
            <p className="text-4xl font-semibold mb-4">$25</p>
            <p className="text-gray-600 mb-6">300 Credits</p>
            <ul className="text-left mb-6">
              <li className="mb-2">Access to standard AI models</li>
              <li className="mb-2">Priority support</li>
              <li className="mb-2">Monthly usage tracking</li>
              <li className="mb-2">Customizable options</li>
            </ul>
            <button className="bg-lightblue text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <p className="text-4xl font-semibold mb-4">$50</p>
            <p className="text-gray-600 mb-6">700 Credits</p>
            <ul className="text-left mb-6">
              <li className="mb-2">Access to all AI models</li>
              <li className="mb-2">Dedicated support</li>
              <li className="mb-2">Monthly usage tracking</li>
              <li className="mb-2">Custom integrations</li>
              <li className="mb-2">Early access to new features</li>
            </ul>
            <button className="bg-lightblue text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Credit-Based Pricing?</h3>
          <p className="text-white mb-6">
            Our credit-based pricing model allows you to pay for only what you use, ensuring flexibility and cost-effectiveness.
          </p>
          <p className="text-white mb-6">
            Purchase credits as needed and utilize them across various AI models and services available on Quicklix.
          </p>
          <p className="text-white mb-6">
            No hidden fees, no long-term contracts—just straightforward pricing that adapts to your needs.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default PricingSection;