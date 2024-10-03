import NavSpacer from "../components/navSpacer/NavSpacer";
import Faq from "../sections/faq/Faq";
import ContactUs from "../sections/contactUs/ContactUs";
import { useEffect, useState } from "react";
import { FaqData } from "../data/FaqData";

const FaqPage = () => {
  const [qs, setQs] = useState({});
  useEffect(() => {
    setQs(FaqData);
  }, [qs]);
  return (
    <div>
      <NavSpacer />
      <Faq qs={qs} heading={{ title: "FAQ" }} />
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

export default FaqPage;
