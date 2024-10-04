import NavSpacer from "../components/navSpacer/NavSpacer";
import ContactUs from "../sections/contactUs/ContactUs";

const ContactPage = () => {
  return (
    <div>
      <NavSpacer />
      <ContactUs
        contactInfo={{
          Email: ["contact@shopewise.com"],
          Phone: ["+123-456-7890"],
          Address: ["123 Main St, City, Country"],
        }}
        // backgroundImage="/path/to/image.jpg"
        formFields={[
          { type: "text", placeholder: "Enter your Name", required: true },
          { type: "email", placeholder: "Enter your Email", required: true },
          { type: "text", placeholder: "Enter your Message", required: true },
        ]}
      />
    </div>
  );
};

export default ContactPage;
