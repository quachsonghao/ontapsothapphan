import React from 'react';

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Component hiển thị phân số và hỗn số chuẩn sách giáo khoa Tiểu Học:
 * - Phân số: Tử số ở trên, dấu gạch ngang ở giữa, Mẫu số ở dưới (không dùng dấu /)
 * - Hỗn số: Phần nguyên ở trước, tiếp theo là phân số có gạch ngang
 *
 * Hỗ trợ cú pháp tường minh:
 * - [frac:7:10] => Phân số 7 phần 10
 * - [mixed:5:3:100] => Hỗn số 5 và 3 phần 100
 * Tự động nhận diện:
 * - Hỗn số dạng: "5 và 3/100" hoặc "5 3/100"
 * - Phân số dạng: "7/10", "45/100", "125/1000", v.v.
 */
export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Render a proper vertical fraction with horizontal bar
  const renderFraction = (numerator: string, denominator: string, key?: string | number) => (
    <span
      key={key}
      className="inline-flex flex-col items-center justify-center align-middle mx-1 text-center font-semibold select-none leading-none"
      style={{ verticalAlign: '-0.35em' }}
    >
      <span className="text-[0.88em] leading-tight px-1 pb-[1px] border-b border-current font-medium">
        {numerator}
      </span>
      <span className="text-[0.88em] leading-tight px-1 pt-[1px] font-medium">
        {denominator}
      </span>
    </span>
  );

  // Render a proper mixed number: whole number followed by vertical fraction
  const renderMixed = (whole: string, numerator: string, denominator: string, key?: string | number) => (
    <span
      key={key}
      className="inline-flex items-center align-middle mx-1 font-semibold select-none"
      style={{ verticalAlign: '-0.35em' }}
    >
      <span className="mr-1 text-[1em] font-bold">{whole}</span>
      <span className="inline-flex flex-col items-center justify-center text-center leading-none">
        <span className="text-[0.88em] leading-tight px-1 pb-[1px] border-b border-current font-medium">
          {numerator}
        </span>
        <span className="text-[0.88em] leading-tight px-1 pt-[1px] font-medium">
          {denominator}
        </span>
      </span>
    </span>
  );

  // Parse text into tokens
  // Matches:
  // 1. [mixed:whole:num:den]
  // 2. [frac:num:den]
  // 3. mixed natural format: (\d+)\s+và\s+(\d+)\/(\d+) or (\d+)\s+(\d+)\/(\d+)
  // 4. fraction natural format: (\d+)\/(\d+)
  const regex = /\[mixed:(\d+):(\d+):(\d+)\]|\[frac:(\d+):(\d+)\]|(\d+)\s+(?:và\s+)?(\d+)\/(\d+)|(\d+)\/(\d+)/g;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  let keyIndex = 0;
  while ((match = regex.exec(text)) !== null) {
    const matchStart = match.index;
    const matchEnd = regex.lastIndex;

    // Push preceding normal text
    if (matchStart > lastIndex) {
      elements.push(
        <span key={`txt-${keyIndex++}`}>
          {text.substring(lastIndex, matchStart)}
        </span>
      );
    }

    if (match[1] !== undefined) {
      // [mixed:w:n:d]
      elements.push(renderMixed(match[1], match[2], match[3], `m-${keyIndex++}`));
    } else if (match[4] !== undefined) {
      // [frac:n:d]
      elements.push(renderFraction(match[4], match[5], `f-${keyIndex++}`));
    } else if (match[6] !== undefined) {
      // natural mixed: whole num / den
      elements.push(renderMixed(match[6], match[7], match[8], `nm-${keyIndex++}`));
    } else if (match[9] !== undefined) {
      // natural frac: num / den
      elements.push(renderFraction(match[9], match[10], `nf-${keyIndex++}`));
    }

    lastIndex = matchEnd;
  }

  // Push remainder
  if (lastIndex < text.length) {
    elements.push(
      <span key={`txt-${keyIndex++}`}>
        {text.substring(lastIndex)}
      </span>
    );
  }

  return <span className={className}>{elements}</span>;
};
