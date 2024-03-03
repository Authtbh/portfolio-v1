'use client'; // indicates Client Component

// Import with next's dynamic import
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Profile from '@/components/Profile';


export default function Home() {
  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});
  return (
    <>
    <Profile />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-transparent after:via-[#dba895] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-transparent before:dark:opacity-10 after:dark:via-[#dba895] after:dark:via-[#dba895] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
    </main>
    
    </>

  );
}
