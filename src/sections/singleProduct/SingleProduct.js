import React, { useContext, useEffect, useState } from "react";
import styles from "./singleProduct.module.css";
import { Link, useParams } from "react-router-dom";
import LgButton from "../../components/button/LgButton";
import productsContext from "../../contexts/productsContext";
// import AddedToCart from "../../components/addedToCart/AddedToCart";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const SingleProduct = () => {
  const p = useParams();
  const pid = p.id;
  const { products, loading, error, addToCart, cartAdded } =
    useContext(productsContext);
  const product = products.find((product) => product.id == pid);
  const [quantity, setQuantity] = useState(1);

  if (loading)
    return (
      <div style={{ padding: "50px" }}>
        <h3>Loading...</h3>
      </div>
    );

  if (error)
    return (
      <div style={{ padding: "50px" }}>
        <h3>{error}</h3>
        <Link to="/">
          <LgButton name="Home" />
        </Link>
      </div>
    );

  return (
    <div className={styles.single_container}>
      <div className={styles.single_content_container}>
        <div className={styles.product_top}>
          <div className={styles.product_left}>
            <div className={styles.product_image}>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
          <div className={styles.product_right}>
            <div className={styles.product_info}>
              <h3 className={styles.product_title}>{product.title}</h3>
              <h4 className={styles.product_price}>${product.price}</h4>
              <p className={styles.product_description}>
                {product.description}
              </p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.product_cart}>
              <div className={styles.quantity_counter}>
                <GrSubtractCircle
                  className={styles.quantity_icon_subtract}
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                />
                <h4>{quantity}</h4>
                <IoMdAddCircleOutline
                  className={styles.quantity_icon_add}
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                />
              </div>
              <div
                onClick={() => {
                  addToCart(product, quantity);
                  console.log("Done");
                }}
              >
                <LgButton name="Add To Cart" />
              </div>
            </div>
            <div className={styles.separator}></div>
            <di className={styles.product_infoo}>
              <p className={styles.id}>ID: {product.id}</p>
              <p className={styles.product_category}>
                Category: {product.category}
              </p>
              <p className={styles.product_category}>
                Overall Rating: {product.rating.rate} by {product.rating.count}{" "}
                customers
              </p>
            </di>
          </div>
        </div>
        {/* {cartAdded && <AddedToCart />} */}
      </div>
    </div>
  );
};

export default SingleProduct;
