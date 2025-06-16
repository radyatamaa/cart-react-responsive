import React from "react";

const Reviews: React.FC = () => {
  return (
    <div className="review-panel">
      <div className="review-header">
        <span>⭐️⭐️⭐️⭐️⭐️</span> <a href="#">638 reviews</a>
      </div>
      <div className="review-item">
        <div className="review-name">Tristan K.</div>
        <small>a day ago</small>
        <p>Very helpful and insightful.</p>
      </div>
      <div className="review-item">
        <div className="review-name">Jourdan B.</div>
        <small>2 weeks ago</small>
        <p>Quick delivery and accurate result.</p>
      </div>
      <div className="review-item">
        <div className="review-name">Jack L.</div>
        <small>a month ago</small>
        <p>Recommended for those who want clarity.</p>
      </div>
    </div>
  );
};

export default Reviews;
