import React from "react";
import "./AddUserBtn.css";

export default function AddUserBtn(props) {
  return (
    <div className="buttondiv">
      <button className="button" onClick={props.addUser}>
        ADD USER
      </button>
    </div>
  );
}
