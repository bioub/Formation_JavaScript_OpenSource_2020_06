import React from "react";

function Hello({ name = "" }) {
  return (
    <div className="Hello">
      <span>Hello {name}</span>
    </div>
  );
  //   return React.createElement(
  //     "div",
  //     { className: "Hello" },
  //     React.createElement("span", {}, "Hello " + name)
  //   );
  // const divEl = document.createElement('div')
  // divEl.className = 'Hello';
}

export default Hello;
  