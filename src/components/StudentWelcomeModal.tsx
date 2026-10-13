import React, { useState } from 'react';
import { AVATARS } from '../utils/storage';
import { StudentProfile } from '../types/math';
import { playClickSound } from '../utils/audio';
import { Sparkles, Trophy, BookOpen, Check } from 'lucide-react';

interface Props {
  initialProfile: StudentProfile | null;
  isOpen: boolean;
  onSave: (name: string, avatar: string) => void;
  onClose?: () => void;
  canCancel?: boolean;
}

export const StudentWelcomeModal: React.FC<Props> = ({
  initialProfile,
  isOpen,
  onSave,
  onClose,
  canCancel = false,
}) => {
  const [name, setName] = useState(initialProfile?.name || '');
  const [selectedAvatar, setSelectedAvatar] = useState(initialProfile?.avatar || AVATARS[0].emoji);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Em vui lòng nhập họ và tên của mình nhé!');
      return;
    }
    playClickSound();
    onSave(name.trim(), selectedAvatar);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-6 py-6 text-white text-center">
          <div className="inline-flex p-3 bg-white/20 rounded-2xl mb-3 shadow-inner">
            <Trophy className="w-8 h-8 text-amber-300" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            {initialProfile ? 'Cập Nhật Hồ Sơ Học Sinh' : 'Chào Mừng Em Đến Với Toán 5!'}
          </h2>
          <p className="text-emerald-100 text-xs mt-1 leading-relaxed">
            Hành trình Chinh Phục Số Thập Phân & Rinh Cúp Vàng Danh Dự
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label htmlFor="student-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Họ và tên của em:
            </label>
            <input
              id="student-name"
              type="text"
              autoFocus
              placeholder="Ví dụ: Nguyễn Minh Khang"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 placeholder:text-slate-400 font-medium text-base shadow-xs"
              maxLength={40}
            />
            {error && <p className="text-rose-600 text-xs mt-1 font-medium">{error}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Chọn nhân vật đồng hành:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {AVATARS.map((av) => {
                const isSelected = selectedAvatar === av.emoji;
                return (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => {
                      setSelectedAvatar(av.emoji);
                      playClickSound();
                    }}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all text-center ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/30 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="text-2xl mb-1">{av.emoji}</span>
                    <span className="text-[10px] font-medium leading-tight truncate w-full">{av.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-600 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Mục tiêu học tập của em:</span>
            </div>
            <p>• Luyện tập 6 chuyên đề số thập phân lớp 5</p>
            <p>• Đạt điểm cao để ghi tên lên Bảng Vàng & nhận Cúp Khen Thưởng</p>
          </div>

          <div className="flex gap-2 pt-2">
            {canCancel && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 text-sm transition-colors"
              >
                Đóng
              </button>
            )}
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 font-semibold text-white text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>{initialProfile ? 'Lưu Thay Đổi' : 'Bắt Đầu Học Ngay!'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
