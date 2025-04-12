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
          className="md:max-w-4xl text-pretty max-w-2xl mt-12 text-base md:text-xl text-start leading-relaxed "
          animation="fadeIn"
          by="character"
        >
          My name is Malik. I live in Samarinda, East Kalimantan, Indonesia. I have an interest in frontend development and want to learn more. I am still young and have not experienced much, but if you need a young man with high enthusiasm in programming, I'm your guy.
        </TextAnimate>

        <TextAnimate
          className="md:max-w-4xl text-pretty max-w-2xl mt-6 text-base md:text-xl text-start leading-relaxed"
          animation="fadeIn"
          by="character"
          delay={0.2}
        >
          In my spare time, I draw anime characters and explore new technologies that excite me. I'm also passionate about astronomy—looking at the starry night sky brings me peace.
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
  const SkillSection = ({
    title,
    icons,
  }: {
    title: string;
    icons: string[];
  }) => (
    <div className="text-start">
      <h2 className="mb-4 font-semibold md:text-2xl text-xl">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {icons.map((icon, idx) => (
          <div
            key={idx}
            className="shadow-md shadow-blue-400 rounded-lg md:p-4 md:px-5 p-2 px-3 bg-zinc-400/20"
          >
            <i className={`${icon} text-3xl text-blue-500`}></i>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col items-center justify-around px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl border-l-2 pl-12 pb-5 dark:border-white/70">
          <h1 className="font-['Markazi_Text'] text-5xl md:text-6xl lg:text-8xl my-8 text-center md:text-start">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>

          <TextAnimate
            className="max-w-[700px] mb-10 text-center md:text-start"
            animation="fadeIn"
            by="line"
            as="p"
            delay={0.3}
          >
            {`Passionate Web Developer with 2 years of practical learning experience, combined with a 3-year\nfoundation in Graphic Design from vocational high school. I enjoy building intuitive, visually\nengaging digital experiences by merging creativity with code.`}
          </TextAnimate>

          {/* Skill Sections */}
          <div className="flex flex-col gap-10">
            {/* LANGUAGES */}
            <SkillSection
              title="LANGUAGES"
              icons={[
                "devicon-css3-plain",
                "devicon-html5-plain",
                "devicon-javascript-plain",
                "devicon-mysql-original",
                "devicon-python-plain",
              ]}
            />

            {/* FRAMEWORKS */}
            <SkillSection
              title="FRAMEWORKS"
              icons={[
                "devicon-django-plain",
                "devicon-vitejs-plain",
                "devicon-react-original",
                "devicon-tailwindcss-original",
              ]}
            />

            {/* TOOLS */}
            <SkillSection
              title="TOOLS"
              icons={[
                "devicon-vercel-original",
                "devicon-vscode-plain",
                "devicon-nodejs-plain-wordmark",
                "devicon-photoshop-plain",
                "devicon-figma-plain",
                "devicon-github-original",
                "devicon-git-plain",
                "devicon-npm-original-wordmark",
              ]}
            />
          </div>

          {/* Education */}
          <div className=" mt-16">
            <h1 className="text-4xl font-bold mb-8">EDUCATION</h1>

            <div className="max-w-80 text-start dark:text-white/70">
              <p>Sep 2024 - Present</p>
              <span className="font-bold text-lg dark:text-white">
                Universitas Muhammadiyah Kalimantan Timur Samarinda
              </span>
              <p>Bachelors of Informatics Engineering</p>
            </div>

            <div className="max-w-80 text-start mt-12 dark:text-white/70">
              <p>Mar 2022 - Mar 2024</p>
              <span className="font-bold text-xl dark:text-white">
                SMKN 18 Samarinda
              </span>
              <p>Vocational Studies MultiMedia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* Project */
export const Project = () => {
  return (
    <>
      <h1>Project</h1>
    </>
  );
};

/* Contact */
export const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
};
