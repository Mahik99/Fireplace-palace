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
      {!menuStatus && (
        <button type="button" onClick={handleClick} className={styles.menuButton}>
          <Image src="/menu-open-button.png" width="25" height="25" alt="Open menu" />
        </button>
      )}
      {menuStatus && (
        <>
          <Menu />
          <button type="button" onClick={handleCloseClick} className={styles.menuButton}>
            <Image src="/menu-close-button.png" width="25" height="25" alt="Close menu" />
          </button>
        </>
      )}
    </header>
  );
};
export default Header;
