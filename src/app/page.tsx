"use client"; // indicates Client Component
import Profile from "@/components/Profile";
import Navbar from "@/components/Navbar";
import "react-tooltip/dist/react-tooltip.css";
import Works from "@/components/Works";
import Code from "@/components/Code";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <div className="flex justify-start items-start">
        <div className="flex justify-center items-starafter:bg-gradient-conic after:from-transparent after:via-[#dba895] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-transparent before:dark:opacity-10 after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      </div>
      <Works />
      <Code />
      <Footer />
    </>
  );
}
