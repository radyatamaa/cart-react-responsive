import React, { useState } from "react";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import Reviews from "../components/Cart/Reviews";
import { CartItemType } from "../features/cart/types";
import "../styles/cart.scss";

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItemType[]>([
    {
      id: "1",
      name: "Men’s Hormone Medium Test",
      price: 190.56,
      isSubscribed: true,
      subscriptionMonths: 6,
    },
    {
      id: "2",
      name: "Dihydrotestosterone, DHT",
      price: 132.29,
      isSubscribed: false,
      subscriptionMonths: 6,
    },
  ]);

  const updateItem = (updatedItem: CartItemType) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  return (
    <div className="cart-container">
      <Reviews />
      <div className="cart-panel">
        <h2>Your cart</h2>
        {items.map((item) => (
          <CartItem key={item.id} item={item} onUpdate={updateItem} />
        ))}
        <CartSummary items={items} />
      </div>
    </div>
  );
};

export default CartPage;
