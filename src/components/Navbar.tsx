import { useState, useEffect } from 'react';
import { Smile, Sun, Moon, Volume2, VolumeX, Menu, X, Dice5, Globe } from 'lucide-react';
import { soundFx } from '../utils/audio';
import type { Language } from '../types/character';
import { UI_TRANSLATIONS } from '../translations/ui';

interface NavbarProps {
  isNight: boolean;
  lang: Language;
  onToggleTheme: () => void;
  onSelectLanguage: (lang: Language) => void;
  onSurpriseMe: () => void;
}

export const Navbar = ({
  isNight,
  lang,
  onToggleTheme,
  onSelectLanguage,
  onSurpriseMe,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const ui = UI_TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newMuted = soundFx.toggleMute();
    setIsMuted(newMuted);
  };

  const navLinks = [
    { label: ui.nav.home, href: '#' },
    { label: ui.nav.world, href: '#world-scene' },
    { label: ui.nav.characters, href: '#meet-the-gang' },
    { label: ui.nav.about, href: '#about-world' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'km', label: 'ភាសាខ្មែរ (Khmer)', flag: '🇰🇭' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/90 dark:bg-[#0c101c]/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with cute warm Smile */}
        <a
          href="#"
          onClick={() => soundFx.playPop()}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 flex items-center justify-center text-white shadow-md border-b-3 border-pink-700 group-hover:scale-105 active:scale-95 transition-transform">
            <Smile className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm sm:text-base font-black tracking-wider text-gray-900 dark:text-white uppercase leading-none">
              {ui.brandTitle}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-pink-500 dark:text-pink-400 mt-0.5">
              {ui.brandSub}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => soundFx.playClick()}
              className="text-xs font-black tracking-wider text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Row */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                soundFx.playClick();
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
              className="px-2.5 py-1.5 rounded-full text-xs font-black bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 shadow-xs flex items-center gap-1.5 cursor-pointer hover:border-pink-300 active:scale-95 transition-all"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-pink-500" />
              <span className="uppercase">{lang}</span>
              <span className="text-xs">
                {lang === 'id' ? '🇮🇩' : lang === 'en' ? '🇬🇧' : '🇰🇭'}
              </span>
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-[#151a2d] border-2 border-gray-100 dark:border-gray-700 shadow-2xl p-1.5 z-50 flex flex-col gap-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onSelectLanguage(l.code);
                      setIsLangMenuOpen(false);
                      soundFx.playPop();
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                      lang === l.code
                        ? 'bg-pink-500 text-white shadow-xs'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                    {lang === l.code && <span className="text-xs font-black">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Surprise Me Button (using Dice5) */}
          <button
            onClick={() => {
              soundFx.playChime();
              onSurpriseMe();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-900 border-2 border-amber-300 dark:border-amber-700 transition-all cursor-pointer active:scale-95 shadow-xs"
            title="Random Character Surprise"
          >
            <Dice5 className="w-3.5 h-3.5" />
            <span>{ui.nav.surpriseMe}</span>
          </button>

          {/* Sound Toggle Button */}
          <button
            onClick={handleToggleSound}
            className={`p-2.5 rounded-full border-2 transition-all cursor-pointer active:scale-90 ${
              isMuted
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 border-gray-200 dark:border-gray-700'
                : 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300 border-pink-200 dark:border-pink-800 shadow-xs'
            }`}
            title={isMuted ? ui.nav.soundOn : ui.nav.soundOff}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Day / Night Theme Toggle */}
          <button
            onClick={() => {
              soundFx.playPop();
              onToggleTheme();
            }}
            className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-amber-300 hover:scale-105 active:scale-90 transition-all cursor-pointer shadow-xs border-2 border-gray-200 dark:border-gray-700"
            title={isNight ? ui.nav.dayMode : ui.nav.nightMode}
          >
            {isNight ? (
              <Moon className="w-4 h-4 text-amber-300" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-white dark:bg-[#121626] border-b-2 border-gray-200 dark:border-gray-800 shadow-xl flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                soundFx.playClick();
                setIsMobileMenuOpen(false);
              }}
              className="text-sm font-bold text-gray-800 dark:text-gray-200 py-2 border-b border-gray-100 dark:border-gray-800"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Language Switcher Row */}
          <div className="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
            <span className="text-xs font-bold text-gray-500">Language:</span>
            <div className="flex items-center gap-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    onSelectLanguage(l.code);
                    soundFx.playPop();
                  }}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold border ${
                    lang === l.code
                      ? 'bg-pink-500 text-white border-pink-600'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {l.flag} {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playChime();
              setIsMobileMenuOpen(false);
              onSurpriseMe();
            }}
            className="mt-2 w-full py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs border-b-2 border-amber-700"
          >
            <Dice5 className="w-4 h-4" />
            <span>{ui.nav.surpriseMe}</span>
          </button>
        </div>
      )}
    </header>
  );
};
