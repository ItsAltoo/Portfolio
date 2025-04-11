import { TextAnimate } from "@/components/magicui/text-animate";
import  Button  from "@mui/material/Button";

export const AboutMe = () => {
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
        <div className="mt-5">
          <Button className="" variant="outlined">Contact Me</Button>
        </div>
      </div>
    </>
  );
};

export const Resume = () => {
  return (
    <>
      <div className="h-screen justify-between items-start flex flex-col">
        <h1 className="font-['Markazi_Text']">My Resume</h1>
      </div>
    </>
  );
};
