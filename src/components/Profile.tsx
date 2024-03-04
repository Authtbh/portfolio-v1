"use client"


import React from 'react';
import '@/app/globals.css';
import { Tooltip } from 'react-tooltip'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ThreeD";

const Profile = () => {
  return (
    <div>
      <div className="">
        <div className="meow text-clamp ml-5 md:ml-24 mt-20 text-primary-brown"><h1>Auth</h1></div>
        <div className="spacee w-10/12 md:w-5/12 ml-5 md:ml-24 text-primary-brown"><h4>Hey! im a 9th grader livin in india i do coding cus it gives me mental peace and i really wanna land internship before college im scared of rotting in college</h4></div>
      </div>

    


      <div className="flex md:ml-20 md:gap-5 mt-5 ml-2 gap-2">
        <div className="hover:bg-idktbh rounded-xl transition-all"><a  data-tooltip-id="my-tooltip" data-tooltip-content="authtbh" data-tooltip-place="top" className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring" target="_blank" rel="noreferrer" href="https://github.com/authtbh"><svg width="24px" height="24px" className="social_svg" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dba895"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>
        <div className="hover:bg-idktbh rounded-xl transition-all"><a data-tooltip-id="my-tooltip" data-tooltip-content="authtbh" data-tooltip-place="top" className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring" target="_blank" rel="noreferrer" href="https://discord.com/users/1045909242101633126"><svg width="24px" height="24px" className="social_svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dba895"><path d="M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>
        <div className="hover:bg-idktbh rounded-xl transition-all"><a data-tooltip-id="my-tooltip" data-tooltip-content="AuthFr@proton.me" data-tooltip-place="top" className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring" target="_blank" rel="noreferrer" href="mailto:AuthFr@proton.me"><svg width="24px" height="24px" className="social_svg" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dba895"><path d="M7 9l5 3.5L17 9" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="#dba895" stroke-width="1.5"></path></svg></a></div>
        <div className="hover:bg-idktbh rounded-xl transition-all"><a data-tooltip-id="my-tooltip" data-tooltip-content="authtbh" data-tooltip-place="top" className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring" target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/authtbh"><svg width="24px" height="24px" className="social_svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dba895"><path d="M17 11.6V15a6 6 0 01-6 6H9a6 6 0 01-6-6v-3.4a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6zM12 9c0-1 .714-2 2.143-2v0A2.857 2.857 0 0017 4.143V3.5M8 9v-.5a3 3 0 013-3v0a2 2 0 002-2V3" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 11h2.5a2.5 2.5 0 010 5H17" stroke="#dba895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>
      </div>
     <div className="huh relative bottom-0 -mt-64 left-96 mr-96 md:opacity-100 opacity-0"><CardContainer className="inter-var">
      <CardBody className="flex -mr-96">
      
        <CardItem translateZ="100" className="relative top-0 right-0 ">
          <Image
            src="https://i.pinimg.com/564x/dc/90/6f/dc906f75008acf3d758b38c8612935e1.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer></div>
      <Tooltip id="my-tooltip"  />
   </div>


  )
  
}

export default Profile;
