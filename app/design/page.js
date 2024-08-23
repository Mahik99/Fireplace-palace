"use client";
import Head from "next/head";
import { useReducer, useState } from "react";
import Link from "next/link";
import styles from "./design.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state, // spreads state (so we have both data and status)
        data: { // change  data in spreaded state
          ...state.data, // spreads state data
          [action.payload.fieldName]: action.payload.fieldValue, // only changes user input field
        },
      };


      // CLEARING ERRORS PER FIELD
      case "CLEAR_ERRORS":
        return {
          ...state,
          errors: {
            name: false,
            postcode: false,
            address: false,
            city: false,
            phone: false,
            email: false,
          },
        };
  
      // SETTING ERRORS PER FIELD 
      case "SET_ERRORS":
        return {
          ...state, // exactly how the state is
          errors: { // change the errors 
            ...state.errors, // spread existing errors
            [action.payload.field]: "error" // but add/amend the error that matches the field and add error
          }
        };



    case "ERROR":
      return {
        ...state,
        status: "error",
      };

    case "FORM_SUBMITTING":
      return {
        ...state,
        status: "submitting",
      };

    case "FORM_SUCCESS":
      return {
        ...state,
        status: "success",
      };


      // BLUR SETTING SPECIFIC ERROR
      case "SET_SPECIFIC_ERROR":
        return {
          ...state,
          errors: {
            ...state.errors,
            [action.payload.field]: "error"
          },
        };


      // BLUR CLEAR SPECIFIC ERROR        
        case "CLEAR_SPECIFIC_ERROR":
          return {
            ...state,
            errors: {
              ...state.errors,
              [action.payload.field]: false
            },
          };
        



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
    name: false,
    postcode: false,
    address: false,
    city: false,
    phone: false,
    email:false
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
      });
    }
    console.log(`${event.target.name}: ${event.target.value}`);
  };


const handleBlur = (event) => {
  if (state.data[event.target.name] === "") {
    dispatch({ 
      type: "SET_SPECIFIC_ERROR",
      payload: {
        field: event.target.name
      }
     })
  } else {
    dispatch({
      type: "CLEAR_SPECIFIC_ERROR",
      payload: {
        field: event.target.name
      }
    })
  }

}



  const submitForm = (event) => {
    event.preventDefault();

    dispatch({ type: "CLEAR_ERRORS" }); // incase any from last time have been amended


    const fields = ["name", "postcode", "address", "city", "phone", "email"];

    fields.forEach(field => {
      if (state.data[field] === "") {
        dispatch({
          type: "SET_ERRORS",
          payload: {
            field: field
          }
        });
      }
    });

    // if (state.data.name === "") {
    //   dispatch({ 
    //     type: "SET_ERRORS",
    //     payload: {
    //       field: "name"
    //     }
    //    })
    // }

    // if (state.data.postcode === "") {
    //   dispatch({ 
    //     type: "SET_ERRORS",
    //     payload: {
    //       field: "postcode"
    //     }
    //    })
    // }

    dispatch({
      type: "FORM_SUBMITTING",
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
        dispatch({ type: "ERROR" });
      } else {
        dispatch({
          type: "FORM_SUCCESS",
        });
      }
    }, 2000);

    console.log(state.data);
  };

  return (
    <>
      <Head>
        <title>Bookings</title>
      </Head>

      {state.status === "success" ? (
  <div className={styles.thankYouPage}>
    <h1>Thank you</h1>
    <p>Your request has been submitted successfully, someone will be in touch shortly.</p>
  </div>
) : (
  <>
      <h1 className={styles.formTiltle}>Design Booking</h1>
      <form onSubmit={submitForm} className={styles.form}>
        <fieldset className={styles.fieldset} disabled={state.status === "submitting"}>
          <legend className={styles.formLegend}>Personal Information:</legend>
          <ul className={styles.ul}>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="name">
                Full Name{" "}
              </label>
              <input
              // style={{
              //   border: state.errors.name === "error" ? "1px solid red" : "1px solid black"
              // }}
                className={styles.inputBox}
                type="text"
                id="name"
                name="name"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
                value={state.data.name}
              />
              {state.errors.name === "error" && <p className={styles.fieldError}>Please enter name.</p>}
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="postcode">
                Postcode{" "}
              </label>
              <input
                // style={{
                //   border: state.errors.postcode === "error" ? "1px solid red" : "1px solid black"
                // }}
                className={styles.inputBox}
                type="text"
                id="postcode"
                name="postcode"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
                value={state.data.postcode}
              />
              {state.errors.postcode === "error" && <p className={styles.fieldError}>Please enter postcode.</p>}

            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="address">
                House/ Flat Number And Street Name
              </label>
              <input
              // style={{
              //   border: state.errors.address === "error" ? "1px solid red" : "1px solid black"
              // }}
                className={styles.inputBox}
                type="text"
                id="address"
                name="address"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
                value={state.data.address}
              />
              {state.errors.address === "error" && <p className={styles.fieldError}>Please enter address.</p>}
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="city">
                City{" "}
              </label>
              <input
              // style={{
              //   border: state.errors.city === "error" ? "1px solid red" : "1px solid black"
              // }}
                className={styles.inputBox}
                type="text"
                id="city"
                name="city"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
                value={state.data.city}
              />
              {state.errors.city === "error" && <p className={styles.fieldError}>Please enter city.</p>}
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset} disabled={state.status === "submitting"}>
          <legend className={styles.formLegend}>Contact Information:</legend>
          <ul className={styles.ul}>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="phone_number">
                Phone Number{" "}
              </label>
              <input
              // style={{
              //   border: state.errors.phone === "error" ? "1px solid red" : "1px solid black"
              // }}
                className={styles.inputBox}
                type="tel"
                id="phone_number"
                name="phone"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
                value={state.data.phone}
              />
              {state.errors.phone === "error" && <p className={styles.fieldError}>Please enter phone.</p>}
            </li>
            
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="mail">
                Email{" "}
              </label>
              <input
              // style={{
              //   border: state.errors.email === "error" ? "1px solid red" : "1px solid black"
              // }}
                className={styles.inputBox}
                type="email"
                id="mail"
                name="email"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
                value={state.data.email}
              />
              {state.errors.email === "error" && <p className={styles.fieldError}>Please enter email.</p>}
            </li>
          </ul>
        </fieldset>
        {/* {state.status === "error" && (
          <p className={styles.errorMessage}>
            Please fill in missing fields.
          </p>
        )} */}

        <button type="submit" className={styles.consultationButton} disabled={state.status === "submitting" || 
          ( state.errors.name === "error" ||
          state.errors.postcode === "error" ||
          state.errors.address === "error" ||
          state.errors.city === "error" ||
          state.errors.phone === "error" ||
          state.errors.email === "error" )
         }>
          {(state.status === "editing" || state.status === "error") && <p>Request design consultation</p>}
          {state.status === "submitting" && <p>Submitting...</p>}
        </button>
      </form>
      </>
)}

    </>
    
  )
}
