"use client"
import React, { useState } from 'react';

const ModelSubmissionPage: React.FC = () => {
  const [modelName, setModelName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [fileLink, setFileLink] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const accessToken: string = "ki8umudzxrirp66hn200s277";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (modelName && description && fileLink && email && phone) {
      const data = {
        modelName,
        description,
        fileLink,
        email,
        phone,
      };

      try {
        // Send email using PostMail service
        const response = await fetch("https://postmail.invotes.com/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: toParams({
            subject: `Model Submission: ${modelName}`,
            text: `Model Name: ${modelName}\nDescription: ${description}\nEmail: ${email}\nPhone: ${phone}\nModel File Link: ${fileLink}`,
            access_token: accessToken,
          }),
        });

        if (response.ok) {
          js_onSuccess();
        } else {
          const errorText = await response.text();
          js_onError(errorText);
        }

        // Save data to PostgreSQL via API
        const apiResponse = await fetch('/api/model', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await apiResponse.json();

        if (apiResponse.ok) {
          setMessage(result.message);
        } else {
          setMessage(result.message || 'Error saving data to PostgreSQL.');
        }
      } catch (error) {
        console.error('Error:', error);
        js_onError(error instanceof Error ? error.message : 'An unknown error occurred');
      }
    } else {
      setMessage('Please fill in all fields.');
      setOpen(true);
    }
  };

  const js_onSuccess = (): void => {
    setMessage("Email Successfully Sent!");
    setOpen(true);
  };

  const js_onError = (error: string): void => {
    setMessage(`Error: ${error}`);
    setOpen(true);
  };

  const toParams = (data: Record<string, string>): string => {
    return Object.entries(data)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Model Submission</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form id="javascript_form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Model Name</label>
            <input
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              required
              className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="mt-1 block w-full border text-area text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Model File Link</label>
            <input
              type="url"
              value={fileLink}
              onChange={(e) => setFileLink(e.target.value)}
              required
              placeholder="Enter the link to your model file"
              className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit Model
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Powered by <a href="https://postmail.invotes.com" target="_blank" rel="noopener noreferrer">PostMail</a>
        </p>
      </div>
      {open && (
        <div className={`mt-4 p-4 rounded ${message.includes('Successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message}
          <button onClick={handleClose} className="ml-4 text-sm underline">Close</button>
        </div>
      )}
    </div>
  );
};

export default ModelSubmissionPage;