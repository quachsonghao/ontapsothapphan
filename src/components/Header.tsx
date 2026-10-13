import React, { useState } from 'react';
import { StudentProfile } from '../types/math';
import { 
  Trophy, 
  Volume2, 
  VolumeX, 
  User, 
  BookOpen, 
  Star, 
  Award, 
  Sparkles,
  Zap
} from 'lucide-react';
import { setSoundMuted, getSoundMuted, playClickSound } from '../utils/audio';

interface Props {
  student: StudentProfile | null;
  activeTab: 'topics' | 'challenge' | 'reference' | 'achievements';
  onSelectTab: (tab: 'topics' | 'challenge' | 'reference' | 'achievements') => void;
  onOpenProfileModal: () => void;
}

export const Header: React.FC<Props> = ({
  student,
  activeTab,
  onSelectTab,
  onOpenProfileModal,
}) => {
  const [muted, setMuted] = useState(getSoundMuted());

  const toggleSound = () => {
    const next = !muted;
    setSoundMuted(next);
    setMuted(next);
    if (!next) {
      playClickSound();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo Brand */}
          <div 
            onClick={() => {
              playClickSound();
              onSelectTab('topics');
            }}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl">0,1</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold text-slate-900 tracking-tight leading-none">
                  Số Thập Phân
                </span>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-sm">
                  LỚP 5
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Luyện Tập & Rinh Cúp Vàng
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
            <button
              onClick={() => {
                playClickSound();
                onSelectTab('topics');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'topics'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Chuyên Đề (6)
            </button>

            <button
              onClick={() => {
                playClickSound();
                onSelectTab('challenge');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'challenge'
                  ? 'bg-white text-amber-900 shadow-xs'
                  : 'text-amber-800 hover:text-amber-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Đấu Trường 30 Câu</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onSelectTab('reference');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'reference'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sổ Tay Lý Thuyết
            </button>

            <button
              onClick={() => {
                playClickSound();
                onSelectTab('achievements');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 ${
                activeTab === 'achievements'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Bảng Vàng</span>
            </button>
          </nav>

          {/* Student Status & Controls */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={muted ? 'Bật âm thanh' : 'Tắt âm thanh'}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              {muted ? (
                <VolumeX className="w-5 h-5 text-rose-500" />
              ) : (
                <Volume2 className="w-5 h-5 text-emerald-600" />
              )}
            </button>

            {/* Student Profile Pill */}
            {student ? (
              <button
                onClick={() => {
                  playClickSound();
                  onOpenProfileModal();
                }}
                className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors border border-slate-200/60"
              >
                <span className="text-xl">{student.avatar}</span>
                <div className="text-left leading-tight hidden sm:block">
                  <span className="text-xs font-bold text-slate-800 block truncate max-w-[110px]">
                    {student.name}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-amber-600 font-bold">
                    <Trophy className="w-3 h-3 text-amber-500" />
                    <span>{student.trophiesWon} cúp</span>
                  </div>
                </div>
              </button>
            ) : (
              <button
                onClick={() => {
                  playClickSound();
                  onOpenProfileModal();
                }}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <User className="w-3.5 h-3.5" />
                <span>Nhập Tên</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-100 text-xs font-semibold text-slate-600">
          <button
            onClick={() => {
              playClickSound();
              onSelectTab('topics');
            }}
            className={`py-1 px-2 rounded-md ${activeTab === 'topics' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Chuyên Đề
          </button>
          <button
            onClick={() => {
              playClickSound();
              onSelectTab('challenge');
            }}
            className={`py-1 px-2 rounded-md flex items-center gap-1 ${activeTab === 'challenge' ? 'text-amber-700 font-bold' : ''}`}
          >
            <Zap className="w-3 h-3 text-amber-500" />
            <span>Thử Thách</span>
          </button>
          <button
            onClick={() => {
              playClickSound();
              onSelectTab('reference');
            }}
            className={`py-1 px-2 rounded-md ${activeTab === 'reference' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Sổ Tay
          </button>
          <button
            onClick={() => {
              playClickSound();
              onSelectTab('achievements');
            }}
            className={`py-1 px-2 rounded-md flex items-center gap-1 ${activeTab === 'achievements' ? 'text-amber-700 font-bold' : ''}`}
          >
            <Trophy className="w-3 h-3 text-amber-500" />
            <span>Bảng Vàng</span>
          </button>
        </div>
      </div>
    </header>
  );
};
