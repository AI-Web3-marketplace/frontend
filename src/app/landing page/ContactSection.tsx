"use client";
import React, { useState } from 'react';

const ContactSection = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const accessToken = "ki8umudzxrirp66hn200s277"; // Your PostMail access token

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const data = {
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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
  };

  const js_onSuccess = () => {
    setFeedbackMessage("Message sent successfully!");
    setOpen(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  const js_onError = (error: any) => {
    setFeedbackMessage("Failed to send message.");
    setOpen(true);
  };

  const toParams = (data: Record<string, string>) => {
    const form_data: string[] = [];
    for (const key in data) {
      form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return form_data.join("&");
  };

  return (
    <section className="bg-gray-300 py-20" id='contact'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16">
          We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
          <p className="text-gray-600 mb-2">Phone: +91 8100218463</p>
        </div>
        {open && (
          <div className={`mt-4 p-4 rounded ${feedbackMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {feedbackMessage}
            <button onClick={() => setOpen(false)} className="ml-4 text-sm underline">Close</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;