import React from "react";
import "./NewUserBtn.css";

export default function NewUserBtn(props) {
  return (
    <div className="buttondiv">
      <button className="button" onClick={props.getNewUser}>
        NEW USER
      </button>
    </div>
  );
}
