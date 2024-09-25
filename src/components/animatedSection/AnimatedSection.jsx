import React, { useEffect, useRef, useState } from "react";
import styles from "./animatedSection.module.css"; // Import CSS module

const AnimatedSection = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  // ch
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after the element is in view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.slideUp} ${isInView ? styles.inView : ""}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
