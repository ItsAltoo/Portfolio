import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { ModeToggle } from "./components/ModeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Heading } from "./components/Heading";
import { AboutMe, Resume } from "./app/content";
import { ParallaxBoxes } from "./components/Box";
import { Pointer } from "./components/magicui/pointer";

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

          <div className="relative overflow-hidden h-screen" ref={aboutRef}>
            <ParallaxBoxes />
            <AboutMe aboutToContact={contactRef} />
          </div>

          <div className="h-screen" ref={resumeRef}>
            <Resume />
          </div>
          <div className="h-screen" ref={projectRef}>
            <h1>Project</h1>
          </div>
          <div className="h-screen" ref={contactRef}>
            <h1>Contact</h1>
          </div>
        </div>

        {/* Pointer */}
        <Pointer />
      </ThemeProvider>
    </>
  );
}

export default App;
