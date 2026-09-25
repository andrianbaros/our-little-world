import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Compass, PartyPopper } from 'lucide-react';
import type { CharacterPersonality, Language } from '../types/character';
import { CharacterSprite } from './CharacterSprite';
import { SpeechBubble } from './SpeechBubble';
import { LivingEnvironment } from './LivingEnvironment';
import { soundFx } from '../utils/audio';
import { UI_TRANSLATIONS } from '../translations/ui';

interface WorldSceneProps {
  characters: CharacterPersonality[];
  lang: Language;
  onOpenProfile: (char: CharacterPersonality) => void;
  isNight: boolean;
  highlightedId?: string | null;
}

export const WorldScene = ({
  characters,
  lang,
  onOpenProfile,
  isNight,
  highlightedId,
}: WorldSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSpeech, setActiveSpeech] = useState<{
    character: CharacterPersonality;
    text: string;
  } | null>(null);
  const [clickedCharId, setClickedCharId] = useState<string | null>(null);
  const [multiClickCounts, setMultiClickCounts] = useState<Record<string, number>>({});
  const [specialReactionNotice, setSpecialReactionNotice] = useState<string | null>(null);
  const [nearbyReactionCharId, setNearbyReactionCharId] = useState<string | null>(null);
  const [pondRipples, setPondRipples] = useState(false);

  const ui = UI_TRANSLATIONS[lang];

  // Parallax mouse position tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  // Idle spontaneous mini-events
  useEffect(() => {
    const idleTimer = setInterval(() => {
      if (!activeSpeech && characters.length > 0) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        const idleOptions = randomChar.idleSpeech[lang] || randomChar.idleSpeech.en;
        const randomLine =
          idleOptions[Math.floor(Math.random() * idleOptions.length)];
        setActiveSpeech({
          character: randomChar,
          text: randomLine,
        });

        setTimeout(() => {
          setActiveSpeech((curr) => (curr?.character.id === randomChar.id ? null : curr));
        }, 4500);
      }
    }, 12000);

    return () => clearInterval(idleTimer);
  }, [activeSpeech, characters, lang]);

  // Click on character handler
  const handleCharacterClick = (char: CharacterPersonality, e: React.MouseEvent) => {
    e.stopPropagation();

    soundFx.playBySoundType(char.soundType);

    const count = (multiClickCounts[char.id] || 0) + 1;
    setMultiClickCounts((prev) => ({ ...prev, [char.id]: count }));

    setClickedCharId(char.id);
    setTimeout(() => setClickedCharId(null), 800);

    // If clicked 3+ times, trigger rare special reaction!
    if (count % 3 === 0) {
      setSpecialReactionNotice(`${char.name[lang]}: ${char.specialReaction[lang]}`);
      setTimeout(() => setSpecialReactionNotice(null), 4500);
      soundFx.playFanfare();
    }

    // Nearby reaction
    const otherChars = characters.filter((c) => c.id !== char.id);
    if (otherChars.length > 0) {
      const neighbor = otherChars[Math.floor(Math.random() * otherChars.length)];
      setNearbyReactionCharId(neighbor.id);
      setTimeout(() => setNearbyReactionCharId(null), 1600);
    }

    // Set speech bubble
    setActiveSpeech({
      character: char,
      text: char.speechText[lang],
    });
  };

  const handleCloseSpeech = () => {
    setActiveSpeech(null);
  };

  const handlePondClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playPop();
    setPondRipples(true);
    setTimeout(() => setPondRipples(false), 1200);
  };

  return (
    <section
      id="world-scene"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleCloseSpeech}
      className={`relative w-full min-h-[660px] sm:min-h-[780px] lg:min-h-[880px] overflow-hidden transition-colors duration-1000 select-none ${
        isNight
          ? 'bg-gradient-to-b from-[#0b1021] via-[#151c36] to-[#1c2445]'
          : 'bg-gradient-to-b from-[#e3f2fd] via-[#fce4ec] to-[#f3f9f4]'
      }`}
    >
      <LivingEnvironment isNight={isNight} mousePos={mousePos} />

      {/* Landscape Layer 1: Distant Rolling Hills */}
      <div
        className="absolute bottom-0 inset-x-0 h-[65%] z-0 transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -4}px)`,
        }}
      >
        <svg
          viewBox="0 0 1440 480"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 240 C320 160 520 280 840 200 C1140 130 1300 220 1440 180 L1440 480 L0 480 Z"
            fill={isNight ? '#16203d' : '#e0eef5'}
            className="transition-colors duration-1000"
          />
        </svg>
      </div>

      {/* Landscape Layer 2: Midground Hills with Cottages & Trees */}
      <div
        className="absolute bottom-0 inset-x-0 h-[50%] z-1 transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -6}px)`,
        }}
      >
        <svg
          viewBox="0 0 1440 380"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 160 C240 110 480 200 760 140 C1040 80 1280 180 1440 130 L1440 380 L0 380 Z"
            fill={isNight ? '#1d2a4f' : '#d2ebd9'}
            className="transition-colors duration-1000"
          />
        </svg>

        {/* Cozy cottages & trees */}
        <div className="absolute bottom-[40%] left-[28%] opacity-85">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M5 25 C5 12 35 12 35 25 Z" fill={isNight ? '#805ad5' : '#ff6b8b'} />
            <circle cx="15" cy="18" r="2.5" fill="#ffffff" />
            <circle cx="26" cy="19" r="2" fill="#ffffff" />
            <rect x="15" y="25" width="10" height="12" rx="3" fill="#faf5ff" />
          </svg>
        </div>

        <div className="absolute bottom-[45%] right-[22%] opacity-80">
          <svg width="34" height="42" viewBox="0 0 34 42" fill="none">
            <rect x="15" y="20" width="4" height="20" fill="#718096" />
            <circle cx="17" cy="15" r="14" fill={isNight ? '#2f855a' : '#68d391'} />
            {isNight && (
              <circle
                cx="17"
                cy="15"
                r="3.5"
                fill="#fef08a"
              />
            )}
          </svg>
        </div>
      </div>

      {/* Landscape Layer 3: Foreground Main Meadow & Interactive Pond */}
      <div
        className="absolute bottom-0 inset-x-0 h-[38%] z-2 transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -8}px)`,
        }}
      >
        <svg
          viewBox="0 0 1440 280"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 90 C360 40 680 120 1020 60 C1240 20 1360 80 1440 60 L1440 280 L0 280 Z"
            fill={isNight ? '#1e3350' : '#b7e4c7'}
            className="transition-colors duration-1000"
          />
        </svg>

        {/* Interactive Clickable Pond */}
        <div
          onClick={handlePondClick}
          className="absolute bottom-6 right-[22%] w-56 h-28 cursor-pointer pointer-events-auto group"
          title="Crystal Pond — Click to ripple water!"
        >
          <svg viewBox="0 0 220 110" className="w-full h-full">
            <ellipse
              cx="110"
              cy="55"
              rx="100"
              ry="45"
              fill={isNight ? '#172554' : '#a0e7e5'}
              className="transition-colors duration-1000"
            />
            <ellipse
              cx="110"
              cy="55"
              rx="75"
              ry="30"
              fill={isNight ? '#1e3a8a' : '#b4f8c8'}
              opacity="0.6"
            />
            {pondRipples && (
              <ellipse
                cx="110"
                cy="55"
                rx="50"
                ry="20"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                className="animate-ping"
              />
            )}
          </svg>
        </div>
      </div>

      {/* Scene Title Badge with Compass (No AI Sparkles) */}
      <div className="absolute top-6 left-6 z-30 pointer-events-none flex flex-col gap-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide backdrop-blur-md bg-white/85 dark:bg-black/50 text-gray-800 dark:text-gray-200 border-2 border-white/60 dark:border-white/10 shadow-sm">
          <Compass className="w-3.5 h-3.5 text-pink-500" />
          <span>{ui.world.badge}</span>
        </div>
        <p className="text-[11px] text-gray-600 dark:text-gray-400 pl-1 font-bold">
          {ui.world.instruction}
        </p>
      </div>

      {/* Special Reaction Toast Banner with PartyPopper */}
      {specialReactionNotice && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-1/2 -translate-x-1/2 z-40 px-5 py-2.5 rounded-2xl bg-amber-500 text-white shadow-xl flex items-center gap-2 text-xs sm:text-sm font-black border-2 border-white/80 animate-bounce"
        >
          <PartyPopper className="w-4 h-4" />
          <span>{specialReactionNotice}</span>
        </motion.div>
      )}

      {/* 12 Spatial Characters placed in the scene */}
      <div className="absolute inset-0 z-10">
        {characters.map((char) => {
          const isClicked = clickedCharId === char.id;
          const isHighlighted = highlightedId === char.id;
          const isNearbyReacting = nearbyReactionCharId === char.id;
          const isMomoSleeping = char.id === 'momo' || (isNight && char.id === 'hanhan');

          let idleClass = 'animate-breathe';
          if (char.idleAnimation === 'bounce') idleClass = 'animate-bounce-cute';
          else if (char.idleAnimation === 'float') idleClass = 'animate-float-slow';
          else if (char.idleAnimation === 'wiggle') idleClass = 'animate-wiggle';
          else if (char.idleAnimation === 'sleep') idleClass = 'animate-pulse';
          else if (char.idleAnimation === 'dash') idleClass = 'animate-bounce-cute';

          return (
            <div
              key={char.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              style={{
                left: `${char.worldPosition.x}%`,
                top: `${char.worldPosition.y}%`,
                zIndex: char.worldPosition.zIndex || 10,
              }}
            >
              {/* Highlight Aura */}
              {isHighlighted && (
                <div className="absolute inset-0 -m-6 rounded-full border-4 border-pink-400 bg-pink-400/20 animate-ping pointer-events-none" />
              )}

              {/* Speech Bubble popup */}
              {activeSpeech?.character.id === char.id && (
                <SpeechBubble
                  character={char}
                  text={activeSpeech.text}
                  lang={lang}
                  onOpenProfile={onOpenProfile}
                  onClose={handleCloseSpeech}
                />
              )}

              {/* Character Interactive Hitbox */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.94 }}
                animate={
                  isClicked
                    ? {
                        scale: [1, 1.25, 0.95, 1.1, 1],
                        rotate: [0, -10, 10, -5, 0],
                        y: [0, -20, 0],
                      }
                    : isNearbyReacting
                    ? {
                        rotate: [0, -6, 6, 0],
                        y: [0, -8, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.5 }}
                onClick={(e) => handleCharacterClick(char, e)}
                className={`relative cursor-pointer group flex flex-col items-center justify-center p-2 rounded-2xl transition-all ${
                  isNight && char.id === 'jayzee' ? 'drop-shadow-[0_0_18px_rgba(159,122,234,0.8)]' : ''
                }`}
              >
                {/* Parallax Head Glance toward mouse */}
                <div
                  className={`w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 transition-transform duration-300 ${idleClass}`}
                  style={{
                    transform: `translate(${mousePos.x * 4}px, ${mousePos.y * 3}px) ${
                      char.worldPosition.facing === 'left' ? 'scaleX(-1)' : ''
                    }`,
                  }}
                >
                  <CharacterSprite
                    id={char.id}
                    imagePath={char.imagePath}
                    isSleeping={isMomoSleeping}
                    isClicked={isClicked}
                    isHovered={false}
                    className="w-full h-full"
                  />
                </div>

                {/* Nearby reaction emoji */}
                {isNearbyReacting && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-3 right-0 bg-white/95 dark:bg-gray-800 text-xs px-2 py-0.5 rounded-full shadow-md pointer-events-none border border-pink-200"
                  >
                    ❤️
                  </motion.div>
                )}

                {/* Hover Name Tag Pill */}
                <div
                  className="opacity-0 group-hover:opacity-100 transition-all duration-200 mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-black shadow-md pointer-events-none whitespace-nowrap backdrop-blur-md transform group-hover:translate-y-0 translate-y-1 border-2"
                  style={{
                    backgroundColor: char.themeColor.bg,
                    color: char.themeColor.primary,
                    borderColor: char.themeColor.border,
                  }}
                >
                  {char.name[lang]}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Floating Exploration Hint at Bottom */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center z-30 pointer-events-none">
        <div className="px-4 py-2 rounded-full backdrop-blur-md bg-white/85 dark:bg-black/60 text-gray-700 dark:text-gray-200 text-xs font-bold shadow-lg border-2 border-white/60 flex items-center gap-2">
          <span>{ui.world.parallaxHint}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
          <span>{ui.world.clickHint}</span>
        </div>
      </div>
    </section>
  );
};
