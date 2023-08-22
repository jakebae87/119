import "./Order.css";
import React from "react";

const OrderItem = ({ cartItems, onDelete }) => {

  return (
    <tbody>
      {cartItems.map((item) => (
        <tr>
          <td>
            <div className="orderImage">
              <img src={item.img} alt="product1" />
            </div>
          </td>
          <td>
            <span>{item.title}</span>
          </td>
          <td>
            <span>{item.price.toLocaleString()}</span>
          </td>
          <td>
            <span>{item.quantity}</span>
          </td>
          <td>
            <span>{(item.price * item.quantity).toLocaleString()}</span>
          </td>
          <td>
            <button
              type="button"
              id="deleteCartProduct"
              name="deleteCartProduct"
              onClick={() => {
                onDelete(item);
              }}
            >
              삭제
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderItem;
