import React, { useState } from 'react';
import { BookOpen, Table, Scale, ArrowUpDown, Equal, Sparkles, Check } from 'lucide-react';
import { playClickSound } from '../utils/audio';
import { MathText } from './MathText';

type TabType = 'place-values' | 'length-weight' | 'area' | 'rules';

export const QuickReferenceView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('place-values');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-teal-700 to-emerald-800 text-white">
        <div className="flex items-center gap-2 mb-1 text-teal-200 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Sổ Tay Kiến Thức Lớp 5</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold">
          Bảng Tra Cứu & Quy Tắc Cốt Lõi Về Số Thập Phân
        </h2>
        <p className="text-teal-100 text-xs mt-1">
          Học sinh có thể xem lại bất kỳ lúc nào để nhớ chính xác các hàng và bảng đơn vị đo.
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('place-values');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'place-values'
                ? 'bg-white text-teal-900 shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            Bảng Các Hàng
          </button>
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('length-weight');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'length-weight'
                ? 'bg-white text-teal-900 shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            Đơn Vị Độ Dài & Khối Lượng
          </button>
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('area');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'area'
                ? 'bg-white text-teal-900 shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            Đơn Vị Diện Tích (m², ha...)
          </button>
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('rules');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'rules'
                ? 'bg-white text-teal-900 shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            So Sánh & Số TP Bằng Nhau
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6">
        {activeTab === 'place-values' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                1. Bảng Cấu Tạo Các Hàng Của Số Thập Phân
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Mỗi chữ số đứng ở một vị trí hàng nhất định, ngăn cách bởi dấu phẩy:
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-xs text-center border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th colSpan={3} className="py-2.5 px-3 bg-blue-50/80 text-blue-900 border-r border-slate-200">
                        PHẦN NGUYÊN (Bên trái dấu phẩy)
                      </th>
                      <th className="py-2.5 px-2 bg-amber-100 text-amber-900 border-r border-slate-200">
                        DẤU
                      </th>
                      <th colSpan={3} className="py-2.5 px-3 bg-emerald-50/80 text-emerald-900">
                        PHẦN THẬP PHÂN (Bên phải dấu phẩy)
                      </th>
                    </tr>
                    <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                      <th className="py-2 px-2 border-r border-slate-200">Hàng trăm</th>
                      <th className="py-2 px-2 border-r border-slate-200">Hàng chục</th>
                      <th className="py-2 px-2 border-r border-slate-200">Hàng đơn vị</th>
                      <th className="py-2 px-2 font-mono font-bold text-amber-600 border-r border-slate-200">,</th>
                      <th className="py-2 px-2 border-r border-slate-200">Hàng phần mười</th>
                      <th className="py-2 px-2 border-r border-slate-200">Hàng phần trăm</th>
                      <th className="py-2 px-2">Hàng phần nghìn</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-sm">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-2 font-bold text-slate-800 border-r border-slate-200">3 (300)</td>
                      <td className="py-3 px-2 font-bold text-slate-800 border-r border-slate-200">7 (70)</td>
                      <td className="py-3 px-2 font-bold text-slate-800 border-r border-slate-200">5 (5)</td>
                      <td className="py-3 px-2 font-black text-amber-600 border-r border-slate-200">,</td>
                      <td className="py-3 px-2 font-bold text-emerald-700 border-r border-slate-200">8 (0,8)</td>
                      <td className="py-3 px-2 font-bold text-emerald-700 border-r border-slate-200">2 (0,02)</td>
                      <td className="py-3 px-2 font-bold text-emerald-700">4 (0,004)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-blue-900 space-y-1">
                <p className="font-bold">💡 Mẹo phân biệt nhanh:</p>
                <p>• Hàng ngay bên trái dấu phẩy là <strong>hàng đơn vị</strong>.</p>
                <p>• Hàng ngay bên phải dấu phẩy là <strong>hàng phần mười</strong>.</p>
                <p>• Cứ sang phải thêm một hàng thì giá trị giảm đi 10 lần (<MathText text="[frac:1:10], [frac:1:100], [frac:1:1000]..." />).</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'length-weight' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                2. Bảng Đổi Đơn Vị Đo Độ Dài & Khối Lượng
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Hai đơn vị liền kề nhau gấp hoặc kém nhau <strong>10 lần</strong> (mỗi hàng ứng với đúng 1 chữ số).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Độ dài */}
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                  <h4 className="font-bold text-emerald-800 text-sm mb-2 flex items-center gap-1.5">
                    <span>📏 Đơn vị đo độ dài:</span>
                  </h4>
                  <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-xs font-semibold text-center mb-3">
                    <span>km</span>
                    <span>→</span>
                    <span>m</span>
                    <span>→</span>
                    <span>dm</span>
                    <span>→</span>
                    <span>cm</span>
                    <span>→</span>
                    <span>mm</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li>• 1m = 10dm = 0,1dam</li>
                    <li>• 1dm = <MathText text="[frac:1:10]m" /> = <strong>0,1m</strong></li>
                    <li>• 1cm = <MathText text="[frac:1:100]m" /> = <strong>0,01m</strong> (Ví dụ: 3m 5cm = 3,05m)</li>
                    <li>• 1mm = <MathText text="[frac:1:1000]m" /> = <strong>0,001m</strong></li>
                    <li>• 1m = <MathText text="[frac:1:1000]km" /> = <strong>0,001km</strong> (Ví dụ: 856m = 0,856km)</li>
                  </ul>
                </div>

                {/* Khối lượng */}
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                  <h4 className="font-bold text-blue-800 text-sm mb-2 flex items-center gap-1.5">
                    <Scale className="w-4 h-4" />
                    <span>⚖️ Đơn vị đo khối lượng:</span>
                  </h4>
                  <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-xs font-semibold text-center mb-3">
                    <span>tấn</span>
                    <span>→</span>
                    <span>tạ</span>
                    <span>→</span>
                    <span>yến</span>
                    <span>→</span>
                    <span>kg</span>
                    <span>→</span>
                    <span>g</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li>• 1 tấn = 10 tạ = 100 yến = 1000 kg</li>
                    <li>• 1kg = <MathText text="[frac:1:1000]" /> tấn = <strong>0,001 tấn</strong> (Ví dụ: 2 tấn 50kg = 2,05 tấn)</li>
                    <li>• 1kg = 1000g (Ví dụ: 5kg 6g = 5,006kg)</li>
                    <li>• 1g = <MathText text="[frac:1:1000]" /> kg = <strong>0,001 kg</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'area' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              3. Bảng Đổi Đơn Vị Đo Diện Tích (Cực Kỳ Quan Trọng!)
            </h3>
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
              <span className="font-bold">⚠️ QUY TẮC VÀNG:</span> Trong bảng đơn vị đo diện tích, hai đơn vị liền kề nhau gấp hoặc kém nhau <strong>100 lần</strong>. Do đó, mỗi đơn vị diện tích ứng với <strong>hai chữ số</strong>!
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200">km²</th>
                    <th className="p-2 border-r border-slate-200">ha (hm²)</th>
                    <th className="p-2 border-r border-slate-200">dam²</th>
                    <th className="p-2 border-r border-slate-200">m²</th>
                    <th className="p-2 border-r border-slate-200">dm²</th>
                    <th className="p-2 border-r border-slate-200">cm²</th>
                    <th className="p-2">mm²</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-slate-800">
                  <tr>
                    <td className="p-2 border-r border-slate-200">1 km² = 100 ha</td>
                    <td className="p-2 border-r border-slate-200">1 ha = 10.000 m²</td>
                    <td className="p-2 border-r border-slate-200">1 dam² = 100 m²</td>
                    <td className="p-2 border-r border-slate-200">1 m² = 100 dm²</td>
                    <td className="p-2 border-r border-slate-200">1 dm² = 100 cm²</td>
                    <td className="p-2 border-r border-slate-200">1 cm² = 100 mm²</td>
                    <td className="p-2">0,01 cm²</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-slate-800 block mb-1">Ví dụ 1: 7m² 25dm²</span>
                <p className="text-slate-600">Vì 1m² = 100dm² nên 25dm² = 0,25m².</p>
                <p className="font-semibold text-emerald-700">➡️ Kết quả: 7,25 m²</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-slate-800 block mb-1">Ví dụ 2: 9m² 4dm² (Bẫy hay gặp!)</span>
                <p className="text-slate-600">4dm² = 0,04m² (hai chữ số, không phải 0,4m²).</p>
                <p className="font-semibold text-emerald-700">➡️ Kết quả: 9,04 m² (Không phải 9,4 m²)</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                4. Quy Tắc Số Thập Phân Bằng Nhau
              </h3>
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/70 rounded-xl text-xs text-emerald-950 space-y-2">
                <p>
                  • Viết thêm chữ số 0 vào bên phải tận cùng của phần thập phân thì giá trị không đổi:
                  <span className="font-mono font-bold ml-1 text-emerald-800">0,9 = 0,90 = 0,900 = 0,9000</span>
                </p>
                <p>
                  • Bỏ bớt chữ số 0 ở tận cùng bên phải của phần thập phân thì được số bằng nó:
                  <span className="font-mono font-bold ml-1 text-emerald-800">35,700 = 35,70 = 35,7</span>
                </p>
                <p className="text-rose-700 font-semibold">
                  ⛔ Không được bỏ chữ số 0 ở giữa: Ví dụ 4,05 khác 4,5!
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                5. Quy Tắc So Sánh Hai Số Thập Phân
              </h3>
              <div className="p-3.5 bg-blue-50/70 border border-blue-200/70 rounded-xl text-xs text-blue-950 space-y-2">
                <p>
                  <strong>Bước 1:</strong> So sánh phần nguyên trước. Số nào có phần nguyên lớn hơn thì số đó lớn hơn (ví dụ 8,1 &gt; 7,99).
                </p>
                <p>
                  <strong>Bước 2:</strong> Nếu phần nguyên bằng nhau, so sánh hàng phần mười. Số nào có hàng phần mười lớn hơn thì lớn hơn.
                </p>
                <p>
                  <strong>Bước 3:</strong> Nếu hàng phần mười bằng nhau, so sánh hàng phần trăm, hàng phần nghìn...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
