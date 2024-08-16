"use client";
import { useState, useEffect } from "react";
import styles from "./reviews.module.css";
import Separator from "../Separator/Separator";

export function Reviews() {
  const [selectedCountry, setSelectedCountry] = useState(null); // useState set to null in case country is not selected
  const [countryReview, setCountryReview] = useState(null); // same as above but for reviews

  // if country selected, then fetch review from API (use ${} for country), parse the response and set it in countryReview
  // use selectedCountry as a dependency, whenever it is changed the hook useEffect is executed

  useEffect(() => {
    if (selectedCountry) {
      fetch(
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`
      )
        .then((response) => response.json())
        .then((data) => setCountryReview(data));
      console.log(countryReview);
    }
  }, [selectedCountry]);

  function selectCountry(name) {
    setSelectedCountry(name);
  }

  return (
    <>
      <div className={styles.reviewsContainer}>
        <h2>Trusted.</h2>
        <Separator />
        <h3>
          We've got thousands of happy customers all over the UK. Choose your
          country to see the latest review:
        </h3>
        <div className={styles.buttonContainer}>
          <button
            className={styles.reviewButtons}
            onClick={() => selectCountry("England")}
          >
            England
          </button>
          <button
            className={styles.reviewButtons}
            onClick={() => selectCountry("Scotland")}
          >
            Scotland
          </button>
          <button
            className={styles.reviewButtons}
            onClick={() => selectCountry("Wales")}
          >
            Wales
          </button>
        </div>

        {/* Render review if countryReview is an object and not null */}
        {countryReview ? (
          <div className={styles.reviewInfo}>
            <p className={styles.reviewText}>"{countryReview.text}" </p>
            <p className={styles.reviewDetails}>
              {countryReview.author} - {countryReview.location}
            </p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}
