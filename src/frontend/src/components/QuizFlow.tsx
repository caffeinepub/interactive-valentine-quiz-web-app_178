import { useState } from 'react';
import QuestionCard from './QuestionCard';
import { Progress } from '@/components/ui/progress';
import { questions } from '../data/valentineQuizQuestions';
import ConfettiHeartsBurst from './ConfettiHeartsBurst';
import { useAudio } from '../hooks/useAudio';

interface QuizFlowProps {
  onComplete: (score: number) => void;
}

export default function QuizFlow({ onComplete }: QuizFlowProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const { playCorrectSound } = useAudio();

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (selectedIndex: number) => {
    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    
    if (isCorrect) {
      setScore(score + 1);
      setShowCelebration(true);
      playCorrectSound();
      
      setTimeout(() => {
        setShowCelebration(false);
        moveToNext();
      }, 1500);
    } else {
      setTimeout(() => {
        moveToNext();
      }, 800);
    }
  };

  const moveToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalScore = score + (showCelebration ? 1 : 0);
      onComplete(finalScore);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-romantic-mauve font-medium">
            <span>Question {currentQuestionIndex + 1}/{questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3 bg-romantic-cream" />
        </div>

        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      </div>

      {showCelebration && <ConfettiHeartsBurst />}
    </div>
  );
}
