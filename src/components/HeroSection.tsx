import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Wand2 } from 'lucide-react';
import type { CharacterPersonality } from '../types/character';
import { CharacterSprite } from './CharacterSprite';
import { soundFx } from '../utils/audio';

interface HeroSectionProps {
  characters: CharacterPersonality[];
  onExploreClick: () => void;
  onOpenProfile: (char: CharacterPersonality) => void;
  isNight: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  characters,
  onExploreClick,
  onOpenProfile,
  isNight,
}) => {
  const [visibleCount, setVisibleCount] = useState(0);

  // Staggered arrival of characters one by one (Riri -> Anan -> ... -> Hanhan -> Jayzee)
  useEffect(() => {
    if (visibleCount < characters.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
        soundFx.playPop();
      }, 160);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, characters.length]);

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-[95vh] flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Soft atmospheric radial gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 -z-10 ${
          isNight
            ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1d1f3b] via-[#0e1326] to-[#070a14]'
            : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffeef2] via-[#f7f4fb] to-[#eef9f5]'
        }`}
      />

      {/* Cute Floating Badges & Sparkles in Background */}
      <div className="absolute top-20 left-12 animate-float-slow text-2xl opacity-75 hidden sm:block">
        ✨
      </div>
      <div
        className="absolute top-36 right-16 animate-float-slow text-2xl opacity-75 hidden sm:block"
        style={{ animationDelay: '1.5s' }}
      >
        🌸
      </div>
      <div
        className="absolute bottom-28 left-20 animate-float-slow text-2xl opacity-75 hidden md:block"
        style={{ animationDelay: '2.5s' }}
      >
        🌿
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        {/* Welcome Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide mb-6 backdrop-blur-md bg-white/80 dark:bg-white/10 text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-800 shadow-sm"
        >
          <Sparkles className="w-4 h-4 animate-spin text-pink-500" />
          <span>A CUTE ANIMATED UNIVERSE</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-4"
        >
          Welcome to <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
            Our Little World
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
        >
          12 little characters, one big cozy world. Setiap sahabat kecil punya cerita, warna, dan senyumannya sendiri.
        </motion.p>

        {/* Action Button: "Meet Everyone" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              soundFx.playBoing();
              onExploreClick();
            }}
            className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-extrabold text-base shadow-[0_12px_28px_rgba(244,63,94,0.35)] hover:shadow-[0_16px_36px_rgba(244,63,94,0.45)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Meet Everyone</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="#meet-the-gang"
            onClick={() => soundFx.playClick()}
            className="px-6 py-3.5 rounded-full backdrop-blur-md bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 font-bold text-sm border border-gray-200 dark:border-gray-700 shadow-sm transition-all"
          >
            Collectible Album (#01 - #12)
          </a>
        </motion.div>

        {/* Staggered Characters Showcase Arc */}
        <div className="w-full relative mt-4 pt-6">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4 flex items-center justify-center gap-1.5">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Karakter berdatangan satu per satu ({visibleCount} / 12)</span>
          </div>

          <div className="flex flex-wrap items-end justify-center gap-2 sm:gap-3 md:gap-4 px-2">
            {characters.map((char, index) => {
              const isVisible = index < visibleCount;
              return (
                <motion.div
                  key={char.id}
                  initial={{ opacity: 0, scale: 0, y: 30 }}
                  animate={
                    isVisible
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0, y: 30 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.2, y: -8 }}
                  onClick={() => {
                    soundFx.playBySoundType(char.soundType);
                    onOpenProfile(char);
                  }}
                  className="group relative flex flex-col items-center cursor-pointer p-1"
                >
                  <div className="w-12 h-14 sm:w-16 sm:h-18 md:w-20 md:h-22 transition-transform">
                    <CharacterSprite
                      id={char.id}
                      imagePath={char.imagePath}
                      isSleeping={char.id === 'momo'}
                      isHovered={false}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Character Name Tooltip on hover */}
                  <div
                    className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 px-2 py-0.5 rounded-lg text-[10px] font-black tracking-wide shadow-md whitespace-nowrap z-20 pointer-events-none"
                    style={{
                      backgroundColor: char.themeColor.bg,
                      color: char.themeColor.primary,
                      border: `1px solid ${char.themeColor.border}`,
                    }}
                  >
                    {char.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
