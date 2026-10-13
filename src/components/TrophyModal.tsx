import React, { useEffect } from 'react';
import { Trophy, Award, Star, CheckCircle, RefreshCw, Printer, X, Sparkles } from 'lucide-react';
import { playFanfareSound, playClickSound } from '../utils/audio';
import { fireTrophyConfetti } from '../utils/confetti';
import { StudentProfile } from '../types/math';

interface Props {
  isOpen: boolean;
  student: StudentProfile;
  topicTitle: string;
  totalQuestions: number;
  correctCount: number;
  scorePercentage: number;
  onClose: () => void;
  onRetry: () => void;
}

export const TrophyModal: React.FC<Props> = ({
  isOpen,
  student,
  topicTitle,
  totalQuestions,
  correctCount,
  scorePercentage,
  onClose,
  onRetry,
}) => {
  useEffect(() => {
    if (isOpen) {
      playFanfareSound();
      fireTrophyConfetti();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isGold = scorePercentage >= 90;
  const isSilver = scorePercentage >= 70 && scorePercentage < 90;
  const isBronze = scorePercentage >= 50 && scorePercentage < 70;

  let medalName = 'Cúp Vàng Xuất Sắc';
  let badgeTitle = 'DŨNG SĨ TOÁN HỌC THẬP PHÂN';
  let comment = 'Thành tích phi thường! Em đã làm chủ toàn bộ kiến thức số thập phân!';
  let trophyGradient = 'from-amber-400 via-yellow-300 to-amber-500';
  let trophyText = 'text-amber-500';

  if (isSilver) {
    medalName = 'Cúp Bạc Giỏi Giang';
    badgeTitle = 'KIỆN TƯỚNG TÍNH TOÁN';
    comment = 'Rất tuyệt vời! Em đã hoàn thành xuất sắc các bài tập số thập phân.';
    trophyGradient = 'from-slate-300 via-slate-100 to-slate-400';
    trophyText = 'text-slate-500';
  } else if (isBronze) {
    medalName = 'Cúp Đồng Nỗ Lực';
    badgeTitle = 'BÚP MĂNG CHĂM CHỈ';
    comment = 'Khá tốt! Em hãy tiếp tục rèn luyện thêm để vươn lên Cúp Vàng nhé.';
    trophyGradient = 'from-amber-600 via-amber-500 to-amber-700';
    trophyText = 'text-amber-700';
  } else if (!isGold && !isSilver && !isBronze) {
    medalName = 'Huy Hiệu Kiên Trì';
    badgeTitle = 'CHIẾN BINH HỌC TẬP';
    comment = 'Đừng nản lòng! Hãy ôn lại lý thuyết và làm lại để đạt điểm số cao hơn nhé!';
    trophyGradient = 'from-emerald-400 to-teal-500';
    trophyText = 'text-teal-600';
  }

  const currentDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300/60 overflow-hidden animate-in fade-in zoom-in-95 duration-300 my-8">
        {/* Close Button */}
        <button
          onClick={() => {
            playClickSound();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-slate-700 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors print:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate View (Styled for both Screen & Print) */}
        <div id="printable-certificate" className="p-6 md:p-8 bg-gradient-to-b from-amber-50/50 via-white to-orange-50/30 text-center relative">
          {/* Subtle Decorative Border */}
          <div className="absolute inset-3 border-2 border-dashed border-amber-300/80 rounded-2xl pointer-events-none" />

          {/* Trophy Header */}
          <div className="relative z-10 pt-2">
            <div className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-tr ${trophyGradient} p-1 shadow-lg flex items-center justify-center animate-bounce duration-1000`}>
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Trophy className={`w-12 h-12 ${trophyText}`} />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/90 text-amber-900 rounded-full text-xs font-bold mt-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{medalName.toUpperCase()}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 font-serif tracking-tight">
              GIẤY KHEN DANH DỰ
            </h2>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-0.5">
              TOÁN LỚP 5 · SỐ THẬP PHÂN
            </p>
          </div>

          {/* Student Honor Card */}
          <div className="relative z-10 my-5 py-4 px-6 bg-white/90 rounded-2xl border border-amber-200/90 shadow-sm max-w-md mx-auto">
            <p className="text-xs text-slate-500 font-medium">Khen thưởng em học sinh:</p>
            <div className="flex items-center justify-center gap-2 mt-1 mb-2">
              <span className="text-2xl">{student.avatar}</span>
              <h3 className="text-xl md:text-2xl font-black text-emerald-800">
                {student.name}
              </h3>
            </div>
            
            <p className="text-xs text-slate-600 font-medium">Đã hoàn thành nội dung:</p>
            <p className="text-sm font-bold text-slate-900 mt-0.5">{topicTitle}</p>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100">
              <div className="bg-slate-50 rounded-xl p-2">
                <span className="text-[10px] text-slate-500 uppercase block font-medium">Đúng</span>
                <span className="text-base font-bold text-emerald-600">{correctCount}/{totalQuestions}</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-2">
                <span className="text-[10px] text-slate-500 uppercase block font-medium">Chính xác</span>
                <span className="text-base font-bold text-blue-600">{scorePercentage}%</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-2">
                <span className="text-[10px] text-slate-500 uppercase block font-medium">Danh hiệu</span>
                <span className="text-xs font-bold text-amber-600 line-clamp-1">{badgeTitle}</span>
              </div>
            </div>
          </div>

          {/* Teacher / System Praise */}
          <div className="relative z-10 text-xs text-slate-600 italic max-w-md mx-auto leading-relaxed">
            "{comment}"
          </div>

          <div className="relative z-10 flex justify-between items-center text-[11px] text-slate-400 mt-5 pt-3 border-t border-slate-200/60 max-w-md mx-auto">
            <span>Ngày: {currentDate}</span>
            <span className="font-semibold text-slate-700">Chinh Phục Toán Tiểu Học</span>
          </div>

          {/* Action Buttons (Hidden when printing) */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-6 print:hidden">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>In Giấy Khen</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onRetry();
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Làm Lại Bài Này</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-colors"
            >
              <Award className="w-4 h-4" />
              <span>Tiếp Tục Luyện Tập</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
