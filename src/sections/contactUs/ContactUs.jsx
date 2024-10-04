import { useEffect, useState } from "react";
import styles from "./contactUs.module.css";
import AnimatedSection from "../../components/animatedSection/AnimatedSection";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm";

/**
 * ContactUs Component:
 *
 * This component is responsible for displaying contact information along with a customizable contact form.
 * It supports dynamic data for the contact information (e.g., emails, phone numbers, addresses) and allows
 * the user to provide different form fields and background images.
 *
 * @prop {object} contactInfo - An object representing the contact information that will be displayed.
 * It expects the following structure:
 * {
 *   Email: Array<string>,  // An array of email addresses
 *   Phone: Array<string>,  // An array of phone numbers
 *   Address: Array<string> // An array of physical addresses
 * }
 *
 * @prop {bool} bg - (By Default False) A Boolean indicating wether to display a background image or not
 *
 * @prop {string} backgroundImage - A string URL for the background image of the contact section.
 * This will be applied as a CSS `background-image`. If not provided, no image will be shown.
 *
 * @prop {Array} formFields - An array of objects representing the fields to be displayed in the contact form.
 * Each field should be structured as:
 * {
 *   type: string,          // The input field type (e.g., "text", "email", etc.)
 *   placeholder: string,   // The placeholder text for the input
 *   required: boolean      // Whether the field is required for form submission
 * }
 *
 * @prop {function} onFormSubmit - A callback function that will be executed when the form is submitted.
 * This function receives the form submission event as an argument. It is an optional prop, and if not provided,
 * the form submission will trigger no action.
 *
 * Example usage:
 * <ContactUs
 *   contactInfo={{
 *     Email: ["contact@example.com"],
 *     Phone: ["+1234567890"],
 *     Address: ["123 Main St, City, Country"]
 *   }}
 *   backgroundImage="/path/to/image.jpg"
 *   formFields={[
 *     { type: 'text', placeholder: 'Enter your Name', required: true },
 *     { type: 'email', placeholder: 'Enter your Email', required: true },
 *     { type: 'text', placeholder: 'Enter your Message', required: true }
 *   ]}
 *   onFormSubmit={handleFormSubmit}
 * />
 */

const ContactUs = ({
  contactInfo = { Email: [], Phone: [], Address: [] }, // Default value
  bg = false,
  backgroundImage = "", // Default value
  formFields,
  onFormSubmit = () => {}, // Default value
}) => {
  const [contact, setContact] = useState(contactInfo);

  useEffect(() => {
    setContact(contactInfo); // Sync contact data with props
  }, [contactInfo]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(e); // External form submission handler
    }
  };

  return (
    <div
      className={styles.contact_container}
      style={{
        backgroundImage: bg && backgroundImage ? `url(${backgroundImage})` : "",
        backgroundColor: !backgroundImage && "var(--background-color)",
      }}
    >
      <div className={bg ? styles.overlay : ""}>
        <div className={styles.contact_content_container}>
          <div className={styles.contact_content}>
            <AnimatedSection>
              <div className={styles.contact_heading}>
                <h3 style={{ color: bg ? "#ffffff" : "var(--text-color)" }}>
                  Get in Touch
                </h3>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className={styles.contact_info}>
                {Object.keys(contact).map((category) => (
                  <div key={category}>
                    <h4 style={{ color: bg ? "#ffffff" : "var(--text-color)" }}>
                      {category}
                    </h4>
                    {contact[category].map((item) => (
                      <div key={item}>
                        <p
                          style={{
                            color: bg ? "#ffffff" : "var(--text-color)",
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection widthOption="fitContent">
            <ContactForm
              formFields={formFields}
              onSubmit={handleFormSubmit}
              bg={bg}
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  contactInfo: PropTypes.shape({
    Email: PropTypes.arrayOf(PropTypes.string),
    Phone: PropTypes.arrayOf(PropTypes.string),
    Address: PropTypes.arrayOf(PropTypes.string),
  }), // Structured contact info
  bg: PropTypes.bool,
  backgroundImage: PropTypes.string, // Background image URL (optional)
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
    })
  ).isRequired, // Form fields structure
  onFormSubmit: PropTypes.func, // Optional callback for form submission
};

export default ContactUs;
