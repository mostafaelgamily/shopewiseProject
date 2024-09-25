import React, { useContext, useState } from "react";
import styles from "./nav.module.css";
import logoBlack from "../../assets/logoBlack.png";
import logoWhite from "../../assets/logoWhite.png";
import { Link, NavLink } from "react-router-dom";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import productsContext from "../../contexts/productsContext";
import { FaLightbulb } from "react-icons/fa6";
import themeContext from "../../contexts/themeContext";

const Nav = ({ toggleMode, mode }) => {
  const [navToggle, setNavToggle] = useState(false);
  const { cart } = useContext(productsContext);
  const { toggleTheme, theme } = useContext(themeContext);

  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_content_container}>
        <Link to={"/"}>
          <img src={theme === "dark" ? logoWhite : logoBlack} alt="Logo" />
        </Link>

        <div className={styles.nav_icons_container}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              toggleTheme();
            }}
          >
            <FaLightbulb style={{ marginBottom: "3px" }} />
          </div>
          <Link to="/account">
            <VscAccount />
          </Link>
          <Link to="/cart" className={styles.cart_icon}>
            <IoCartOutline />
            <span
              className={styles.cart_count}
              style={{ right: cart.length < 10 ? "10px" : "5px" }}
            >
              {cart.length}
            </span>
          </Link>
          <div className={navToggle && styles.nav_open}>
            <ToggleButton navToggle={navToggle} setNavToggle={setNavToggle} />
          </div>

          <div className={styles.nav_links_container}>
            <NavLink to={"/"} className={styles.nav_link}>
              Home
            </NavLink>
            <NavLink to={"/products"} className={styles.nav_link}>
              Products
            </NavLink>
            <NavLink to={"/faq"} className={styles.nav_link}>
              FAQ
            </NavLink>

            <NavLink to={"/contact"} className={styles.nav_link}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
