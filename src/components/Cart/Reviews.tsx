import React from "react";
import googleLogo from "../../assets/google-icon.png";
import starImage from "../../assets/star-reviews.png";

const Reviews: React.FC = () => {
  return (
    <div className="review-panel">
      <div className="review-header">
        <img src={googleLogo} alt="Google" className="google-icon" />
        <span className="rating-score">5.0</span>
       <div className="stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <img key={i} src={starImage} alt="Star" className="star-icon" />
          ))}
        </div>
        <a href="#" className="reviews-count">638 reviews</a>
      </div>

      <div className="review-item">
  <div className="review-meta">
    <div className="review-name">Tristan K.</div>
    <small className="review-time">a day ago</small>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non massa lacus...</p>
</div>

<div className="review-item">
  <div className="review-meta">
    <div className="review-name">Jourdan B.</div>
    <small className="review-time">2 weeks ago</small>
  </div>
  <p>Suspendisse vestibulum risus dignissim, laoreet nisi gravida, varius libero...</p>
</div>

<div className="review-item">
  <div className="review-meta">
    <div className="review-name">Jack L.</div>
    <small className="review-time">a month ago</small>
  </div>
  <p>Donec gravida erat eros, et egestas lorem malesuada ut. Duis non tellus tempus...</p>
</div>


      <a href="#" className="read-more">Read reviews</a>
    </div>
  );
};

export default Reviews;
