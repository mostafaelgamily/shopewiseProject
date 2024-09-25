import NavSpacer from "../components/navSpacer/NavSpacer";
import Header from "../sections/header/Header";
import Products from "../sections/products/Products";
import ContactUs from "../sections/contactUs/ContactUs";

const HomePage = () => {
  return (
    <div>
      <NavSpacer />
      <Header />
      <Products />
      <ContactUs />
    </div>
  );
};

export default HomePage;
