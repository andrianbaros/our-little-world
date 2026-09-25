interface CharacterVectorProps {
  id: string;
  isSleeping?: boolean;
  isHovered?: boolean;
  isClicked?: boolean;
  className?: string;
}

export const CharacterVector = ({
  id,
  isSleeping = false,
  isHovered = false,
  isClicked = false,
  className = 'w-full h-full drop-shadow-md',
}: CharacterVectorProps) => {
  switch (id) {
    case 'riri':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ririBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFAEC0" />
              <stop offset="100%" stopColor="#FF6B8B" />
            </radialGradient>
            <filter id="ririGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#FF6B8B" floodOpacity="0.3" />
            </filter>
          </defs>
          <g filter="url(#ririGlow)">
            {/* Shadow beneath */}
            <ellipse cx="80" cy="165" rx="45" ry="10" fill="rgba(0,0,0,0.12)" />
            {/* Floppy Ears */}
            <path
              d="M50 65 C40 20 20 15 25 35 C28 50 45 70 52 75 Z"
              fill="#FF85A1"
              transform={isClicked ? "rotate(-10 50 65)" : isHovered ? "rotate(-5 50 65)" : ""}
              className="transition-transform duration-300"
            />
            <path d="M47 62 C39 28 26 24 30 38 C32 48 44 65 48 70 Z" fill="#FFE0E6" />
            <path
              d="M110 65 C120 20 140 15 135 35 C132 50 115 70 108 75 Z"
              fill="#FF85A1"
              transform={isClicked ? "rotate(10 110 65)" : isHovered ? "rotate(5 110 65)" : ""}
              className="transition-transform duration-300"
            />
            <path d="M113 62 C121 28 134 24 130 38 C128 48 116 65 112 70 Z" fill="#FFE0E6" />
            
            {/* Main Rounded Body */}
            <circle cx="80" cy="100" r="54" fill="url(#ririBody)" />
            {/* Belly highlight */}
            <ellipse cx="80" cy="115" rx="34" ry="28" fill="#FFF0F3" opacity="0.85" />

            {/* Little Feet */}
            <ellipse cx="62" cy="154" rx="14" ry="9" fill="#FF5E7E" />
            <ellipse cx="98" cy="154" rx="14" ry="9" fill="#FF5E7E" />

            {/* Little Arms */}
            <path d="M30 105 C20 110 15 125 28 128 C35 129 40 118 36 108 Z" fill="#FF85A1" />
            <path
              d={isClicked ? "M130 85 C145 75 155 90 140 102 C132 108 126 95 128 88 Z" : "M130 105 C140 110 145 125 132 128 C125 129 120 118 124 108 Z"}
              fill="#FF85A1"
              className="transition-all duration-300"
            />

            {/* Eyes */}
            {isSleeping ? (
              <g stroke="#9E1C38" strokeWidth="3" strokeLinecap="round">
                <path d="M60 95 Q68 102 76 95" />
                <path d="M84 95 Q92 102 100 95" />
              </g>
            ) : (
              <g>
                <circle cx="68" cy="94" r="7" fill="#3D121A" />
                <circle cx="66" cy="91" r="2.8" fill="#FFFFFF" />
                <circle cx="71" cy="96" r="1.5" fill="#FFFFFF" />

                <circle cx="92" cy="94" r="7" fill="#3D121A" />
                <circle cx="90" cy="91" r="2.8" fill="#FFFFFF" />
                <circle cx="95" cy="96" r="1.5" fill="#FFFFFF" />
              </g>
            )}

            {/* Rosy Cheeks */}
            <ellipse cx="56" cy="104" rx="7" ry="4" fill="#FF3366" opacity="0.45" />
            <ellipse cx="104" cy="104" rx="7" ry="4" fill="#FF3366" opacity="0.45" />

            {/* Tiny Cute Nose & Mouth */}
            <circle cx="80" cy="99" r="2" fill="#9E1C38" />
            {isClicked ? (
              <path d="M74 103 Q80 113 86 103 Z" fill="#FF3366" />
            ) : (
              <path d="M76 102 Q80 106 84 102" stroke="#9E1C38" strokeWidth="2.2" strokeLinecap="round" />
            )}

            {/* Little Star Explorer Badge */}
            <path
              d="M80 126 L82 131 L87 132 L83 135 L84 140 L80 137 L76 140 L77 135 L73 132 L78 131 Z"
              fill="#FFD166"
              stroke="#E0A820"
              strokeWidth="1"
            />
          </g>
        </svg>
      );

    case 'anan':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ananBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#A8E6CF" />
              <stop offset="100%" stopColor="#48BB78" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="46" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Round Bear Ears */}
          <circle cx="48" cy="60" r="18" fill="#48BB78" />
          <circle cx="48" cy="60" r="11" fill="#C6F6D5" />
          <circle cx="112" cy="60" r="18" fill="#48BB78" />
          <circle cx="112" cy="60" r="11" fill="#C6F6D5" />

          {/* Leaf Sprout on Head */}
          <path d="M80 50 C75 35 60 38 68 46 C75 52 80 50 80 50 Z" fill="#38A169" />
          <path d="M80 50 C85 35 100 38 92 46 C85 52 80 50 80 50 Z" fill="#68D391" />

          {/* Body */}
          <circle cx="80" cy="105" r="54" fill="url(#ananBody)" />
          <ellipse cx="80" cy="118" rx="34" ry="26" fill="#F0FFF4" opacity="0.9" />

          {/* Feet */}
          <ellipse cx="60" cy="155" rx="14" ry="9" fill="#38A169" />
          <ellipse cx="100" cy="155" rx="14" ry="9" fill="#38A169" />

          {/* Peaceful Calm Eyes */}
          <path d="M60 96 Q68 90 76 96" stroke="#1C6439" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M84 96 Q92 90 100 96" stroke="#1C6439" strokeWidth="2.8" strokeLinecap="round" />

          {/* Cheeks */}
          <ellipse cx="54" cy="105" rx="7" ry="4" fill="#68D391" opacity="0.6" />
          <ellipse cx="106" cy="105" rx="7" ry="4" fill="#68D391" opacity="0.6" />

          {/* Gentle Smile */}
          <ellipse cx="80" cy="102" rx="3" ry="2" fill="#1C6439" />
          <path d="M75 106 Q80 110 85 106" stroke="#1C6439" strokeWidth="2" strokeLinecap="round" />

          {/* Hands holding Warm Tea Cup */}
          <g transform="translate(68, 120)">
            <rect x="0" y="4" width="24" height="18" rx="5" fill="#FFFFFF" stroke="#38A169" strokeWidth="1.5" />
            <path d="M24 8 C28 8 28 16 24 16" stroke="#38A169" strokeWidth="1.5" fill="none" />
            {/* Steam */}
            <path d="M6 0 Q8 -5 6 -9" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 -2 Q14 -7 12 -11" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <ellipse cx="64" cy="130" rx="7" ry="6" fill="#48BB78" />
          <ellipse cx="96" cy="130" rx="7" ry="6" fill="#48BB78" />
        </svg>
      );

    case 'jeje':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="jejeBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFF3A8" />
              <stop offset="100%" stopColor="#ECC94B" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="44" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Playful Tuft */}
          <path d="M80 48 Q84 25 76 18 Q88 28 84 48" fill="#D69E2E" />

          {/* Cute point ears / antennae */}
          <ellipse cx="50" cy="55" rx="12" ry="16" fill="#ECC94B" transform="rotate(-20 50 55)" />
          <ellipse cx="110" cy="55" rx="12" ry="16" fill="#ECC94B" transform="rotate(20 110 55)" />

          {/* Body */}
          <circle cx="80" cy="102" r="53" fill="url(#jejeBody)" />
          <ellipse cx="80" cy="116" rx="32" ry="24" fill="#FFFFF0" opacity="0.9" />

          {/* Feet */}
          <ellipse cx="62" cy="153" rx="13" ry="8" fill="#D69E2E" />
          <ellipse cx="98" cy="153" rx="13" ry="8" fill="#D69E2E" />

          {/* Mischievous Wink Eyes */}
          <g>
            {/* Left Eye: Big sparkle */}
            <circle cx="66" cy="94" r="7.5" fill="#3E2723" />
            <circle cx="64" cy="91" r="3" fill="#FFFFFF" />
            {/* Right Eye: Wink */}
            <path d="M88 95 Q95 88 102 95" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Cheeks */}
          <ellipse cx="54" cy="103" rx="7" ry="4" fill="#FF6B6B" opacity="0.6" />
          <ellipse cx="106" cy="103" rx="7" ry="4" fill="#FF6B6B" opacity="0.6" />

          {/* Big mischievous open smile with tongue */}
          <path d="M72 104 Q80 120 88 104 Z" fill="#800020" />
          <path d="M75 111 Q80 118 85 111" fill="#FF70A6" />

          {/* Hands */}
          <ellipse cx="32" cy="110" rx="8" ry="7" fill="#ECC94B" />
          <ellipse cx="128" cy="110" rx="8" ry="7" fill="#ECC94B" />
        </svg>
      );

    case 'ata':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ataBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#90CDF4" />
              <stop offset="100%" stopColor="#3182CE" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="46" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Fluttering Hero Cape */}
          <path
            d="M32 95 C15 115 10 148 20 155 C35 150 42 120 45 105 Z"
            fill="#E53E3E"
            transform={isClicked ? "scale(1.15) translate(-10,-5)" : ""}
            className="transition-transform duration-300"
          />
          <path d="M128 95 C145 115 150 148 140 155 C125 150 118 120 115 105 Z" fill="#C53030" />

          {/* Round Ears with Brave Star */}
          <circle cx="48" cy="62" r="16" fill="#2B6CB0" />
          <circle cx="112" cy="62" r="16" fill="#2B6CB0" />

          {/* Body */}
          <circle cx="80" cy="102" r="54" fill="url(#ataBody)" />
          <ellipse cx="80" cy="116" rx="33" ry="25" fill="#EBF8FF" opacity="0.9" />

          {/* Hero Star on forehead */}
          <path d="M80 62 L82 66 L86 67 L83 70 L84 74 L80 72 L76 74 L77 70 L74 67 L78 66 Z" fill="#ECC94B" />

          {/* Determined sparkle eyes */}
          <circle cx="66" cy="94" r="7" fill="#1A365D" />
          <circle cx="64" cy="91" r="2.8" fill="#FFFFFF" />
          <polygon points="68,91 69,93 71,93 69,94 70,96 68,95 66,96 67,94 65,93 67,93" fill="#FEEBC8" />

          <circle cx="94" cy="94" r="7" fill="#1A365D" />
          <circle cx="92" cy="91" r="2.8" fill="#FFFFFF" />
          <polygon points="96,91 97,93 99,93 97,94 98,96 96,95 94,96 95,94 93,93 95,93" fill="#FEEBC8" />

          {/* Confident Smile */}
          <path d="M75 106 Q80 112 87 105" stroke="#1A365D" strokeWidth="2.4" strokeLinecap="round" />

          {/* Red scarf knot */}
          <path d="M68 120 Q80 126 92 120 Q80 130 68 120" fill="#E53E3E" />
          <circle cx="80" cy="122" r="4" fill="#ECC94B" />

          {/* Feet */}
          <ellipse cx="60" cy="154" rx="14" ry="9" fill="#2B6CB0" />
          <ellipse cx="100" cy="154" rx="14" ry="9" fill="#2B6CB0" />
        </svg>
      );

    case 'momo':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="momoBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#E9D8FD" />
              <stop offset="100%" stopColor="#9F7AEA" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="46" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Nightcap */}
          <path d="M52 65 C45 25 100 15 110 50 Z" fill="#B794F4" />
          <path d="M110 50 C125 45 138 60 135 75" stroke="#B794F4" strokeWidth="6" strokeLinecap="round" />
          <circle cx="136" cy="78" r="7" fill="#FEFCBF" />

          {/* Fluffy Marshmallow Body */}
          <circle cx="80" cy="106" r="54" fill="url(#momoBody)" />
          <ellipse cx="80" cy="120" rx="35" ry="26" fill="#FAF5FF" opacity="0.9" />

          {/* Sleepy closed eyelids */}
          <path d="M58 97 Q66 103 74 97" stroke="#44337A" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M86 97 Q94 103 102 97" stroke="#44337A" strokeWidth="2.8" strokeLinecap="round" />

          {/* Sleepy little mouth */}
          <ellipse cx="80" cy="105" rx="3" ry="4" fill="#44337A" />

          {/* Soft violet blush */}
          <ellipse cx="52" cy="105" rx="8" ry="5" fill="#D6BCFA" />
          <ellipse cx="108" cy="105" rx="8" ry="5" fill="#D6BCFA" />

          {/* Hugging Star Pillow */}
          <g transform="translate(68, 118)">
            <path
              d="M12 0 L15 8 L24 9 L17 15 L19 23 L12 18 L5 23 L7 15 L0 9 L9 8 Z"
              fill="#FEFCBF"
              stroke="#ECC94B"
              strokeWidth="1.2"
            />
          </g>

          {/* Floating Zzz */}
          <g className="animate-pulse" opacity="0.85">
            <text x="110" y="40" fill="#805AD5" fontSize="14" fontWeight="bold">z</text>
            <text x="122" y="28" fill="#9F7AEA" fontSize="18" fontWeight="bold">Z</text>
            <text x="136" y="14" fill="#B794F4" fontSize="22" fontWeight="bold">Z</text>
          </g>

          {/* Feet */}
          <ellipse cx="62" cy="155" rx="13" ry="8" fill="#805AD5" />
          <ellipse cx="98" cy="155" rx="13" ry="8" fill="#805AD5" />
        </svg>
      );

    case 'reirei':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="reireiBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#D6BCFA" />
              <stop offset="100%" stopColor="#6B46C1" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="42" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Pointy mystical ears */}
          <path d="M46 72 C35 30 50 20 62 55 Z" fill="#6B46C1" />
          <path d="M48 68 C40 38 52 30 59 56 Z" fill="#E9D8FD" />
          <path d="M114 72 C125 30 110 20 98 55 Z" fill="#6B46C1" />
          <path d="M112 68 C120 38 108 30 101 56 Z" fill="#E9D8FD" />

          {/* Moon Crown */}
          <path d="M74 48 C78 40 86 40 90 48 C85 45 79 45 74 48 Z" fill="#FEFCBF" />

          {/* Body */}
          <circle cx="80" cy="104" r="52" fill="url(#reireiBody)" />
          <ellipse cx="80" cy="116" rx="30" ry="24" fill="#F3E8FF" opacity="0.9" />

          {/* Mysterious celestial eyes */}
          <ellipse cx="66" cy="94" rx="6.5" ry="7.5" fill="#2D1B69" />
          <circle cx="64" cy="90" r="2.8" fill="#FFFFFF" />
          <polygon points="66,96 68,94 70,96 68,98" fill="#FEFCBF" />

          <ellipse cx="94" cy="94" rx="6.5" ry="7.5" fill="#2D1B69" />
          <circle cx="92" cy="90" r="2.8" fill="#FFFFFF" />
          <polygon points="94,96 96,94 98,96 96,98" fill="#FEFCBF" />

          {/* Constellation dots on cheeks */}
          <circle cx="54" cy="104" r="1.5" fill="#FEFCBF" />
          <circle cx="58" cy="106" r="1.5" fill="#FEFCBF" />
          <circle cx="52" cy="108" r="1.5" fill="#FEFCBF" />

          <circle cx="106" cy="104" r="1.5" fill="#FEFCBF" />
          <circle cx="102" cy="106" r="1.5" fill="#FEFCBF" />
          <circle cx="108" cy="108" r="1.5" fill="#FEFCBF" />

          {/* Shy quiet smile */}
          <path d="M77 106 Q80 109 83 106" stroke="#2D1B69" strokeWidth="1.8" strokeLinecap="round" />

          {/* Floating starlight crystal */}
          <g transform="translate(74, 122)">
            <polygon points="6,0 12,8 6,16 0,8" fill="#FEFCBF" stroke="#B794F4" strokeWidth="1" />
          </g>

          <ellipse cx="64" cy="154" rx="12" ry="7" fill="#553C9A" />
          <ellipse cx="96" cy="154" rx="12" ry="7" fill="#553C9A" />
        </svg>
      );

    case 'cici':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ciciBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FED7E2" />
              <stop offset="100%" stopColor="#ED64A6" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="45" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Fluffy ears with flower hairpin */}
          <circle cx="48" cy="62" r="17" fill="#ED64A6" />
          <circle cx="48" cy="62" r="10" fill="#FFF5F7" />
          <circle cx="112" cy="62" r="17" fill="#ED64A6" />
          <circle cx="112" cy="62" r="10" fill="#FFF5F7" />

          {/* Flower Hairpin on left ear */}
          <g transform="translate(36, 46)">
            <circle cx="8" cy="4" r="5" fill="#FFFFFF" />
            <circle cx="12" cy="8" r="5" fill="#FFFFFF" />
            <circle cx="8" cy="12" r="5" fill="#FFFFFF" />
            <circle cx="4" cy="8" r="5" fill="#FFFFFF" />
            <circle cx="8" cy="8" r="3.5" fill="#F6E05E" />
          </g>

          {/* Body */}
          <circle cx="80" cy="103" r="53" fill="url(#ciciBody)" />
          <ellipse cx="80" cy="116" rx="33" ry="25" fill="#FFF5F7" opacity="0.9" />

          {/* Cheerful big eyes */}
          <circle cx="66" cy="94" r="7" fill="#702459" />
          <circle cx="64" cy="91" r="2.8" fill="#FFFFFF" />
          <circle cx="69" cy="96" r="1.5" fill="#FFFFFF" />

          <circle cx="94" cy="94" r="7" fill="#702459" />
          <circle cx="92" cy="91" r="2.8" fill="#FFFFFF" />
          <circle cx="97" cy="96" r="1.5" fill="#FFFFFF" />

          {/* Cheeks */}
          <ellipse cx="54" cy="104" rx="7" ry="4" fill="#D53F8C" opacity="0.5" />
          <ellipse cx="106" cy="104" rx="7" ry="4" fill="#D53F8C" opacity="0.5" />

          {/* Joyful open mouth */}
          <path d="M74 104 Q80 114 86 104 Z" fill="#97266D" />
          <path d="M77 109 Q80 113 83 109" fill="#FED7D7" />

          {/* Basket of tiny pies / blossoms */}
          <g transform="translate(68, 122)">
            <rect x="0" y="4" width="24" height="14" rx="4" fill="#ECC94B" stroke="#B7791F" strokeWidth="1.2" />
            <path d="M3 4 C3 -2 21 -2 21 4" stroke="#B7791F" strokeWidth="1.5" fill="none" />
            <circle cx="7" cy="4" r="3" fill="#E53E3E" />
            <circle cx="13" cy="3" r="3" fill="#38A169" />
            <circle cx="18" cy="4" r="3" fill="#ED64A6" />
          </g>

          <ellipse cx="62" cy="154" rx="13" ry="8" fill="#D53F8C" />
          <ellipse cx="98" cy="154" rx="13" ry="8" fill="#D53F8C" />
        </svg>
      );

    case 'jeo':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="jeoBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#B2F5EA" />
              <stop offset="100%" stopColor="#319795" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="45" ry="10" fill="rgba(0,0,0,0.12)" />

          {/* Retro Headphones Headband */}
          <path d="M36 85 C36 38 124 38 124 85" stroke="#DD6B20" strokeWidth="6" strokeLinecap="round" fill="none" />
          <rect x="28" y="75" width="14" height="26" rx="6" fill="#ED8936" stroke="#C05621" strokeWidth="1.5" />
          <rect x="118" y="75" width="14" height="26" rx="6" fill="#ED8936" stroke="#C05621" strokeWidth="1.5" />

          {/* Body */}
          <circle cx="80" cy="104" r="52" fill="url(#jeoBody)" />
          <ellipse cx="80" cy="118" rx="33" ry="25" fill="#E6FFFA" opacity="0.9" />

          {/* Cool Sunglasses */}
          <g transform="translate(50, 84)">
            <rect x="2" y="2" width="24" height="15" rx="4" fill="#1A202C" />
            <line x1="5" y1="5" x2="16" y2="14" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="34" y="2" width="24" height="15" rx="4" fill="#1A202C" />
            <line x1="37" y1="5" x2="48" y2="14" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M26 8 L34 8" stroke="#1A202C" strokeWidth="3" />
          </g>

          {/* Smirk */}
          <path d="M78 108 Q84 113 90 106" stroke="#1D4044" strokeWidth="2.4" strokeLinecap="round" />

          {/* Finger gun / chill pose */}
          <ellipse cx="36" cy="116" rx="8" ry="7" fill="#319795" />
          <ellipse cx="124" cy="116" rx="8" ry="7" fill="#319795" />

          <ellipse cx="62" cy="154" rx="14" ry="8" fill="#285E61" />
          <ellipse cx="98" cy="154" rx="14" ry="8" fill="#285E61" />
        </svg>
      );

    case 'zyzy':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="zyzyBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FEEBC8" />
              <stop offset="100%" stopColor="#DD6B20" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="44" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Dynamic pointy energetic ears */}
          <polygon points="42,70 30,25 60,50" fill="#DD6B20" />
          <polygon points="44,66 36,34 56,52" fill="#FEEBC8" />
          <polygon points="118,70 130,25 100,50" fill="#DD6B20" />
          <polygon points="116,66 124,34 104,52" fill="#FEEBC8" />

          {/* Lightning head tuft */}
          <polygon points="76,46 84,30 81,42 88,40 78,54" fill="#ECC94B" />

          {/* Body */}
          <circle cx="80" cy="103" r="53" fill="url(#zyzyBody)" />
          <ellipse cx="80" cy="116" rx="32" ry="24" fill="#FFFAF0" opacity="0.9" />

          {/* Energetic Wide Eyes */}
          <circle cx="66" cy="94" r="8" fill="#7B341E" />
          <circle cx="64" cy="91" r="3.2" fill="#FFFFFF" />
          <circle cx="69" cy="97" r="1.6" fill="#FFFFFF" />

          <circle cx="94" cy="94" r="8" fill="#7B341E" />
          <circle cx="92" cy="91" r="3.2" fill="#FFFFFF" />
          <circle cx="97" cy="97" r="1.6" fill="#FFFFFF" />

          {/* Lightning Cheek marks */}
          <polygon points="50,102 54,98 52,104 56,103 49,109" fill="#ECC94B" />
          <polygon points="110,102 106,98 108,104 104,103 111,109" fill="#ECC94B" />

          {/* Excited wide grin */}
          <path d="M72 104 Q80 118 88 104 Z" fill="#C53030" />
          <path d="M74 104 L86 104" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

          {/* Feet */}
          <ellipse cx="60" cy="154" rx="14" ry="8" fill="#C05621" />
          <ellipse cx="100" cy="154" rx="14" ry="8" fill="#C05621" />
        </svg>
      );

    case 'coco':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="cocoBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FEFCBF" />
              <stop offset="100%" stopColor="#D69E2E" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="45" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Round Teddy Ears */}
          <circle cx="48" cy="62" r="18" fill="#D69E2E" />
          <circle cx="48" cy="62" r="11" fill="#FEFCBF" />
          <circle cx="112" cy="62" r="18" fill="#D69E2E" />
          <circle cx="112" cy="62" r="11" fill="#FEFCBF" />

          {/* Body */}
          <circle cx="80" cy="104" r="54" fill="url(#cocoBody)" />
          <ellipse cx="80" cy="118" rx="34" ry="26" fill="#FFFFF0" opacity="0.9" />

          {/* Warm curved eye smile */}
          <path d="M60 95 Q67 87 74 95" stroke="#5F370E" strokeWidth="3" strokeLinecap="round" />
          <path d="M86 95 Q93 87 100 95" stroke="#5F370E" strokeWidth="3" strokeLinecap="round" />

          {/* Warm radiant cheeks */}
          <ellipse cx="54" cy="103" rx="7" ry="4" fill="#ED8936" opacity="0.6" />
          <ellipse cx="106" cy="103" rx="7" ry="4" fill="#ED8936" opacity="0.6" />

          {/* Cute Nose & Happy Mouth */}
          <ellipse cx="80" cy="99" rx="3" ry="2" fill="#5F370E" />
          <path d="M74 104 Q80 110 86 104" stroke="#5F370E" strokeWidth="2.4" strokeLinecap="round" />

          {/* Holding Sunflower */}
          <g transform="translate(68, 116)">
            {/* Sunflower petals */}
            <circle cx="12" cy="12" r="12" fill="#ECC94B" />
            <circle cx="12" cy="12" r="6" fill="#7B341E" />
            <path d="M12 24 L12 30" stroke="#38A169" strokeWidth="2.5" />
          </g>

          <ellipse cx="62" cy="155" rx="14" ry="8" fill="#B7791F" />
          <ellipse cx="98" cy="155" rx="14" ry="8" fill="#B7791F" />
        </svg>
      );

    case 'hanhan':
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hanhanBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#C4F1F9" />
              <stop offset="100%" stopColor="#319795" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="165" rx="44" ry="10" fill="rgba(0,0,0,0.12)" />
          {/* Small gentle seal/otter ears */}
          <circle cx="50" cy="68" r="12" fill="#319795" />
          <circle cx="110" cy="68" r="12" fill="#319795" />

          {/* Water droplet shine on head */}
          <path d="M80 46 C77 36 80 32 80 32 C80 32 83 36 80 46 Z" fill="#76E4F7" />

          {/* Body */}
          <circle cx="80" cy="105" r="53" fill="url(#hanhanBody)" />
          <ellipse cx="80" cy="118" rx="32" ry="24" fill="#EBF8FF" opacity="0.9" />

          {/* Big glossy dewy eyes */}
          <ellipse cx="66" cy="94" rx="7" ry="8" fill="#1D4044" />
          <circle cx="64" cy="90" r="3" fill="#FFFFFF" />
          <circle cx="69" cy="96" r="1.8" fill="#FFFFFF" />
          <circle cx="65" cy="98" r="1" fill="#76E4F7" />

          <ellipse cx="94" cy="94" rx="7" ry="8" fill="#1D4044" />
          <circle cx="92" cy="90" r="3" fill="#FFFFFF" />
          <circle cx="97" cy="96" r="1.8" fill="#FFFFFF" />
          <circle cx="93" cy="98" r="1" fill="#76E4F7" />

          {/* Gentle Shy Cheeks */}
          <ellipse cx="54" cy="104" rx="7" ry="4" fill="#4FD1C5" opacity="0.6" />
          <ellipse cx="106" cy="104" rx="7" ry="4" fill="#4FD1C5" opacity="0.6" />

          {/* Cute Shy Mouth */}
          <ellipse cx="80" cy="101" rx="2.5" ry="1.8" fill="#1D4044" />
          <path d="M78 105 Q80 108 82 105" stroke="#1D4044" strokeWidth="1.8" strokeLinecap="round" />

          {/* Paper Boat */}
          <g transform="translate(68, 124)">
            <polygon points="12,0 22,8 2,8" fill="#FFFFFF" stroke="#4FD1C5" strokeWidth="1" />
            <polygon points="0,8 24,8 18,14 6,14" fill="#E2E8F0" stroke="#4FD1C5" strokeWidth="1" />
          </g>

          <ellipse cx="62" cy="154" rx="13" ry="8" fill="#285E61" />
          <ellipse cx="98" cy="154" rx="13" ry="8" fill="#285E61" />
        </svg>
      );

    case 'jayzee':
    default:
      return (
        <svg viewBox="0 0 160 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="jayzeeBody" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#D6BCFA" />
              <stop offset="100%" stopColor="#6B46C1" />
            </radialGradient>
            <filter id="jayzeeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#9F7AEA" floodOpacity="0.4" />
            </filter>
          </defs>
          <ellipse cx="80" cy="165" rx="46" ry="10" fill="rgba(0,0,0,0.12)" />

          {/* Playful cool ears */}
          <ellipse cx="48" cy="62" rx="14" ry="18" fill="#553C9A" transform="rotate(-15 48 62)" />
          <ellipse cx="112" cy="62" rx="14" ry="18" fill="#553C9A" transform="rotate(15 112 62)" />

          {/* Cool Backwards Snapback Cap */}
          <g transform="translate(42, 38)">
            {/* Cap Dome */}
            <path d="M6 32 C6 8 70 8 70 32 Z" fill="#48BB78" />
            {/* Cap Visor turned slightly sideways */}
            <path d="M0 32 Q38 38 78 30 Q70 42 10 40 Z" fill="#2F855A" />
            {/* Snapback Golden Star Badge */}
            <path
              d="M38 18 L40 23 L45 24 L41 27 L42 32 L38 29 L34 32 L35 27 L31 24 L36 23 Z"
              fill="#F6E05E"
              stroke="#D69E2E"
              strokeWidth="0.8"
            />
          </g>

          {/* Main Body */}
          <circle cx="80" cy="106" r="53" fill="url(#jayzeeBody)" />
          <ellipse cx="80" cy="119" rx="33" ry="25" fill="#FAF5FF" opacity="0.9" />

          {/* Charming Wink & Sparkle Eyes */}
          <g>
            {/* Left Eye: Big confident sparkle */}
            <circle cx="66" cy="96" r="7.5" fill="#2D1B69" />
            <circle cx="64" cy="92" r="3" fill="#FFFFFF" />
            <polygon points="68,93 69,95 71,95 69,96 70,98 68,97 66,98 67,96 65,95 67,95" fill="#F6E05E" />

            {/* Right Eye: Charming playful wink */}
            <path d="M88 97 Q96 89 104 97" stroke="#2D1B69" strokeWidth="3.2" strokeLinecap="round" />
          </g>

          {/* Confident Cheeks */}
          <ellipse cx="54" cy="106" rx="7" ry="4" fill="#9F7AEA" opacity="0.6" />
          <ellipse cx="106" cy="106" rx="7" ry="4" fill="#9F7AEA" opacity="0.6" />

          {/* Charming confident grin with dimple */}
          <path d="M72 106 Q80 116 88 106" stroke="#2D1B69" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <circle cx="91" cy="105" r="1.5" fill="#2D1B69" />

          {/* Shiny Star Medallion / Golden Chain */}
          <path d="M68 126 Q80 136 92 126" stroke="#ECC94B" strokeWidth="2.5" fill="none" />
          <g transform="translate(74, 130)">
            <polygon points="6,0 8,4 12,5 9,8 10,12 6,10 2,12 3,8 0,5 4,4" fill="#F6E05E" stroke="#D69E2E" strokeWidth="0.8" />
          </g>

          {/* Feet with cool kicks */}
          <ellipse cx="60" cy="156" rx="14" ry="9" fill="#48BB78" />
          <ellipse cx="100" cy="156" rx="14" ry="9" fill="#48BB78" />
        </svg>
      );
  }
};
