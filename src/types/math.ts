export type TopicId = 
  | 'concept' 
  | 'place-value' 
  | 'read-write' 
  | 'comparison' 
  | 'equal-decimals' 
  | 'measurement-conversion';

export type QuestionType = 'choice' | 'compare' | 'fill' | 'true-false';

export interface Question {
  id: string;
  topicId: TopicId;
  prompt: string;
  subPrompt?: string;
  type: QuestionType;
  options?: string[]; // For multiple choice
  correctAnswer: string; // The correct string value
  explanation: {
    rule: string;
    stepByStep: string[];
    tips?: string;
  };
  visualHint?: string; // e.g. "3m 5cm = ... m"
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Topic {
  id: TopicId;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  color: string;
  theory: {
    summary: string;
    points: string[];
    examples: { expression: string; meaning: string }[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  };
  questions: Question[];
}

export interface StudentProfile {
  name: string;
  avatar: string;
  totalPoints: number;
  totalStars: number;
  completedTopics: string[]; // Topic IDs completed
  challengeBestScore: number;
  trophiesWon: number;
}

export interface ExamResult {
  id: string;
  studentName: string;
  topicTitle: string;
  totalQuestions: number;
  correctCount: number;
  scorePercentage: number;
  date: string;
  timeSpentSeconds: number;
  medal: 'gold' | 'silver' | 'bronze' | 'participant';
}
