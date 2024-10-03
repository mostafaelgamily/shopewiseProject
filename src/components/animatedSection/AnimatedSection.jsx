import { useEffect, useRef, useState } from "react";
import styles from "./animatedSection.module.css"; // Import CSS module
import PropTypes from "prop-types";

/**
 * AnimatedSection Component:
 *
 * This component is responsible for animating the section into view when scrolled into the viewport.
 * It expects to receive the following props:
 *
 * @prop {node} children - The content to be rendered inside the animated section.
 *
 * @prop {string} direction <Optional> - The direction of the sliding animation. It can be 'top', 'right', 'left', or 'bottom'.
 * Defaults to 'bottom' if no value is provided.
 *
 * @prop {string} widthOption <Optional> - Controls the width of the animated section. It can be 'fullWidth' or 'fitContent'.
 * If 'fullWidth', the section will take the full width of the container. If 'fitContent', the width will shrink to the content.
 * Defaults to 'fullWidth' if no value is provided.
 *
 * Example usage:
 * <AnimatedSection direction="left" widthOption="fitContent">
 *   <p>Content goes here...</p>
 * </AnimatedSection>
 */

const AnimatedSection = ({
  children,
  direction = "bottom",
  widthOption = "fullWidth",
}) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current; // Store the current value of the ref

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after the element is in view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // Use the saved element reference
      }
    };
  }, []); // Empty dependency array, so the effect runs only once

  // Determine animation direction class
  const directionClass =
    {
      top: styles.slideDown,
      right: styles.slideLeft,
      left: styles.slideRight,
      bottom: styles.slideUp,
    }[direction] || styles.slideUp;

  // Determine width style class
  const widthClass =
    widthOption === "fitContent" ? styles.fitContent : styles.fullWidth;

  return (
    <div
      ref={elementRef}
      className={`${directionClass} ${widthClass} ${
        isInView ? styles.inView : ""
      }`}
    >
      {children}
    </div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["top", "right", "left", "bottom"]),
  widthOption: PropTypes.oneOf(["fullWidth", "fitContent"]),
};

export default AnimatedSection;
