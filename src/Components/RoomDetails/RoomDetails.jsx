import React from "react";
import context from "../../context";
import { useContext } from "react";

export default function RoomDetails() {
  const { selectedRoom, products, setProducts } = useContext(context);
  return (
    <div>
      <h2>name : {selectedRoom.name}</h2>
      <br />
      <h2>type : {selectedRoom.type}</h2> <br />
      <button>add product</button>
    </div>
  );
}
