import Navbar from "@/components/Navbar";
import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-[#608BC1] to-[#1f55b2]" />
      <div className="relative z-10">
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
      </div>
    </>
  );
}

export default App;
