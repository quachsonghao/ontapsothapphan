import React from 'react';
import { StudentProfile, ExamResult } from '../types/math';
import { TOPICS } from '../data/topicsData';
import { Trophy, Award, Star, Calendar, CheckCircle2, Flame, User } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface Props {
  student: StudentProfile;
  results: ExamResult[];
  onOpenProfileModal: () => void;
  onOpenCertificate: (result: ExamResult) => void;
}

export const AchievementsView: React.FC<Props> = ({
  student,
  results,
  onOpenProfileModal,
  onOpenCertificate,
}) => {
  return (
    <div className="space-y-6">
      {/* Student Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl p-6 text-white shadow-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl bg-white/20 p-3 rounded-2xl shadow-inner backdrop-blur-xs">
            {student.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold">{student.name}</h2>
              <button
                onClick={() => {
                  playClickSound();
                  onOpenProfileModal();
                }}
                className="text-xs px-2 py-0.5 rounded-md bg-white/20 hover:bg-white/30 font-medium transition-colors"
              >
                Đổi tên
              </button>
            </div>
            <p className="text-emerald-100 text-xs mt-0.5">
              Học sinh Lớp 5 · Chiến binh toán học xuất sắc
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-white/15 px-3.5 py-2 rounded-xl text-center backdrop-blur-xs">
            <span className="text-[10px] text-emerald-100 uppercase block font-semibold">Cúp Đạt Được</span>
            <span className="text-lg font-bold flex items-center justify-center gap-1 text-amber-300">
              <Trophy className="w-4 h-4" />
              <span>{student.trophiesWon}</span>
            </span>
          </div>

          <div className="bg-white/15 px-3.5 py-2 rounded-xl text-center backdrop-blur-xs">
            <span className="text-[10px] text-emerald-100 uppercase block font-semibold">Sao Tích Lũy</span>
            <span className="text-lg font-bold flex items-center justify-center gap-1 text-yellow-300">
              <Star className="w-4 h-4 fill-yellow-300" />
              <span>{student.totalStars}</span>
            </span>
          </div>

          <div className="bg-white/15 px-3.5 py-2 rounded-xl text-center backdrop-blur-xs">
            <span className="text-[10px] text-emerald-100 uppercase block font-semibold">Điểm Năng Lượng</span>
            <span className="text-lg font-bold text-white">
              {student.totalPoints}
            </span>
          </div>
        </div>
      </div>

      {/* Topics Completion Progress */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600" />
          <span>Hành Trình Hoàn Thành 6 Chuyên Đề</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {TOPICS.map((topic) => {
            const isCompleted = student.completedTopics.includes(topic.id);
            return (
              <div
                key={topic.id}
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isCompleted
                    ? 'border-emerald-300 bg-emerald-50/50'
                    : 'border-slate-200 bg-slate-50/50 opacity-70'
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    {topic.title}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {topic.questions.length} bài tập
                  </span>
                </div>
                {isCompleted ? (
                  <div className="p-1 bg-emerald-500 text-white rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-400 font-medium">Chưa xong</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>Lịch Sử Bài Làm & Danh Hiệu Đã Đạt</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            {results.length} lượt làm bài
          </span>
        </div>

        {results.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-sm">
            Em chưa làm bài tập nào. Hãy chọn một chuyên đề để bắt đầu và rinh cúp đầu tiên nhé!
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {results.map((res) => {
              const formattedDate = new Date(res.date).toLocaleDateString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit',
                day: '2-digit',
                month: '2-digit',
              });

              return (
                <div
                  key={res.id}
                  className="p-4 hover:bg-slate-50/80 flex flex-wrap items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base border border-amber-200/60 shrink-0">
                      {res.medal === 'gold' && '🏆'}
                      {res.medal === 'silver' && '🥈'}
                      {res.medal === 'bronze' && '🥉'}
                      {res.medal === 'participant' && '🎖️'}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">
                        {res.topicTitle}
                      </span>
                      <span className="text-slate-400">{formattedDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="font-bold text-emerald-600 text-sm block">
                        {res.correctCount} / {res.totalQuestions} câu đúng
                      </span>
                      <span className="text-slate-500 font-medium">
                        Điểm: {res.scorePercentage}%
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        playClickSound();
                        onOpenCertificate(res);
                      }}
                      className="px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold rounded-lg transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Xem Giấy Khen</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
