import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeWrapper from "./contexts/ThemeWrapper.jsx";
import UsersWrapper from "./contexts/UsersWrapper.jsx";
import ProductsWrapper from "./contexts/ProductsWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeWrapper>
        <UsersWrapper>
          <ProductsWrapper>
            <App />
          </ProductsWrapper>
        </UsersWrapper>
      </ThemeWrapper>
    </BrowserRouter>
  </StrictMode>
);
