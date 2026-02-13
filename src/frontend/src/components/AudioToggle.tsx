import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

export default function AudioToggle() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <div className="fixed bottom-20 right-4 z-20">
      <Button
        onClick={toggleMute}
        size="icon"
        variant="outline"
        className="rounded-full w-12 h-12 bg-white/90 dark:bg-card/90 backdrop-blur-sm border-2 border-romantic-pink/30 shadow-lg hover:scale-110 transition-all duration-300"
        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-romantic-mauve" />
        ) : (
          <Volume2 className="w-5 h-5 text-romantic-rose" />
        )}
      </Button>
    </div>
  );
}
