import React, { useState, useEffect } from 'react';
import { Question } from '../types/math';
import { MathText } from './MathText';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  Send, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface Props {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean, userAnswer: string) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const QuestionCard: React.FC<Props> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  isLastQuestion,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [fillValue, setFillValue] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Reset local state when question changes
  useEffect(() => {
    setSelectedChoice(null);
    setFillValue('');
    setIsSubmitted(false);
    setIsCorrect(null);
  }, [question.id]);

  const normalize = (val: string) => {
    return val
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/\./g, ','); // Allow 1.25 or 1,25
  };

  const checkAnswer = (userAns: string) => {
    const normUser = normalize(userAns);
    const normCorrect = normalize(question.correctAnswer);
    return normUser === normCorrect;
  };

  const handleChoiceSelect = (choice: string) => {
    if (isSubmitted) return;
    playClickSound();
    setSelectedChoice(choice);
    const correct = checkAnswer(choice);
    setIsSubmitted(true);
    setIsCorrect(correct);
    onAnswer(correct, choice);
  };

  const handleFillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted || !fillValue.trim()) return;
    playClickSound();
    const correct = checkAnswer(fillValue);
    setIsSubmitted(true);
    setIsCorrect(correct);
    onAnswer(correct, fillValue.trim());
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all">
      {/* Top Progress & Meta Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50/80 border-b border-slate-200 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
            Câu {questionNumber} / {totalQuestions}
          </span>
          <span className="text-slate-400">·</span>
          <span className="capitalize text-slate-500 font-medium">
            {question.difficulty === 'easy' && 'Mức độ: Nhận biết'}
            {question.difficulty === 'medium' && 'Mức độ: Thông hiểu'}
            {question.difficulty === 'hard' && 'Mức độ: Vận dụng cao'}
          </span>
        </div>
        {isSubmitted && (
          <span className={`inline-flex items-center gap-1 font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Chính xác (+10đ)
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" /> Chưa đúng
              </>
            )}
          </span>
        )}
      </div>

      {/* Main Question Body */}
      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
            <MathText text={question.prompt} />
          </h3>
          {question.subPrompt && (
            <p className="mt-1.5 text-xs md:text-sm text-slate-500 italic">
              <MathText text={question.subPrompt} />
            </p>
          )}
        </div>

        {/* Interaction Form based on Question Type */}
        {question.type === 'compare' && (
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Chọn dấu so sánh đúng:
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-sm">
              {(question.options || ['>', '<', '=']).map((op) => {
                const isSelected = selectedChoice === op;
                const isThisTheCorrect = normalize(op) === normalize(question.correctAnswer);
                
                let btnStyle = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800';
                if (isSubmitted) {
                  if (isThisTheCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/30';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'border-rose-400 bg-rose-50 text-rose-800';
                  } else {
                    btnStyle = 'opacity-40 border-slate-200';
                  }
                }

                return (
                  <button
                    key={op}
                    disabled={isSubmitted}
                    onClick={() => handleChoiceSelect(op)}
                    className={`h-16 text-2xl font-bold rounded-xl border flex items-center justify-center transition-all ${btnStyle}`}
                  >
                    {op}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {question.type === 'choice' && question.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((opt, idx) => {
              const labelPrefix = String.fromCharCode(65 + idx); // A, B, C, D
              const isSelected = selectedChoice === opt;
              const isThisTheCorrect = normalize(opt) === normalize(question.correctAnswer);

              let cardStyle = 'border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20 text-slate-800';
              if (isSubmitted) {
                if (isThisTheCorrect) {
                  cardStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-500/20';
                } else if (isSelected && !isCorrect) {
                  cardStyle = 'border-rose-300 bg-rose-50 text-rose-800';
                } else {
                  cardStyle = 'opacity-50 border-slate-200';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isSubmitted}
                  onClick={() => handleChoiceSelect(opt)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${cardStyle}`}
                >
                  <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                    isSubmitted && isThisTheCorrect
                      ? 'bg-emerald-600 text-white'
                      : isSubmitted && isSelected && !isCorrect
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {labelPrefix}
                  </span>
                  <span className="text-sm font-medium pt-0.5 leading-relaxed">
                    <MathText text={opt} />
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {question.type === 'fill' && (
          <form onSubmit={handleFillSubmit} className="space-y-4 max-w-md">
            <div>
              <label htmlFor="fill-input" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Nhập số thập phân vào ô dưới đây (ví dụ: 0,856 hoặc 1,25):
              </label>
              <div className="flex gap-2">
                <input
                  id="fill-input"
                  type="text"
                  disabled={isSubmitted}
                  placeholder="Nhập đáp án của em..."
                  value={fillValue}
                  onChange={(e) => setFillValue(e.target.value)}
                  className={`flex-1 px-4 py-2.5 rounded-xl border font-mono text-base font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                    isSubmitted
                      ? isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-rose-300 bg-rose-50 text-rose-900'
                      : 'border-slate-300 bg-white text-slate-900'
                  }`}
                />
                {!isSubmitted && (
                  <button
                    type="submit"
                    disabled={!fillValue.trim()}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Nộp Bài</span>
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            {isSubmitted && !isCorrect && (
              <p className="text-xs text-rose-600 font-medium">
                Đáp án chính xác là: <span className="font-bold underline"><MathText text={question.correctAnswer} /></span>
              </p>
            )}
          </form>
        )}

        {/* Detailed Explanation Section - Always shown after submission */}
        {isSubmitted && (
          <div className="pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300 space-y-3">
            <div className={`p-4 rounded-xl border ${
              isCorrect 
                ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-900' 
                : 'bg-amber-50/70 border-amber-200/80 text-amber-900'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm mb-2">
                <Lightbulb className={`w-4 h-4 ${isCorrect ? 'text-emerald-600' : 'text-amber-600'}`} />
                <span>Giải Thích Chi Tiết & Phương Pháp Giải:</span>
              </div>

              <div className="text-xs font-semibold mb-2 text-slate-700">
                📌 Quy tắc: <span className="font-normal"><MathText text={question.explanation.rule} /></span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-800">
                {question.explanation.stepByStep.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-1.5">
                    <span className="font-bold text-emerald-700">•</span>
                    <span className="leading-relaxed"><MathText text={step} /></span>
                  </div>
                ))}
              </div>

              {question.explanation.tips && (
                <div className="mt-3 pt-2.5 border-t border-dashed border-amber-300/60 text-xs text-amber-800 flex items-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                  <span className="font-medium"><MathText text={question.explanation.tips} /></span>
                </div>
              )}
            </div>

            {/* Next Question CTA */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  playClickSound();
                  onNext();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>{isLastQuestion ? 'Xem Kết Quả & Nhận Cúp' : 'Câu Tiếp Theo'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
