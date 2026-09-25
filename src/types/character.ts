export type Language = 'id' | 'en' | 'km';

export interface LocalizedString {
  id: string;
  en: string;
  km: string;
}

export interface CharacterPersonality {
  id: string;
  number: string; // e.g. "01", "02"
  name: LocalizedString;
  tagline: LocalizedString;
  personality: {
    id: string[];
    en: string[];
    km: string[];
  };
  quote: LocalizedString;
  favorite: LocalizedString;
  funFact: LocalizedString;
  speechText: LocalizedString;
  idleSpeech: {
    id: string[];
    en: string[];
    km: string[];
  };
  themeColor: {
    primary: string;
    secondary: string;
    bg: string;
    text: string;
    accent: string;
    border: string;
    glow: string;
  };
  imagePath: string; // fallback /assets/characters/{id}.png
  idleAnimation: 'float' | 'bounce' | 'breathe' | 'wiggle' | 'sleep' | 'spin' | 'sway' | 'dash';
  worldPosition: {
    x: number; // percentage from left in 0..100
    y: number; // percentage from top in 0..100
    scale?: number;
    zIndex?: number;
    facing?: 'left' | 'right';
    spotDescription: LocalizedString;
  };
  soundType: 'pop' | 'boing' | 'chime' | 'giggle' | 'yawn' | 'wink' | 'fanfare' | 'chirp';
  specialReaction: LocalizedString;
}
