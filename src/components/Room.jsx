import React from "react";
import { Image } from "react-bootstrap/Image";

export default function Room({ pic, nameOfRoom, urlOfRoom }) {
  const imgStyles = {
    maxHeight: "150px",
  };

  return (
    <div>
      <h1> Navn: {nameOfRoom}</h1>
      <h2>id: {urlOfRoom}</h2>
      <img
        style={imgStyles}
        className="rounded-circle"
        src={pic}
        alt="trailbide"
      />
    </div>
  );
}
