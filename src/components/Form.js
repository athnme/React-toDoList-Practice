import React from "react";
import "./Form.css";
import Logo from "../assets/logo.svg";
import addSymbol from "../assets/Add.svg";

function Form() {
  return (
    <header>
      <div className="logo-form-container">
        <a href="./index.html">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <form className="wish-form">
          <label className="form-label">I wish for</label>
          <input className="form-input" type="text" placeholder="a miracle" />
          <button className="form-submit" type="submit">
            <img
              className="add-symbol"
              src={addSymbol}
              alt="submit your wish"
            />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Form;
