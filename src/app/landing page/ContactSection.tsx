"use client"
// components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-gray-300 py-20"id='contact'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16">
          We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg md:w-1/2">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-lightblue hover:bg-blue-600 text-blue-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h3>
          <p className="text-gray-600 mb-2">Email: support@quicklix.com</p>
          <p className="text-gray-600 mb-2">Phone: +91 81002184637</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;