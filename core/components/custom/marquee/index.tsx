'use client';

import { useEffect, useRef } from 'react';

export const PromoMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const textWidth = marquee.scrollWidth;
    const containerWidth = marquee.clientWidth;
    const totalDistance = textWidth + containerWidth;
    const duration = totalDistance / 80; // velocidad: menos = más rápido

    marquee.style.animation = `marquee ${duration}s linear infinite`;
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black text-white text-sm font-medium py-2 px-4">
      <div
        ref={marqueeRef}
        className="whitespace-nowrap inline-block"
      >
        🧪 Este es un bloque personalizado de Pocima Digital generado con desarrollo local 🚀.
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};
