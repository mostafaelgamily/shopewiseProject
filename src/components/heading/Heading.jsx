import styles from "./heading.module.css";
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

//  style={{ color: "#ff5733" }}
