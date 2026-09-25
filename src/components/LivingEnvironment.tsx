import { motion } from 'framer-motion';

interface LivingEnvironmentProps {
  isNight: boolean;
  mousePos: { x: number; y: number };
}

export const LivingEnvironment = ({ isNight, mousePos }: LivingEnvironmentProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Celestial Bodies (Sun / Moon) */}
      <div className="absolute top-8 right-12 sm:right-24 z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -10}px)`,
        }}
      >
        {!isNight ? (
          // Day: Warm glowing pastel sun
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-300 to-yellow-100 shadow-[0_0_60px_rgba(251,191,36,0.5)] flex items-center justify-center">
              {/* Cute sleepy smile on sun */}
              <div className="relative w-12 h-6 flex justify-between items-center px-1">
                <div className="w-2 h-2 rounded-full bg-amber-800/60" />
                <div className="w-3 h-1.5 border-b-2 border-amber-800/60 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-amber-800/60" />
              </div>
            </div>
          </motion.div>
        ) : (
          // Night: Luminous crescent moon with sleeping nightcap
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-200 to-amber-100 shadow-[0_0_50px_rgba(254,240,138,0.6)] flex items-center justify-center relative overflow-hidden">
              {/* Moon shadow making it a soft crescent */}
              <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full bg-[#0b1021]/80 backdrop-blur-xs" />
              <div className="relative z-10 text-amber-900/60 text-xs font-bold font-mono pl-4 pt-4">
                ✨
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* 2. Floating Clouds */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -6}px)`,
        }}
      >
        {/* Cloud 1 */}
        <div
          className="absolute top-12 left-[8%] animate-float-slow opacity-80"
          style={{ animationDuration: '8s' }}
        >
          <svg width="150" height="70" viewBox="0 0 150 70" fill={isNight ? '#263152' : '#ffffff'}>
            <ellipse cx="40" cy="50" rx="30" ry="18" />
            <ellipse cx="80" cy="38" rx="36" ry="24" />
            <ellipse cx="115" cy="52" rx="26" ry="16" />
          </svg>
        </div>

        {/* Cloud 2 */}
        <div
          className="absolute top-28 right-[14%] animate-float-slow opacity-75"
          style={{ animationDuration: '11s', animationDelay: '2s' }}
        >
          <svg width="180" height="80" viewBox="0 0 180 80" fill={isNight ? '#1e263d' : '#ffffff'}>
            <ellipse cx="50" cy="55" rx="35" ry="20" />
            <ellipse cx="95" cy="42" rx="42" ry="26" />
            <ellipse cx="140" cy="55" rx="30" ry="18" />
          </svg>
        </div>

        {/* Cloud 3 */}
        <div
          className="absolute top-48 left-[45%] animate-float-slow opacity-60 hidden md:block"
          style={{ animationDuration: '9s', animationDelay: '4s' }}
        >
          <svg width="120" height="55" viewBox="0 0 120 55" fill={isNight ? '#1b2238' : '#ffffff'}>
            <ellipse cx="35" cy="40" rx="24" ry="14" />
            <ellipse cx="68" cy="30" rx="28" ry="18" />
            <ellipse cx="98" cy="40" rx="20" ry="13" />
          </svg>
        </div>
      </div>

      {/* 3. Night Constellations & Fireflies vs Day Butterflies & Birds */}
      {isNight ? (
        <div className="absolute inset-0">
          {/* Twinkling Stars */}
          {[
            { top: '15%', left: '20%', size: 4, delay: 0 },
            { top: '22%', left: '75%', size: 3, delay: 0.5 },
            { top: '35%', left: '35%', size: 5, delay: 1 },
            { top: '12%', left: '55%', size: 3.5, delay: 1.5 },
            { top: '45%', left: '85%', size: 4, delay: 0.8 },
            { top: '28%', left: '10%', size: 4.5, delay: 2 },
            { top: '50%', left: '25%', size: 3, delay: 1.2 },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute animate-sparkle rounded-full bg-yellow-100 shadow-[0_0_8px_#fef08a]"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}

          {/* Fireflies floating near ground */}
          {[
            { bottom: '25%', left: '30%', delay: '0s' },
            { bottom: '32%', left: '55%', delay: '1.5s' },
            { bottom: '20%', left: '70%', delay: '0.7s' },
            { bottom: '15%', left: '42%', delay: '2.1s' },
          ].map((ff, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -14, 4, -8, 0],
                x: [0, 10, -6, 8, 0],
                opacity: [0.3, 0.9, 0.4, 0.85, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: parseFloat(ff.delay),
                ease: 'easeInOut',
              }}
              className="absolute w-2 h-2 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]"
              style={{ bottom: ff.bottom, left: ff.left }}
            />
          ))}
        </div>
      ) : (
        <div className="absolute inset-0">
          {/* Day flying butterflies */}
          <motion.div
            animate={{
              x: [0, 80, 160, 220, 300],
              y: [0, -25, -10, -35, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/3 left-1/4"
          >
            <div className="w-5 h-5 relative flex items-center justify-center animate-wiggle">
              <span className="text-sm select-none">🦋</span>
            </div>
          </motion.div>

          <motion.div
            animate={{
              x: [0, -70, -150, -240],
              y: [0, -18, -32, -5],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              delay: 3,
            }}
            className="absolute top-1/2 right-1/4 hidden sm:block"
          >
            <div className="w-5 h-5 relative flex items-center justify-center animate-wiggle">
              <span className="text-xs select-none">🌸</span>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
