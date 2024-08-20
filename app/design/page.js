import Link from "next/link";
import styles from "./design.module.css";

export default function ContactForm() {
  return (
    <>
      <h1 className={styles.formTiltle}>Design Booking</h1>
      <form>
        <fieldset className={styles.fieldset}>
          <legend className={styles.formLegend}>Personal Information:</legend>
          <ul className={styles.ul}>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="name">
                Full Name{" "}
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="name"
                name="user_name"
              />
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="postcode">
                Postcode{" "}
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="postcode"
                name="user_postcode"
              />
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="address">
                House/ Flat Number And Street Name
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="address"
                name="user_address"
              />
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="city">
                City{" "}
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="city"
                name="user_city"
              />
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.formLegend}>Contact Information:</legend>
          <ul className={styles.ul}>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="phone_number">
                Phone Number{" "}
              </label>
              <input
                className={styles.inputBox}
                type="tel"
                id="phone_number"
                name="user_phone_number"
              />
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="mail">
                Email{" "}
              </label>
              <input
                className={styles.inputBox}
                type="email"
                id="mail"
                name="user_email"
              />
            </li>
          </ul>
        </fieldset>
        <button type="submit" className={styles.consultationButton}>
          Request Design consultation
        </button>
      </form>
    </>
  );
}
