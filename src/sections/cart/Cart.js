import React, { useContext } from "react";
import styles from "./cart.module.css";
import productsContext from "../../contexts/productsContext";
import LgButton from "../../components/button/LgButton";
import { Link } from "react-router-dom";
import { GrSubtractCircle } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";

const Cart = () => {
  const {
    cart,
    emptyCart,
    removeFromCart,
    addToCart,
    subtractQuantity,
    totalAmount,
  } = useContext(productsContext);

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_content_container}>
        {cart?.length == 0 ? (
          <>
            <h3>Cart is Empty</h3>
            <div className={styles.cart_add_button}>
              <Link to="/products">
                <LgButton name="Add Products" />
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.cart_cards_container}>
            {cart?.map((p) => (
              <div className={styles.cart_card}>
                <Link to={`/products/${p.id}`}>
                  <img src={p.image} alt={p.title} />
                  <h5 className={styles.cart_product_title}>{p.title}</h5>
                  <h5>${p.price}</h5>
                  <h5 className={styles.cart_product_quantity}>{p.quantity}</h5>
                </Link>
                <div className={styles.quantity_counter}>
                  <GrSubtractCircle
                    className={styles.quantity_icon_subtract}
                    onClick={() => {
                      subtractQuantity(p);
                    }}
                  />
                  <button
                    onClick={() => {
                      removeFromCart(p);
                    }}
                  >
                    Remove Item
                  </button>
                  <IoMdAddCircleOutline
                    className={styles.quantity_icon_add}
                    onClick={() => {
                      addToCart(p, 1);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {cart?.length > 0 && (
          <>
            <div className={styles.cart_buttons_container}>
              <div className={styles.cart_add_button}>
                <Link to="/products">
                  <LgButton name="Add Products" />
                </Link>
              </div>
              <div
                className={styles.cart_empty_button}
                onClick={() => {
                  emptyCart();
                }}
              >
                <LgButton name="Empty Cart" />
              </div>
            </div>
            <div className={styles.cart_total_container}>
              <p>Total: ${totalAmount}</p>
              <div className={styles.cart_checkout_button}>
                <Link to="/checkout">
                  <LgButton name="Checkout" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
