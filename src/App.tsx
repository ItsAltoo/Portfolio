import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { ModeToggle } from "./components/ModeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Heading } from "./components/Heading";
import { AboutMe, Project, Resume, Contact } from "./app/content";
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

          <div ref={resumeRef}>
            <Resume />
          </div>

          <div ref={projectRef}>
            <Project />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>

        {/* Pointer */}
        <Pointer />
      </ThemeProvider>
    </>
  );
}

export default App;
