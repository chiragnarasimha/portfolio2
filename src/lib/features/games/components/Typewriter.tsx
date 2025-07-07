"use client";
import React, { useRef, useEffect, useCallback } from "react";
import styles from "./Typewriter.module.css";

interface TypewriterTextProps {
  text: string;
  speed?: number; // milliseconds between each character
  className?: string;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  className = "",
  onComplete,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const typeText = useCallback(() => {
    if (!textRef.current || !cursorRef.current) return;

    const textElement = textRef.current;
    const cursorElement = cursorRef.current;

    // Clear any existing content
    textElement.textContent = "";

    // Show cursor and start typing
    cursorElement.style.display = "inline";

    // Type each character with delay using a for loop
    for (let i = 0; i < text.length; i++) {
      timeoutRef.current = setTimeout(() => {
        if (!textRef.current) return; // Check if component is still mounted

        textElement.textContent += text[i];

        // Hide cursor and call onComplete when done
        if (i === text.length - 1) {
          if (cursorRef.current) {
            cursorRef.current.style.display = "none";
          }
          if (onComplete) {
            onComplete();
          }
        }
      }, i * speed);
    }
  }, [onComplete, text, speed]);

  useEffect(() => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start typing animation
    typeText();
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [typeText]);

  return (
    <div className={className}>
      <span ref={textRef} className={styles.text}></span>
      <span ref={cursorRef} className={styles.cursor}>
        |
      </span>
    </div>
  );
};

export default Typewriter;
