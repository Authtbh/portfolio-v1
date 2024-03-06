"use client"

import React, { useEffect, useState } from 'react';
import '@/app/globals.css';
import { Tooltip } from 'react-tooltip'
import Image from "next/image";

const Profile = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [discordStatus, setDiscordStatus] = useState(null);
  const [birthdate, setBirthdate] = useState(new Date('August 22, 2008 20:00:00'));
  const [ageInSeconds, setAgeInSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Fetch Discord status
    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch('https://api.lanyard.rest/v1/users/1045909242101633126');
        const data = await response.json();

        if (data.success) {
          setDiscordStatus(data.data.discord_status);
        } else {
          console.error('Failed to fetch Discord status');
        }
      } catch (error) {
        console.error('Error fetching Discord status:', error);
      }
    };

    // Initial fetch
    fetchDiscordStatus();

    // Set up interval to update status every X seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchDiscordStatus, 60000); // Update every 60 seconds

    // Cleanup functions
    return () => {
      clearInterval(timerId);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Calculate age in seconds
    const calculateAgeInSeconds = () => {
      const timeDifference = currentTime.getTime() - birthdate.getTime();
      const seconds = timeDifference / 1000;
      setAgeInSeconds(seconds);
    };

    // Initial calculation
    calculateAgeInSeconds();

    // Set up interval to recalculate every second
    const intervalId = setInterval(calculateAgeInSeconds, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [currentTime, birthdate]);
  // Function to format the current time as a string in the desired format
  const formatTime = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // JavaScript months are 0-based.
    const year = date.getFullYear().toString().substr(-2); // Get the last two digits of the year
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    // Make sure to format the time consistently for both server and client
    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
  };
  return (
    <>
      
        <div className="meow text-clamp ml-5 md:ml-36 mt-20 w-80 text-idkfrl xl:ml-48 "><h1 className="w-80">Auth</h1></div>
        <div className="spacee w-10/12 md:w-5/12 ml-5 md:ml-36 text-primary-brown  text-lg md:text-3xl"><h4>Innovative Frontend Wizard.<br></br>
Transforming Designs into Reality.</h4></div>
      

    


      <div className="flex md:ml-36 md:gap-5 mt-5 ml-2 gap-2 transition-all">
        <div className="hover:bg-idktbh rounded-xl transition-all"><a  data-tooltip-id="my-tooltip" data-tooltip-content="authtbh" data-tooltip-place="top" className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring" target="_blank" rel="noreferrer" href="https://github.com/authtbh"><svg width="24px" height="24px" className="social_svg" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dba895"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>
        <div className="hover:bg-idktbh rounded-xl transition-all"><a data-tooltip-id="my-tooltip" data-tooltip-content="authtbh" data-tooltip-place="top" className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring" target="_blank" rel="noreferrer" href="https://discord.com/users/1045909242101633126"><svg width="24px" height="24px" className="social_svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dba895"><path d="M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>
        <div className="hover:bg-idktbh rounded-xl transition-all"><a data-tooltip-id="my-tooltip" data-tooltip-content="AuthFr@proton.me" data-tooltip-place="top" className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring" target="_blank" rel="noreferrer" href="mailto:AuthFr@proton.me"><svg width="24px" height="24px" className="social_svg" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dba895"><path d="M7 9l5 3.5L17 9" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="#dba895" stroke-width="1.5"></path></svg></a></div>
        <div className="hover:bg-idktbh rounded-xl transition-all"><a data-tooltip-id="my-tooltip" data-tooltip-content="authtbh" data-tooltip-place="top" className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring" target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/authtbh"><svg width="24px" height="24px" className="social_svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dba895"><path d="M17 11.6V15a6 6 0 01-6 6H9a6 6 0 01-6-6v-3.4a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6zM12 9c0-1 .714-2 2.143-2v0A2.857 2.857 0 0017 4.143V3.5M8 9v-.5a3 3 0 013-3v0a2 2 0 002-2V3" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 11h2.5a2.5 2.5 0 010 5H17" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>
      </div>
      <a  href="#">
            <button id="btn" className="md:ml-36 ml-5 mt-5 hover:bg-idkfr active:scale-95 transition-all   border-spacing-4 bg-idktbh border-primary-brown  text-primary-brown w-56 h-10 rounded-xl">Discover my work ↓</button>       
    </a>
      
     <div className="huh md:block hidden absolute size-24 mr-44 top-28 mt-16  right-0 md:opacity-100 opacity-100 size-64  ">
          <Image
            src="https://i.pinimg.com/564x/dc/90/6f/dc906f75008acf3d758b38c8612935e1.jpg"
            height="1000"
            width="1000"
            className="Usr w-full object-cover rounded-xl hover:scale-105 transition-all"
            alt="thumbnail" />
            </div>
   


   
    <h2 className="brrr md:ml-48 ml-4 mt-28 text-primary-brown">Activity<span className="text-idkfrl">:discord</span></h2>
    <img src="https://i.pinimg.com/474x/0c/22/d4/0c22d497d749a184ac9b88e6fc298384.jpg" alt="pfp" className="md:size-44 size-24 md:ml-44 ml-4 rounded-xl mt-5 " />
    <div className=" text-primary-brown w-44 md:ml-96 md:-mt-40 -mt-24 ml-32  ">
     <h4 className="User">@authtbh</h4>
     <h5 className="brr">{discordStatus ? discordStatus : 'Fetching'}</h5>
     <h6 className="brr">{formatTime(currentTime)}</h6>
    </div>

   
    <div className="w-96 md:absolute right-0 md:-mt-81 mr-16 text-primary-brown mt-12 ml-3  ">
    <h1 className="brrr text-md text-primary-brown ml-1  w-44 md:hidden inline">Bio<span className="text-idkfrl">:myself</span></h1>
    <h5 className="brrrr  md:-mt-10 md:-ml-24 mt-4 md:text-clamps text-sm">Hey there, I’m Lalit! :] I’m a <span className="bio_span bg-idkfr rounded-md font-medium"><a data-tooltip-id="my-tooltip" data-tooltip-content={`${Math.floor(ageInSeconds)}.${(ageInSeconds % 1)
        .toFixed(2)
        .substring(2)}`} data-tooltip-place="top">15</a></span> year old frontend developer and freelancer based in India. I’ve taken coding seriously since <span className="bio_span bg-idkfr rounded-md font-medium -z-10">2021</span>, and have been freelancing since <span className="bio_span bg-idkfr rounded-md font-medium">2022</span>. Recently, however, I’ve grown a knack for giving back to community. I like contributing to <span className="bio_span bg-idkfr rounded-md font-medium"><a data-tooltip-id="my-tooltip" data-tooltip-content="🤓" data-tooltip-place="top">open source</a></span> as a web developer, which is probably the reason why you’ve ended up here. Currently struggling with blockchain and rust.</h5>
</div>

<Tooltip id="my-tooltip"  />
    
   </>


  )
  
}

export default Profile;
