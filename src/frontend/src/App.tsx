import { useState } from 'react';
import WelcomeScreen from './views/WelcomeScreen';
import QuizFlow from './components/QuizFlow';
import PerfectResultScreen from './views/PerfectResultScreen';
import NonPerfectResultScreen from './views/NonPerfectResultScreen';
import CelebrationScreen from './views/CelebrationScreen';
import ValentineLayout from './components/ValentineLayout';

type AppView = 'welcome' | 'quiz' | 'perfect-result' | 'non-perfect-result' | 'celebration';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('welcome');
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setCurrentView('quiz');
    setScore(0);
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    if (finalScore === 5) {
      setCurrentView('perfect-result');
    } else {
      setCurrentView('non-perfect-result');
    }
  };

  const handleCelebration = () => {
    setCurrentView('celebration');
  };

  return (
    <ValentineLayout>
      <div className="transition-opacity duration-500">
        {currentView === 'welcome' && <WelcomeScreen onStart={handleStartQuiz} />}
        {currentView === 'quiz' && <QuizFlow onComplete={handleQuizComplete} />}
        {currentView === 'perfect-result' && <PerfectResultScreen />}
        {currentView === 'non-perfect-result' && (
          <NonPerfectResultScreen onYes={handleCelebration} />
        )}
        {currentView === 'celebration' && <CelebrationScreen />}
      </div>
    </ValentineLayout>
  );
}

export default App;
