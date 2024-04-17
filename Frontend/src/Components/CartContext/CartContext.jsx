import React from "react";
import { useStateContext } from "../../context/useContext";

function CartContext() {
  const { cartItems, totalPrice } = useStateContext();

  return (
    <div className="cart_containor">
      <div className="cart_items">
        {cartItems &&
          cartItems.map((item) => (
            <div key={item._id}>
              <div className="card">
                <img src={item.images} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CartContext;
