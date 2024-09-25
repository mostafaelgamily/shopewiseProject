import styles from "./footer.module.css";
import AnimatedSection from "../../components/animatedSection/AnimatedSection";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_content_container}>
        <AnimatedSection>
          <div className={styles.footer_a}>
            <h3>Shopewise</h3>
            <p className={styles.footer_description}>
              Shopewise the only store you need for all your shopping needs
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className={styles.footer_a}>
            <h4>Useful Links</h4>

            <Link to="/products">
              <p> Products </p>
            </Link>

            <Link to="/faq">
              <p> FAQ </p>
            </Link>

            <Link to="/contact">
              <p> Contact </p>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className={styles.footer_a}>
            <h4>Category</h4>
            <Link to="/products">
              <p>Men</p>
            </Link>
            <Link to="/products">
              <p>Women</p>
            </Link>
            <Link to="/products">
              <p>Jewlery</p>
            </Link>
            <Link to="/products">
              <p>Electonics</p>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className={styles.footer_b}>
            <h4>My Account</h4>
            <Link to="/account">
              <p>My Account</p>
            </Link>
            <Link to="/returns">
              <p>Returns</p>
            </Link>
            <Link to="/history">
              <p>Orders History</p>
            </Link>
            <Link to="/tracking">
              <p>Order Tracking</p>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className={styles.footer_b}>
            <h4>Contact Info</h4>
            <p>123 Street, Old Trafford, New South London, UK</p>
            <p>contact@shopewise.com</p>
            <p>+ 457 789 789 65</p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <p className={styles.footer_copy}>© 2024. All rights reserved.</p>
      </AnimatedSection>
    </div>
  );
};

export default Footer;
