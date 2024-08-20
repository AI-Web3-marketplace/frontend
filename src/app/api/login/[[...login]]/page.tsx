'use client';

import React, { useEffect } from 'react';
import { SignIn, useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const LoginPage = () => {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    // Redirect to the dashboard if the user is already signed in
    if (isSignedIn) {
      redirect('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login to Quicklix</h2>
        <SignIn />
      </div>
    </div>
  );
};

export default LoginPage;