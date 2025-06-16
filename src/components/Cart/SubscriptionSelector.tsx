import React from "react";
import { SUBSCRIPTION_DISCOUNTS } from "../../features/cart/constants";

interface Props {
  selected: number;
  onChange: (months: number) => void;
}

const SubscriptionSelector: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div className="frequency-buttons">
      {Object.keys(SUBSCRIPTION_DISCOUNTS).map((months) => (
        <button
          key={months}
          className={selected === +months ? "active" : ""}
          onClick={() => onChange(+months)}
        >
          {months}
        </button>
      ))}
      <span>months</span>
    </div>
  );
};

export default SubscriptionSelector;
