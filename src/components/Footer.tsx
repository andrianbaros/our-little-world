import { Smile, Heart, ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/audio';
import type { Language } from '../types/character';
import { UI_TRANSLATIONS } from '../translations/ui';

interface FooterProps {
  lang: Language;
  onBackToTop: () => void;
  isNight?: boolean;
}

export const Footer = ({ lang, onBackToTop }: FooterProps) => {
  const ui = UI_TRANSLATIONS[lang];

  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-gray-200/70 dark:border-gray-800/80 bg-white/50 dark:bg-[#0a0d17]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-400 flex items-center justify-center text-white shadow-xs border-b-2 border-pink-700">
            <Smile className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider">
              {ui.brandTitle}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
              {ui.footer.sub}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300 font-bold">
          <span>{ui.footer.madeWith}</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
        </div>

        <button
          onClick={() => {
            soundFx.playBoing();
            onBackToTop();
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-400 transition-all cursor-pointer shadow-[0_3px_0_rgba(0,0,0,0.06)] active:translate-y-1 active:shadow-none"
        >
          <span>{ui.footer.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
