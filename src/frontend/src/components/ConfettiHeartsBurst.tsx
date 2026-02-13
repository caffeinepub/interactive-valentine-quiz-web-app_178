import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  emoji: string;
  scale: number;
}

interface ConfettiHeartsBurstProps {
  continuous?: boolean;
}

export default function ConfettiHeartsBurst({ continuous = false }: ConfettiHeartsBurstProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const emojis = ['💖', '💕', '💗', '💓', '💝', '🌹', '✨', '⭐'];
    const newParticles: Particle[] = [];

    const particleCount = continuous ? 30 : 20;

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: 50,
        y: 50,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8 - 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        scale: 0.8 + Math.random() * 0.7,
      });
    }

    setParticles(newParticles);

    if (continuous) {
      const interval = setInterval(() => {
        const moreParticles: Particle[] = [];
        for (let i = 0; i < 5; i++) {
          moreParticles.push({
            id: Date.now() + Math.random(),
            x: 50,
            y: 50,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8 - 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            scale: 0.8 + Math.random() * 0.7,
          });
        }
        setParticles((prev) => [...prev.slice(-25), ...moreParticles]);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [continuous]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-4xl animate-confetti-fall"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
            '--vx': `${particle.vx}vw`,
            '--vy': `${particle.vy}vh`,
            '--rotation-speed': `${particle.rotationSpeed}deg`,
          } as React.CSSProperties}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
}
