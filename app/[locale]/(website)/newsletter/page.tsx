'use client';
import React, { useState } from 'react';


export default function Page() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
  
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (response.ok) {
        setStatus('success');
        setMessage('Subscription successful! Thank you.');
      } else {
        setStatus('error');
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen max-h-[100vh] flex">
      <div className="w-1/2">
        <img src="your-image-url.jpg" alt="Full Image" className="object-cover mt-8 h-full w-full" />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form
            action="https://communityjameel.us6.list-manage.com/subscribe/post?u=af0a88827f3ed7b8187f26df1&id=a983dbe04d&f_id=00ba04e3f0"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="EMAIL"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="FNAME"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
          {status && (
            <div className={`mt-4 p-4 ${status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
