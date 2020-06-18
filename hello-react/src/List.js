import React from "react";

function List({ items = [] }) {
  const itemsJSX = items.map((it) => <li key={it}>{it}</li>);

  return <ul className="List">{itemsJSX}</ul>;
}

export default List;
