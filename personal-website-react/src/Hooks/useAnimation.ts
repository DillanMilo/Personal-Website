import { useEffect, useState } from 'react';

export const useAnimation = (text: string, delay: number) => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let index = 0;

    const animate = () => {
      if (index < text.length) {
        setAnimatedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(animate, delay);
      }
    };

    animate();
  }, [text, delay]);

  return animatedText;
};
