import React from 'react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Delicate Arctic Mint & Glacier Blue background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Luminous ambient radial gradients */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-teal-300/20 blur-[140px] will-change-transform" />
      <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] rounded-full bg-sky-300/20 blur-[150px] will-change-transform" />
      <div className="absolute top-2/3 -left-32 w-[700px] h-[700px] rounded-full bg-emerald-200/20 blur-[160px] will-change-transform" />
      <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-300/20 blur-[150px] will-change-transform" />

      {/* Soft light top atmospheric blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30 pointer-events-none" />
    </div>
  );
}
