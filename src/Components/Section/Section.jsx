import React from "react";
import css from "./Section.module.css";
import frontImage from "../../assets/familybuy.png";
import { BsArrowRight, BsFillBagFill } from "react-icons/bs";

export const Section = () => {
  return (
    <div className={css.container}>
      {/* Left panel*/}
      <div className={css.h_sides}>
        <span className={css.text1}>The best technological products</span>
        <div className={css.text2}>
          <span>The best brands</span>
          <span>
            Buy the most modern electronic equipment on the market directly to
            your home
          </span>
        </div>
      </div>
      {/* Mid panel*/}
      <div className={css.warpped}>
        <div className={css.circle}></div>
        <img src={frontImage} alt="" width={600} />
        <div className={css.cart2}>
          <BsFillBagFill />
          <div className={css.sigup}>
            <span>Best Singup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* Mid panel*/}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};
