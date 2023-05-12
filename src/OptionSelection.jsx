import React from "react";

const OptionSelection = ({ arrayitems, selectOption }) => {
  return (
    <>
      <div>
        <h1>React AI App</h1>
      </div>
      <div className="grid-main">
        {arrayitems.map((items) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(items.option)}
            >
              <h3>{items.name}</h3>
              <p>{items.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OptionSelection;
