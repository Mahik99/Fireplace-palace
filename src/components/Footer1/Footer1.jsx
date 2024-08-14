import React from "react";
import styles from "./Footer1.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Find us on:</p>
        <ul className={styles.footerUl}>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>TikTok</li>
        </ul>
      </div>
      <div>
        <p>©️ Fireplace Palace</p>
        <p>
          <a href="mailto:info@firepalace.co.uk">info@firepalace.co.uk</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
