'use client';
import styles from './Header.module.css'
import Image from 'next/image';

const Header = () => {
  function handleClick()
  {
    console.log("Button clicked");
  }
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>🔥 Fireplace Palace</h1>
      <button type="button" onClick={handleClick}><Image src="/menu-open-button.png" width="25" height="25"></Image></button>
    </header>
  );
};

export default Header;
