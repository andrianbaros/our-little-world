import { useState } from 'react';
import { Sparkles, Smile, Stars } from 'lucide-react';
import type { CharacterPersonality, Language } from '../types/character';
import { soundFx } from '../utils/audio';
import { UI_TRANSLATIONS } from '../translations/ui';

interface AboutSectionProps {
  characters: CharacterPersonality[];
  lang: Language;
  onOpenProfile: (char: CharacterPersonality) => void;
  isNight?: boolean;
}

export const AboutSection = ({
  characters,
  lang,
  onOpenProfile,
}: AboutSectionProps) => {
  const [selectedMoodKey, setSelectedMoodKey] = useState<string | null>(null);
  const ui = UI_TRANSLATIONS[lang];

  // Map mood keys to character IDs
  const moodCharacterMap: Record<string, string> = {
    energetic: 'zyzy',
    sleepy: 'momo',
    tea: 'anan',
    adventure: 'riri',
    cool: 'jayzee',
    caring: 'cici',
  };

  const handleMoodSelect = (moodKey: string) => {
    setSelectedMoodKey(moodKey);
    const charId = moodCharacterMap[moodKey];
    const match = characters.find((c) => c.id === charId);
    if (match) {
      soundFx.playFanfare();
      setTimeout(() => onOpenProfile(match), 400);
    }
  };

  return (
    <section id="about-world" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Container with tactile glassmorphism */}
      <div className="relative rounded-4xl p-8 sm:p-12 md:p-16 overflow-hidden border-2 border-white/80 dark:border-white/10 bg-white/70 dark:bg-[#121729]/70 backdrop-blur-xl shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-300/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider mb-4 bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-2 border-purple-200 dark:border-purple-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ui.about.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            {ui.about.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-medium">
            {ui.about.story}
          </p>

          {/* Interactive Feature: Mood Matcher */}
          <div className="w-full p-6 sm:p-8 rounded-3xl bg-pink-50/80 dark:bg-[#191f36]/80 border-2 border-pink-200 dark:border-pink-900/50 text-left shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Smile className="w-5 h-5 text-pink-500" />
              <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
                {ui.about.moodTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-5 font-semibold">
              {ui.about.moodSub}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {(Object.keys(ui.about.moods) as Array<keyof typeof ui.about.moods>).map((key) => {
                const moodLabel = ui.about.moods[key];
                const isSelected = selectedMoodKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleMoodSelect(key)}
                    className={`text-xs sm:text-sm font-black p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between shadow-[0_3px_0_rgba(0,0,0,0.04)] active:translate-y-1 active:shadow-none ${
                      isSelected
                        ? 'bg-pink-500 text-white border-pink-600 shadow-md scale-102'
                        : 'bg-white dark:bg-[#141a2e] text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-pink-300 hover:bg-pink-50/50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span>{moodLabel}</span>
                    <Stars className="w-3.5 h-3.5 opacity-60" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
