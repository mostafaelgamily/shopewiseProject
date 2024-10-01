import { useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./nav.module.css";
import { Link, NavLink } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import productsContext from "../../contexts/productsContext";
import themeContext from "../../contexts/themeContext";
import { IoBulb } from "react-icons/io5";

/**
 * Nav Component:
 *
 * This component renders a responsive navigation bar. It can display optional icons for the account, cart, and theme toggle.
 * The logos are handled internally, and the theme can be toggled between "light" and "dark".
 * The cart data is fetched from the products context, and the total item count is displayed in the cart icon.
 *
 * It expects 6 props:
 *
 * @prop {array} links - An array of objects representing the navigation links.
 * @prop {function} onThemeToggle - A callback function to handle theme changes.
 * @prop {component} AccountIcon - Optional account icon component (can be null).
 * @prop {component} CartIcon - Optional cart icon component (can be null).
 *
 * Explanation for props:
 *
 * 1. `cart` (from context): This is expected to be an array of cart items. Each cart item can have its own structure, but at the very least, it should be an object so that the length of the array represents the total number of items in the cart.
 *
 * 2. `onThemeToggle`: This is a function that toggles between light and dark themes. It should be provided by the theme context or another source managing the app's theme.
 *
 * Example usage:
 * <Nav
 *    links={[
 *      { path: "/", label: "Home" },
 *      { path: "/products", label: "Products" },
 *      { path: "/contact", label: "Contact" }
 *    ]}
 *    onThemeToggle={toggleTheme}
 *    AccountIcon={<VscAccount />}
 *    CartIcon={<IoCartOutline />}
 * />
 */

const Nav = ({
  links,
  onThemeToggle = null, // default to null if not provided
  AccountIcon = null, // default to null if not provided
  CartIcon = null, // default to null if not provided
}) => {
  const [navToggle, setNavToggle] = useState(false);
  const { cart } = useContext(productsContext); // Expecting an array of cart items
  const { theme } = useContext(themeContext); // Expecting 'light' or 'dark' theme

  const { logoBlack, logoWhite } = useContext(themeContext);

  // Handle theme-based logo switching
  const logo =
    theme === "dark" ? logoWhite : theme === "light" ? logoBlack : "";

  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_content_container}>
        {/* Logo based on current theme */}
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>

        <div className={styles.nav_icons_container}>
          {/* Theme Toggle Icon */}
          <div className={styles.theme_icon} onClick={onThemeToggle}>
            {onThemeToggle && <IoBulb />} {/* Default icon for theme toggle */}
          </div>

          {/* Account Icon (Optional) */}
          {AccountIcon && <Link to="/account">{AccountIcon}</Link>}

          {/* Cart Icon (Optional) */}
          {CartIcon && (
            <Link to="/cart" className={styles.cart_icon}>
              {CartIcon}
              {/* Cart item count, expected to display the length of cart items */}
              <span
                className={styles.cart_count}
                style={{ right: cart.length < 10 ? "10px" : "5px" }}
              >
                {cart.length}
              </span>
            </Link>
          )}

          {/* ToggleButton for mobile nav */}
          <div className={navToggle ? styles.nav_open : ""}>
            <ToggleButton navToggle={navToggle} setNavToggle={setNavToggle} />
          </div>

          {/* Navigation Links */}
          <div className={styles.nav_links_container}>
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={styles.nav_link}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onThemeToggle: PropTypes.func,
  AccountIcon: PropTypes.element,
  CartIcon: PropTypes.element,
};

export default Nav;
