import React from "react";
import css from "./Header.module.css";
import logocart from "../../assets/logocart.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logocart} alt="" srcset="" />
        <span>DMarket</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collecction</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sale</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search" />
        <FaShoppingCart className={css.cart} />
      </div>
    </div>
  );
};
export { Header };
