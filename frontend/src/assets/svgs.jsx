import React from 'react';

// RM College Official Crest Emblem
export function RmCollegeLogo({ className = "w-10 h-10", size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#312e81" />
          <stop offset="50%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <filter id="glowEmblem" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#4338ca" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Outer Wreath Ring */}
      <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.85" />
      
      {/* Shield Base */}
      <path
        d="M50 12 L78 22 C78 52 50 76 50 86 C50 76 22 52 22 22 Z"
        fill="url(#shieldGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="3"
        filter="url(#glowEmblem)"
      />

      {/* Royal Crown on Top */}
      <path
        d="M38 24 L42 20 L50 26 L58 20 L62 24 L60 28 L40 28 Z"
        fill="url(#goldGrad)"
      />
      <circle cx="42" cy="19" r="1.5" fill="#fef08a" />
      <circle cx="50" cy="24" r="1.5" fill="#fef08a" />
      <circle cx="58" cy="19" r="1.5" fill="#fef08a" />

      {/* Open Book in Center */}
      <path
        d="M32 46 C38 43 46 44 50 48 C54 44 62 43 68 46 L68 62 C62 59 54 60 50 64 C46 60 38 59 32 62 Z"
        fill="#ffffff"
        stroke="#e2e8f0"
        strokeWidth="1.5"
      />
      <line x1="50" y1="48" x2="50" y2="64" stroke="#4338ca" strokeWidth="1.5" />
      {/* Book Lines */}
      <line x1="36" y1="50" x2="46" y2="52" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
      <line x1="36" y1="54" x2="46" y2="56" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
      <line x1="54" y1="52" x2="64" y2="50" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
      <line x1="54" y1="56" x2="64" y2="54" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

      {/* Star of Excellence */}
      <polygon
        points="50,33 52,38 57,38 53,41 55,46 50,43 45,46 47,41 43,38 48,38"
        fill="url(#goldGrad)"
      />
    </svg>
  );
}

