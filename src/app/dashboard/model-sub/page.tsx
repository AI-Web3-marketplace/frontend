"use client";
import React, { useState } from 'react';

const ModelSubmissionPage: React.FC = () => {
  const [modelName, setModelName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [fileLink, setFileLink] = useState<string>(''); // Changed from file to fileLink
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const accessToken = "ki8umudzxrirp66hn200s277"; // Your PostMail access token

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (modelName && description && fileLink && email && phone) {
      // Prepare data for PostMail API
      const data = {
        subject: `Model Submission: ${modelName}`, // Set the subject
        text: `Model Name: ${modelName}\nDescription: ${description}\nEmail: ${email}\nPhone: ${phone}\nModel File Link: ${fileLink}`, // Include the file link
        access_token: accessToken,
      };

      try {
        const response = await fetch("https://postmail.invotes.com/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: toParams(data),
        });

        if (response.ok) {
          js_onSuccess();
        } else {
          js_onError(await response.text());
        }
      } catch (error) {
        console.error('Error:', error);
        js_onError(error);
      }
    } else {
      setMessage('Please fill in all fields.');
      setOpen(true);
    }
  };

  const js_onSuccess = () => {
    setMessage("Email Successfully Sent!");
    setOpen(true);
  };

  const js_onError = (error: any) => {
    setMessage("Email could not be sent.");
    setOpen(true);
  };

  const toParams = (data: Record<string, string>) => {
    const form_data: string[] = [];
    for (const key in data) {
      form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return form_data.join("&");
  };

  // Define the handleClose function
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
              onChange={(e) => setFileLink(e.target.value)} // Update state with file link
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