import { useState } from 'react';
import { Sparkles, Smile, Stars } from 'lucide-react';
import type { CharacterPersonality } from '../types/character';
import { soundFx } from '../utils/audio';

interface AboutSectionProps {
  characters: CharacterPersonality[];
  onOpenProfile: (char: CharacterPersonality) => void;
  isNight?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  characters,
  onOpenProfile,
}) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moodMatch: Record<string, string> = {
    'Lagi Bersemangat! 🚀': 'zyzy',
    'Pengen Santai & Rebahan ☁️': 'momo',
    'Lagi Pengen Ditemenin Teh 🍵': 'anan',
    'Siap Berpetualang Baru 🧭': 'riri',
    'Lagi Pengen Tampil Kece & Keren ✨': 'jayzee',
    'Pengen Pelukan Hangat 🌸': 'cici',
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    const charId = moodMatch[mood];
    const match = characters.find((c) => c.id === charId);
    if (match) {
      soundFx.playFanfare();
      setTimeout(() => onOpenProfile(match), 400);
    }
  };

  return (
    <section id="about-world" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Container with gentle glassmorphism */}
      <div className="relative rounded-4xl p-8 sm:p-12 md:p-16 overflow-hidden border border-white/60 dark:border-white/10 bg-white/60 dark:bg-[#121729]/60 backdrop-blur-xl shadow-xl">
        {/* Soft decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-300/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE UNIVERSE STORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Dunia Kecil Penuh Keajaiban Sederhana
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Our Little World adalah sebuah semesta animasi yang hangat, tempat di mana 12 sahabat mungil tinggal berdampingan. Tidak ada perlombaan di sini—hanya secangkir teh di pagi hari, gelembung sabun yang melayang di udara, petikan musik lo-fi di bawah pohon, dan tawa tulus yang menular.
          </p>

          {/* Interactive Feature: Mood Matcher */}
          <div className="w-full p-6 sm:p-8 rounded-3xl bg-pink-50/70 dark:bg-[#191f36]/70 border border-pink-100 dark:border-pink-950/40 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Smile className="w-5 h-5 text-pink-500" />
              <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
                Bagaimana Mood Kamu Hari Ini?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
              Pilih perasaanmu, dan kami akan mempertemukanmu dengan sahabat yang paling cocok di Little World:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {Object.keys(moodMatch).map((mood) => (
                <button
                  key={mood}
                  onClick={() => handleMoodSelect(mood)}
                  className={`text-xs sm:text-sm font-bold p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    selectedMood === mood
                      ? 'bg-pink-500 text-white border-pink-600 shadow-md scale-102'
                      : 'bg-white dark:bg-[#141a2e] text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-pink-300 hover:bg-pink-50/50 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{mood}</span>
                  <Stars className="w-3.5 h-3.5 opacity-60" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
