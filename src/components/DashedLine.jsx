import React from 'react';

const DashedLine = ({ dashes = 10, className = "", color = "bg-white/10" }) => {
  // Генерируем clip-path для заданного количества дефисов
  const generateClipPath = () => {
    if (dashes <= 0) return "polygon(0% 0%)";
    
    const gapPercent = 100 / dashes; // Процент на каждый дефис + промежуток
    const dashHeight = gapPercent * 0.5; // Дефис занимает половину
    const points = [];
    
    for (let i = 0; i < dashes; i++) {
      const top = i * gapPercent;
      const bottom = top + dashHeight;
      
      points.push(
        `0% ${top}%`,
        `100% ${top}%`,
        `100% ${bottom}%`,
        `0% ${bottom}%`
      );
    }
    
    return `polygon(${points.join(', ')})`;
  };

  return (
    <div className={`relative flex-1 ${className}`}>
      <div 
        className={`absolute left-1/2 top-0 bottom-0 w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] -translate-x-1/2 ${color}`}
        style={{ clipPath: generateClipPath() }}
      />
    </div>
  );
};

export default DashedLine;

