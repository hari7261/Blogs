import React from 'react';
import './style.css';

const Welcomepage = () => {
  return (
    <div className="main-container flex h-[555px] w-[1220px] m-[7px]">
      {/* Left section for the quote */}
      <div className="left-container">
        <h1 className="quote-text font-semibold">Dive into Blogs, Fuel your fire, Grow Higher and Higher!</h1>
      </div>

      {/* Right section for articles */}
      <div className="right-container">
        <div className="article-grid">
          <div className="article-placeholder article-1">
            <img src="https://marketplace.canva.com/EAFqeW_vK7Y/1/0/900w/canva-cream-and-beige-clean-minimalist-instagram-story-6KS555pvIWA.jpg" alt="Article 1" />
          </div>
          <div className="article-placeholder article-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUt8IPe_AYbSM0__R6-8Wbktgj_J8gTufF8Gvx_yoC6Gy_wZbcE8zf8A3t0aSaP42dQ6E&usqp=CAU" alt="Article 2" />
          </div>
          <div className="article-placeholder article-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpm1cD4TcQut5xfkYZGZKBEqrv3zfoOJZ0TQ&s" alt="Article 3" />
          </div>
          <div className="article-placeholder article-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy78l3-fAskgfWTVzhB7dSKNS8100SSglG5g6zIDhdFL9Q0Y55oY0Wc5nXaEpdmciJdVU&usqp=CAU" alt="Article 4" />
          </div>
          <div className="article-placeholder article-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9d1qfqxv3yEb-A_j4gFAbryDDxZFifEq7w&s" alt="Article 5" />
          </div>
          <div className="article-placeholder article-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGhCZfWRcapBzz0r8koT7M35CsRRDSky7ifKrNLqZViZE2W-Gp-v_ydjzzKg-AACh0Yo&usqp=CAU" alt="Article 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
