import { ReactNode } from 'react';
import FloatingHeartsBackground from './FloatingHeartsBackground';
import AudioToggle from './AudioToggle';

interface ValentineLayoutProps {
  children: ReactNode;
}

export default function ValentineLayout({ children }: ValentineLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHeartsBackground />
      
      <div className="relative z-10">
        {children}
      </div>

      <AudioToggle />

      <footer className="relative z-10 py-6 text-center text-sm text-romantic-mauve">
        <p>
          © {new Date().getFullYear()} · Built with{' '}
          <span className="text-romantic-rose">❤</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-quiz'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-romantic-rose hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
