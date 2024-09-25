import { useEffect, useState } from "react";
import styles from "./faq.module.css";
import Heading from "../../components/heading/Heading";
import AnimatedSection from "../../components/animatedSection/AnimatedSection";
import { IoIosArrowForward } from "react-icons/io";
import { FaqData } from "../../data/FaqData";

const Qs = () => {
  const [qs, setQs] = useState({});
  const [qsToggle, setQsToggle] = useState(Object.keys(qs)[0]);

  useEffect(() => {
    setQs(FaqData);
    qs && setQsToggle(Object.keys(qs)[0]);
  }, [qs]);

  return (
    <div className={styles.qs_container}>
      <AnimatedSection>
        <Heading
          title="Frequently Asked Questions"
          description=""
          hcolor="#0d141a"
          pcolor="#56585e"
        />
      </AnimatedSection>
      <div className={styles.qs_content_container}>
        {Object.keys(qs).map((e) => (
          <AnimatedSection key={e}>
            <div
              className={`${styles.qs}  ${qsToggle === e && styles.qs_open}`}
            >
              <div
                className={styles.qs_question}
                onClick={() => {
                  setQsToggle(qsToggle === e ? "" : e);
                }}
              >
                <h4>{e}</h4>
                <h4 className={styles.qs_icon}>
                  <IoIosArrowForward />
                </h4>
              </div>
              <p className={styles.qs_answer}>{qs[e]}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Qs;
