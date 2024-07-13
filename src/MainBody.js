import React from "react";
import { FaGreaterThan, FaArrowRight } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const MainBody = () => {
  return (
    <>
      <div className="color-changer"></div>
      <div className="white-diameter"></div>
      <div className="welcomePage">
        <div className="text-container">
          <div className="stripedName">
            <h5>Stripe named a Leader in the IDC MarketScape</h5>
            <LuDot className="dot" />
            <a href="#">
              <h5>Read more</h5>
              <FaGreaterThan className="great" />
              <FaArrowRight className="arrows" />
            </a>
          </div>
          <h1>Financial infrastructure to grow your revenue</h1>
          <p>
            Join the millions of companies of all sizes that use Stripe to
            accept payments online and in person, embed financial services,
            power custom revenue models, and build a more profitable business.
          </p>
          <div className="linkender">
            <a href="#" className="startnow">
              Start now
              <FaGreaterThan className="great" />
              <FaArrowRight className="arrows" />
            </a>
            <a href="#" className="contact">
              Contact sales
              <FaGreaterThan className="great" />
              <FaArrowRight className="arrows" />
            </a>
          </div>
        </div>
        <div className="img-container"></div>
      </div>
    </>
  );
};

export default MainBody;
