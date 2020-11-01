import React from "react";
import "./ListItem.css";

import editSymbol from "../assets/Edit.svg";
import checkSymbol from "../assets/Check.svg";
import cancelSymbol from "../assets/Cancel.svg";

function ListItem() {
  return (
    <li className="wish">
      <p className="wish-info">the end of Covid</p>
      <div className="wish-btn-container">
        <button className="wish-btn">
          <img
            className="wish-btn-symbol edit"
            src={editSymbol}
            alt="edit wish"
          />
        </button>
        <button className="wish-btn">
          <img
            className="wish-btn-symbol check"
            src={checkSymbol}
            alt="check wish"
          />
        </button>
        <button className="wish-btn">
          <img
            className="wish-btn-symbol cancel"
            src={cancelSymbol}
            alt="cancel wish"
          />
        </button>
      </div>
    </li>
  );
}

export default ListItem;
