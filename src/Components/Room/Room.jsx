import React from "react";

export default function Room({ type, name, id, color, index }) {
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: `${color}`,
        margin: "10px",
        padding: "10px",
      }}
    >
      {name}
    </div>
  );
}
