import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NonPerfectResultScreenProps {
  onYes: () => void;
}

export default function NonPerfectResultScreen({ onYes }: NonPerfectResultScreenProps) {
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = () => {
    setNoClickCount(noClickCount + 1);
  };

  const getPromptText = () => {
    if (noClickCount === 0) return 'Will you still be my Valentine? 💘';
    if (noClickCount === 1) return 'Are you sure?? 🥺';
    return 'You have no escape 😌';
  };

  const yesButtonScale = 1 + noClickCount * 0.5;
  const noButtonScale = Math.max(0.3, 1 - noClickCount * 0.2);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8">
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center space-y-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border-2 border-romantic-pink/30 shadow-romantic">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-romantic-mauve">
            Hmm… not perfect 👀
          </h1>
          <p className="text-xl md:text-2xl text-romantic-mauve font-medium">
            You need to do better…
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/generated/valentine-tease-meme.dim_1200x800.png"
            alt="Teasing moment"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <p className="text-2xl md:text-3xl font-display font-bold text-romantic-rose">
            {getPromptText()}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={onYes}
              size="lg"
              style={{
                transform: `scale(${yesButtonScale})`,
                transition: 'transform 0.3s ease-out',
              }}
              className="bg-gradient-romantic hover:scale-105 text-lg py-6 px-8 font-semibold shadow-lg hover:shadow-xl"
            >
              Yes 💖
            </Button>

            <Button
              onClick={handleNoClick}
              size="lg"
              variant="outline"
              style={{
                transform: `scale(${noButtonScale})`,
                transition: 'transform 0.3s ease-out',
              }}
              className="border-2 border-romantic-mauve text-romantic-mauve hover:bg-romantic-mauve/10 text-lg py-6 px-8 font-semibold"
            >
              No 😈
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
