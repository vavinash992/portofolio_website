import React, { useEffect, useRef } from 'react';
import './CSS/Homepage.css';
import Experience from './Experience';

export default function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const texts = ["Web Developer", "Machine learning engineer"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimeoutId;

    const type = () => {
      const text = texts[currentTextIndex];
      if (isDeleting) {
        // Deleting text
        typingRef.current.textContent = text.substring(0, currentCharIndex - 1);
        currentCharIndex--;
      } else {
        // Typing text
        typingRef.current.textContent = text.substring(0, currentCharIndex + 1);
        currentCharIndex++;
      }

      let typingSpeed = isDeleting ? 50 : 150; // Adjust typing and deleting speed as needed

      if (!isDeleting && currentCharIndex === text.length) {
        // Pause before deleting
        typingSpeed = 1000;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next text
        isDeleting = false;
        currentTextIndex++;
        if (currentTextIndex === texts.length) {
          currentTextIndex = 0;
        }
      }

      typingTimeoutId = setTimeout(type, typingSpeed);
    };

    type();

    return () => {
      clearTimeout(typingTimeoutId);
    };
  }, []);

  return (
    <div className="homepage-container">
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello!!!</div>
            <div className="text-2">I am Avinash</div>
            <div className="text-3">
              And I'm a <span ref={typingRef}></span>
            </div>
            <a href="#contact">Hire me</a>
          </div>
        </div>
      </section>
    </div>
  );
}
