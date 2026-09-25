import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Eye } from 'lucide-react';
import type { CharacterPersonality } from '../types/character';
import { CharacterSprite } from './CharacterSprite';
import { soundFx } from '../utils/audio';

interface CharacterCardProps {
  character: CharacterPersonality;
  onOpenProfile: (char: CharacterPersonality) => void;
  onFocusInWorld: (char: CharacterPersonality) => void;
  isNight?: boolean;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onOpenProfile,
  onFocusInWorld,
  isNight = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      onMouseEnter={() => {
        setIsHovered(true);
        soundFx.playPop();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border cursor-pointer overflow-hidden backdrop-blur-sm"
      style={{
        backgroundColor: isHovered ? `${character.themeColor.bg}` : isNight ? '#161c31' : '#ffffff',
        borderColor: isHovered ? character.themeColor.primary : isNight ? '#263152' : '#f1f0f5',
        boxShadow: isHovered
          ? `0 20px 35px -10px ${character.themeColor.glow}`
          : '0 4px 15px rgba(0,0,0,0.03)',
      }}
      onClick={() => onOpenProfile(character)}
    >
      {/* Top Bar: Number badge & Personality mini dot */}
      <div className="flex items-center justify-between z-10">
        <span
          className="text-xs font-black tracking-wider px-2.5 py-0.5 rounded-full"
          style={{
            backgroundColor: `${character.themeColor.bg}`,
            color: character.themeColor.primary,
            border: `1px solid ${character.themeColor.border}`,
          }}
        >
          #{character.number}
        </span>
        <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          {character.personality[0]}
        </span>
      </div>

      {/* Center Mascot Image Stage */}
      <div className="relative my-4 flex items-center justify-center h-44 sm:h-48">
        {/* Soft background aura */}
        <div
          className="absolute w-32 h-32 rounded-full blur-2xl opacity-40 transition-opacity group-hover:opacity-75"
          style={{ backgroundColor: character.themeColor.secondary }}
        />

        {/* Mascot */}
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
          {character.name}
        </h3>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
          "{character.quote}"
        </p>

        {/* Personality Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {character.personality.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-bold px-2 py-0.5 rounded-lg"
              style={{
                backgroundColor: character.themeColor.bg,
                color: character.themeColor.primary,
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
            className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-1.5 shadow-xs"
            title="Temukan posisi di Little World"
          >
            <Compass className="w-3.5 h-3.5 text-pink-500" />
            <span>Lihat di Dunia</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playPop();
              onOpenProfile(character);
            }}
            className="py-2 px-3 rounded-xl text-xs font-bold text-white transition-all shadow-xs flex items-center justify-center gap-1"
            style={{ backgroundColor: character.themeColor.primary }}
            title="Buka profil lengkap"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Profil</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
