import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export default function TypingAnimation({ texts, speed = 100, delay = 2000 }: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isPaused) {
        if (!isDeleting) {
          if (currentText.length < text.length) {
            setCurrentText(text.slice(0, currentText.length + 1));
          } else {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, delay);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, delay]);

  return (
    <span className="animate-typing">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
