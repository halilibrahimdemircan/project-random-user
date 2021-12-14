import React from "react";
import "./Image.css";

export default function Image(props) {
  return (
    <div>
      <img src={props.image} alt="" />
    </div>
  );
}
