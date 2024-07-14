import React from "react";
import Gear from "./Image/geae-icon.png";
import Message from "./Image/message-icon.png";
import { FaGreaterThan, FaArrowRight } from "react-icons/fa";

const Ready = () => {
  return (
    <div className="Ready-section">
      <div className="Ready-slant">
        <div className="Ready">
          <h2>Ready to get started?</h2>
          <p>
            Create an account instantly to get started or contact us to design a
            custom package for your business.
          </p>
          <button className="startnow">
            Start now
            <FaGreaterThan className={`great `} />
            <FaArrowRight className={`arrows `} />
          </button>
          <button className="contact none">
            Contact sales
            <FaGreaterThan className={`great `} />
            <FaArrowRight className={`arrows `} />
          </button>
        </div>
        <div className="Always">
          <img src={Gear} alt="" />
          <h4>Always know what you pay</h4>
          <p>Integrated per-transaction pricing with no hidden fees.</p>
          <button className="built-text-container-button">
            Pricing details
            <FaGreaterThan className={`great `} />
            <FaArrowRight className={`arrows `} />
          </button>
        </div>
        <div className="Always">
          <img src={Message} alt="" />
          <h4>Start your integration</h4>
          <p>Get up and running with Stripe in as little as 10 minutes.</p>
          <button className="built-text-container-button">
            API reference
            <FaGreaterThan className={`great `} />
            <FaArrowRight className={`arrows `} />
          </button>
        </div>
      </div>
      <div className="Rsmall-slant"></div>
      <div className="Rsmaller-slant"></div>
      <div className="Rsmall-slant-bottom"></div>
      <div className="Rsmaller-slant-bottom"></div>
    </div>
  );
};

export default Ready;
