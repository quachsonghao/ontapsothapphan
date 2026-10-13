import React from 'react';
import { Topic } from '../types/math';
import { MathText } from './MathText';
import { BookOpen, X, Lightbulb, CheckCircle2 } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface Props {
  topic: Topic | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TheoryModal: React.FC<Props> = ({ topic, isOpen, onClose }) => {
  if (!isOpen || !topic) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl max-h-[88vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Lý Thuyết & Mẹo Nhớ: {topic.title}
              </h3>
              <p className="text-xs text-slate-500">Kiến thức trọng tâm cần nhớ</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Summary */}
          <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/60 rounded-xl text-emerald-900 font-medium">
            <div className="flex items-center gap-1.5 text-emerald-700 font-bold mb-1">
              <Lightbulb className="w-4 h-4" />
              <span>Ghi nhớ cốt lõi:</span>
            </div>
            <div className="text-sm leading-relaxed">
              <MathText text={topic.theory.summary} />
            </div>
          </div>

          {/* Key points */}
          <div>
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <span>Các quy tắc quan trọng:</span>
            </h4>
            <ul className="space-y-2">
              {topic.theory.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><MathText text={pt} /></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Table if available */}
          {topic.theory.table && (
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Bảng tra cứu trực quan:</h4>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      {topic.theory.table.headers.map((h, i) => (
                        <th key={i} className="px-3 py-2.5 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {topic.theory.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-3 py-2.5 font-medium">
                            <MathText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Examples */}
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Ví dụ minh họa dễ hiểu:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {topic.theory.examples.map((ex, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-emerald-700 block text-sm">
                    <MathText text={ex.expression} />
                  </span>
                  <span className="text-xs text-slate-600 mt-1 block">
                    <MathText text={ex.meaning} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
          >
            Đã Hiểu, Làm Bài Tập Thôi!
          </button>
        </div>
      </div>
    </div>
  );
};
