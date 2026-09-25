import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart, Compass, Star, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { CharacterPersonality, Language } from '../types/character';
import { CharacterSprite } from './CharacterSprite';
import { soundFx } from '../utils/audio';
import { UI_TRANSLATIONS } from '../translations/ui';

interface CharacterModalProps {
  character: CharacterPersonality | null;
  allCharacters: CharacterPersonality[];
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onSelectCharacter: (char: CharacterPersonality) => void;
  isNight?: boolean;
}

export const CharacterModal = ({
  character,
  allCharacters,
  lang,
  isOpen,
  onClose,
  onSelectCharacter,
  isNight = false,
}: CharacterModalProps) => {
  const [isBooped, setIsBooped] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const ui = UI_TRANSLATIONS[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!character) return;
      const currentIndex = allCharacters.findIndex((c) => c.id === character.id);
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + allCharacters.length) % allCharacters.length;
        onSelectCharacter(allCharacters[prevIndex]);
        soundFx.playPop();
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % allCharacters.length;
        onSelectCharacter(allCharacters[nextIndex]);
        soundFx.playPop();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, character, allCharacters, onClose, onSelectCharacter]);

  if (!isOpen || !character) return null;

  const currentIndex = allCharacters.findIndex((c) => c.id === character.id);
  const prevChar = allCharacters[(currentIndex - 1 + allCharacters.length) % allCharacters.length];
  const nextChar = allCharacters[(currentIndex + 1) % allCharacters.length];

  const handleBoop = () => {
    setIsBooped(true);
    setClickCount((prev) => prev + 1);
    soundFx.playBySoundType(character.soundType);

    confetti({
      particleCount: 28,
      spread: 60,
      origin: { y: 0.6 },
      colors: [character.themeColor.primary, character.themeColor.secondary, '#FFD166'],
      disableForReducedMotion: true,
    });

    setTimeout(() => setIsBooped(false), 500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/55 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#151a2d] rounded-3xl sm:rounded-4xl shadow-2xl border-2 border-white/60 dark:border-white/10 overflow-hidden z-10"
        >
          {/* Top header decorative bar */}
          <div
            className="h-3 w-full"
            style={{ backgroundColor: character.themeColor.primary }}
          />

          {/* Close & Sound controls */}
          <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
            <button
              onClick={() => soundFx.playBySoundType(character.soundType)}
              className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 transition-transform active:scale-90 cursor-pointer"
              title={ui.modal.listenSound}
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 transition-transform active:scale-90 cursor-pointer"
              title={ui.modal.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous / Next buttons */}
          <button
            onClick={() => {
              onSelectCharacter(prevChar);
              soundFx.playPop();
            }}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 dark:bg-black/40 shadow-lg text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-95 transition-all z-20 border-2 border-gray-100 dark:border-gray-800 cursor-pointer"
            title={`${ui.modal.prev}: ${prevChar.name[lang]}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              onSelectCharacter(nextChar);
              soundFx.playPop();
            }}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 dark:bg-black/40 shadow-lg text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-95 transition-all z-20 border-2 border-gray-100 dark:border-gray-800 cursor-pointer"
            title={`${ui.modal.next}: ${nextChar.name[lang]}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Left Column: Mascot Stage */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div
                  className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-6 flex items-center justify-center transition-transform cursor-pointer select-none group border-2"
                  style={{
                    backgroundColor: character.themeColor.bg,
                    borderColor: character.themeColor.border,
                    boxShadow: `0 20px 40px -15px ${character.themeColor.glow}`,
                  }}
                  onClick={handleBoop}
                >
                  <div
                    className="absolute inset-4 rounded-full blur-xl opacity-60"
                    style={{ backgroundColor: character.themeColor.secondary }}
                  />

                  <motion.div
                    animate={
                      isBooped
                        ? { scale: [1, 1.25, 0.9, 1.05, 1], rotate: [0, -8, 8, -4, 0] }
                        : { y: [0, -6, 0] }
                    }
                    transition={
                      isBooped
                        ? { duration: 0.5 }
                        : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                    }
                    className="relative z-10 w-full h-full"
                  >
                    <CharacterSprite
                      id={character.id}
                      imagePath={character.imagePath}
                      isSleeping={character.id === 'momo' || (isNight && character.id === 'hanhan')}
                      isClicked={isBooped}
                      className="w-full h-full"
                    />
                  </motion.div>

                  {/* Boop sticker */}
                  <div className="absolute -bottom-3 px-3 py-1 rounded-full text-xs font-black tracking-wide shadow-md flex items-center gap-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700">
                    <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                    {ui.modal.boop(clickCount)}
                  </div>
                </div>

                {/* Spot in world */}
                <p className="mt-5 text-xs text-center text-gray-500 dark:text-gray-400 flex items-center gap-1 font-semibold">
                  <Compass className="w-3.5 h-3.5 text-gray-400" />
                  {character.worldPosition.spotDescription[lang]}
                </p>
              </div>

              {/* Right Column: Character Details */}
              <div className="md:col-span-7 flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-black tracking-wider border"
                    style={{
                      backgroundColor: character.themeColor.bg,
                      color: character.themeColor.primary,
                      borderColor: character.themeColor.border,
                    }}
                  >
                    NO. {character.number}
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    Character Universe
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-1">
                  {character.name[lang]}
                </h2>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 italic mb-4">
                  "{character.tagline[lang]}"
                </p>

                {/* Personality Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {(character.personality[lang] || character.personality.en).map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-black tracking-wide transition-transform hover:scale-105 border"
                      style={{
                        backgroundColor: character.themeColor.bg,
                        color: character.themeColor.primary,
                        borderColor: character.themeColor.border,
                      }}
                    >
                      • {trait}
                    </span>
                  ))}
                </div>

                {/* Quote Box */}
                <div
                  className="p-3.5 rounded-2xl mb-4 border-2 relative"
                  style={{
                    backgroundColor: `${character.themeColor.bg}95`,
                    borderColor: character.themeColor.border,
                  }}
                >
                  <span
                    className="text-xs font-black uppercase tracking-wider block mb-1 flex items-center gap-1"
                    style={{ color: character.themeColor.primary }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    {ui.modal.quoteTitle}
                  </span>
                  <p
                    className="text-xs sm:text-sm font-bold italic leading-relaxed"
                    style={{ color: character.themeColor.text }}
                  >
                    "{character.quote[lang]}"
                  </p>
                </div>

                {/* Favorite & Fun Fact */}
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border-2 border-gray-100 dark:border-gray-700/60">
                    <span className="font-black text-gray-900 dark:text-gray-100 block mb-0.5 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                      {ui.modal.favoriteThing}
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">
                      {character.favorite[lang]}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border-2 border-gray-100 dark:border-gray-700/60">
                    <span className="font-black text-gray-900 dark:text-gray-100 block mb-0.5 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {ui.modal.funFact}
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">
                      {character.funFact[lang]}
                    </p>
                  </div>
                </div>

                {/* Mobile Prev / Next Controls */}
                <div className="flex sm:hidden items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => {
                      onSelectCharacter(prevChar);
                      soundFx.playPop();
                    }}
                    className="flex items-center gap-1 text-xs font-black px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {prevChar.name[lang]}
                  </button>
                  <button
                    onClick={() => {
                      onSelectCharacter(nextChar);
                      soundFx.playPop();
                    }}
                    className="flex items-center gap-1 text-xs font-black px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 cursor-pointer"
                  >
                    {nextChar.name[lang]}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
