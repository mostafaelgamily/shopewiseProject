import axios from "axios";
import React, { useEffect, useState } from "react";
import productsContext from "./productsContext";

const ProductsWrapper = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, changeCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartAdded, setCartAdded] = useState(false);

  const addToCart = (product, q) => {
    const quantity = Number(q);
    const existingProduct = cart.find((p) => p.id === product.id);
    let updatedCart = [...cart, product];
    if (existingProduct) {
      // If the product already exists, increase the quantity
      updatedCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
      );
    } else {
      // If the product doesn't exist, add it with quantity 1
      updatedCart = [...cart, { ...product, quantity: quantity }];
    }
    changeCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartAdded(true);
    const timeoutId = setTimeout(() => {
      setCartAdded(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  };

  const emptyCart = () => {
    changeCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((p) => p.id !== product.id);
    changeCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtractQuantity = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        // Decrease the quantity by 1
        const updatedCart = cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        );
        changeCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        // If the quantity is 1, remove the product from the cart
        removeFromCart(product);
      }
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        const prod = resp.data;
        if (category === "all") {
          setProducts(prod);
          setLoading(false);
        } else {
          const filteredProducts = prod.filter((p) =>
            category === "men"
              ? p.category === "men's clothing"
              : category === "women"
              ? p.category === "women's clothing"
              : p.category === category
          );
          setProducts(filteredProducts);
        }
      })
      .catch((er) => {
        console.log(er);
        setError(
          "Something Went Wrong, Check Your Internet Connection or Try Again Later"
        );
        setLoading(false);
      });

    console.log(cart);
  }, [category, cart]);
  return (
    <div>
      <productsContext.Provider
        value={{
          products,
          loading,
          error,
          setCategory,
          category,
          addToCart,
          cart,
          cartAdded,
          emptyCart,
          removeFromCart,
          subtractQuantity,
        }}
      >
        {children}
      </productsContext.Provider>
    </div>
  );
};

export default ProductsWrapper;
