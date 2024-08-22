"use client";

import { useReducer, useState } from "react";
import Link from "next/link";
import styles from "./design.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
              ...state, // spreads state (so we have both data and status)
          data: {
              ...state.data, // spreads state data
              [action.payload.fieldName]: action.payload.fieldValue // only changes user input field
          }
        }

      case "ERROR":
        return {
          ...state,
          status: "error" 
        }

        case "FORM_SUBMITTING":
          return {
            ...state,
             status: "submitting"
          }

          case "FORM_SUCCESS":
            return {
              ...state,
              status: "success"
            }

    default:
      return state;
  }
}

const initialState = {
  data: {
    name: "",
    postcode: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  },
  status: "editing",
  errors: {
    name: "",
    postcode: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  }
};

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleChange = (event) => {
    if (
      event.target.name === "name" ||
      event.target.name === "postcode" ||
      event.target.name === "address" ||
      event.target.name === "city" ||
      event.target.name === "phone" ||
      event.target.name === "email"
    ) {
      dispatch({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value,
        },
      })
      
    }
    console.log(`${event.target.name}: ${event.target.value}` );

  };

  const submitForm = (event) => {
    event.preventDefault();


    dispatch({
      type: "FORM_SUBMITTING"
    });



    setTimeout(() => {

 

      if (
        state.data.name === "" ||
        state.data.postcode === "" ||
        state.data.address === "" ||
        state.data.city === "" ||
        state.data.phone === "" ||
        state.data.email === ""
      ) {
        dispatch({type: "ERROR"})
      } else {
      
      dispatch({
          type: "FORM_SUCCESS"
      });

    }

  }, 2000);

    

    console.log(state);

  };

  return (
    <>
      <h1 className={styles.formTiltle}>Design Booking</h1>
      <form onSubmit={submitForm}>
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
                name="name"
                onChange={(event) => handleChange(event)}
                value={state.data.name}
              />
              {state.errors.name === true && <p>Please enter name.</p>}
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="postcode">
                Postcode{" "}
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="postcode"
                name="postcode"
                onChange={(event) => handleChange(event)}
                value={state.data.postcode}
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
                name="address"
                onChange={(event) => handleChange(event)}
                value={state.data.address}
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
                name="city"
                onChange={(event) => handleChange(event)}
                value={state.data.city}
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
                name="phone"
                onChange={(event) => handleChange(event)}
                value={state.data.phone}
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
                name="email"
                onChange={(event) => handleChange(event)}
                value={state.data.email}
              />
            </li>
          </ul>
        </fieldset>
        {state.status === "error" && (
          <p className={styles.errorMessage}>
            Error - all fields are required - some missing
          </p>
        )}
        
        <button type="submit" className={styles.consultationButton}>
        {state.status === "editing" && <p>Request Design consultation</p>}
        {state.status === "submitting" && <p>Submitting...</p>}
        {state.status === "success" && <p>Submitted successfully!</p>}
        </button>
      </form>
    </>
  );
}
