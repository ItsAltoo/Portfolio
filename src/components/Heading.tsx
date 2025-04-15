"use client";

import { useEffect, useState, useMemo } from "react";
import { Particles } from "./magicui/particles";
import { useTheme } from "./theme-provider";


export const Heading = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#CBDCEB");

  const staticText = "Hello, I am ";
  const coloredText = "Malik S.A";

  const fullText = useMemo(() => staticText + coloredText, []);

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    setColor(theme === "dark" ? "#CBDCEB" : "#133E87");
  }, [theme]);

  useEffect(() => {
    if (pause) return;

    const delay = isDeleting ? 80 : 120;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 1500);
        }
      } else {
        setDisplayedText(fullText.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, pause, fullText]);

  const isColored = displayedText.length > staticText.length;
  const normalPart = displayedText.slice(0, staticText.length);
  const bluePart = displayedText.slice(staticText.length);

  return (
    <div className="relative h-full w-full flex items-center">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
      <div className="relative flex flex-col items-start justify-center h-full w-full text-left px-4 pl-6 sm:pl-10 md:pl-20">
        <div className="w-max">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold border-r-4 dark:border-white border-black pr-3 overflow-hidden whitespace-nowrap min-h-[2.5rem]">
            {normalPart}
            {isColored && <span className="brand-blue">{bluePart}</span>}
          </h1>
        </div>


        
        <p className="mt-4 text-base sm:text-lg md:text-xl text-left z-10 max-w-2xl md:max-w-3xl">
          I’m a driven Web Developer and Graphic Designer, passionate about
          blending aesthetics with functionality. Always exploring new ideas to
          push digital experiences to the next level.
        </p>
      </div>
    </div>
  );
};
