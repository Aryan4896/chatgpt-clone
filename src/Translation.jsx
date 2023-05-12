import React from "react";

const Translation = ({ getresult, setinput, result }) => {
  return (
    <div className="textarea">
      <textarea
        name=""
        id=""
        cols="90"
        rows="20"
        onChange={(e) => setinput(e.target.value)}
        style={{
          backgroundColor: "#282A3A",
          color: "whitesmoke",
          padding: "10px",
          fontSize: "18px"
        }}
      ></textarea>
      <button className="action-btn" onClick={getresult}>
        GET RESULT
      </button>
      <h3 className="result-text">{result ? result : ""}</h3>
    </div>
  );
};

export default Translation;
