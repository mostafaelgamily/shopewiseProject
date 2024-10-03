import styles from "./faqItem.module.css";
import PropTypes from "prop-types";
import AnimatedSection from "../../components/animatedSection/AnimatedSection";
import { IoIosArrowForward } from "react-icons/io";

/**
 * FaqItem Component
 * This component renders an individual FAQ item.
 * Props:
 * - `question` (string): The FAQ question text.
 * - `answer` (string): The FAQ answer text.
 * - `isOpen` (boolean): Whether the current FAQ item is open or closed.
 * - `onToggle` (function): A callback function to toggle the FAQ item open/closed.
 */

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <AnimatedSection>
      <div className={`${styles.qs} ${isOpen ? styles.qs_open : ""}`}>
        <div className={styles.qs_question} onClick={onToggle}>
          <h4>{question}</h4>
          <h4 className={styles.qs_icon}>
            <IoIosArrowForward />
          </h4>
        </div>
        <p className={styles.qs_answer}>{answer}</p>
      </div>
    </AnimatedSection>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FaqItem;
