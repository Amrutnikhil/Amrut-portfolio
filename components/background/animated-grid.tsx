'use client';

import React from 'react';

export function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        style={{
          opacity: 0.15,
        }}
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#00D4FF"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id="grid-alt"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#00D4FF"
              strokeWidth="0.3"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-alt)" />
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated scan lines */}
      <div className="absolute inset-0 animate-scan-line">
        <div
          className="absolute inset-x-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)',
            top: '50%',
          }}
        />
      </div>
    </div>
  );
}
