"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Menu from "../Menu/Menu";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  function handleClick() {
    setMenuStatus(true);
  }
  function handleCloseClick() {
    setMenuStatus(false);
  }
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>🔥 Fireplace Palace</h1>
      <button type="button" onClick={handleClick}>
        <Image src="/menu-open-button.png" width="25" height="25"></Image>
      </button>
      {menuStatus && <Menu></Menu>}
      <button type="button" onClick={handleCloseClick}>
        <Image src="/menu-close-button.png" width="25" height="25"></Image>
      </button>
    </header>
  );
};

export default Header;
