/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Sep 28 2020 16:14:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import styles from "./FlatNavButton.module.css";

function FlatNavButton(props) {
  const btnValue = "Button";
  const { content, styleClass, clickHandler } = props.payload;

  return (
    <button
      className={`${styles.FlatNavButton} ${styles.WobbleHorizontal} ${
        styleClass ? styleClass : ""
      }`}
      onClick={clickHandler ? clickHandler : ""}
    >
      {content || btnValue}
    </button>
  );
}

export default FlatNavButton;
