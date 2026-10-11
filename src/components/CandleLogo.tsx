import React from 'react';

interface CandleLogoProps {
  className?: string;
  height?: number | string;
  showSubtitle?: boolean;
}

export const CandleLogo: React.FC<CandleLogoProps> = ({ 
  className = "h-16 sm:h-20 w-auto", 
  height,
  showSubtitle = true 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox={showSubtitle ? "12 24 624 216" : "12 24 624 176"}
      fill="none" 
      style={{ height: height }}
      className={`select-none ${className}`}
      aria-label="Candle Digitizing - Embroidery Digitizing & Vector Art"
    >
      <defs>
        {/* Gradients for 3D depth and vibrant richness */}
        <linearGradient id="cFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF2B38" />
          <stop offset="60%" stopColor="#ED1C24" />
          <stop offset="100%" stopColor="#D91018" />
        </linearGradient>

        <linearGradient id="cBevelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BA0F16" />
          <stop offset="100%" stopColor="#8F050C" />
        </linearGradient>

        <linearGradient id="spoolCapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDE33" />
          <stop offset="100%" stopColor="#FEA800" />
        </linearGradient>

        <linearGradient id="candleYellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC800" />
          <stop offset="100%" stopColor="#FEA800" />
        </linearGradient>

        <linearGradient id="digitizingOrangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6330" />
          <stop offset="100%" stopColor="#F24713" />
        </linearGradient>

        <filter id="cSoftShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1F2244" floodOpacity="0.1" />
        </filter>
      </defs>

      <g filter="url(#cSoftShadow)">
        {/* ==================== 1. RED 3D EMBROIDERED LETTER 'C' ==================== */}
        {/* 3D Depth Shadow/Extrusion of 'C' */}
        <path 
          d="M 175 62 C 160 40, 136 28, 106 28 C 52 28, 16 68, 16 128 C 16 186, 54 228, 108 228 C 136 228, 162 214, 177 192 L 150 170 C 139 184, 124 192, 106 192 C 72 192, 50 164, 50 128 C 50 92, 72 64, 106 64 C 124 64, 139 72, 148 84 Z" 
          fill="url(#cBevelGrad)" 
          transform="translate(4, 6)"
        />

        {/* Main 3D Red 'C' Body */}
        <path 
          d="M 175 62 C 160 40, 136 28, 106 28 C 52 28, 16 68, 16 128 C 16 186, 54 228, 108 228 C 136 228, 162 214, 177 192 L 148 170 C 138 184, 124 192, 106 192 C 72 192, 50 164, 50 128 C 50 92, 72 64, 106 64 C 124 64, 138 72, 148 84 Z" 
          fill="url(#cFrontGrad)" 
        />

        {/* Inner highlights on C border for glossy 3D cushion feel */}
        <path 
          d="M 170 65 C 156 46, 134 35, 106 35 C 57 35, 24 72, 24 128 C 24 182, 58 220, 107 220 C 133 220, 156 208, 171 188" 
          stroke="#FFAAB0" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Running Embroidery Stitch on Letter 'C' (White Dashed Path) */}
        <path 
          d="M 162 67 C 147 49, 128 42, 105 42 C 64 42, 33 76, 33 128 C 33 178, 65 212, 106 212 C 128 212, 147 202, 162 186" 
          stroke="#FFFFFF" 
          strokeWidth="3.5" 
          strokeDasharray="8 6" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* ==================== 2. THREAD SPOOL INSIDE 'C' ==================== */}
        <g transform="translate(10, 0)">
          {/* Spool Bottom Flange */}
          <ellipse cx="106" cy="180" rx="28" ry="8" fill="#D98A00" />
          <ellipse cx="106" cy="177" rx="27" ry="7" fill="url(#spoolCapGrad)" />

          {/* Spool Thread Layers (stacked horizontal cylinders) */}
          {/* Layer 5: Cyan/Blue (Bottom) */}
          <path d="M 85 156 Q 106 163 127 156 L 127 172 Q 106 179 85 172 Z" fill="#0092E4" />
          <path d="M 85 164 Q 106 171 127 164 L 127 172 Q 106 179 85 172 Z" fill="#0079C2" opacity="0.6" />

          {/* Layer 4: Green */}
          <path d="M 85 142 Q 106 149 127 142 L 127 157 Q 106 164 85 157 Z" fill="#00AC4E" />

          {/* Layer 3: Red */}
          <path d="M 85 128 Q 106 135 127 128 L 127 143 Q 106 150 85 143 Z" fill="#E8212D" />

          {/* Layer 2: Orange */}
          <path d="M 85 114 Q 106 121 127 114 L 127 129 Q 106 136 85 129 Z" fill="#FF7800" />

          {/* Layer 1: Yellow (Top) */}
          <path d="M 85 100 Q 106 107 127 100 L 127 115 Q 106 122 85 115 Z" fill="#FFC800" />

          {/* Spool Top Flange */}
          <ellipse cx="106" cy="100" rx="27" ry="8" fill="#E59400" />
          <ellipse cx="106" cy="98" rx="27" ry="7" fill="url(#spoolCapGrad)" />
          {/* Spool Center Hole */}
          <ellipse cx="106" cy="98" rx="11" ry="3.5" fill="#8C5200" />
        </g>

        {/* ==================== 3. EMBROIDERY NEEDLE & THREAD SWOOP ==================== */}
        {/* Flowing Yellow Thread from spool, looping under text and entering needle eye */}
        <path 
          d="M 136 128 C 158 126, 172 165, 185 185 C 205 214, 255 220, 310 206 C 365 192, 440 205, 520 202 C 555 200, 580 188, 590 148 C 594 134, 586 120, 580 128" 
          stroke="#FFBA00" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* Embroidery Needle */}
        <g transform="translate(565, 115) rotate(22)">
          {/* Needle Shadow */}
          <path d="M 0 -38 L 8 45 L 0 54 L -8 45 Z" fill="#0C1B33" opacity="0.25" transform="translate(2, 4)" />
          {/* Needle Blade (Tapered Steel/Navy) */}
          <path d="M -4.5 -38 C -4.5 -44, 4.5 -44, 4.5 -38 L 3.5 44 L 0 58 L -3.5 44 Z" fill="#142850" />
          {/* Needle Eye Opening */}
          <rect x="-1.8" y="-30" width="3.6" height="15" rx="1.8" fill="#FAF9F5" />
          {/* Needle Steel Highlight */}
          <line x1="-1.5" y1="-10" x2="-1" y2="40" stroke="#4A6FA5" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* 3 Colorful Thread Droplets / Sparks Radiating from Needle Eye */}
        {/* Left Droplet: Green */}
        <path 
          d="M 578 94 C 578 90, 574 86, 570 86 C 566 86, 564 91, 566 95 C 568 99, 578 106, 578 94 Z" 
          fill="#3BB77E" 
        />
        {/* Middle Droplet: Red */}
        <path 
          d="M 596 90 C 601 87, 604 82, 601 78 C 598 74, 592 75, 589 79 C 586 84, 588 95, 596 90 Z" 
          fill="#FF3F53" 
        />
        {/* Right Droplet: Blue */}
        <path 
          d="M 606 106 C 612 105, 617 101, 614 96 C 611 92, 605 92, 602 96 C 598 101, 599 110, 606 106 Z" 
          fill="#0090FF" 
        />

        {/* ==================== 4. TYPOGRAPHY: CANDLE DIGITIZING ==================== */}
        {/* "Candle" in Fredoka / Rounded Bubble Yellow */}
        <text 
          x="200" 
          y="112" 
          fontFamily="'Fredoka', 'Quicksand', 'Arial Rounded MT Bold', sans-serif" 
          fontSize="82" 
          fontWeight="700" 
          fill="url(#candleYellowGrad)"
          letterSpacing="-1"
          style={{ paintOrder: 'stroke fill', stroke: '#E09400', strokeWidth: '1px' }}
        >
          Candle
        </text>

        {/* "Digitizing" in Fredoka / Rounded Bubble Orange */}
        <text 
          x="200" 
          y="180" 
          fontFamily="'Fredoka', 'Quicksand', 'Arial Rounded MT Bold', sans-serif" 
          fontSize="64" 
          fontWeight="700" 
          fill="url(#digitizingOrangeGrad)"
          letterSpacing="-0.5"
          style={{ paintOrder: 'stroke fill', stroke: '#C83505', strokeWidth: '0.8px' }}
        >
          Digitizing
        </text>

        {/* ==================== 5. SUBTITLE: EMBROIDERY DIGITIZING & VECTOR ART ==================== */}
        {showSubtitle && (
          <text 
            x="340" 
            y="226" 
            textAnchor="middle"
            fontFamily="'Outfit', 'Jost', -apple-system, BlinkMacSystemFont, sans-serif" 
            fontSize="16.5" 
            fontWeight="800" 
            fill="#1A2B4C" 
            letterSpacing="5.5"
          >
            EMBROIDERY DIGITIZING &amp; VECTOR ART
          </text>
        )}
      </g>
    </svg>
  );
};
