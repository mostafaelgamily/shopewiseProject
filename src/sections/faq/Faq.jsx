import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./faq.module.css";
import Heading from "../../components/heading/Heading";
import AnimatedSection from "../../components/animatedSection/AnimatedSection";
import FaqItem from "./FaqItem";

/**
 * Faq Component
 * This component renders a list of FAQs, passed as a prop for flexibility.
 * It displays the questions and answers with toggle functionality.
 *
 * Props:
 * - `qs` (object): A dictionary of FAQ questions and answers (e.g., { "What is X?": "X is Y" }).
 * - `heading` (object, optional): An object containing the heading title and optional description.
 *
 * State:
 * - `qsToggle` (string): Stores the currently toggled/open FAQ key.
 */
const Faq = ({ qs, heading }) => {
  const {
    title,
    description = "",
    hcolor = "var(--text-color)",
    pcolor = "var(--secondary-text-color)",
  } = heading || {};
  const [qsToggle, setQsToggle] = useState(Object.keys(qs || {})[0]);

  // Update the first open question when `qs` changes
  useEffect(() => {
    qs && setQsToggle(Object.keys(qs)[0]);
  }, [qs]);

  return (
    <div className={styles.qs_container}>
      {heading && (
        <AnimatedSection>
          <Heading
            title={title}
            description={description}
            hcolor={hcolor} // Use default or provided hcolor
            pcolor={pcolor} // Use default or provided pcolor
          />
        </AnimatedSection>
      )}

      <div className={styles.qs_content_container}>
        {Object.keys(qs || {}).map((key) => (
          <FaqItem
            key={key}
            question={key}
            answer={qs[key]}
            isOpen={qsToggle === key}
            onToggle={() => setQsToggle(qsToggle === key ? "" : key)}
          />
        ))}
      </div>
    </div>
  );
};

// Define PropTypes for the Faq component
Faq.propTypes = {
  qs: PropTypes.object.isRequired, // An object with key-value pairs for questions and answers
  heading: PropTypes.shape({
    title: PropTypes.string, // Optional title for the heading
    description: PropTypes.string, // Optional description for the heading
    hcolor: PropTypes.string, // Optional heading color
    pcolor: PropTypes.string, // Optional paragraph color
  }), // heading is an optional object with title, description, hcolor, and pcolor
};

export default Faq;
