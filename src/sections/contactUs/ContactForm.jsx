import PropTypes from "prop-types";
import styles from "./contactForm.module.css";

/**
 * ContactForm Component:
 *
 * This component renders a customizable contact form. It takes an array of form field configurations
 * and an optional `onSubmit` handler to control the form submission behavior.
 *
 * @prop {Array} formFields - An array of objects defining the form fields.
 * Each object should have the following structure:
 * {
 *   type: string,          // The input field type (e.g., "text", "email", etc.)
 *   placeholder: string,   // The placeholder text displayed inside the input field
 *   required: boolean      // Whether the input field is required for submission
 * }
 *
 * @prop {bool} bg - A Boolean indicating wether to display a background image or not
 *
 * @prop {function} onSubmit - A function that will be called when the form is submitted.
 * It receives the event as a parameter. This is an optional prop, and if not provided,
 * the default behavior will be a no-op (i.e., the form will not submit any data).
 *
 * Example usage:
 * <ContactForm
 *   formFields={[
 *     { type: 'text', placeholder: 'Enter your Name', required: true },
 *     { type: 'email', placeholder: 'Enter your Email', required: true },
 *     { type: 'text', placeholder: 'Enter your Message', required: true }
 *   ]}
 *   onSubmit={handleFormSubmit}
 * />
 */

const ContactForm = ({ formFields, bg, onSubmit }) => {
  return (
    <form
      className={styles.contact_form}
      onSubmit={onSubmit}
      style={{
        borderColor: bg ? "#ffffff" : "var(--card-background-color)",
        backgroundColor: bg ? "#ffffff" : "transparent",
      }}
    >
      {formFields.map((field, index) => (
        <input
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
          style={{
            backgroundColor: bg && "#ffffff",
          }}
        />
      ))}
      <input type="submit" className={styles.contact_submit} />
    </form>
  );
};

ContactForm.propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
    })
  ).isRequired,
  bg: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
