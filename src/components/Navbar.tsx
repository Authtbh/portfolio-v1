"use client";

import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Navbar() {
  return (
    <div className="sticky md:top-10 md:top-0">
      <header>
        <div className="flex top-0 z-auto justify-center items-center gap-24 md:mt-5  max-w-screen-lg mx-auto text-primary-brown bg-secondary-brown md:w-96 py-5 rounded-xl opacity-90 w-full mt-0">
          <div className="flex-col-1 shrink-0">
            <a href="#">/</a>
          </div>
          <div className="flex-col-1">
            <a href="#">about</a>
          </div>
          <div className="flex-col-1">
            <a href="#">work</a>
          </div>
        </div>
      </header>
    </div>
  );
}
