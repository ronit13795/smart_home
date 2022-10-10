import React from "react";
import context from "../../context";
import { useContext, useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import Product from "../Product/Product";

export default function RoomDetails() {
  const [showAddComponent, setShowAddComponent] = useState(false);
  const { selectedRoom, products, setProducts } = useContext(context);
  return (
    <div>
      <h2>name : {selectedRoom.name}</h2>
      <br />
      <h2>type : {selectedRoom.type}</h2> <br />
      {products[selectedRoom.id].map((product, index) => {
        return (
          <Product
            key={index}
            index={index}
            on={product.on}
            type={product.type}
          />
        );
      })}
      <button
        onClick={() => {
          setShowAddComponent(true);
        }}
      >
        add product
      </button>
      {showAddComponent && (
        <AddProduct setShowAddComponent={setShowAddComponent} />
      )}
    </div>
  );
}
