import styles from "./heading.module.css";
import PropTypes from "prop-types";
// import AnimatedSection from "../animatedSection/AnimatedSection";

const Heading = ({ title, description, hcolor, pcolor }) => {
  return (
    <div>
      {/* <AnimatedSection> */}
      <div className={styles.heading_container}>
        <h3 style={{ color: hcolor }}>{title}</h3>
        <p style={{ color: pcolor }}>{description}</p>
      </div>
      {/* </AnimatedSection> */}
    </div>
  );
};

export default Heading;

Heading.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  hcolor: PropTypes.node,
  pcolor: PropTypes.node,
};
