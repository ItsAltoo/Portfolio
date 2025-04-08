import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { ModeToggle } from "./components/ModeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Heading } from "./components/Heading";

function App() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <ThemeProvider>
        <ModeToggle />
        <Navbar
          headingRef={headingRef}
          aboutRef={aboutRef}
          resumeRef={resumeRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <div className="relative z-10">
          <div className="h-screen" ref={headingRef}>
            <Heading />
          </div>

          <div
            className="h-screen flex items-center justify-center"
            ref={aboutRef}
          >
            <h1 className="text-4xl font-bold ">About</h1>
          </div>

          <div className="h-screen" ref={resumeRef}>
            <h1>Resume</h1>
          </div>
          <div className="h-screen" ref={projectRef}>
            <h1>Project</h1>
          </div>
          <div className="h-screen" ref={contactRef}>
            <h1>Contact</h1>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
