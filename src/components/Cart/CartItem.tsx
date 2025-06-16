import React from "react";
import { CartItemType } from "../../features/cart/types";
import { calculateDiscountedPrice } from "../../features/cart/utils";
import { SUBSCRIPTION_DISCOUNTS } from "../../features/cart/constants";
import SubscriptionSelector from "./SubscriptionSelector";

interface Props {
  item: CartItemType;
  onUpdate: (updatedItem: CartItemType) => void;
}

const CartItem: React.FC<Props> = ({ item, onUpdate }) => {
  const price = calculateDiscountedPrice(item);

  const handleChange = (months: number) => {
    onUpdate({ ...item, subscriptionMonths: months });
  };

  return (
    <div className="cart-item">
      <div className="item-header">
        <div className="item-name">{item.name}</div>
        <div className="remove-btn">Remove 🗑</div>
      </div>
      <div className="subscribe-options">
        <label>
          <input
            type="radio"
            checked={item.isSubscribed}
            onChange={() =>
              onUpdate({ ...item, isSubscribed: true })
            }
          />
          🔥 Subscribe & lock in{" "}
          <span className="green">
            {SUBSCRIPTION_DISCOUNTS[item.subscriptionMonths] * 100}%
          </span>{" "}
          off
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={!item.isSubscribed}
            onChange={() =>
              onUpdate({ ...item, isSubscribed: false })
            }
          />
          One-time
        </label>
        {item.isSubscribed && (
          <SubscriptionSelector
            selected={item.subscriptionMonths}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="price">${price.toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
