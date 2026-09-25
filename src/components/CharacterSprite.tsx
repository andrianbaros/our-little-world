import { useState } from 'react';
import { CharacterVector } from './CharacterVectors';

interface CharacterSpriteProps {
  id: string;
  imagePath?: string;
  isSleeping?: boolean;
  isHovered?: boolean;
  isClicked?: boolean;
  className?: string;
}

export const CharacterSprite = ({
  id,
  imagePath = `/assets/characters/${id}.png`,
  isSleeping = false,
  isHovered = false,
  isClicked = false,
  className = 'w-full h-full object-contain',
}: CharacterSpriteProps) => {
  const [imgFailed, setImgFailed] = useState(false);

  // If external PNG is present and valid, show it; otherwise use our handcrafted SVG vector!
  if (!imgFailed && imagePath) {
    return (
      <div className={`relative ${className} flex items-center justify-center`}>
        <img
          src={imagePath}
          alt={id}
          className={`w-full h-full object-contain transition-transform duration-300 pointer-events-none select-none ${
            isHovered ? 'scale-105' : ''
          }`}
          onError={() => setImgFailed(true)}
          draggable={false}
        />
      </div>
    );
  }

  return (
    <CharacterVector
      id={id}
      isSleeping={isSleeping}
      isHovered={isHovered}
      isClicked={isClicked}
      className={className}
    />
  );
};
