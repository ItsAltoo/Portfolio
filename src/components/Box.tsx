import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ParallaxBoxes = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // parallax saat kotak masuk viewport
  });

  // Ubah angka [awal, akhir] di bawah ini sesuai seberapa jauh kamu ingin kotaknya bergerak
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="absolute inset-0 pointer-events-none" ref={containerRef}>
      {/* Left Bottom Boxes */}
      <motion.div
        style={{ y: ySlow }}
        initial={{ rotate: 12 }}
        className="size-32 rotate-12 bg-blue-500 rounded-md absolute bottom-10 -left-6 opacity-20 shadow-md dark:shadow-black shadow-zinc-700"
      />
      <motion.div
        style={{ y: yMid }}
        initial={{ rotate: 45 }}
        className="size-24 rotate-45 bg-blue-500 rounded-md absolute bottom-12 -left-6 shadow-md dark:shadow-black shadow-zinc-700"
      />

      {/* Right Bottom Boxes */}
      <motion.div
        style={{ y: ySlow }}
        initial={{ rotate: 12 }}
        className="size-48 rotate-12 bg-blue-500 rounded-md absolute bottom-4 -right-6 opacity-20 shadow-md dark:shadow-black shadow-zinc-700"
      />
      <motion.div
        style={{ y: yMid }}
        initial={{ rotate: 45 }}
        className="size-24 rotate-45 bg-blue-500 rounded-md absolute bottom-10 right-6 shadow-md dark:shadow-black shadow-zinc-700"
      />
      <motion.div
        style={{ y: yFast }}
        initial={{ rotate: 45 }}
        className="size-24 -rotate-45 bg-blue-500 rounded-md absolute bottom-3 -right-6 shadow-md dark:shadow-black shadow-zinc-700"
      />
    </div>
  );
};
