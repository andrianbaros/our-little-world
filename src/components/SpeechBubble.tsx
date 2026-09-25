import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronRight } from 'lucide-react';
import type { CharacterPersonality } from '../types/character';

interface SpeechBubbleProps {
  character: CharacterPersonality | null;
  text: string;
  onOpenProfile: (char: CharacterPersonality) => void;
  onClose: () => void;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  character,
  text,
  onOpenProfile,
  onClose,
}) => {
  if (!character) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.9 }}
        transition={{ type: 'spring', damping: 20, stiffness: 350 }}
        className="absolute z-50 pointer-events-auto transform -translate-x-1/2 -top-24 sm:-top-28 left-1/2 min-w-[200px] max-w-[280px] sm:max-w-[320px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md border border-white/80 transition-colors"
          style={{
            backgroundColor: `${character.themeColor.bg}f0`,
            boxShadow: `0 12px 28px -6px ${character.themeColor.glow}, 0 4px 10px rgba(0,0,0,0.08)`,
          }}
        >
          {/* Header row: Name + close button */}
          <div className="flex items-center justify-between mb-1">
            <span
              className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              style={{ color: character.themeColor.primary }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {character.name}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
              title="Tutup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Speech dialogue */}
          <p
            className="text-xs sm:text-sm font-medium leading-relaxed"
            style={{ color: character.themeColor.text }}
          >
            "{text}"
          </p>

          {/* Action to view full profile */}
          <div className="mt-2 pt-1.5 border-t border-black/5 dark:border-white/10 flex justify-end">
            <button
              onClick={() => onOpenProfile(character)}
              className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg transition-transform active:scale-95 text-white shadow-xs"
              style={{ backgroundColor: character.themeColor.primary }}
            >
              Lihat Profil
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Cartoon Bubble Arrow Tail */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b border-white/80"
            style={{
              backgroundColor: `${character.themeColor.bg}f0`,
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
