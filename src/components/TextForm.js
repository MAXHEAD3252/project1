import React, { useState } from "react";

export default function TextForm(props) {
  const handleClearClick = () => {
    let newText = "";
    seText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    seText(newText.join(" "));
  };
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    seText(newText);
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    seText(newText);
  };
  const handleOnChange = (event) => {
    // how to handle events
    //  console.log("On Change");
    seText(event.target.value);
  };
  const [text, seText] = useState(""); // text is a value and setText is the function to change the state
  // text = "gcyisdcvds"; // wrong way to change the state
  // setText("new text"); // correct way to change the state

  // because of value = {text} the value in the textarea cannot be changes
  // so we will use this event object to change by onchange function
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#1D2A35" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary m-3" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary m-3" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary m-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary m-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary m-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something To Preview Here"}</p>
      </div>
    </>
  );
}
