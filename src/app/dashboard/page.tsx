"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuth, UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import logo from "../landing page/logo.svg";
import { Button } from '@mui/material'; // Import Material-UI Button

// Define the structure of the user
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

// Define the structure of the data items
interface DataItem {
  id: string;
  title: string;
  description: string;
}

const DashboardPage = () => {
  const { user, isSignedIn } = useUser() as unknown as { user: User | null; isSignedIn: boolean; signOut: () => void };
  const { signOut } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<DataItem[]>([]); // Specify the type for data
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/api/login'); // Redirect to login if not signed in
    } else {
      fetchData();
    }
  }, [isSignedIn, router]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: DataItem[] = await response.json(); // Ensure the result is typed
      setData(result);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handleLogout = () => {
    signOut();
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-400">
      <aside className="w-64 bg-gray-700 shadow-md">
        <div className="p-4 border-b flex items-center">
          <Image src={logo} alt="Quicklix Logo" className="h-10 mr-2" width={60} height={60} /> {/* Adjust the path and size as needed */}
          <h2 className="text-xl font-bold">Quicklix</h2>
        </div>
        <nav className="mt-4 bg-black">
          <ul>
            <li className="p-4 hover:bg-gray-800 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-800 cursor-pointer">Profile</li>
            <li className="p-4 hover:bg-gray-800 cursor-pointer">Settings</li>
            <li className="p-4 hover:bg-gray-800 cursor-pointer" onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Welcome, {user?.firstName || 'User'}!</h1>
          <UserButton />
        </header>
        <section className="mt-6">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-l focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
              Search
            </button>
          </div>
          <h2 className="text-xl font-semibold">Your Data</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))
            ) : (
              <p>No data available.</p>
            )}
          </div>
          {/* Button to navigate to Model Submission Page */}
          <div className="mt-6">
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push('/dashboard/model-sub')} // Navigate to Model Submission page
            >
              Submit New Model
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;