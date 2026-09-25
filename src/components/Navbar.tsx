import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, Volume2, VolumeX, Menu, X, Wand2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  isNight: boolean;
  onToggleTheme: () => void;
  onSurpriseMe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isNight, onToggleTheme, onSurpriseMe }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());

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
    { label: 'HOME', href: '#' },
    { label: 'WORLD', href: '#world-scene' },
    { label: 'CHARACTERS', href: '#meet-the-gang' },
    { label: 'ABOUT', href: '#about-world' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/85 dark:bg-[#0c101c]/85 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => soundFx.playPop()}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-black tracking-wider text-gray-900 dark:text-white uppercase leading-none">
              OUR LITTLE WORLD
            </span>
            <span className="text-[10px] font-bold text-pink-500 dark:text-pink-400">
              12 Cute Friends
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => soundFx.playClick()}
              className="text-xs font-black tracking-wider text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Row */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Surprise Me Button */}
          <button
            onClick={() => {
              soundFx.playChime();
              onSurpriseMe();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 border border-amber-300 dark:border-amber-700 transition-all cursor-pointer active:scale-95"
            title="Pilih karakter acak untuk beraksi!"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>Surprise Me!</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-2.5 rounded-full transition-all cursor-pointer ${
              isMuted
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                : 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300 shadow-xs'
            }`}
            title={isMuted ? 'Nyalakan Suara (🔊)' : 'Bisukan Suara (🔇)'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Day / Night Theme Toggle */}
          <button
            onClick={() => {
              soundFx.playPop();
              onToggleTheme();
            }}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-amber-300 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs border border-gray-200 dark:border-gray-700"
            title={isNight ? 'Ganti ke Siang Hari ☀️' : 'Ganti ke Malam Hari 🌙'}
          >
            {isNight ? <Moon className="w-4 h-4 text-amber-300" /> : <Sun className="w-4 h-4 text-amber-500" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white dark:bg-[#121626] border-b border-gray-200 dark:border-gray-800 shadow-xl flex flex-col gap-3">
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

          <button
            onClick={() => {
              soundFx.playChime();
              setIsMobileMenuOpen(false);
              onSurpriseMe();
            }}
            className="mt-2 w-full py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2"
          >
            <Wand2 className="w-4 h-4" />
            <span>Surprise Me!</span>
          </button>
        </div>
      )}
    </header>
  );
};
