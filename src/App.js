import { Route, Routes } from "react-router-dom";
import "./App.css";
import UsersWrapper from "./contexts/UsersWrapper";
import ProductsWrapper from "./contexts/ProductsWrapper";
import Nav from "./sections/nav/Nav";
import Footer from "./sections/footer/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </ProductsWrapper>
      </UsersWrapper>
    </div>
  );
}

export default App;
