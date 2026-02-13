import { create } from 'zustand';
import { useCallback } from 'react';

interface AudioState {
  isMuted: boolean;
  toggleMute: () => void;
}

const useAudioStore = create<AudioState>((set) => ({
  isMuted: true,
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));

export function useAudio() {
  const { isMuted, toggleMute } = useAudioStore();

  const playSound = useCallback(
    (frequency: number, duration: number) => {
      if (isMuted) return;

      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      } catch (error) {
        console.log('Audio playback not supported');
      }
    },
    [isMuted]
  );

  const playCorrectSound = useCallback(() => {
    playSound(800, 0.2);
    setTimeout(() => playSound(1000, 0.2), 100);
  }, [playSound]);

  const playCelebrationSound = useCallback(() => {
    playSound(600, 0.15);
    setTimeout(() => playSound(800, 0.15), 100);
    setTimeout(() => playSound(1000, 0.3), 200);
  }, [playSound]);

  return {
    isMuted,
    toggleMute,
    playCorrectSound,
    playCelebrationSound,
  };
}
