"use Client"
// import {useState, useEffect} from 'react'
import styles  from "./reviews.module.css"
import Separator from "../Separator/Separator";

export function Reviews() {


    return (
        <>
        <div className={styles.reviewsContainer}>
        <h2>Trusted.</h2>
        <Separator />
        <h3>We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</h3>
        <div className={styles.buttonContainer}>
            <button className={styles.reviewButtons}>England</button>
            <button className={styles.reviewButtons}>Wales</button>
            <button className={styles.reviewButtons}>Scotland</button>
        </div>
        </div>
       </>
    )
}