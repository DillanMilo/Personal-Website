import { useEffect, useState } from 'react';

export const useAnimation = (text: string, delay: number) => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let index = 0;
    setAnimatedText(''); // Reset the animated text before starting

    const interval = setInterval(() => {
      setAnimatedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [text, delay]);

  return animatedText;
};

