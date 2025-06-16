import React, { useState } from "react";
import { CartItemType } from "../../features/cart/types";
import { getDiscountedPrice } from "../../features/cart/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  items: CartItemType[];
}

const MobileCartSummary: React.FC<Props> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce(
    (sum, item) =>
      sum +
      (item.isSubscribed
        ? getDiscountedPrice(item.subscriptionMonths, item.price)
        : item.price),
    0
  );
  const before = items.reduce((sum, item) => sum + item.price, 0);
  const discount = before - total;

  return (
    <div className="mobile-summary">
      <div className="total-row" onClick={() => setIsOpen(!isOpen)}>
        <span className="label">Total</span>
        {!isOpen && (
          <div className="amounts">
            {discount > 0 && (
              <span className="before">${before.toFixed(2)}</span>
            )}
            <span className="total">${total.toFixed(2)}</span>
          </div>
        )}
        <span className="chevron">
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </div>

      {isOpen && (
        <div className="details">
          <p className="note">You can add coupons & gift certificates at checkout</p>
          {discount > 0 && (
            <div className="line">
              <span className="label green">Subscription discount</span>
              <span className="green">- ${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="line total-line">
            <span>Total</span>
            <div>
              {discount > 0 && (
                <span className="before">${before.toFixed(2)}</span>
              )}
              <span className="total">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileCartSummary;
