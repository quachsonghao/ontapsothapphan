/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Topic, StudentProfile, ExamResult } from './types/math';
import { TOPICS } from './data/topicsData';
import { 
  getStoredProfile, 
  saveStoredProfile, 
  getStoredResults, 
  saveStoredResult, 
  AVATARS 
} from './utils/storage';
import { Header } from './components/Header';
import { TopicsList } from './components/TopicsList';
import { TopicPractice } from './components/TopicPractice';
import { ChallengeExam } from './components/ChallengeExam';
import { QuickReferenceView } from './components/QuickReferenceView';
import { AchievementsView } from './components/AchievementsView';
import { StudentWelcomeModal } from './components/StudentWelcomeModal';
import { TheoryModal } from './components/TheoryModal';
import { TrophyModal } from './components/TrophyModal';

export default function App() {
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'topics' | 'challenge' | 'reference' | 'achievements'>('topics');
  
  // Exercise states
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  
  // Theory modal state
  const [theoryTopic, setTheoryTopic] = useState<Topic | null>(null);
  const [isTheoryOpen, setIsTheoryOpen] = useState<boolean>(false);

  // Standalone Certificate Viewer from Achievements
  const [viewingCertificate, setViewingCertificate] = useState<ExamResult | null>(null);

  // Results log
  const [results, setResults] = useState<ExamResult[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const stored = getStoredProfile();
    if (stored) {
      setStudent(stored);
    } else {
      setIsProfileModalOpen(true);
    }
    setResults(getStoredResults());
  }, []);

  const handleSaveProfile = (name: string, avatar: string) => {
    const updated: StudentProfile = student 
      ? { ...student, name, avatar }
      : {
          name,
          avatar,
          totalPoints: 0,
          totalStars: 0,
          completedTopics: [],
          challengeBestScore: 0,
          trophiesWon: 0,
        };

    setStudent(updated);
    saveStoredProfile(updated);
    setIsProfileModalOpen(false);
  };

  const handleUpdateProfile = (updated: StudentProfile) => {
    setStudent(updated);
    setResults(getStoredResults());
  };

  const handleOpenTheory = (topic: Topic) => {
    setTheoryTopic(topic);
    setIsTheoryOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans antialiased selection:bg-emerald-200">
      {/* Header Navigation */}
      <Header
        student={student}
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTopic(null);
          setIsExamMode(false);
          setActiveTab(tab);
        }}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Main App Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* If student profile is not yet entered, show friendly placeholder */}
        {!student ? (
          <div className="p-12 text-center max-w-md mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm mt-8 space-y-4">
            <div className="text-5xl">👋</div>
            <h2 className="text-xl font-bold text-slate-800">
              Chào mừng em đến với ứng dụng Toán 5!
            </h2>
            <p className="text-sm text-slate-600">
              Vui lòng nhập họ và tên của mình để bắt đầu làm bài tập số thập phân và tích lũy cúp khen thưởng nhé.
            </p>
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-md transition-colors"
            >
              Nhập Tên Để Bắt Đầu
            </button>
          </div>
        ) : (
          <>
            {/* View 1: Active Topic Practice */}
            {activeTopic && (
              <TopicPractice
                topic={activeTopic}
                student={student}
                onBack={() => setActiveTopic(null)}
                onUpdateProfile={handleUpdateProfile}
              />
            )}

            {/* View 2: Mixed Challenge Arena */}
            {isExamMode && !activeTopic && (
              <ChallengeExam
                student={student}
                onBack={() => setIsExamMode(false)}
                onUpdateProfile={handleUpdateProfile}
              />
            )}

            {/* View 3: Normal Navigation Views */}
            {!activeTopic && !isExamMode && (
              <>
                {activeTab === 'topics' && (
                  <TopicsList
                    student={student}
                    onSelectTopic={(topic) => setActiveTopic(topic)}
                    onStartChallenge={() => setIsExamMode(true)}
                    onOpenTheory={handleOpenTheory}
                  />
                )}

                {activeTab === 'challenge' && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center max-w-xl mx-auto shadow-xs space-y-4">
                    <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-inner">
                      🏆
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900">
                      Đấu Trường Thử Thách 30 Câu
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Bài kiểm tra tổng hợp bao gồm 30 câu hỏi chọn lọc từ tất cả 6 chuyên đề số thập phân (5 câu mỗi chuyên đề). Hoàn thành với kết quả xuất sắc để rinh <strong>Cúp Vàng Toàn Năng</strong> và Giấy Khen Danh Dự!
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setIsExamMode(true)}
                        className="px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
                      >
                        Bắt Đầu Đấu Trường Ngay
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'reference' && <QuickReferenceView />}

                {activeTab === 'achievements' && (
                  <AchievementsView
                    student={student}
                    results={results}
                    onOpenProfileModal={() => setIsProfileModalOpen(true)}
                    onOpenCertificate={(res) => setViewingCertificate(res)}
                  />
                )}
              </>
            )}
          </>
        )}
      </main>

      {/* Student Welcome / Rename Modal */}
      <StudentWelcomeModal
        initialProfile={student}
        isOpen={isProfileModalOpen}
        onSave={handleSaveProfile}
        onClose={() => setIsProfileModalOpen(false)}
        canCancel={!!student}
      />

      {/* Quick Theory Cheat Sheet Modal */}
      <TheoryModal
        topic={theoryTopic}
        isOpen={isTheoryOpen}
        onClose={() => setIsTheoryOpen(false)}
      />

      {/* Standalone Certificate Viewer when clicked from History */}
      {viewingCertificate && student && (
        <TrophyModal
          isOpen={true}
          student={student}
          topicTitle={viewingCertificate.topicTitle}
          totalQuestions={viewingCertificate.totalQuestions}
          correctCount={viewingCertificate.correctCount}
          scorePercentage={viewingCertificate.scorePercentage}
          onClose={() => setViewingCertificate(null)}
          onRetry={() => {
            setViewingCertificate(null);
            setIsExamMode(true);
          }}
        />
      )}

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-slate-200/80 bg-white text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Chinh Phục Số Thập Phân · Toán Học Lớp 5 Tiểu Học</span>
          <span>Chấm điểm thông minh · Giải thích chi tiết từng bước · Vinh danh cúp thưởng</span>
        </div>
      </footer>
    </div>
  );
}
