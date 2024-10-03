import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import TopButton from "./components/topButton/TopButton";
import Footer from "./sections/footer/Footer";
import Nav from "./sections/nav/Nav";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import AccountPage from "./pages/AccountPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import themeContext from "./contexts/themeContext";
import { useContext } from "react";
import productsContext from "./contexts/productsContext";

function App() {
  const { theme, toggleTheme, logoBlack, logoWhite } = useContext(themeContext);
  const { cart } = useContext(productsContext);

  return (
    <>
      <Nav
        links={[
          { path: "/", label: "Home" },
          { path: "/products", label: "Products" },
          { path: "/faq", label: "FAQ" },
          { path: "/contact", label: "Contact Us" },
        ]}
        onThemeToggle={toggleTheme}
        AccountIcon={<VscAccount />}
        CartIcon={<IoCartOutline />}
        theme={theme}
        cart={cart}
        logoBlack={logoBlack}
        logoWhite={logoWhite}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <TopButton />
      <Footer />
    </>
  );
}

export default App;
