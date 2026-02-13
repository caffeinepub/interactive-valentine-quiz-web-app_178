export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export const questions: QuizQuestion[] = [
  {
    question: 'What was our first long ride?',
    options: ['Marina', 'Perungudi Highway', 'DLF', "I don't know"],
    correctIndex: 1,
  },
  {
    question: 'Our first movie together?',
    options: ['Conjuring', 'Materialist', 'Final destination', "I don't know"],
    correctIndex: 2,
  },
  {
    question: 'What was my first gift/ thing bought to you?',
    options: ['Slipper', 'Teddy', 'Body wash', 'My heart'],
    correctIndex: 2,
  },
  {
    question: 'If I crave for smoething what it would be?',
    options: ['Coffee', 'Biriyani', 'Pizza', 'Parotta'],
    correctIndex: 3,
  },
  {
    question: 'Who is most beautiful person in the world?',
    options: ['Aruna', 'Aruna', 'Aruna', 'Aruna'],
    correctIndex: 1,
  },
];
