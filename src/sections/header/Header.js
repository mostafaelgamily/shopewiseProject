import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import hero1 from "./images/banner1.jpg";
import hero2 from "./images/banner2.jpg";
import hero3 from "./images/banner3.jpg";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/animatedSection/AnimatedSection";
import LgButton from "../../components/button/LgButton";

////////// Left To Do //////////
//// * Change the Hero Images and Hero Info to ones from the given FakeAPI: https://fakestoreapi.com
//// * Button Paths!
//// 1. Changing Background Image & Info Text automatically every few seconds
//// 2. Responsive Info Font Size

const Header = () => {
  const [heroImageNum, setHeroImageNum] = useState(1);
  const [heroInfo, setHeroInfo] = useState({
    hero1: {
      image: hero1,
      title: "Women Fashion",
      description: "Top Fashion",
    },
    hero2: {
      image: hero2,
      title: "Men Fashion",
      description: "Exclusive Products",
    },
    hero3: {
      image: hero3,
      title: "Don't Miss Out",
      description: "Taking your Viewing Experience to Next Level",
    },
  });

  const heroImageDir = (direction) => {
    const heroCount = Object.keys(heroInfo).length;
    if (direction === "right") {
      if (heroImageNum < heroCount) {
        setHeroImageNum(Number(heroImageNum + 1));
      } else {
        setHeroImageNum(1);
      }
    } else if (direction === "left") {
      if (Number(heroImageNum) <= 1) {
        setHeroImageNum(Number(heroCount));
      } else {
        setHeroImageNum(Number(heroImageNum - 1));
      }
    }
  };

  return (
    <div>
      <div
        className={styles.header_bg}
        style={{
          backgroundImage: `url(${
            heroInfo[Object.keys(heroInfo)[heroImageNum - 1]].image
          })`,
        }}
      >
        <div
          className={styles.header_left_arrow}
          onClick={() => {
            heroImageDir("left");
          }}
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className={styles.header_info_container}>
          <AnimatedSection>
            <p>
              {heroInfo[Object.keys(heroInfo)[heroImageNum - 1]].description}
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2>{heroInfo[Object.keys(heroInfo)[heroImageNum - 1]].title}</h2>
          </AnimatedSection>

          <AnimatedSection>
            <Link to="/products">
              <LgButton name="Shop Now" />
            </Link>
          </AnimatedSection>
        </div>
        <div
          className={styles.header_right_arrow}
          onClick={() => {
            heroImageDir("right");
          }}
        >
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Header;
