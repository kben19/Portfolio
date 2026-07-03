import React, { useEffect, useRef, useState } from "react";

/**
 * TextType — typewriter effect used under the hero heading. Faithful
 * reproduction of the source's timing/looping behavior without the GSAP
 * dependency (cursor blink is a CSS keyframe instead of a GSAP tween).
 */
export function TextType({
  text,
  typingSpeed = 20,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = false,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  style = {},
}) {
  const textArray = Array.isArray(text) ? text : [text];
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const current = textArray[textIndex];
    let timeout;

    if (!startedRef.current) {
      startedRef.current = true;
      timeout = setTimeout(() => setCharIndex((c) => c), initialDelay);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed((d) => d + current[charIndex]);
        setCharIndex((c) => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex >= current.length) {
      if (loop) timeout = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), deletingSpeed);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCharIndex(0);
      setTextIndex((i) => (i + 1) % textArray.length);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, deleting, displayed, textIndex]);

  return (
    <span className={className} style={{ whiteSpace: "pre-wrap", ...style }}>
      {displayed}
      {showCursor && (
        <span
          style={{
            marginLeft: 4,
            display: "inline-block",
            animation: "ds-texttype-blink 1s step-end infinite",
          }}
        >
          {cursorCharacter}
        </span>
      )}
      <style>{`@keyframes ds-texttype-blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }`}</style>
    </span>
  );
}
