import React from 'react';
import ReviewerImg from '../../assets/img/reviewer.png';
import QuotesIcon from '../../assets/icons/quotes.svg';

const ReviewsSection = () => {
  return (
    <div className="reviews_section" id="reviews_section">
      <h3>Reviews</h3>
      <div className="review">
        <div className="review_text">
          <img src={QuotesIcon} alt="quotes img" />
          <h3>«Dream work»</h3>
          <p>
            «Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum»
          </p>
          <a href="#">Read full review</a>
        </div>
        <div className="reviewer">
          <img src={ReviewerImg} alt="Reviewer Islam Kamchybekov" />
          <h4>Islam Kamchybekov</h4>
          <p>Bishkek</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
