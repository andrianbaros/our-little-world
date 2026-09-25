import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorldScene } from './components/WorldScene';
import { CharacterCollection } from './components/CharacterCollection';
import { CharacterModal } from './components/CharacterModal';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CHARACTERS_DATA } from './data/characters';
import type { CharacterPersonality, Language } from './types/character';
import { UI_TRANSLATIONS } from './translations/ui';
import { Sparkles } from 'lucide-react';

export function App() {
  const [isNight, setIsNight] = useState(false);
  const [lang, setLang] = useState<Language>('id');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterPersonality | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme & language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('olw_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialNight = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsNight(initialNight);
    if (initialNight) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const savedLang = localStorage.getItem('olw_lang') as Language;
    if (savedLang && (savedLang === 'id' || savedLang === 'en' || savedLang === 'km')) {
      setLang(savedLang);
    }

    // Cute initial waking-up animation
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(loadTimer);
  }, []);

  // Language switcher
  const handleSelectLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('olw_lang', newLang);
  };

  // Toggle Day / Night mode
  const handleToggleTheme = () => {
    const nextNight = !isNight;
    setIsNight(nextNight);
    localStorage.setItem('olw_theme', nextNight ? 'dark' : 'light');
    if (nextNight) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Open modal for a character
  const handleOpenProfile = (char: CharacterPersonality) => {
    setSelectedCharacter(char);
    setIsModalOpen(true);
  };

  // Focus character in World Scene
  const handleFocusInWorld = (char: CharacterPersonality) => {
    setHighlightedId(char.id);
    const worldElement = document.getElementById('world-scene');
    if (worldElement) {
      worldElement.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      setHighlightedId(null);
    }, 3500);
  };

  // Smooth scroll to World Scene
  const handleExploreClick = () => {
    const worldElement = document.getElementById('world-scene');
    if (worldElement) {
      worldElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Surprise Me: random character discovery
  const handleSurpriseMe = () => {
    const randomChar = CHARACTERS_DATA[Math.floor(Math.random() * CHARACTERS_DATA.length)];
    handleFocusInWorld(randomChar);
    setTimeout(() => {
      handleOpenProfile(randomChar);
    }, 800);
  };

  const ui = UI_TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-700 bg-[#fcfaf7] dark:bg-[#0c101c] text-[#2c3242] dark:text-[#f0f3fa]">
      {/* Initial Cute Waking-Up Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#ffeef2] dark:bg-[#0e1326] transition-opacity duration-500">
          <div className="relative flex flex-col items-center animate-bounce-cute">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-400 flex items-center justify-center shadow-xl mb-4 border-b-4 border-pink-700">
              <Sparkles className="w-8 h-8 text-white animate-spin" />
            </div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-wider">
              {ui.brandTitle}
            </h2>
            <p className="text-xs font-bold text-pink-600 dark:text-pink-400 mt-1">
              {ui.loading}
            </p>
          </div>
        </div>
      )}

      {/* Sticky Navigation */}
      <Navbar
        isNight={isNight}
        lang={lang}
        onToggleTheme={handleToggleTheme}
        onSelectLanguage={handleSelectLanguage}
        onSurpriseMe={handleSurpriseMe}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          characters={CHARACTERS_DATA}
          lang={lang}
          onExploreClick={handleExploreClick}
          onOpenProfile={handleOpenProfile}
          isNight={isNight}
        />

        {/* 2. World Scene Section */}
        <WorldScene
          characters={CHARACTERS_DATA}
          lang={lang}
          onOpenProfile={handleOpenProfile}
          isNight={isNight}
          highlightedId={highlightedId}
        />

        {/* 3. Collectible Album / Character Cards */}
        <CharacterCollection
          characters={CHARACTERS_DATA}
          lang={lang}
          onOpenProfile={handleOpenProfile}
          onFocusInWorld={handleFocusInWorld}
          isNight={isNight}
        />

        {/* 4. About & Story Section */}
        <AboutSection
          characters={CHARACTERS_DATA}
          lang={lang}
          onOpenProfile={handleOpenProfile}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        isNight={isNight}
      />

      {/* Character Profile Modal */}
      <CharacterModal
        character={selectedCharacter}
        allCharacters={CHARACTERS_DATA}
        lang={lang}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectCharacter={(char) => setSelectedCharacter(char)}
        isNight={isNight}
      />
    </div>
  );
}

export default App;
