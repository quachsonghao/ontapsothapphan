import { StudentProfile, ExamResult } from '../types/math';

export const AVATARS = [
  { id: 'astronaut', emoji: '🚀', label: 'Phi hành gia' },
  { id: 'owl', emoji: '🦉', label: 'Cú thông thái' },
  { id: 'lion', emoji: '🦁', label: 'Sư tử dũng cảm' },
  { id: 'fox', emoji: '🦊', label: 'Cáo nhanh nhẹn' },
  { id: 'cat', emoji: '🐱', label: 'Mèo chăm chỉ' },
  { id: 'robot', emoji: '🤖', label: 'Robot tính toán' },
  { id: 'panda', emoji: '🐼', label: 'Gấu trúc kiên trì' },
  { id: 'star', emoji: '⭐', label: 'Ngôi sao toán học' },
];

const PROFILE_KEY = 'thapphan_math_student_profile';
const RESULTS_KEY = 'thapphan_math_exam_results';

export function getStoredProfile(): StudentProfile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveStoredProfile(profile: StudentProfile): void {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed to save profile', err);
  }
}

export function getStoredResults(): ExamResult[] {
  try {
    const raw = localStorage.getItem(RESULTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveStoredResult(result: ExamResult): void {
  try {
    const current = getStoredResults();
    const updated = [result, ...current].slice(0, 50); // Keep last 50
    localStorage.setItem(RESULTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save result', err);
  }
}
