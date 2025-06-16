import React from "react";
import { CartItemType } from "../../features/cart/types";
import { getDiscountedPrice } from "../../features/cart/utils";

interface Props {
  items: CartItemType[];
}

const CartSummary: React.FC<Props> = ({ items }) => {
  const total = items.reduce((sum, item) => {
    return sum + (item.isSubscribed
      ? getDiscountedPrice(item.subscriptionMonths, item.price)
      : item.price);
  }, 0);

  const before = items.reduce((sum, item) => sum + item.price, 0);
  const discount = before - total;

  return (
    <div className="summary">
      <p className="note">You can add coupons & gift certificates at checkout</p>

      {discount > 0 && (
        <div className="line dashed">
          <span className="label green">Subscription discount</span>
          <span className="green">- <span className="currency">$</span>{discount.toFixed(2)}</span>
        </div>
      )}

      <div className="line">
        <span className="label">Total</span>
        <div>
           {discount > 0 && (
          <span className="before"><span className="currency">$</span>{before.toFixed(2)}</span>
          )}
          <span className="total"> <span className="currency">$</span>{total.toFixed(2)}</span>
        </div>
      </div>

      <div className="actions">
        <a className="continue" href="#">Continue shopping</a>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartSummary;