// RIMI Robot Mascot Avatar
export function RimiAvatar({ size = 56, waving = false, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="rimiBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="rimiScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="rimiPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="rimiGlow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#7c3aed" floodOpacity="0.35" />
        </filter>
        <filter id="eyeGlow">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#38bdf8" floodOpacity="0.9" />
        </filter>
      </defs>

      {/* Antenna */}
      <line x1="60" y1="26" x2="60" y2="14" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="12" r="5" fill="#a855f7" filter="url(#rimiGlow)" />
      <circle cx="60" cy="12" r="2.5" fill="#f0abfc" />

      {/* Ear Pucks */}
      <rect x="22" y="38" width="8" height="24" rx="4" fill="url(#rimiPurple)" />
      <rect x="90" y="38" width="8" height="24" rx="4" fill="url(#rimiPurple)" />

      {/* Head Outer */}
      <rect x="26" y="24" width="68" height="52" rx="20" fill="url(#rimiBody)" stroke="#e2e8f0" strokeWidth="2" filter="url(#rimiGlow)" />

      {/* Screen Face */}
      <rect x="34" y="32" width="52" height="36" rx="14" fill="url(#rimiScreen)" />

      {/* Expressive Glowing Eyes */}
      <ellipse cx="48" cy="48" rx="6" ry="8" fill="#38bdf8" filter="url(#eyeGlow)" />
      <ellipse cx="72" cy="48" rx="6" ry="8" fill="#38bdf8" filter="url(#eyeGlow)" />
      <circle cx="50" cy="46" r="2" fill="#ffffff" />
      <circle cx="74" cy="46" r="2" fill="#ffffff" />

      {/* Smiling Mouth */}
      <path d="M55 58 Q60 62 65 58" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#eyeGlow)" />

      {/* Rosy Cheeks */}
      <circle cx="41" cy="54" r="2.5" fill="#f43f5e" opacity="0.6" />
      <circle cx="79" cy="54" r="2.5" fill="#f43f5e" opacity="0.6" />

      {/* Body */}
      <path d="M42 78 C42 74 78 74 78 78 L84 102 C84 108 36 108 36 102 Z" fill="url(#rimiBody)" stroke="#e2e8f0" strokeWidth="2" />
      
      {/* College Emblem badge on chest */}
      <circle cx="60" cy="92" r="7" fill="url(#rimiPurple)" />
      <path d="M57 92 L63 92 M60 89 L60 95" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

      {/* Arms */}
      {waving ? (
        <>
          {/* Left Arm Resting */}
          <path d="M38 82 Q28 88 32 98" stroke="url(#rimiBody)" strokeWidth="8" strokeLinecap="round" />
          {/* Right Arm Waving */}
          <path d="M82 82 Q96 74 98 62" stroke="url(#rimiPurple)" strokeWidth="8" strokeLinecap="round" />
          <circle cx="99" cy="60" r="5" fill="#a855f7" />
        </>
      ) : (
        <>
          <path d="M38 82 Q26 92 34 100" stroke="url(#rimiBody)" strokeWidth="7" strokeLinecap="round" />
          <path d="M82 82 Q94 92 86 100" stroke="url(#rimiBody)" strokeWidth="7" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

// 3D Stack of College Books matching Login Banner
export function CampusBooks3D({ className = "w-full max-w-sm" }) {
  return (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="bookBottomGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="bookMidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
        <linearGradient id="bookTopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <filter id="bookDropShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#1e1b4b" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Soft Ground Shadow */}
      <ellipse cx="210" cy="285" rx="160" ry="18" fill="#cbd5e1" opacity="0.6" filter="blur(6px)" />

      {/* Book 3 (Bottom): "Achieve More" - Warm Amber */}
      <g filter="url(#bookDropShadow)">
        {/* Book spine & pages */}
        <path d="M70 240 L350 240 L330 270 L50 270 Z" fill="#fef3c7" />
        <rect x="50" y="242" width="280" height="34" rx="6" fill="url(#bookBottomGrad)" />
        <rect x="330" y="246" width="16" height="26" rx="2" fill="#fef3c7" stroke="#e2e8f0" />
        {/* Book Title */}
        <text x="190" y="264" fill="#ffffff" fontWeight="700" fontSize="15" textAnchor="middle" letterSpacing="1">
          Achieve More
        </text>
      </g>

      {/* Book 2 (Middle): "Study Smart" - Royal Purple */}
      <g filter="url(#bookDropShadow)">
        <path d="M85 195 L340 195 L320 225 L65 225 Z" fill="#f3e8ff" />
        <rect x="65" y="198" width="255" height="34" rx="6" fill="url(#bookMidGrad)" />
        <rect x="320" y="202" width="16" height="26" rx="2" fill="#faf5ff" stroke="#e9d5ff" />
        {/* Book Title */}
        <text x="192" y="220" fill="#ffffff" fontWeight="700" fontSize="15" textAnchor="middle" letterSpacing="1">
          Study Smart
        </text>
      </g>

      {/* Book 1 (Top): "Dream Big" - Vibrant Ocean Blue */}
      <g filter="url(#bookDropShadow)">
        <path d="M100 150 L330 150 L310 180 L80 180 Z" fill="#dbeafe" />
        <rect x="80" y="154" width="230" height="34" rx="6" fill="url(#bookTopGrad)" />
        <rect x="310" y="158" width="16" height="26" rx="2" fill="#eff6ff" stroke="#bfdbfe" />
        {/* Book Title */}
        <text x="195" y="176" fill="#ffffff" fontWeight="700" fontSize="15" textAnchor="middle" letterSpacing="1">
          Dream Big
        </text>
      </g>

      {/* Graduation Cap (Mortarboard) sitting on top of books */}
      <g filter="url(#bookDropShadow)">
        {/* Cap skull cap base */}
        <path d="M165 146 C165 125 225 125 225 146 Z" fill="url(#capGrad)" />
        {/* Diamond Mortarboard */}
        <polygon points="195,85 270,115 195,145 120,115" fill="url(#capGrad)" stroke="#312e81" strokeWidth="2" />
        {/* Center button */}
        <circle cx="195" cy="115" r="4" fill="#fbbf24" />
        {/* Golden Tassel */}
        <path d="M195 115 Q245 120 250 148" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" fill="none" />
        <polygon points="247,148 253,148 255,160 245,160" fill="#fbbf24" />
      </g>

      {/* Rolled Diploma Scroll with Red Ribbon */}
      <g filter="url(#bookDropShadow)">
        <rect x="260" y="225" width="110" height="24" rx="12" fill="#fffbeb" stroke="#fef3c7" strokeWidth="2" transform="rotate(-14 260 225)" />
        <rect x="298" y="215" width="16" height="26" rx="3" fill="#ef4444" transform="rotate(-14 298 215)" />
        {/* Ribbon Tails */}
        <path d="M305 230 L315 248 L308 245 L300 249 Z" fill="#dc2626" />
      </g>
    </svg>
  );
}

// College Building Classical Architecture Vector
export function CampusBuildingArt({ className = "w-full" }) {
  return (
    <svg viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bldgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>

      {/* Neoclassical Pediment (Triangle Roof) */}
      <polygon points="300,40 390,90 210,90" fill="url(#bldgGrad)" stroke="#cbd5e1" strokeWidth="2" />
      
      {/* Clock / Emblem in Pediment */}
      <circle cx="300" cy="72" r="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="300" y1="72" x2="300" y2="65" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="300" y1="72" x2="305" y2="72" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />

      {/* Main Architrave */}
      <rect x="190" y="90" width="220" height="12" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />

      {/* Grand Columns */}
      {[220, 255, 290, 310, 345, 380].map((x, idx) => (
        <g key={idx}>
          <rect x={x - 4} y="102" width="12" height="90" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <rect x={x - 6} y="100" width="16" height="4" fill="#e2e8f0" />
          <rect x={x - 6} y="190" width="16" height="4" fill="#e2e8f0" />
        </g>
      ))}

      {/* Left Wing */}
      <rect x="50" y="98" width="150" height="96" fill="url(#bldgGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
      {[70, 105, 140, 175].map((wx, idx) => (
        <rect key={idx} x={wx} y="115" width="18" height="28" rx="9" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1" />
      ))}
      {[70, 105, 140, 175].map((wx, idx) => (
        <rect key={idx} x={wx} y="155" width="18" height="28" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1" />
      ))}

      {/* Right Wing */}
      <rect x="400" y="98" width="150" height="96" fill="url(#bldgGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
      {[420, 455, 490, 525].map((wx, idx) => (
        <rect key={idx} x={wx} y="115" width="18" height="28" rx="9" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1" />
      ))}
      {[420, 455, 490, 525].map((wx, idx) => (
        <rect key={idx} x={wx} y="155" width="18" height="28" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1" />
      ))}

      {/* Grand Entrance Stairs */}
      <rect x="180" y="194" width="240" height="8" fill="#e2e8f0" stroke="#cbd5e1" />
      <rect x="160" y="202" width="280" height="8" fill="#cbd5e1" stroke="#94a3b8" />
      <rect x="140" y="210" width="320" height="8" fill="#94a3b8" />

      {/* College Signboard */}
      <rect x="230" y="174" width="140" height="18" rx="3" fill="#1e1b4b" />
      <text x="300" y="186" fill="#facc15" fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
        RM COLLEGE OF ARTS & SCIENCE
      </text>
    </svg>
  );
}

// Golden Trophy Icon for CGPA & Achievements
export function TrophyGold({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="trophyCup" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <filter id="trophyGlow">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#eab308" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Handles */}
      <path d="M14 18 C8 18 8 32 18 34" stroke="url(#trophyCup)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M50 18 C56 18 56 32 46 34" stroke="url(#trophyCup)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Main Cup */}
      <path
        d="M18 12 L46 12 L44 32 C44 40 36 44 32 44 C28 44 20 40 20 32 Z"
        fill="url(#trophyCup)"
        filter="url(#trophyGlow)"
      />

      {/* Stem */}
      <rect x="29" y="44" width="6" height="8" fill="#ca8a04" />

      {/* Pedestal Base */}
      <path d="M22 52 L42 52 L45 58 L19 58 Z" fill="#854d0e" />
      <rect x="17" y="58" width="30" height="4" rx="2" fill="#713f12" />

      {/* Star on Cup */}
      <polygon points="32,20 34,24 38,24 35,27 36,31 32,29 28,31 29,27 26,24 30,24" fill="#ffffff" />
    </svg>
  );
}
