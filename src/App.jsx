import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import TopButton from "./components/topButton/TopButton";
import ProductsWrapper from "./contexts/ProductsWrapper";
import ThemeWrapper from "./contexts/ThemeWrapper";
import UsersWrapper from "./contexts/UsersWrapper";
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

function App() {
  return (
    <>
      <ThemeWrapper>
        <UsersWrapper>
          <ProductsWrapper>
            <Nav />
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
          </ProductsWrapper>
        </UsersWrapper>
      </ThemeWrapper>
    </>
  );
}

export default App;
