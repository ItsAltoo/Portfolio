"use client";
 
import { useEffect, useState } from "react";
import { Particles } from "./magicui/particles";
import { useTheme } from "./theme-provider";


export const Heading = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);


  return (
    <div className="relative h-full w-full flex items-center justify-center ">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
      <h1 className="text-5xl font-bold z-10">Welcome ✨</h1>
    </div>
  );
};
