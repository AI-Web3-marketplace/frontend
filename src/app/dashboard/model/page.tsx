"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useUser, UserButton,useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import logo from "./logo.svg"; // Adjust the path to your logo
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Define the structure of the user
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

// Define the structure of the model data
interface ModelData {
  id: string;
  name: string;
  revenue: number;
  downloads: number;
  rating: number;
}

const ModelAnalysisPage = () => {
  const { user, isLoaded, isSignedIn} = useUser();
  const {signOut} =useAuth();
  const router = useRouter();
  const [modelData, setModelData] = useState<ModelData[]>([]);
  const [selectedModel, setSelectedModel] = useState<ModelData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchModelData();
    } else if (!isSignedIn && isLoaded) {
      router.push('/api/login'); // Redirect to login if not signed in
    }
  }, [isLoaded, isSignedIn, router]);

  const fetchModelData = async () => {
    try {
      const response = await fetch('/api/model-data'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: ModelData[] = await response.json();
      setModelData(result);
    } catch (error) {
      console.error('Failed to fetch model data:', error);
    }
  };

  const handleModelSelect = (model: ModelData) => {
    setSelectedModel(model);
  };

  const renderModelList = () => {
    return (
      <div className="bg-black p-4 rounded shadow">
        <h3 className="font-bold mb-2">Your Models</h3>
        <ul>
          {modelData.map((model) => (
            <li
              key={model.id}
              className={`p-2 cursor-pointer hover:bg-gray-100 ${selectedModel?.id === model.id ? 'bg-gray-200' : ''}`}
              onClick={() => handleModelSelect(model)}
            >
              {model.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderModelDetails = () => {
    if (!selectedModel) return null;

    const { name, revenue, downloads, rating } = selectedModel;

    const data = [
      { name: 'Jan', revenue: 4000 },
      { name: 'Feb', revenue: 3000 },
      { name: 'Mar', revenue: 2000 },
      { name: 'Apr', revenue: 2780 },
      { name: 'May', revenue: 1890 },
      { name: 'Jun', revenue: 2390 },
      { name: 'Jul', revenue: 3490 },
    ];

    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <p>Revenue: ${revenue.toLocaleString()}</p>
          <p>Downloads: {downloads.toLocaleString()}</p>
          <p>Rating: {rating}/5</p>
        </div>
        <LineChart width={600} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-400">
      <aside className="w-64 bg-gray-700 shadow-md">
        <div className="p-4 border-b flex items-center">
          <Image src={logo} alt="Quicklix Logo" className="h-10 mr-2" width={60} height={60} />
          <h2 className="text-xl font-bold">Quicklix</h2>
        </div>
        <nav className="mt-4 bg-black">
          <ul>
            <Link href="/dashboard">
              <li className="p-4 hover:bg-gray-800 cursor-pointer">Home</li>
            </Link>
            <Link href="/dashboard/profile">
              <li className="p-4 hover:bg-gray-800 cursor-pointer">Profile</li>
            </Link>
            <Link href="/dashboard/model-analysis">
              <li className="p-4 hover:bg-gray-800 cursor-pointer">Model Analysis</li>
            </Link>
            <li className="p-4 hover:bg-gray-800 cursor-pointer">Settings</li>
            <li className="p-4 hover:bg-gray-800 cursor-pointer" onClick={() => signOut()}>Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Model Analysis</h1>
          <UserButton />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderModelList()}
          {renderModelDetails()}
        </div>
        {/* Button to navigate to Model Submission Page */}
        <div className="mt-6">
          <Link href="/dashboard/model-sub">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Submit New Model
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ModelAnalysisPage;