import React, { useState, useEffect } from 'react';
import { Question, StudentProfile, ExamResult } from '../types/math';
import { generateChallengeExam } from '../data/topicsData';
import { QuestionCard } from './QuestionCard';
import { TrophyModal } from './TrophyModal';
import { 
  ArrowLeft, 
  Flame, 
  Trophy, 
  Timer, 
  Star,
  CheckCircle2,
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
  student: StudentProfile;
  onBack: () => void;
  onUpdateProfile: (updated: StudentProfile) => void;
}

export const ChallengeExam: React.FC<Props> = ({
  student,
  onBack,
  onUpdateProfile,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTrophyOpen, setIsTrophyOpen] = useState<boolean>(false);
  const [finalScorePercent, setFinalScorePercent] = useState<number>(0);

  useEffect(() => {
    // Generate fresh mixed exam
    const examQuestions = generateChallengeExam();
    setQuestions(examQuestions);
  }, []);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      playCorrectSound();
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      setCorrectAnswersCount((prev) => prev + 1);

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
      // Completed all questions
      const percent = Math.round((correctAnswersCount / questions.length) * 100);
      setFinalScorePercent(percent);

      let medal: 'gold' | 'silver' | 'bronze' | 'participant' = 'participant';
      if (percent >= 90) medal = 'gold';
      else if (percent >= 70) medal = 'silver';
      else if (percent >= 50) medal = 'bronze';

      // Save result
      const newResult: ExamResult = {
        id: 'challenge_' + Date.now(),
        studentName: student.name,
        topicTitle: 'Thử Thách Tổng Hợp Số Thập Phân',
        totalQuestions: questions.length,
        correctCount: correctAnswersCount,
        scorePercentage: percent,
        date: new Date().toISOString(),
        timeSpentSeconds: seconds,
        medal,
      };
      saveStoredResult(newResult);

      // Update student profile
      const updatedProfile: StudentProfile = {
        ...student,
        totalPoints: student.totalPoints + (correctAnswersCount * 15),
        totalStars: student.totalStars + (percent >= 80 ? 5 : 2),
        challengeBestScore: Math.max(student.challengeBestScore, percent),
        trophiesWon: student.trophiesWon + (percent >= 70 ? 1 : 0),
      };
      saveStoredProfile(updatedProfile);
      onUpdateProfile(updatedProfile);

      setIsTrophyOpen(true);
    }
  };

  const handleRetry = () => {
    setQuestions(generateChallengeExam());
    setCurrentIndex(0);
    setCorrectAnswersCount(0);
    setCurrentStreak(0);
    setSeconds(0);
    setIsTrophyOpen(false);
  };

  if (questions.length === 0) {
    return (
      <div className="p-12 text-center text-slate-500 font-medium">
        Đang chuẩn bị đề thi tổng hợp...
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 p-4 rounded-2xl text-white shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playClickSound();
              onBack();
            }}
            className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Quay Lại</span>
          </button>

          <div>
            <span className="text-[11px] font-semibold text-amber-100 uppercase tracking-wider block">
              Đấu trường cúp vàng
            </span>
            <h2 className="text-base sm:text-lg font-bold leading-tight flex items-center gap-1.5">
              <Trophy className="w-5 h-5 text-amber-200" />
              <span>Thử Thách Tổng Hợp 30 Câu</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-lg text-xs font-bold backdrop-blur-xs">
            <Timer className="w-4 h-4" />
            <span>{formatTime(seconds)}</span>
          </div>

          {currentStreak >= 2 && (
            <div className="flex items-center gap-1 px-2.5 py-1 bg-white/25 rounded-lg text-xs font-bold">
              <Flame className="w-4 h-4 text-orange-200 fill-orange-200" />
              <span>Chuỗi: {currentStreak}</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-2.5 py-1 bg-white/25 rounded-lg text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Đúng: {correctAnswersCount}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 px-1">
        <div className="flex justify-between text-xs font-medium text-slate-500">
          <span>Tiến độ: Câu {currentIndex + 1} / {questions.length}</span>
          <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}% hoàn thành</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 transition-all duration-300 rounded-full"
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

      {/* Trophy Modal */}
      <TrophyModal
        isOpen={isTrophyOpen}
        student={student}
        topicTitle="Đấu Trường Thử Thách Tổng Hợp"
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
