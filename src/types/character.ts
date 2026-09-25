export interface CharacterPersonality {
  id: string;
  number: string; // e.g. "01", "02"
  name: string;
  tagline: string;
  personality: string[];
  quote: string;
  favorite: string;
  funFact: string;
  speechText: string;
  idleSpeech: string[];
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
    spotDescription: string;
  };
  soundType: 'pop' | 'boing' | 'chime' | 'giggle' | 'yawn' | 'wink' | 'fanfare' | 'chirp';
  specialReaction: string; // description of what happens on rare click
}
