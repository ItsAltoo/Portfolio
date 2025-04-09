import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { ModeToggle } from "./components/ModeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Heading } from "./components/Heading";
import { AboutMe } from "./app/content";

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

          <div className="relative overflow-hidden" ref={aboutRef}>
            {/* left bottom */}
            <div className="size-32 rotate-12 bg-blue-500 rounded-md absolute -bottom-4 -left-6 opacity-20 shadow-md dark:shadow-black shadow-zinc-700"></div>
            <div className="size-24 rotate-45 bg-blue-500 rounded-md absolute -bottom-10 -left-6 shadow-md dark:shadow-black shadow-zinc-700"></div>
            {/* right bottom */}
            <div className="size-48 rotate-12 bg-blue-500 rounded-md absolute -bottom-4 -right-6 opacity-20 shadow-md dark:shadow-black shadow-zinc-700"></div>
            <div className="size-24 rotate-45 bg-blue-500 rounded-md absolute -bottom-10 right-6 shadow-md dark:shadow-black shadow-zinc-700"></div>
            <div className="size-24 -rotate-45 bg-blue-500 rounded-md absolute -bottom-3 -right-6 shadow-md dark:shadow-black shadow-zinc-700"></div>
            <AboutMe />
          </div>

          <div className="h-screen" ref={resumeRef}>
            <p>----</p>
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
