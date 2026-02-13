import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function PerfectResultScreen() {
  const [redeemed, setRedeemed] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8">
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center space-y-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border-2 border-romantic-pink/30 shadow-romantic">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Sparkles className="w-16 h-16 text-romantic-rose animate-pulse-slow" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-romantic-rose">
            OMG 5/5!!! 😭💖
          </h1>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/generated/valentine-win-meme.dim_1200x800.png"
            alt="Romantic celebration"
            className="w-full h-auto"
          />
        </div>

        {!redeemed ? (
          <div className="space-y-6">
            <div className="bg-gradient-romantic p-6 rounded-2xl text-white space-y-3">
              <p className="text-3xl font-bold">🎟 You have won a DATE COUPON!</p>
              <p className="text-lg font-medium">
                Redeemable for: Lifelong lots of love, food, cuddles & surprises.
              </p>
            </div>

            <Button
              onClick={() => setRedeemed(true)}
              size="lg"
              className="w-full text-lg py-6 bg-gradient-romantic hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Redeem My Date 💌
            </Button>
          </div>
        ) : (
          <div className="bg-romantic-blush/30 p-8 rounded-2xl border-2 border-romantic-rose/30">
            <p className="text-2xl font-display font-bold text-romantic-rose">
              Your wife will contact you shortly for booking 😉
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
