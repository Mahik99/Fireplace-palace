import React from "react";
import "./Wrapper.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer1/Footer1.jsx";

function Wrapper() {
  return (
    <div className="wrapper">
      <Header></Header>
      <h1>Home page</h1>
      <Footer></Footer>
    </div>
  );
}

export default Wrapper;
