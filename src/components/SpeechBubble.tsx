import { motion, AnimatePresence } from 'framer-motion';
import { Smile, X, ChevronRight, Heart } from 'lucide-react';
import type { CharacterPersonality, Language } from '../types/character';
import { UI_TRANSLATIONS } from '../translations/ui';

interface SpeechBubbleProps {
  character: CharacterPersonality | null;
  text: string;
  lang: Language;
  onOpenProfile: (char: CharacterPersonality) => void;
  onClose: () => void;
}

export const SpeechBubble = ({
  character,
  text,
  lang,
  onOpenProfile,
  onClose,
}: SpeechBubbleProps) => {
  if (!character) return null;
  const ui = UI_TRANSLATIONS[lang];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.9 }}
        transition={{ type: 'spring', damping: 20, stiffness: 350 }}
        className="absolute z-50 pointer-events-auto transform -translate-x-1/2 -top-26 sm:-top-30 left-1/2 min-w-[210px] max-w-[290px] sm:max-w-[340px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md border-2 border-white/80 transition-colors"
          style={{
            backgroundColor: `${character.themeColor.bg}f6`,
            boxShadow: `0 12px 28px -6px ${character.themeColor.glow}, 0 6px 14px rgba(0,0,0,0.08)`,
          }}
        >
          {/* Header row: Name + close button */}
          <div className="flex items-center justify-between mb-1">
            <span
              className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5"
              style={{ color: character.themeColor.primary }}
            >
              {character.isFemale ? (
                <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
              ) : (
                <Smile className="w-3.5 h-3.5" />
              )}
              {character.name[lang]}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Speech dialogue */}
          <p
            className="text-xs sm:text-sm font-semibold leading-relaxed"
            style={{ color: character.themeColor.text }}
          >
            "{text}"
          </p>

          {/* Action to view full profile */}
          <div className="mt-2.5 pt-1.5 border-t border-black/5 dark:border-white/10 flex justify-end">
            <button
              onClick={() => onOpenProfile(character)}
              className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-xl transition-transform active:scale-95 text-white shadow-xs cursor-pointer border-b-2 border-black/20"
              style={{ backgroundColor: character.themeColor.primary }}
            >
              <span>{ui.world.viewProfile}</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Cartoon Bubble Arrow Tail */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-r-2 border-b-2 border-white/80"
            style={{
              backgroundColor: `${character.themeColor.bg}f6`,
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
