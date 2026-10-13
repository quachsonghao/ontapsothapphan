import React, { useState } from 'react';
import { Topic, StudentProfile, ExamResult } from '../types/math';
import { QuestionCard } from './QuestionCard';
import { TheoryModal } from './TheoryModal';
import { TrophyModal } from './TrophyModal';
import { 
  ArrowLeft, 
  BookOpen, 
  Flame, 
  Star, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { 
  playCorrectSound, 
  playIncorrectSound, 
  playStreakSound, 
  playClickSound 
} from '../utils/audio';
import { fireSmallSuccessConfetti } from '../utils/confetti';
import { saveStoredProfile, saveStoredResult } from '../utils/storage';

interface Props {
  topic: Topic;
  student: StudentProfile;
  onBack: () => void;
  onUpdateProfile: (updated: StudentProfile) => void;
}

export const TopicPractice: React.FC<Props> = ({
  topic,
  student,
  onBack,
  onUpdateProfile,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [sessionPoints, setSessionPoints] = useState<number>(0);
  const [isTheoryOpen, setIsTheoryOpen] = useState<boolean>(false);
  const [isTrophyOpen, setIsTrophyOpen] = useState<boolean>(false);
  const [finalScorePercent, setFinalScorePercent] = useState<number>(0);

  const questions = topic.questions;
  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex) / questions.length) * 100);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      playCorrectSound();
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      setCorrectAnswersCount((prev) => prev + 1);
      setSessionPoints((prev) => prev + 10);

      // Streak celebration
      if (newStreak >= 3) {
        setTimeout(() => {
          playStreakSound();
          fireSmallSuccessConfetti();
        }, 250);
      }
    } else {
      playIncorrectSound();
      setCurrentStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Completed all questions in this topic
      const percent = Math.round((correctAnswersCount / questions.length) * 100);
      setFinalScorePercent(percent);

      // Determine medal
      let medal: 'gold' | 'silver' | 'bronze' | 'participant' = 'participant';
      if (percent >= 90) medal = 'gold';
      else if (percent >= 70) medal = 'silver';
      else if (percent >= 50) medal = 'bronze';

      // Save Exam Result
      const newResult: ExamResult = {
        id: 'res_' + Date.now(),
        studentName: student.name,
        topicTitle: topic.title,
        totalQuestions: questions.length,
        correctCount: correctAnswersCount,
        scorePercentage: percent,
        date: new Date().toISOString(),
        timeSpentSeconds: 0,
        medal,
      };
      saveStoredResult(newResult);

      // Update student profile
      const isAlreadyCompleted = student.completedTopics.includes(topic.id);
      const updatedTopics = isAlreadyCompleted 
        ? student.completedTopics 
        : [...student.completedTopics, topic.id];

      const additionalStars = percent >= 80 ? 3 : percent >= 50 ? 2 : 1;
      const wonTrophy = percent >= 70 ? 1 : 0;

      const updatedProfile: StudentProfile = {
        ...student,
        totalPoints: student.totalPoints + sessionPoints,
        totalStars: student.totalStars + additionalStars,
        completedTopics: updatedTopics,
        trophiesWon: student.trophiesWon + wonTrophy,
      };

      saveStoredProfile(updatedProfile);
      onUpdateProfile(updatedProfile);

      // Show trophy modal
      setIsTrophyOpen(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setCorrectAnswersCount(0);
    setCurrentStreak(0);
    setSessionPoints(0);
    setIsTrophyOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Navigation & Status Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playClickSound();
              onBack();
            }}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Trang Chủ</span>
          </button>

          <div>
            <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block">
              Chuyên đề luyện tập
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              {topic.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {currentStreak >= 2 && (
            <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs font-bold animate-pulse">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Chuỗi đúng: {currentStreak}</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-bold">
            <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>+{sessionPoints} điểm</span>
          </div>

          <button
            onClick={() => {
              playClickSound();
              setIsTheoryOpen(true);
            }}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Xem Lý Thuyết</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 px-1">
        <div className="flex justify-between text-xs font-medium text-slate-500">
          <span>Tiến độ: Câu {currentIndex + 1} / {questions.length}</span>
          <span>{progressPercent}% hoàn thành</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      {currentQ && (
        <QuestionCard
          key={currentQ.id}
          question={currentQ}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
          isLastQuestion={currentIndex === questions.length - 1}
        />
      )}

      {/* Theory Modal */}
      <TheoryModal
        topic={topic}
        isOpen={isTheoryOpen}
        onClose={() => setIsTheoryOpen(false)}
      />

      {/* Trophy Modal upon completion */}
      <TrophyModal
        isOpen={isTrophyOpen}
        student={student}
        topicTitle={topic.title}
        totalQuestions={questions.length}
        correctCount={correctAnswersCount}
        scorePercentage={finalScorePercent}
        onClose={() => {
          setIsTrophyOpen(false);
          onBack();
        }}
        onRetry={handleRetry}
      />
    </div>
  );
};
