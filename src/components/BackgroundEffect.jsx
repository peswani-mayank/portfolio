import React from 'react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden" aria-hidden="true">
      {/* Delicate background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Subtle radial ambient gradients */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[120px] will-change-transform" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[140px] will-change-transform" />
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[140px] will-change-transform" />

      {/* Subtle top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090d16]/30 to-[#090d16] pointer-events-none" />
    </div>
  );
}
