import React from 'react';

/**
 * Faded Commercial Embroidery Digitize Texture
 * Combines high-resolution embroidery thread sew-out photography with 
 * authentic CAD embroidery digitizing vectors (satin stitches, tatami fill,
 * vector bezier nodes, needle penetration points, and hoop crosshairs)
 * rendered with a refined faded effect over the blue background.
 */
export const EmbroideryDigitizeTexture: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Real Commercial Embroidery Sew-Out & Thread Weave Photo Layer */}
      <img
        src="https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=1200&q=80"
        alt=""
        className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay filter contrast-150 saturate-125"
        loading="eager"
      />

      {/* 2. Secondary Sew-Out Texture for Depth */}
      <img
        src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20 mix-blend-screen filter contrast-125"
        loading="eager"
      />

      {/* 3. Authentic CAD Embroidery Digitizing Stitch & Vector Blueprint Overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Tatami Stitch Weave Pattern */}
          <pattern id="cadTatamiPattern" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
            <path 
              d="M 0,6 L 12,6 M 0,18 L 24,18 M 12,12 L 24,12 M 0,0 L 24,0" 
              stroke="#FFFFFF" 
              strokeWidth="1.2" 
              strokeDasharray="4,2" 
              fill="none" 
            />
            {/* Needle drops */}
            <circle cx="6" cy="6" r="0.9" fill="#FEA800" opacity="0.9" />
            <circle cx="18" cy="18" r="0.9" fill="#FEA800" opacity="0.9" />
            <circle cx="12" cy="12" r="0.9" fill="#FFFFFF" opacity="0.8" />
          </pattern>

          {/* Diagonal Satin Stitch Pattern */}
          <pattern id="cadSatinPattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
            <line x1="0" y1="0" x2="40" y2="40" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2,3" opacity="0.6" />
            <line x1="0" y1="20" x2="20" y2="40" stroke="#7BB5F7" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.5" />
            <line x1="20" y1="0" x2="40" y2="20" stroke="#7BB5F7" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.5" />
          </pattern>
        </defs>

        {/* Global Tatami Stitch Background */}
        <rect width="100%" height="100%" fill="url(#cadTatamiPattern)" />
        <rect width="100%" height="100%" fill="url(#cadSatinPattern)" opacity="0.4" />

        {/* Digitizing Hoop Frame & Centering Crosshairs */}
        <g stroke="#FFFFFF" strokeWidth="1" opacity="0.25">
          {/* Embroidery Hoop Outline */}
          <circle cx="300" cy="400" r="260" fill="none" strokeDasharray="6,4" strokeWidth="1.5" />
          <circle cx="300" cy="400" r="220" fill="none" strokeDasharray="3,3" strokeWidth="0.8" />
          {/* Hoop Center Crosshair */}
          <line x1="300" y1="120" x2="300" y2="680" strokeDasharray="4,4" />
          <line x1="20" y1="400" x2="580" y2="400" strokeDasharray="4,4" />
          {/* Millimeter / Degree tick marks */}
          <circle cx="300" cy="140" r="3" fill="#FFFFFF" />
          <circle cx="300" cy="660" r="3" fill="#FFFFFF" />
          <circle cx="40" cy="400" r="3" fill="#FFFFFF" />
          <circle cx="560" cy="400" r="3" fill="#FFFFFF" />
        </g>

        {/* Digitized Vector Wave Curves with Nodes (simulating digitizing software vector path) */}
        <g opacity="0.45">
          {/* Satin Stitch Curve 1 */}
          <path
            d="M 50,180 Q 200,90 350,190 T 550,220"
            fill="none"
            stroke="#FEA800"
            strokeWidth="1.8"
            strokeDasharray="4,2"
          />
          {/* Vector Control Nodes along curve */}
          <rect x="46" y="176" width="8" height="8" fill="#FFFFFF" stroke="#FEA800" strokeWidth="1.5" />
          <circle cx="200" cy="90" r="4.5" fill="#FEA800" stroke="#FFFFFF" strokeWidth="1" />
          <rect x="346" y="186" width="8" height="8" fill="#FFFFFF" stroke="#FEA800" strokeWidth="1.5" />
          <circle cx="550" cy="220" r="4.5" fill="#FEA800" stroke="#FFFFFF" strokeWidth="1" />

          {/* Satin Column Angled Stitch Lines */}
          <g stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6">
            <line x1="70" y1="165" x2="80" y2="185" />
            <line x1="110" y1="135" x2="120" y2="155" />
            <line x1="150" y1="110" x2="160" y2="130" />
            <line x1="240" y1="115" x2="250" y2="135" />
            <line x1="290" y1="145" x2="300" y2="165" />
            <line x1="400" y1="195" x2="410" y2="215" />
            <line x1="460" y1="205" x2="470" y2="225" />
          </g>

          {/* Underlay Contour Stitch Line */}
          <path
            d="M 80,620 Q 250,520 400,640 T 550,600"
            fill="none"
            stroke="#7BB5F7"
            strokeWidth="1.6"
            strokeDasharray="3,3"
          />
          <circle cx="80" cy="620" r="4" fill="#7BB5F7" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="400" cy="640" r="4" fill="#7BB5F7" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="550" cy="600" r="4" fill="#7BB5F7" stroke="#FFFFFF" strokeWidth="1" />
        </g>

        {/* Faded DST / EMB Stitch Coordinate Annotations */}
        <g fill="#FFFFFF" opacity="0.3" fontSize="10" fontFamily="monospace">
          <text x="35" y="60">DST_X: +142.8mm</text>
          <text x="35" y="75">DST_Y: -088.4mm</text>
          <text x="35" y="90">STITCHES: 14,850</text>
          <text x="440" y="60">DENSITY: 0.40mm</text>
          <text x="440" y="75">SPEED: 850 SPM</text>
        </g>
      </svg>

      {/* 4. Vignette Gradient to keep central typography and logo pristine */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A47B0]/60 via-transparent to-[#0A47B0]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#156FE5]/20 to-[#0A47B0]/30" />
    </div>
  );
};
