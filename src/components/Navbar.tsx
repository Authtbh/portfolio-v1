"use client";

import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Link, Button, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Element, scroller } from 'react-scroll';
export default function Navbar() {
  const options = {
    // Your options here, for example:
    duration: 500,
    smooth: true,
  };
  const scrollToTop = (e) => {
     // Corrected typo here
    scroll.scrollToTop(options);
    e.preventDefault();
  };


  const ScrollToWork = (e) => {
    scroller.scrollTo('works', {
      duration: 400,
      delay: 10,
      smooth: true,
      // If you're using a specific scrollable container:
      // containerId: 'ContainerElementID',
    });
    e.preventDefault();
  };


  const scrollToBottom = (e) => {
    e.preventDefault(); // Prevent default link behavior
    scroll.scrollToBottom(options); // Use predefined options
  };
  
  return (
    <div className="sticky md:top-10 top-0">
      <header>
        <div className="flex top-0 z-auto justify-center items-center gap-24 md:mt-5  max-w-screen-lg mx-auto text-primary-brown bg-secondary-brown md:w-96 py-5 rounded-xl opacity-90 w-full mt-0">
          <div className="flex-col-1 shrink-0">
          <a href="" duration={400} smooth={true} onClick={(e) => scrollToTop(e)}>/</a>
          </div>
          <div className="flex-col-1">
          <a href="" onClick={scrollToBottom}>about</a>
          </div>
          <div  className="flex-col-1">
            <a  href="" onClick={(e) => ScrollToWork(e)}>work</a>
          </div>
        </div>
      </header>
    </div>
  );
}
