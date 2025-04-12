import { TextAnimate } from "@/components/magicui/text-animate";
import Button from "@mui/material/Button";
import React from "react";

interface ButtonProps {
  aboutToContact: React.RefObject<HTMLDivElement | null>;
}

/* About Me */
export const AboutMe: React.FC<ButtonProps> = ({ aboutToContact }) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative h-full flex flex-col justify-center px-6 md:px-24">
        <div className="flex items-center gap-2">
          <TextAnimate
            className="text-4xl md:text-7xl font-semibold italic text-left"
            animation="slideLeft"
            by="character"
          >
            About
          </TextAnimate>
          <TextAnimate
            className="text-4xl md:text-7xl font-semibold italic text-left text-blue-500"
            animation="slideLeft"
            by="character"
            delay={0.2}
          >
            Me
          </TextAnimate>
        </div>

        <TextAnimate
          className="max-w-4xl mt-12 text-base md:text-2xl text-justify leading-relaxed"
          animation="fadeIn"
          by="character"
        >
          My name is Malik. I live in Samarinda, East Kalimantan, Indonesia. I
          have an interest in frontend development and want to learn more. I am
          still young and have not experienced much, but if you need a young man
          with high enthusiasm in programming, I'm your guy.
        </TextAnimate>

        <TextAnimate
          className="max-w-4xl mt-6 text-base md:text-2xl text-justify leading-relaxed"
          animation="fadeIn"
          by="character"
          delay={0.2}
        >
          In my spare time, I draw anime characters and explore new technologies
          that excite me. I'm also passionate about astronomy—looking at the
          starry night sky brings me peace.
        </TextAnimate>
        <div className="mt-8 ml-4">
          <Button
            className="h-16 w-40"
            variant="outlined"
            onClick={() => scrollToSection(aboutToContact)}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </>
  );
};

/* Resume */
export const Resume = () => {
  return (
    <>
      <div className="h-screen justify-around items-start flex flex-col">
        <div className="">
          <h1 className="font-['Markazi_Text'] text-center">My Resume</h1>

          {/* Languages etc. */}
          <div className=" flex flex-col">
            <div className="text-center border border-zinc-400 my-3 rounded-lg p-4 bg-zinc-400/10">
              <h1 className="mb-3 font-semibold text-2xl">LANGUAGES</h1>
              <i className="devicon-css3-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-html5-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-javascript-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-mysql-original text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-python-plain text-3xl my-3 mx-3 text-blue-500"></i>
            </div>
            <div className="text-center border border-zinc-400 my-3 rounded-lg p-4 bg-zinc-400/10">
              <h1 className="mb-3 font-semibold text-2xl">FRAMEWORKS</h1>
              <i className="devicon-django-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-vitejs-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-react-original text-3xl my-3 mx-3 text-blue-500"></i>
            </div>
            <div className="text-center border border-zinc-400 my-3 rounded-lg p-4 bg-zinc-400/10">
              <h1 className="mb-3 font-semibold text-2xl">TOOLS</h1>
              <i className="devicon-vercel-original text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-vscode-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-nodejs-plain-wordmark text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-photoshop-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-figma-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-github-original text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-git-plain text-3xl my-3 mx-3 text-blue-500"></i>
              <i className="devicon-npm-original-wordmark text-3xl my-3 mx-3 text-blue-500"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
