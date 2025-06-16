import { CartItemType } from "./types";
import { SUBSCRIPTION_DISCOUNTS } from "./constants";

export const calculateDiscountedPrice = (item: CartItemType): number => {
  if (!item.isSubscribed) return item.price;
  const discount = SUBSCRIPTION_DISCOUNTS[item.subscriptionMonths] || 0;
  return +(item.price * (1 - discount)).toFixed(2);
};
