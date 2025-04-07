// Home.tsx
import Navbar from "@/components/Navbar";
import { useRef } from "react";

export const Home = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        resumeRef={resumeRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <div className="bg-red-500 w-[80%] items-center justify-center mx-auto">
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Heading</h1>
        </div>

        <div
          className="h-screen flex items-center justify-center"
          ref={aboutRef}
        >
          <h1 className="text-4xl font-bold text-white">About</h1>
        </div>

        <div className="h-screen" ref={resumeRef}></div>
        <div className="h-screen" ref={projectRef}></div>
        <div className="h-screen" ref={contactRef}></div>
      </div>
    </>
  );
};
