"use client"
import React from 'react'; 
import { ClerkProvider,SignUp } from '@clerk/nextjs';


const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up for Quicklix</h2>
       <SignUp />
      </div>
    </div>
  );
};

export default SignupPage; 