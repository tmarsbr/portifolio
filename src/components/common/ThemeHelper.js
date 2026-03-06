import { useEffect } from 'react';

/**
 * ThemeHelper — Dark Premium Glass
 * Sempre aplica data-theme='dark' no body
 */
const ThemeHelper = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'dark');
    return () => document.body.removeAttribute('data-theme');
  }, []);

  return null;
};

export default ThemeHelper;
