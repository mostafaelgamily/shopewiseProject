import styles from "./contactUs.module.css";
import AnimatedSection from "../../components/animatedSection/AnimatedSection";

const ContactUs = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_content_container}>
        <div className={styles.contact_content}>
          <AnimatedSection>
            <div className={styles.contact_heading}>
              <h3>Get in Touch</h3>
              <p>Contact us for any questions, feedback, or just to say hi!</p>
            </div>
          </AnimatedSection>
        </div>
        <form className={styles.contact_form}>
          <AnimatedSection>
            <input type="text" placeholder="Enter your Name" required />
            <input type="email" placeholder="Enter your Email" required />
            <input type="text" placeholder="Enter your Message" required />
            <input type="submit" className={styles.contact_submit} />
          </AnimatedSection>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
