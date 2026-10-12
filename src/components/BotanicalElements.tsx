import React from 'react';

// Tasteful hand-crafted botanical SVG leaf paths and silhouettes
export const MonsteraLeaf = ({ className = 'w-12 h-12 text-[#1F6045]' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
    <path d="M50 5C45 15 35 25 25 35C15 45 10 60 15 75C20 90 35 95 50 95C65 95 80 90 85 75C90 60 85 45 75 35C65 25 55 15 50 5Z" opacity="0.15" />
    <path
      d="M50 8C48 18 42 28 32 38C22 48 18 62 23 75C28 87 40 92 50 92C60 92 72 87 77 75C82 62 78 48 68 38C58 28 52 18 50 8Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path d="M50 20V90M50 35C42 40 35 42 26 42M50 48C40 54 32 58 25 65M50 62C42 68 36 75 32 82M50 35C58 40 65 42 74 42M50 48C60 54 68 58 75 65M50 62C58 68 64 75 68 82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PalmBranch = ({ className = 'w-16 h-16 text-[#D6A84F]' }: { className?: string }) => (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" className={className} aria-hidden="true">
    <path d="M20 100C40 85 70 55 100 20" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 85C30 75 25 65 28 55M55 72C50 60 48 48 55 38M70 58C68 45 72 32 82 25M85 42C85 30 92 22 102 18" strokeWidth="2" strokeLinecap="round" />
    <path d="M45 88C55 88 65 82 72 75M60 74C72 72 80 65 88 55M75 58C88 55 96 46 102 36" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MayukhaLogoMark = ({ className = 'w-10 h-10 text-[#D6A84F]' }: { className?: string }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 60 60" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Outer organic hexagonal frame */}
      <circle cx="30" cy="30" r="27" stroke="#D6A84F" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
      <circle cx="30" cy="30" r="23" stroke="#D6A84F" strokeWidth="1.2" />
      {/* Botanical leaves arched */}
      <path
        d="M30 11C28 20 22 27 16 33C14 36 15 40 18 42C22 44 26 43 28 38L30 30L32 38C34 43 38 44 42 42C45 40 46 36 44 33C38 27 32 20 30 11Z"
        fill="#D6A84F"
        opacity="0.85"
      />
      <circle cx="30" cy="46" r="2" fill="#D6A84F" />
      <path d="M22 26C20 22 21 17 26 15" stroke="#D6A84F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M38 26C40 22 39 17 34 15" stroke="#D6A84F" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </div>
);

export const FloatingLeavesBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Atmospheric mist radial gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1F6045]/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#D6A84F]/10 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[#123B2A]/30 blur-2xl" />

      {/* Floating gentle leaf silhouettes */}
      <div className="absolute top-16 left-[8%] animate-float-leaf opacity-30 text-[#7D9B78]">
        <MonsteraLeaf className="w-16 h-16 transform -rotate-12" />
      </div>
      <div className="absolute top-36 right-[12%] animate-float-leaf-delayed opacity-25 text-[#D6A84F]">
        <PalmBranch className="w-20 h-20 transform rotate-45" />
      </div>
      <div className="absolute bottom-28 left-[15%] animate-float-leaf opacity-20 text-[#1F6045]">
        <PalmBranch className="w-24 h-24 transform -rotate-45" />
      </div>
      <div className="absolute bottom-20 right-[8%] animate-float-leaf-delayed opacity-25 text-[#7D9B78]">
        <MonsteraLeaf className="w-14 h-14 transform rotate-180" />
      </div>
    </div>
  );
};

export const OrganicCurvedDivider = ({
  fillColor = '#F7F1E3',
  flip = false,
  className = ''
}: {
  fillColor?: string;
  flip?: boolean;
  className?: string;
}) => (
  <div className={`w-full overflow-hidden leading-none select-none ${className} ${flip ? 'rotate-180' : ''}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-8 sm:h-12 md:h-16"
      style={{ color: fillColor }}
    >
      <path
        d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  </div>
);
