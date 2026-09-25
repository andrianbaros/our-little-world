import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Eye, Heart } from 'lucide-react';
import type { CharacterPersonality, Language } from '../types/character';
import { CharacterSprite } from './CharacterSprite';
import { soundFx } from '../utils/audio';
import { UI_TRANSLATIONS } from '../translations/ui';

interface CharacterCardProps {
  character: CharacterPersonality;
  lang: Language;
  onOpenProfile: (char: CharacterPersonality) => void;
  onFocusInWorld: (char: CharacterPersonality) => void;
  isNight?: boolean;
}

export const CharacterCard = ({
  character,
  lang,
  onOpenProfile,
  onFocusInWorld,
  isNight = false,
}: CharacterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ui = UI_TRANSLATIONS[lang];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      onMouseEnter={() => {
        setIsHovered(true);
        soundFx.playPop();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border-2 border-b-4 cursor-pointer overflow-hidden backdrop-blur-sm shadow-[0_4px_0_rgba(0,0,0,0.04)]"
      style={{
        backgroundColor: isHovered ? `${character.themeColor.bg}` : isNight ? '#161c31' : '#ffffff',
        borderColor: isHovered ? character.themeColor.primary : isNight ? '#263152' : '#ecebf0',
        boxShadow: isHovered
          ? `0 20px 35px -10px ${character.themeColor.glow}, 0 6px 0 ${character.themeColor.primary}40`
          : '0 4px 0 rgba(0,0,0,0.06)',
      }}
      onClick={() => onOpenProfile(character)}
    >
      {/* Top Bar: Friendship tag (NO NUMBERS / NO RANKINGS) */}
      <div className="flex items-center justify-between z-10">
        <span
          className="text-xs font-black tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1.5"
          style={{
            backgroundColor: `${character.themeColor.bg}`,
            color: character.themeColor.primary,
            borderColor: character.themeColor.border,
          }}
        >
          <Heart className="w-3 h-3 fill-current" />
          <span>{ui.collection.friendBadge}</span>
        </span>
        <span className="text-[11px] font-black text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
          {character.personality[lang][0] || character.personality.en[0]}
        </span>
      </div>

      {/* Center Mascot Image Stage */}
      <div className="relative my-4 flex items-center justify-center h-44 sm:h-48">
        <div
          className="absolute w-32 h-32 rounded-full blur-2xl opacity-40 transition-opacity group-hover:opacity-75"
          style={{ backgroundColor: character.themeColor.secondary }}
        />

        <div
          className={`w-36 h-40 sm:w-40 sm:h-44 transition-transform duration-300 ${
            isHovered ? 'scale-110 -translate-y-2' : ''
          }`}
        >
          <CharacterSprite
            id={character.id}
            imagePath={character.imagePath}
            isSleeping={character.id === 'momo'}
            isHovered={isHovered}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="z-10 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-1 group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
          {character.name[lang]}
        </h3>
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
          "{character.quote[lang]}"
        </p>

        {/* Personality Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {(character.personality[lang] || character.personality.en).slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-black px-2 py-0.5 rounded-lg border"
              style={{
                backgroundColor: character.themeColor.bg,
                color: character.themeColor.primary,
                borderColor: character.themeColor.border,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 pt-2 border-t border-black/5 dark:border-white/10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playBoing();
              onFocusInWorld(character);
            }}
            className="flex-1 py-2 px-3 rounded-xl text-xs font-black bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
            title="Inspect position in Little World"
          >
            <Compass className="w-3.5 h-3.5 text-pink-500" />
            <span>{ui.collection.viewInWorld}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playPop();
              onOpenProfile(character);
            }}
            className="py-2 px-3 rounded-xl text-xs font-black text-white transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer active:scale-95 border-b-2 border-black/20"
            style={{ backgroundColor: character.themeColor.primary }}
            title="Open character profile"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{ui.collection.viewProfile}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
