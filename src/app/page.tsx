'use client'; // indicates Client Component
import { useState, useEffect } from 'react';
import Profile from '@/components/Profile';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <>
    <Navbar />
    <Profile />
      <div className="flex justify-center items-start before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-transparent after:via-[#dba895] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-transparent before:dark:opacity-10 after:dark:via-[#dba895] after:dark:via-[#dba895] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
   
    
    </>

  );
}
