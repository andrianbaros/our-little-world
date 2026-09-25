import { useState, useMemo } from 'react';
import { Users, Search } from 'lucide-react';
import type { CharacterPersonality, Language } from '../types/character';
import { CharacterCard } from './CharacterCard';
import { soundFx } from '../utils/audio';
import { UI_TRANSLATIONS } from '../translations/ui';

interface CharacterCollectionProps {
  characters: CharacterPersonality[];
  lang: Language;
  onOpenProfile: (char: CharacterPersonality) => void;
  onFocusInWorld: (char: CharacterPersonality) => void;
  isNight: boolean;
}

export const CharacterCollection = ({
  characters,
  lang,
  onOpenProfile,
  onFocusInWorld,
  isNight,
}: CharacterCollectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const ui = UI_TRANSLATIONS[lang];

  // Extract unique personality traits for the current language
  const allTags = useMemo(() => {
    const set = new Set<string>();
    characters.forEach((c) => {
      const traits = c.personality[lang] || c.personality.en;
      traits.forEach((p) => set.add(p));
    });
    return ['All', ...Array.from(set)];
  }, [characters, lang]);

  // Filtered characters
  const filtered = useMemo(() => {
    return characters.filter((c) => {
      const name = (c.name[lang] || c.name.en).toLowerCase();
      const tagline = (c.tagline[lang] || c.tagline.en).toLowerCase();
      const personality = (c.personality[lang] || c.personality.en).map((p) => p.toLowerCase());

      const query = searchTerm.toLowerCase();
      const matchesSearch =
        name.includes(query) ||
        tagline.includes(query) ||
        personality.some((p) => p.includes(query));

      const currentTraits = c.personality[lang] || c.personality.en;
      const matchesTag = selectedTag === 'All' || currentTraits.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [characters, searchTerm, selectedTag, lang]);

  return (
    <section id="meet-the-gang" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider mb-4 bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-300 border-2 border-pink-200 dark:border-pink-800">
          <Users className="w-3.5 h-3.5 text-pink-500" />
          <span>{ui.collection.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
          {ui.collection.title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl font-medium">
          {ui.collection.subtitle}
        </p>

        {/* Filter and Search Bar */}
        <div className="mt-8 w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={ui.collection.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-[#151c31] border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-pink-400 shadow-xs placeholder:text-gray-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer"
              >
                {ui.collection.clear}
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
                className={`text-xs font-black px-3.5 py-1.5 rounded-full transition-all cursor-pointer border-2 ${
                  isSelected
                    ? 'bg-pink-500 text-white border-pink-600 shadow-md scale-105'
                    : 'bg-white dark:bg-[#161c31] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-pink-300'
                }`}
              >
                {tag === 'All' ? ui.collection.allPill : `#${tag}`}
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
              lang={lang}
              onOpenProfile={onOpenProfile}
              onFocusInWorld={onFocusInWorld}
              isNight={isNight}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-500">
          <p className="text-base font-semibold mb-2">{ui.collection.noResults}</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedTag('All');
            }}
            className="text-xs font-bold text-pink-500 underline cursor-pointer"
          >
            {ui.collection.resetFilter}
          </button>
        </div>
      )}
    </section>
  );
};
