import { useContext } from "react";
import styles from "./products.module.css";
import Heading from "../../components/heading/Heading";
import { Link } from "react-router-dom";
import productsContext from "../../contexts/productsContext";
import PropTypes from "prop-types";
// import AddedToCart from "../../components/addedToCart/AddedToCart";

const Products = ({ limit = 1000 }) => {
  const {
    products,
    loading,
    error,
    setCategory,
    category,
    addToCart,
    // cartAdded,
  } = useContext(productsContext);

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
      </div>
    );

  return (
    <div className={styles.products_container}>
      <Heading title={"Products"} />
      <div className={styles.products_content_container}>
        <div className={styles.products_links}>
          <p
            className={category === "all" ? styles.active : ""}
            onClick={() => setCategory("all")}
          >
            All
          </p>
          <p
            className={category === "men" ? styles.active : ""}
            onClick={() => setCategory("men")}
          >
            Men
          </p>
          <p
            className={category === "women" ? styles.active : ""}
            onClick={() => setCategory("women")}
          >
            Women
          </p>
          <p
            className={category === "jewelery" ? styles.active : ""}
            onClick={() => setCategory("jewelery")}
          >
            Jewelery
          </p>
          <p
            className={category === "electronics" ? styles.active : ""}
            onClick={() => setCategory("electronics")}
          >
            Electronics
          </p>
        </div>
        <div className={styles.products_cards}>
          {products.length > 0 ? (
            products.map((p, index) => {
              if (index < limit) {
                return (
                  <div key={p.id} className={styles.products_card}>
                    <Link
                      to={`/products/${p.id}`}
                      className={styles.products_product_link}
                    >
                      <img src={p.image} alt={p.title} />
                      <h5 className={styles.products_product_title}>
                        {p.title}
                      </h5>
                      <h5 className={styles.product_price}>${p.price}</h5>
                    </Link>
                    <button
                      onClick={() => {
                        addToCart(p, 1);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                );
              }
            })
          ) : (
            <p>No products found</p>
          )}
        </div>
        {/* {cartAdded && <AddedToCart />} */}
      </div>
    </div>
  );
};

Products.propTypes = {
  limit: PropTypes.int,
};

export default Products;
