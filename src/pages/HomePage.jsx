import NavSpacer from "../components/navSpacer/NavSpacer";
import Header from "../sections/header/Header";
import Products from "../sections/products/Products";
import ContactUs from "../sections/contactUs/ContactUs";

const HomePage = () => {
  return (
    <div>
      <NavSpacer />
      <Header />
      <Products limit={5} />
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

export default HomePage;
