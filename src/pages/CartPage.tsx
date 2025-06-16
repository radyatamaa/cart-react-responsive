import React, { useState, useEffect } from "react";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import Reviews from "../components/Cart/Reviews";
import { CartItemType } from "../features/cart/types";
import "../styles/cart.scss";
import googleIcon from "../assets/google-icon.png";
import starIcon from "../assets/star-reviews.png";
import MobileCartSummary from "../components/Cart/MobileCartSummary";

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

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateItem = (updatedItem: CartItemType) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  return (
    <>
      <div className="page-wrapper">
        {isMobile ? (
          <div className="cart-header-mobile">
            <div className="rating-row">
              <span className="title">Your cart</span>
              <img src={googleIcon} alt="Google" className="google-icon" />
              <span className="score">5.0</span>
              {[...Array(5)].map((_, idx) => (
                <img key={idx} src={starIcon} alt="★" className="star-icon" />
              ))}
              <a href="#" className="review-link">638 reviews</a>
            </div>

            <div className="badge-box">
              Same day labs, next day results
            </div>

            <div className="actions">
              <a className="continue" href="#">Continue shopping</a>
              <button className="checkout-btn">Checkout</button>
            </div>

            {/* ✅ Move MobileCartSummary right after actions */}
            <div className="mobile-summary-container">
              <MobileCartSummary items={items} />
            </div>
          </div>
        ) : (
          <div className="cart-header">
            <div className="left">
              <h2>Your cart</h2>
              <span className="badge">Same day labs, next day results</span>
            </div>
            <div className="right">
              <a href="#" className="continue">Continue shopping</a>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        )}

        <div className="cart-container">
          <Reviews />
          <div className="cart-panel">
            {items.map((item) => (
              <CartItem key={item.id} item={item} onUpdate={updateItem} />
            ))}
            {!isMobile && <CartSummary items={items} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
