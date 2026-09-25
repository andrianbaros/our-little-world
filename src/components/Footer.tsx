import { Sparkles, Heart, ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FooterProps {
  onBackToTop: () => void;
  isNight?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/60 dark:border-gray-800/80 bg-white/40 dark:bg-[#0a0d17]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-amber-400 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider">
              OUR LITTLE WORLD
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              12 Little Characters, One Big Cozy Universe
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
          <span>Dibuat dengan</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>untuk kehangatan hari-harimu</span>
        </div>

        <button
          onClick={() => {
            soundFx.playBoing();
            onBackToTop();
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-pink-400 transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
