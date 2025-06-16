import React from "react";
import { CartItemType } from "../../features/cart/types";
import { calculateDiscountedPrice } from "../../features/cart/utils";

interface Props {
  items: CartItemType[];
}

const CartSummary: React.FC<Props> = ({ items }) => {
  const total = items.reduce((sum, item) => sum + calculateDiscountedPrice(item), 0);
  const before = items.reduce((sum, item) => sum + item.price, 0);
  const discount = before - total;

  return (
    <div className="summary">
      <div className="line">
        <span>Subscription discount</span>
        <span>-${discount.toFixed(2)}</span>
      </div>
      <div className="line">
        <span>Total before</span>
        <span style={{ textDecoration: "line-through" }}>${before.toFixed(2)}</span>
      </div>
      <div className="line total-line">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartSummary;
