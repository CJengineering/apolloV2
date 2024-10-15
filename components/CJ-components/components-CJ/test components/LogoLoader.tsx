"use client";
import LogoImg from "@/public/images/cj_logo/CJ English Red Heart.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoLoader() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev < 3 ? prev + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <motion.img
        src={LogoImg.src}
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        alt="logo"
        style={{ width: "100px" }}
      />

      <style jsx>{`
        .dot {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .dot.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
