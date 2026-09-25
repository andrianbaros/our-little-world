import { useState, useMemo } from 'react';
import { Sparkles, Search } from 'lucide-react';
import type { CharacterPersonality } from '../types/character';
import { CharacterCard } from './CharacterCard';
import { soundFx } from '../utils/audio';

interface CharacterCollectionProps {
  characters: CharacterPersonality[];
  onOpenProfile: (char: CharacterPersonality) => void;
  onFocusInWorld: (char: CharacterPersonality) => void;
  isNight: boolean;
}

export const CharacterCollection: React.FC<CharacterCollectionProps> = ({
  characters,
  onOpenProfile,
  onFocusInWorld,
  isNight,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract unique personality traits for filter pills
  const allTags = useMemo(() => {
    const set = new Set<string>();
    characters.forEach((c) => c.personality.forEach((p) => set.add(p)));
    return ['All', ...Array.from(set)];
  }, [characters]);

  // Filtered characters
  const filtered = useMemo(() => {
    return characters.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.personality.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTag =
        selectedTag === 'All' || c.personality.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [characters, searchTerm, selectedTag]);

  return (
    <section id="meet-the-gang" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>COLLECTIBLE ALBUM • 12 CHARACTERS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
          Meet the Gang
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Setiap karakter memiliki keunikan, hobi, warna, dan ekspresi yang mengisi kehangatan dunia kecil ini.
        </p>

        {/* Filter and Search Bar */}
        <div className="mt-8 w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari nama atau kepribadian (misal: Riri, Brave, Jayzee)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-[#151c31] border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-pink-400 shadow-xs placeholder:text-gray-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5 max-w-3xl">
          {allTags.slice(0, 10).map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  soundFx.playClick();
                }}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-pink-500 text-white shadow-md scale-105'
                    : 'bg-white dark:bg-[#161c31] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-pink-300'
                }`}
              >
                {tag === 'All' ? '🌟 Semua' : `#${tag}`}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of 12 Character Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((char) => (
            <CharacterCard
              key={char.id}
              character={char}
              onOpenProfile={onOpenProfile}
              onFocusInWorld={onFocusInWorld}
              isNight={isNight}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-500">
          <p className="text-base font-semibold mb-2">Tidak ada karakter yang cocok dengan pencarian.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedTag('All');
            }}
            className="text-xs font-bold text-pink-500 underline"
          >
            Reset Filter
          </button>
        </div>
      )}
    </section>
  );
};
