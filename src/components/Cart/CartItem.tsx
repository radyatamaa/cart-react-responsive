import React from "react";
import { CartItemType } from "../../features/cart/types";
import { calculateDiscountedPrice } from "../../features/cart/utils";
import { SUBSCRIPTION_DISCOUNTS } from "../../features/cart/constants";
import removeIcon from "../../assets/icon-trash.png";
import infoIcon from "../../assets/icon-info.png";
import arrowIcon from "../../assets/icon-arrow-left.png";

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
        <div className="remove-btn">
          <span>Remove</span>
          <img src={removeIcon} alt="Remove" className="icon-trash" />
        </div>
      </div>

      <div className="subscribe-block">
        <label className="radio-row">
          <input
            type="radio"
            checked={item.isSubscribed}
            onChange={() => onUpdate({ ...item, isSubscribed: true })}
          />
          <span className="label-content">
            🔥 <span className="label-bold">Subscribe & lock in</span>
            <span className="badge-discount">
              {SUBSCRIPTION_DISCOUNTS[item.subscriptionMonths] * 100}%
            </span>{" "}
          off
            <img src={infoIcon} alt="info" className="icon-inline info" />
          </span>
          <span className="price"><span className="currency">$</span>{price.toFixed(2)}</span>
        </label>

        {item.isSubscribed && (
        <div className="subscription-period">
            <img src={arrowIcon} alt="arrow" className="arrow-icon" />
            <span className="arrow-label">Test every</span>
            <div className="month-buttons">
            {[1, 3, 6, 12].map((month) => (
                <button
                key={month}
                className={month === item.subscriptionMonths ? "active" : ""}
                onClick={() => handleChange(month)}
                >
                {month}
                </button>
            ))}
            </div>
            <span className="month-unit">months</span>
        </div>
        )}


        <label className="radio-row">
          <input
            type="radio"
            checked={!item.isSubscribed}
            onChange={() => onUpdate({ ...item, isSubscribed: false })}
          />
          <span className="label-content">One-time</span>
          <span className="price-black"><span className="currency">$</span>{item.price.toFixed(2)}</span>
        </label>
      </div>
    </div>
  );
};

export default CartItem;
