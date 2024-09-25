import { useState } from "react";
import styles from "./UpperNav.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShuffle } from "react-icons/ci";

import { CgProfile } from "react-icons/cg";

////////// Left To Do //////////
//// * Links Paths
//// 1. Add the England, France & United States Flags Icons to the Language Link & DropMenus
//// 2. Change the Language & Currency Link title depending on the chosen option from the Drop Menu

const UpperNav = () => {
  const [languageToggle, setLanguageToggle] = useState(false);
  const [currencyToggle, setcurrencyToggle] = useState(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.upper_nav_left}>
          <div className={styles.upper_nav_language_link_container}>
            <Link
              className={styles.upper_nav_link}
              onClick={() => {
                setLanguageToggle(!languageToggle);
              }}
            >
              <p>English</p>
              <p className={styles.upper_nav_link_right_icon}>
                <IoIosArrowDown />
              </p>
            </Link>
            {languageToggle && (
              <div className={styles.upper_nav_drop_menu}>
                <p>English</p>
                <p>France</p>
                <p>United States</p>
              </div>
            )}
          </div>
          <div className={styles.upper_nav_currency_link_container}>
            <Link
              className={styles.upper_nav_link}
              onClick={() => {
                setcurrencyToggle(!currencyToggle);
              }}
            >
              <p>USD</p>
              <p className={styles.upper_nav_link_right_icon}>
                <IoIosArrowDown />
              </p>
            </Link>
            {currencyToggle && (
              <div className={styles.upper_nav_drop_menu}>
                <p>USD</p>
                <p>EUR</p>
                <p>GBR</p>
              </div>
            )}
          </div>
          <div className={styles.upper_nav_link}>
            <p className={styles.upper_nav_link_left_icon}>
              <IoIosPhonePortrait />
            </p>
            <p>123-456-7890</p>
          </div>
        </div>
        <div className={styles.upper_nav_right}>
          <Link className={styles.upper_nav_link}>
            <p className={styles.upper_nav_link_left_icon}>
              <CiShuffle />
            </p>
            <p>Compare</p>
          </Link>
          <Link className={styles.upper_nav_link}>
            <p className={styles.upper_nav_link_left_icon}>
              <CiHeart />
            </p>
            <p>Wishlist</p>
          </Link>
          <Link className={styles.upper_nav_link}>
            <p className={styles.upper_nav_link_left_icon}>
              <CgProfile />
            </p>
            <p>Login</p>
          </Link>
        </div>
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default UpperNav;
