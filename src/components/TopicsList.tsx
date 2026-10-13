import React from 'react';
import { Topic, StudentProfile } from '../types/math';
import { TOPICS } from '../data/topicsData';
import { 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Trophy, 
  Sparkles, 
  Layers, 
  ArrowUpDown, 
  Equal, 
  Scale, 
  Zap,
  Play
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface Props {
  student: StudentProfile;
  onSelectTopic: (topic: Topic) => void;
  onStartChallenge: () => void;
  onOpenTheory: (topic: Topic) => void;
}

export const TopicsList: React.FC<Props> = ({
  student,
  onSelectTopic,
  onStartChallenge,
  onOpenTheory,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'ArrowUpDown':
        return <ArrowUpDown className="w-5 h-5 text-purple-600" />;
      case 'Equal':
        return <Equal className="w-5 h-5 text-rose-600" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  const completedCount = student.completedTopics.length;

  return (
    <div className="space-y-6">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white p-6 sm:p-8 shadow-md">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs mb-3">
            <span>Chào mừng {student.name} {student.avatar}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
            Chinh Phục Toàn Diện Số Thập Phân Lớp 5
          </h1>
          <p className="mt-2 text-emerald-100 text-xs sm:text-sm leading-relaxed max-w-xl">
            Luyện tập 6 chuyên đề trọng tâm: Hiểu bản chất các hàng, đọc viết thành thạo, so sánh chuẩn xác và tự tin chuyển đổi các số đo đại lượng.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                playClickSound();
                onStartChallenge();
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Thi Đấu Trường Cúp Vàng</span>
            </button>

            <div className="text-xs text-emerald-100 font-medium py-1 px-3 bg-white/10 rounded-xl backdrop-blur-xs">
              Tiến độ: <strong className="text-white">{completedCount}/6</strong> chuyên đề đã xong
            </div>
          </div>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute right-4 bottom-2 text-white/10 pointer-events-none select-none hidden lg:block">
          <span className="text-9xl font-black">0,9</span>
        </div>
      </div>

      {/* Topics Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Danh Sách 6 Chuyên Đề Luyện Tập
            </h2>
            <p className="text-xs text-slate-500">
              Chọn chuyên đề bên dưới để luyện tập từng dạng bài kèm hướng dẫn chi tiết
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOPICS.map((topic, index) => {
            const isCompleted = student.completedTopics.includes(topic.id);

            return (
              <div
                key={topic.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                        {getIcon(topic.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                          Chuyên đề {index + 1}
                        </span>
                        <h3 className="font-bold text-slate-900 text-base leading-snug">
                          {topic.title}
                        </h3>
                      </div>
                    </div>

                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Đã xong
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      playClickSound();
                      onOpenTheory(topic);
                    }}
                    className="text-xs text-slate-500 hover:text-emerald-700 font-semibold flex items-center gap-1 transition-colors py-1 px-2 rounded-lg hover:bg-slate-50"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Lý thuyết</span>
                  </button>

                  <button
                    onClick={() => {
                      playClickSound();
                      onSelectTopic(topic);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <span>Luyện Tập ({topic.questions.length} câu)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
