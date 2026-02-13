import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import ConfettiHeartsBurst from '../components/ConfettiHeartsBurst';
import { useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';

export default function CelebrationScreen() {
  const { playCelebrationSound } = useAudio();

  useEffect(() => {
    playCelebrationSound();
  }, [playCelebrationSound]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8">
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center space-y-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border-2 border-romantic-pink/30 shadow-romantic animate-scale-in">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Heart className="w-24 h-24 text-romantic-rose fill-romantic-rose animate-bounce-slow" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-romantic-rose leading-tight">
            YAY!!! You are my Valentine forever 💖🌹
          </h1>
        </div>
      </Card>
      <ConfettiHeartsBurst continuous />
    </div>
  );
}
