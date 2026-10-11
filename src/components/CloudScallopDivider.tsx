import React from 'react';

interface CloudScallopDividerProps {
  className?: string;
}

export const CloudScallopDivider: React.FC<CloudScallopDividerProps> = ({ className = '' }) => {
  return (
    <>
      {/* ================= DESKTOP VERTICAL SCALLOPED CLOUD DIVIDER ================= */}
      <div 
        className={`hidden lg:block absolute -right-[1px] top-0 bottom-0 w-20 lg:w-24 xl:w-28 h-full pointer-events-none z-10 ${className}`}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 160 800" 
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[-2px_0_8px_rgba(13,85,200,0.15)]"
        >
          <defs>
            {/* Graceful Vertical Cloud Path with organic rounded lobes */}
            <path
              id="desktopCloudScallopPath"
              d="
                M 160,0
                L 142,0
                C 126,25 116,55 116,85
                C 116,115 128,135 138,148
                C 114,162 96,195 96,238
                C 96,275 112,305 132,322
                C 106,336 84,372 84,418
                C 84,462 106,498 128,514
                C 102,530 82,568 82,612
                C 82,652 100,685 124,702
                C 104,718 88,752 88,790
                C 88,794 89,797 90,800
                L 160,800
                Z
              "
            />
          </defs>

          {/* Layer 1: Deep Sky-Blue Cloud Layer (Back) */}
          <use 
            href="#desktopCloudScallopPath" 
            transform="translate(-16, 0)" 
            fill="#388BF2" 
            opacity="0.32" 
          />

          {/* Layer 2: Soft Sky-Blue Cloud Layer (Middle) */}
          <use 
            href="#desktopCloudScallopPath" 
            transform="translate(-8, 0)" 
            fill="#7BB5F7" 
            opacity="0.55" 
          />

          {/* Layer 3: Solid White Cloud Boundary Layer (Front - seamlessly joins white form) */}
          <use 
            href="#desktopCloudScallopPath" 
            transform="translate(0, 0)" 
            fill="#FFFFFF" 
          />
        </svg>
      </div>

      {/* ================= MOBILE / TABLET HORIZONTAL SCALLOPED CLOUD DIVIDER ================= */}
      <div 
        className={`block lg:hidden absolute -bottom-[1px] left-0 right-0 h-10 sm:h-12 w-full pointer-events-none z-10 ${className}`}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 800 160" 
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[0_-2px_8px_rgba(13,85,200,0.12)]"
        >
          <defs>
            {/* Graceful Horizontal Cloud Path with organic rounded lobes */}
            <path
              id="mobileCloudScallopPath"
              d="
                M 0,160
                L 0,142
                C 25,126 55,116 85,116
                C 115,116 135,128 148,138
                C 162,114 195,96 238,96
                C 275,96 305,112 322,132
                C 336,106 372,84 418,84
                C 462,84 498,106 514,128
                C 530,102 568,82 612,82
                C 652,82 685,100 702,124
                C 718,104 752,88 790,88
                C 794,88 797,89 800,90
                L 800,160
                Z
              "
            />
          </defs>

          {/* Layer 1: Deep Sky-Blue Cloud Layer (Back) */}
          <use 
            href="#mobileCloudScallopPath" 
            transform="translate(0, -14)" 
            fill="#388BF2" 
            opacity="0.32" 
          />

          {/* Layer 2: Soft Sky-Blue Cloud Layer (Middle) */}
          <use 
            href="#mobileCloudScallopPath" 
            transform="translate(0, -7)" 
            fill="#7BB5F7" 
            opacity="0.55" 
          />

          {/* Layer 3: Solid White Cloud Boundary Layer (Front - seamlessly joins white form) */}
          <use 
            href="#mobileCloudScallopPath" 
            transform="translate(0, 0)" 
            fill="#FFFFFF" 
          />
        </svg>
      </div>
    </>
  );
};
