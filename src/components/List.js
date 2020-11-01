import React from "react";
import "./List.css";
import ListItem from "./ListItem";

function List() {
  return (
    <main>
      <ul className="list">
        <ListItem />
      </ul>
    </main>
  );
}

export default List;
