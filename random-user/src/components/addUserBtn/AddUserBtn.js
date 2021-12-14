import React from "react";
import "./AddUserBtn.css";

export default function AddUserBtn(props) {
  return (
    <div>
      <button className="button" onClick={props.saveNewUser}>
        ADD USER
      </button>
    </div>
  );
}
