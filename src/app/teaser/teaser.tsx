"use client";
import React from 'react';
import Image from 'next/image';

const Teaser: React.FC =() => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden">
      <div className="flex-1 flex flex-col justify-center items-center py-20">
        <h1 className="text-6xl text-center text-orange-500 m-0 leading-tight">
          LandVista Dashboard
        </h1>
        <div >
          <Image 
          src='/Images/logo.png' 
          alt="LandVista Logo" 
          width={200} 
          height={200} 
          priority/>
        </div>
      </div>

      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-teal-600 rounded-br-full z-[-1]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-teal-600 rounded-tl-full z-[-1]"></div>
    </div>
  )
}

export default Teaser;