import React from 'react';
import Image from 'next/image';
import ContentContainer from '@/components/custom beta components/ContentContainer';
import ButtonCJ from '@/components/CJ-components/components-CJ/basic components/ButtonCJ';

export default function Page() {
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
      <form>

          <div className="mb-6">
            {/* <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            </label> */}
            <input
              type="text"
              placeholder='Full name'
              id="name"
              className="appearance-none mono font-normal border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            </label> */}
            <input
              type="email"
              id="email"
              placeholder='Email'
              className="appearance-none mono font-normal border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
          <ButtonCJ
                    href={`www.communityjameel.org`}
                    text={`sign up`}
                  />
          </div>
          
        </form></div>
        </div>
  </ContentContainer>
  );
}
