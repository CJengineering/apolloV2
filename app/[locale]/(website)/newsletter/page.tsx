'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ContentContainer from '@/components/custom beta components/ContentContainer';
import ButtonCJ from '@/components/CJ-components/components-CJ/basic components/ButtonCJ';
import LogoLoader from '@/components/CJ-components/components-CJ/test components/LogoLoader';


export default function Page() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // State for managing loading

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://communityjameel.us6.list-manage.com/subscribe/post?u=af0a88827f3ed7b8187f26df1&id=a983dbe04d&f_id=00ba04e3f0', {
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
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setStatus('success');
        setMessage('Subscription successful! Thank you.');
      } else {
        setStatus('error');
        setMessage('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false); // Set loading to false after the response is received
    }
  };

  return (
    <ContentContainer width="full" desktopWidth="medium">
      <div
        className="min-h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/EMPTY_QUARTER_BG.jpg')" }}
      >
        <div className="max-w-xl w-full p-8 rounded-lg shadow-md">
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-cover bg-center"> 
        <h1 className="text-3xl serif font-bold py-12 text-center text-black">Sign up to Community Jameel's newsletter</h1>
        <div className="max-w-xl w-full p-8 rounded-lg">
          {loading ? (
            <LogoLoader /> // Display LogoLoader while loading
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="FNAME"
                  placeholder='Full name'
                  id="name"
                  className="appearance-none mono font-normal border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  placeholder='Email'
                  className="appearance-none mono font-normal border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}
          {status && (
            <div className={`mt-4 p-4 ${status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </ContentContainer>
  );
}
