'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  className?: string;
  speed?: number;
  cursorChar?: string;
}

export default function TypedText({ 
  strings, 
  className = 'text-primary font-semibold',
  speed = 50,
  cursorChar = '|'
}: TypedTextProps) {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed: speed,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 300,
        loop: true,
        showCursor: true,
        cursorChar,
        smartBackspace: true,
        shuffle: false,
        fadeOut: false,
        autoInsertCss: true,
        bindInputFocusEvents: false,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, speed, cursorChar]);

  return (
    <span className="inline-block">
      <span ref={el} className={className}></span>
    </span>
  );
} 