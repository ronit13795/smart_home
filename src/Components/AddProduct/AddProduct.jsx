import React from "react";
import context from "../../context";
import { useContext, useState } from "react";

export default function AddProduct({ setShowAddComponent }) {
  const [product, setProduct] = useState("");
  const { products, setProducts, selectedRoom } = useContext(context);

  const AddProduct = () => {
    const roomId = selectedRoom.id;
    let roomProducts;
    if (!products[roomId]) {
      roomProducts = [{ type: product, on: false }];
    } else {
      roomProducts = [...products[roomId], { type: product, on: false }];
    }
    setProducts({ ...products, [roomId]: roomProducts });
  };
  return (
    <div>
      <select
        onChange={(e) => {
          setProduct(e.target.value);
        }}
      >
        <option value="">בחר מוצר</option>
        <option value="air Conditioner">מזגן</option>
        <option value="lamp"> מנורה</option>
        <option value="stereo system">מערכת סטריאו</option>
        <option value="boilermaker">דוד</option>
      </select>
      <button
        onClick={() => {
          AddProduct();
          setShowAddComponent(false);
        }}
      >
        add product
      </button>
    </div>
  );
}
