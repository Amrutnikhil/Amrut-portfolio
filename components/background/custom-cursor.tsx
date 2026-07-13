'use client';

import React, { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursor) {
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        cursor.style.opacity = '1';
      }
    };

    const animate = () => {
      if (trail && cursor) {
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;

        trail.style.left = cursorX - 5 + 'px';
        trail.style.top = cursorY - 5 + 'px';
      }
      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 pointer-events-none z-50 mix-blend-screen opacity-0 transition-opacity"
        style={{
          border: '2px solid #00D4FF',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(0,212,255,0.6)',
        }}
      />

      {/* Trail dot */}
      <div
        ref={trailRef}
        className="fixed w-2 h-2 pointer-events-none z-50 mix-blend-screen opacity-0 transition-opacity"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.6) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
        }}
      />
    </>
  );
}
