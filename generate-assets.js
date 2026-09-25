import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/assets/characters');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 12 Character SVG definitions matching our visual identities
const characterSvgs = {
  riri: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ririBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFAEC0" />
          <stop offset="100%" stopColor="#FF6B8B" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="55" ry="12" fill="rgba(0,0,0,0.12)" />
      <!-- Floppy Ears -->
      <path d="M60 80 C50 25 25 20 30 45 C35 65 55 90 62 95 Z" fill="#FF85A1" />
      <path d="M57 77 C48 35 32 30 37 48 C40 60 55 80 59 86 Z" fill="#FFE0E6" />
      <path d="M140 80 C150 25 175 20 170 45 C165 65 145 90 138 95 Z" fill="#FF85A1" />
      <path d="M143 77 C152 35 168 30 163 48 C160 60 145 80 141 86 Z" fill="#FFE0E6" />
      <circle cx="100" cy="125" r="68" fill="url(#ririBody)" />
      <ellipse cx="100" cy="142" rx="42" ry="34" fill="#FFF0F3" opacity="0.88" />
      <ellipse cx="78" cy="192" rx="17" ry="11" fill="#FF5E7E" />
      <ellipse cx="122" cy="192" rx="17" ry="11" fill="#FF5E7E" />
      <path d="M40 130 C28 136 22 154 36 158 C45 160 52 146 47 134 Z" fill="#FF85A1" />
      <path d="M160 130 C172 136 178 154 164 158 C155 160 148 146 153 134 Z" fill="#FF85A1" />
      <circle cx="85" cy="116" r="8.5" fill="#3D121A" />
      <circle cx="82" cy="112" r="3.4" fill="#FFFFFF" />
      <circle cx="88" cy="118" r="1.8" fill="#FFFFFF" />
      <circle cx="115" cy="116" r="8.5" fill="#3D121A" />
      <circle cx="112" cy="112" r="3.4" fill="#FFFFFF" />
      <circle cx="118" cy="118" r="1.8" fill="#FFFFFF" />
      <ellipse cx="70" cy="128" rx="9" ry="5" fill="#FF3366" opacity="0.45" />
      <ellipse cx="130" cy="128" rx="9" ry="5" fill="#FF3366" opacity="0.45" />
      <circle cx="100" cy="122" r="2.5" fill="#9E1C38" />
      <path d="M95 126 Q100 132 105 126" stroke="#9E1C38" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M100 156 L102.5 162 L109 163 L104 167 L105 173 L100 170 L95 173 L96 167 L91 163 L97.5 162 Z" fill="#FFD166" stroke="#E0A820" strokeWidth="1.2" />
    </svg>
  `,

  anan: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ananBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A8E6CF" />
          <stop offset="100%" stopColor="#48BB78" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="55" ry="12" fill="rgba(0,0,0,0.12)" />
      <circle cx="60" cy="74" r="22" fill="#48BB78" />
      <circle cx="60" cy="74" r="13" fill="#C6F6D5" />
      <circle cx="140" cy="74" r="22" fill="#48BB78" />
      <circle cx="140" cy="74" r="13" fill="#C6F6D5" />
      <path d="M100 62 C94 44 75 48 85 58 C94 65 100 62 100 62 Z" fill="#38A169" />
      <path d="M100 62 C106 44 125 48 115 58 C106 65 100 62 100 62 Z" fill="#68D391" />
      <circle cx="100" cy="130" r="66" fill="url(#ananBody)" />
      <ellipse cx="100" cy="146" rx="42" ry="32" fill="#F0FFF4" opacity="0.9" />
      <ellipse cx="76" cy="193" rx="17" ry="11" fill="#38A169" />
      <ellipse cx="124" cy="193" rx="17" ry="11" fill="#38A169" />
      <path d="M75 120 Q85 112 95 120" stroke="#1C6439" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M105 120 Q115 112 125 120" stroke="#1C6439" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="68" cy="130" rx="9" ry="5" fill="#68D391" opacity="0.6" />
      <ellipse cx="132" cy="130" rx="9" ry="5" fill="#68D391" opacity="0.6" />
      <ellipse cx="100" cy="126" rx="3.5" ry="2.5" fill="#1C6439" />
      <path d="M94 132 Q100 137 106 132" stroke="#1C6439" strokeWidth="2.5" strokeLinecap="round" />
      <g transform="translate(85, 148)">
        <rect x="0" y="5" width="30" height="22" rx="6" fill="#FFFFFF" stroke="#38A169" strokeWidth="2" />
        <path d="M30 10 C35 10 35 20 30 20" stroke="#38A169" strokeWidth="2" fill="none" />
        <path d="M8 0 Q10 -6 8 -11" stroke="#9AE6B4" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 -3 Q17 -9 15 -14" stroke="#9AE6B4" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  `,

  jeje: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="jejeBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF3A8" />
          <stop offset="100%" stopColor="#ECC94B" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="54" ry="12" fill="rgba(0,0,0,0.12)" />
      <path d="M100 60 Q105 32 95 24 Q110 36 105 60" fill="#D69E2E" />
      <ellipse cx="62" cy="68" rx="15" ry="20" fill="#ECC94B" transform="rotate(-20 62 68)" />
      <ellipse cx="138" cy="68" rx="15" ry="20" fill="#ECC94B" transform="rotate(20 138 68)" />
      <circle cx="100" cy="126" r="66" fill="url(#jejeBody)" />
      <ellipse cx="100" cy="144" rx="40" ry="30" fill="#FFFFF0" opacity="0.9" />
      <ellipse cx="78" cy="190" rx="16" ry="10" fill="#D69E2E" />
      <ellipse cx="122" cy="190" rx="16" ry="10" fill="#D69E2E" />
      <circle cx="82" cy="116" r="9" fill="#3E2723" />
      <circle cx="79" cy="112" r="3.6" fill="#FFFFFF" />
      <path d="M110 118 Q118 109 127 118" stroke="#3E2723" strokeWidth="3.6" strokeLinecap="round" />
      <ellipse cx="68" cy="128" rx="9" ry="5" fill="#FF6B6B" opacity="0.6" />
      <ellipse cx="132" cy="128" rx="9" ry="5" fill="#FF6B6B" opacity="0.6" />
      <path d="M90 128 Q100 148 110 128 Z" fill="#800020" />
      <path d="M94 136 Q100 145 106 136" fill="#FF70A6" />
      <ellipse cx="42" cy="136" rx="10" ry="9" fill="#ECC94B" />
      <ellipse cx="158" cy="136" rx="10" ry="9" fill="#ECC94B" />
    </svg>
  `,

  ata: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ataBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#90CDF4" />
          <stop offset="100%" stopColor="#3182CE" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="55" ry="12" fill="rgba(0,0,0,0.12)" />
      <path d="M40 118 C20 142 12 182 25 192 C42 186 52 150 56 130 Z" fill="#E53E3E" />
      <path d="M160 118 C180 142 188 182 175 192 C158 186 148 150 144 130 Z" fill="#C53030" />
      <circle cx="60" cy="76" r="20" fill="#2B6CB0" />
      <circle cx="140" cy="76" r="20" fill="#2B6CB0" />
      <circle cx="100" cy="126" r="66" fill="url(#ataBody)" />
      <ellipse cx="100" cy="144" rx="41" ry="31" fill="#EBF8FF" opacity="0.9" />
      <path d="M100 76 L102.5 81 L108 82 L104 86 L105 91 L100 88.5 L95 91 L96 86 L92 82 L97.5 81 Z" fill="#ECC94B" />
      <circle cx="82" cy="116" r="8.5" fill="#1A365D" />
      <circle cx="80" cy="112" r="3.4" fill="#FFFFFF" />
      <circle cx="118" cy="116" r="8.5" fill="#1A365D" />
      <circle cx="116" cy="112" r="3.4" fill="#FFFFFF" />
      <path d="M94 130 Q100 138 108 129" stroke="#1A365D" strokeWidth="3" strokeLinecap="round" />
      <path d="M85 148 Q100 156 115 148 Q100 160 85 148" fill="#E53E3E" />
      <circle cx="100" cy="151" r="5" fill="#ECC94B" />
      <ellipse cx="75" cy="192" rx="17" ry="11" fill="#2B6CB0" />
      <ellipse cx="125" cy="192" rx="17" ry="11" fill="#2B6CB0" />
    </svg>
  `,

  momo: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="momoBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E9D8FD" />
          <stop offset="100%" stopColor="#9F7AEA" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="55" ry="12" fill="rgba(0,0,0,0.12)" />
      <path d="M65 80 C56 30 125 18 138 62 Z" fill="#B794F4" />
      <path d="M138 62 C156 56 172 75 168 93" stroke="#B794F4" strokeWidth="7" strokeLinecap="round" />
      <circle cx="170" cy="97" r="9" fill="#FEFCBF" />
      <circle cx="100" cy="132" r="66" fill="url(#momoBody)" />
      <ellipse cx="100" cy="150" rx="43" ry="32" fill="#FAF5FF" opacity="0.9" />
      <path d="M72 121 Q82 129 92 121" stroke="#44337A" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M108 121 Q118 129 128 121" stroke="#44337A" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="100" cy="131" rx="4" ry="5" fill="#44337A" />
      <ellipse cx="65" cy="131" rx="10" ry="6" fill="#D6BCFA" />
      <ellipse cx="135" cy="131" rx="10" ry="6" fill="#D6BCFA" />
      <g transform="translate(85, 148)">
        <path d="M15 0 L19 10 L30 11 L21 19 L24 29 L15 22.5 L6 29 L9 19 L0 11 L11 10 Z" fill="#FEFCBF" stroke="#ECC94B" strokeWidth="1.5" />
      </g>
      <ellipse cx="78" cy="193" rx="16" ry="10" fill="#805AD5" />
      <ellipse cx="122" cy="193" rx="16" ry="10" fill="#805AD5" />
    </svg>
  `,

  reirei: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="reireiBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D6BCFA" />
          <stop offset="100%" stopColor="#6B46C1" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="52" ry="12" fill="rgba(0,0,0,0.12)" />
      <path d="M58 88 C44 36 62 24 78 68 Z" fill="#6B46C1" />
      <path d="M60 84 C50 46 65 36 74 69 Z" fill="#E9D8FD" />
      <path d="M142 88 C156 36 138 24 122 68 Z" fill="#6B46C1" />
      <path d="M140 84 C150 46 135 36 126 69 Z" fill="#E9D8FD" />
      <path d="M92 59 C97 49 107 49 112 59 C106 55 98 55 92 59 Z" fill="#FEFCBF" />
      <circle cx="100" cy="128" r="64" fill="url(#reireiBody)" />
      <ellipse cx="100" cy="144" rx="38" ry="30" fill="#F3E8FF" opacity="0.9" />
      <ellipse cx="82" cy="116" rx="8" ry="9.5" fill="#2D1B69" />
      <circle cx="80" cy="111" r="3.4" fill="#FFFFFF" />
      <ellipse cx="118" cy="116" rx="8" ry="9.5" fill="#2D1B69" />
      <circle cx="116" cy="111" r="3.4" fill="#FFFFFF" />
      <circle cx="68" cy="128" r="2" fill="#FEFCBF" />
      <circle cx="73" cy="131" r="2" fill="#FEFCBF" />
      <circle cx="132" cy="128" r="2" fill="#FEFCBF" />
      <circle cx="127" cy="131" r="2" fill="#FEFCBF" />
      <path d="M96 130 Q100 134 104 130" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" />
      <polygon points="100,152 108,162 100,172 92,162" fill="#FEFCBF" stroke="#B794F4" strokeWidth="1.2" />
      <ellipse cx="80" cy="192" rx="15" ry="9" fill="#553C9A" />
      <ellipse cx="120" cy="192" rx="15" ry="9" fill="#553C9A" />
    </svg>
  `,

  cici: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ciciBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FED7E2" />
          <stop offset="100%" stopColor="#ED64A6" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="55" ry="12" fill="rgba(0,0,0,0.12)" />
      <circle cx="60" cy="76" r="21" fill="#ED64A6" />
      <circle cx="60" cy="76" r="12" fill="#FFF5F7" />
      <circle cx="140" cy="76" r="21" fill="#ED64A6" />
      <circle cx="140" cy="76" r="12" fill="#FFF5F7" />
      <g transform="translate(45, 56)">
        <circle cx="10" cy="5" r="6" fill="#FFFFFF" />
        <circle cx="15" cy="10" r="6" fill="#FFFFFF" />
        <circle cx="10" cy="15" r="6" fill="#FFFFFF" />
        <circle cx="5" cy="10" r="6" fill="#FFFFFF" />
        <circle cx="10" cy="10" r="4.5" fill="#F6E05E" />
      </g>
      <circle cx="100" cy="127" r="65" fill="url(#ciciBody)" />
      <ellipse cx="100" cy="144" rx="41" ry="31" fill="#FFF5F7" opacity="0.9" />
      <circle cx="82" cy="116" r="8.5" fill="#702459" />
      <circle cx="80" cy="112" r="3.4" fill="#FFFFFF" />
      <circle cx="118" cy="116" r="8.5" fill="#702459" />
      <circle cx="116" cy="112" r="3.4" fill="#FFFFFF" />
      <ellipse cx="68" cy="128" rx="9" ry="5" fill="#D53F8C" opacity="0.5" />
      <ellipse cx="132" cy="128" rx="9" ry="5" fill="#D53F8C" opacity="0.5" />
      <path d="M92 128 Q100 140 108 128 Z" fill="#97266D" />
      <path d="M96 134 Q100 139 104 134" fill="#FED7D7" />
      <g transform="translate(85, 150)">
        <rect x="0" y="5" width="30" height="18" rx="5" fill="#ECC94B" stroke="#B7791F" strokeWidth="1.5" />
        <path d="M4 5 C4 -2 26 -2 26 5" stroke="#B7791F" strokeWidth="1.8" fill="none" />
        <circle cx="9" cy="5" r="3.5" fill="#E53E3E" />
        <circle cx="16" cy="4" r="3.5" fill="#38A169" />
        <circle cx="22" cy="5" r="3.5" fill="#ED64A6" />
      </g>
      <ellipse cx="78" cy="192" rx="16" ry="10" fill="#D53F8C" />
      <ellipse cx="122" cy="192" rx="16" ry="10" fill="#D53F8C" />
    </svg>
  `,

  jeo: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="jeoBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#B2F5EA" />
          <stop offset="100%" stopColor="#319795" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="55" ry="12" fill="rgba(0,0,0,0.12)" />
      <path d="M45 105 C45 47 155 47 155 105" stroke="#DD6B20" strokeWidth="7.5" strokeLinecap="round" fill="none" />
      <rect x="35" y="93" width="18" height="32" rx="8" fill="#ED8936" stroke="#C05621" strokeWidth="2" />
      <rect x="147" y="93" width="18" height="32" rx="8" fill="#ED8936" stroke="#C05621" strokeWidth="2" />
      <circle cx="100" cy="128" r="64" fill="url(#jeoBody)" />
      <ellipse cx="100" cy="146" rx="41" ry="31" fill="#E6FFFA" opacity="0.9" />
      <g transform="translate(62, 104)">
        <rect x="3" y="3" width="30" height="18" rx="5" fill="#1A202C" />
        <line x1="7" y1="7" x2="20" y2="17" stroke="#718096" strokeWidth="2" strokeLinecap="round" />
        <rect x="43" y="3" width="30" height="18" rx="5" fill="#1A202C" />
        <line x1="47" y1="7" x2="60" y2="17" stroke="#718096" strokeWidth="2" strokeLinecap="round" />
        <path d="M33 10 L43 10" stroke="#1A202C" strokeWidth="4" />
      </g>
      <path d="M97 133 Q105 139 112 131" stroke="#1D4044" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="45" cy="143" rx="10" ry="9" fill="#319795" />
      <ellipse cx="155" cy="143" rx="10" ry="9" fill="#319795" />
      <ellipse cx="78" cy="192" rx="17" ry="10" fill="#285E61" />
      <ellipse cx="122" cy="192" rx="17" ry="10" fill="#285E61" />
    </svg>
  `,

  zyzy: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="zyzyBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FEEBC8" />
          <stop offset="100%" stopColor="#DD6B20" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="54" ry="12" fill="rgba(0,0,0,0.12)" />
      <polygon points="52,86 38,31 75,61" fill="#DD6B20" />
      <polygon points="55,81 45,42 70,64" fill="#FEEBC8" />
      <polygon points="148,86 162,31 125,61" fill="#DD6B20" />
      <polygon points="145,81 155,42 130,64" fill="#FEEBC8" />
      <polygon points="95,57 105,37 101,52 110,49 98,67" fill="#ECC94B" />
      <circle cx="100" cy="127" r="65" fill="url(#zyzyBody)" />
      <ellipse cx="100" cy="144" rx="40" ry="30" fill="#FFFAF0" opacity="0.9" />
      <circle cx="82" cy="116" r="10" fill="#7B341E" />
      <circle cx="80" cy="112" r="4" fill="#FFFFFF" />
      <circle cx="118" cy="116" r="10" fill="#7B341E" />
      <circle cx="116" cy="112" r="4" fill="#FFFFFF" />
      <polygon points="62,126 67,121 65,128 70,127 61,135" fill="#ECC94B" />
      <polygon points="138,126 133,121 135,128 130,127 139,135" fill="#ECC94B" />
      <path d="M90 128 Q100 145 110 128 Z" fill="#C53030" />
      <path d="M92 128 L108 128" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="75" cy="192" rx="17" ry="10" fill="#C05621" />
      <ellipse cx="125" cy="192" rx="17" ry="10" fill="#C05621" />
    </svg>
  `,

  coco: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cocoBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FEFCBF" />
          <stop offset="100%" stopColor="#D69E2E" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="55" ry="12" fill="rgba(0,0,0,0.12)" />
      <circle cx="60" cy="76" r="22" fill="#D69E2E" />
      <circle cx="60" cy="76" r="13" fill="#FEFCBF" />
      <circle cx="140" cy="76" r="22" fill="#D69E2E" />
      <circle cx="140" cy="76" r="13" fill="#FEFCBF" />
      <circle cx="100" cy="128" r="66" fill="url(#cocoBody)" />
      <ellipse cx="100" cy="146" rx="42" ry="32" fill="#FFFFF0" opacity="0.9" />
      <path d="M75 118 Q84 108 93 118" stroke="#5F370E" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M107 118 Q116 108 125 118" stroke="#5F370E" strokeWidth="3.6" strokeLinecap="round" />
      <ellipse cx="68" cy="128" rx="9" ry="5" fill="#ED8936" opacity="0.6" />
      <ellipse cx="132" cy="128" rx="9" ry="5" fill="#ED8936" opacity="0.6" />
      <ellipse cx="100" cy="123" rx="3.5" ry="2.5" fill="#5F370E" />
      <path d="M92 129 Q100 137 108 129" stroke="#5F370E" strokeWidth="3" strokeLinecap="round" />
      <g transform="translate(85, 144)">
        <circle cx="15" cy="15" r="15" fill="#ECC94B" />
        <circle cx="15" cy="15" r="7.5" fill="#7B341E" />
        <path d="M15 30 L15 38" stroke="#38A169" strokeWidth="3" />
      </g>
      <ellipse cx="78" cy="193" rx="17" ry="10" fill="#B7791F" />
      <ellipse cx="122" cy="193" rx="17" ry="10" fill="#B7791F" />
    </svg>
  `,

  hanhan: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hanhanBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C4F1F9" />
          <stop offset="100%" stopColor="#319795" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="54" ry="12" fill="rgba(0,0,0,0.12)" />
      <circle cx="62" cy="84" r="15" fill="#319795" />
      <circle cx="138" cy="84" r="15" fill="#319795" />
      <path d="M100 57 C96 45 100 40 100 40 C100 40 104 45 100 57 Z" fill="#76E4F7" />
      <circle cx="100" cy="130" r="65" fill="url(#hanhanBody)" />
      <ellipse cx="100" cy="146" rx="40" ry="30" fill="#EBF8FF" opacity="0.9" />
      <ellipse cx="82" cy="116" rx="8.5" ry="10" fill="#1D4044" />
      <circle cx="80" cy="111" r="3.6" fill="#FFFFFF" />
      <circle cx="86" cy="119" r="2.2" fill="#FFFFFF" />
      <ellipse cx="118" cy="116" rx="8.5" ry="10" fill="#1D4044" />
      <circle cx="116" cy="111" r="3.6" fill="#FFFFFF" />
      <circle cx="122" cy="119" r="2.2" fill="#FFFFFF" />
      <ellipse cx="68" cy="129" rx="9" ry="5" fill="#4FD1C5" opacity="0.6" />
      <ellipse cx="132" cy="129" rx="9" ry="5" fill="#4FD1C5" opacity="0.6" />
      <ellipse cx="100" cy="125" rx="3" ry="2" fill="#1D4044" />
      <path d="M97 130 Q100 134 103 130" stroke="#1D4044" strokeWidth="2.2" strokeLinecap="round" />
      <g transform="translate(85, 154)">
        <polygon points="15,0 27.5,10 2.5,10" fill="#FFFFFF" stroke="#4FD1C5" strokeWidth="1.2" />
        <polygon points="0,10 30,10 22.5,18 7.5,18" fill="#E2E8F0" stroke="#4FD1C5" strokeWidth="1.2" />
      </g>
      <ellipse cx="78" cy="192" rx="16" ry="10" fill="#285E61" />
      <ellipse cx="122" cy="192" rx="16" ry="10" fill="#285E61" />
    </svg>
  `,

  jayzee: `
    <svg viewBox="0 0 200 220" width="400" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="jayzeeBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D6BCFA" />
          <stop offset="100%" stopColor="#6B46C1" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="205" rx="55" ry="12" fill="rgba(0,0,0,0.12)" />
      <ellipse cx="60" cy="76" rx="17" ry="22" fill="#553C9A" transform="rotate(-15 60 76)" />
      <ellipse cx="140" cy="76" rx="17" ry="22" fill="#553C9A" transform="rotate(15 140 76)" />
      <!-- Snapback Cap -->
      <g transform="translate(52, 46)">
        <path d="M8 40 C8 10 88 10 88 40 Z" fill="#48BB78" />
        <path d="M0 40 Q48 48 98 38 Q88 53 13 50 Z" fill="#2F855A" />
        <path d="M48 22 L50.5 28 L57 29.5 L52 33 L53 39.5 L48 36 L43 39.5 L44 33 L39 29.5 L45.5 28 Z" fill="#F6E05E" stroke="#D69E2E" strokeWidth="1" />
      </g>
      <circle cx="100" cy="131" r="66" fill="url(#jayzeeBody)" />
      <ellipse cx="100" cy="148" rx="41" ry="31" fill="#FAF5FF" opacity="0.9" />
      <circle cx="82" cy="119" r="9.5" fill="#2D1B69" />
      <circle cx="80" cy="114" r="3.8" fill="#FFFFFF" />
      <path d="M110 120 Q120 110 130 120" stroke="#2D1B69" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="68" cy="131" rx="9" ry="5" fill="#9F7AEA" opacity="0.6" />
      <ellipse cx="132" cy="131" rx="9" ry="5" fill="#9F7AEA" opacity="0.6" />
      <path d="M90 131 Q100 144 110 131" stroke="#2D1B69" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <circle cx="114" cy="130" r="2" fill="#2D1B69" />
      <path d="M85 156 Q100 168 115 156" stroke="#ECC94B" strokeWidth="3" fill="none" />
      <polygon points="100,161 103,166 108,167 104,171 105,176 100,173 95,176 96,171 92,167 97,166" fill="#F6E05E" stroke="#D69E2E" strokeWidth="1" />
      <ellipse cx="75" cy="194" rx="17" ry="11" fill="#48BB78" />
      <ellipse cx="125" cy="194" rx="17" ry="11" fill="#48BB78" />
    </svg>
  `
};

async function generate() {
  console.log('Generating 12 Character SVG & PNG assets...');
  for (const [id, svgContent] of Object.entries(characterSvgs)) {
    const trimmed = svgContent.trim();
    const svgPath = path.join(outputDir, `${id}.svg`);
    const pngPath = path.join(outputDir, `${id}.png`);

    fs.writeFileSync(svgPath, trimmed, 'utf-8');

    // Convert SVG to transparent high-res PNG using sharp
    await sharp(Buffer.from(trimmed))
      .resize(400, 440)
      .png({ quality: 95 })
      .toFile(pngPath);

    console.log(`Generated: ${id}.png and ${id}.svg`);
  }
  console.log('All 12 character assets generated successfully!');
}

generate().catch(console.error);
