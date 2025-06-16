import { CartItemType } from "./types";
import { SUBSCRIPTION_DISCOUNTS } from "./constants";

export function getDiscountedPrice(months: number, price: number): number {
  const discountRate = SUBSCRIPTION_DISCOUNTS[months] || 0;
  return parseFloat((price * (1 - discountRate)).toFixed(2));
}
