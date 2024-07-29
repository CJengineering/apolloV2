"use client";

import React, { useEffect, useRef } from 'react';

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let width: number, height: number;
    let pixels: [number, number, number, number, string, number][] = [];
    let coloredPixels: { x: number; y: number; alpha: number; color: string; vx: number; vy: number; }[] = [];
    const colors = ['#540045', '#C60052', '#FF714B', '#EAFF87', '#ACFFE9'];
    let currentPixel = 0;
    const mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0, l = pixels.length; i < l; i++) {
        pixels[i][4] = '#222';
      }

      for (let i = 0, l = coloredPixels.length; i < l; i++) {
        const pix = Math.floor(coloredPixels[i].y / 10) * (Math.floor(width / 10) + 1) + Math.floor(coloredPixels[i].x / 10);
        if (pixels[pix]) {
          pixels[pix][4] = coloredPixels[i].color;
          pixels[pix][5] = coloredPixels[i].alpha;
        }

        if (coloredPixels[i].alpha > 0) coloredPixels[i].alpha -= 0.008;
        if (coloredPixels[i].alpha < 0) coloredPixels[i].alpha = 0;
        coloredPixels[i].x += coloredPixels[i].vx;
        coloredPixels[i].y += coloredPixels[i].vy;
      }

      for (let i = 0, l = pixels.length; i < l; i++) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#222';
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
        ctx.globalAlpha = pixels[i][5];
        ctx.fillStyle = pixels[i][4];
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      pixels = [];
      for (let y = 0; y < height / 10; y++) {
        for (let x = 0; x < width / 10; x++) {
          pixels.push([x * 10, y * 10, 8, 8, '#222', 1]);
        }
      }
    };

    const draw = () => {
      launchPixel();
      launchPixel();
      drawGrid();
      requestAnimationFrame(draw);
    };

    const initColoredPixels = () => {
      for (let i = 0; i < 300; i++) {
        coloredPixels.push({
          x: width / 2,
          y: height / 2,
          alpha: 0,
          color: colors[i % 5],
          vx: -1 + Math.random() * 2,
          vy: -1 + Math.random() * 2,
        });
      }
    };

    const launchPixel = () => {
      coloredPixels[currentPixel].x = mousePosition.x;
      coloredPixels[currentPixel].y = mousePosition.y;
      coloredPixels[currentPixel].alpha = 1;

      currentPixel++;
      if (currentPixel > 299) currentPixel = 0;
    };

    resize();
    initColoredPixels();
    draw();

    const handleResize = resize;
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    };

    const touchMove = (e: TouchEvent) => {
      e.preventDefault();
      mousePosition.x = e.touches[0].pageX;
      mousePosition.y = e.touches[0].pageY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', touchMove);
    document.addEventListener('touchmove', touchMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', touchMove);
      document.removeEventListener('touchmove', touchMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-25"></canvas>;
};

export default CanvasAnimation;
