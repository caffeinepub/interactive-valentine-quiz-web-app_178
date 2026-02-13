import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8">
      <Card className="w-full max-w-lg p-8 md:p-12 text-center space-y-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border-2 border-romantic-pink/30 shadow-romantic">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-romantic-rose fill-romantic-rose animate-pulse-slow" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-romantic-rose leading-tight">
            How Well Do You Know  💖
          </h1>
          <p className="text-lg md:text-xl text-romantic-mauve font-medium">
            A tiny test made with love just for you
          </p>
        </div>
        
        <Button
          onClick={onStart}
          size="lg"
          className="w-full text-lg py-6 bg-gradient-romantic hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
        >
          Start the Love Test →
        </Button>
      </Card>
    </div>
  );
}
