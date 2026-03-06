/**
 * ScrollProgress — Barra de progresso fixa no topo
 *
 * Barra fina com gradiente neon que acompanha a posição do scroll
 * da página. Usa CSS class `.scroll-progress` do global.css.
 */

import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
        opacity: progress > 0.5 ? 1 : 0,
      }}
    />
  );
};

export default ScrollProgress;
