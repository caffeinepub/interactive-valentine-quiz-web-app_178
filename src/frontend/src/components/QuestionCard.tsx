import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { QuizQuestion } from '../data/valentineQuizQuestions';

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (selectedIndex: number) => void;
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedIndex(null);
    setHasAnswered(false);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;
    
    setSelectedIndex(index);
    setHasAnswered(true);
    onAnswer(index);
  };

  return (
    <Card className="p-6 md:p-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border-2 border-romantic-pink/30 shadow-romantic">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-romantic-rose text-center leading-relaxed">
          {question.question}
        </h2>

        <div className="grid gap-3">
          {question.options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isCorrect = index === question.correctIndex;
            const showResult = hasAnswered && isSelected;

            return (
              <Button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={hasAnswered}
                variant="outline"
                className={`
                  w-full p-4 text-left text-base md:text-lg font-medium transition-all duration-300
                  ${!hasAnswered ? 'hover:scale-[1.02] hover:shadow-md hover:border-romantic-rose hover:bg-romantic-blush/20' : ''}
                  ${showResult && isCorrect ? 'bg-romantic-success border-romantic-success text-white scale-[1.02]' : ''}
                  ${showResult && !isCorrect ? 'bg-romantic-error border-romantic-error text-white' : ''}
                  ${!showResult ? 'bg-white dark:bg-card border-romantic-pink/40' : ''}
                `}
              >
                <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
