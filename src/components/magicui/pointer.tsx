"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

interface PointerProps extends Omit<HTMLMotionProps<"div">, "ref"> {}

export function Pointer({
  className,
  style,
  children,
  ...props
}: PointerProps): JSX.Element {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useSpring(1, { stiffness: 300, damping: 20 });
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const parentElement = containerRef.current.parentElement;

      if (parentElement) {
        parentElement.style.cursor = "none";

        const handleMouseMove = (e: MouseEvent) => {
          x.set(e.clientX);
          y.set(e.clientY);

          // Deteksi elemen di bawah cursor
          const hoveredElement = document.elementFromPoint(
            e.clientX,
            e.clientY
          );
          const isPointer =
            hoveredElement &&
            window.getComputedStyle(hoveredElement).cursor === "pointer";

          // Set scale berdasarkan tipe cursor
          scale.set(isPointer ? 1.6 : 1);
        };

        const handleMouseEnter = () => setIsActive(true);
        const handleMouseLeave = () => setIsActive(false);

        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", handleMouseEnter);
        parentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          parentElement.style.cursor = "";
          parentElement.removeEventListener("mousemove", handleMouseMove);
          parentElement.removeEventListener("mouseenter", handleMouseEnter);
          parentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [x, y, scale]);

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
          className="pointer-events-none fixed z-50"
          style={{
            top: y,
            left: x,
            scale: scale,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        >
          <div
            className={cn(
              "h-5 w-5 rounded-full bg-blue-500/70 border-2 dark:border-white border-zinc-500",
              className
            )}
          />
        </motion.div>
        
        )}
      </AnimatePresence>
    </>
  );
}
