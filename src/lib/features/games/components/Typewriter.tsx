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

    let currentIndex = 0;
    const textElement = textRef.current;
    const cursorElement = cursorRef.current;

    // Clear any existing content
    textElement.textContent = "";

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        textElement.textContent += text[currentIndex];
        currentIndex++;

        timeoutRef.current = setTimeout(typeNextCharacter, speed);
      } else {
        // Hide cursor when done
        cursorElement.style.display = "none";
        if (onComplete) {
          onComplete();
        }
      }
    };

    // Show cursor and start typing
    cursorElement.style.display = "inline";
    typeNextCharacter();
  }, [text, speed, onComplete]);

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
