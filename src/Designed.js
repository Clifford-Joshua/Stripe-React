import React from "react";
import { FaGreaterThan, FaArrowRight } from "react-icons/fa";
import Jsimage from "./Image/code1.png";
import Gear from "./Image/geae-icon.png";
import Message from "./Image/message-icon.png";
import Dots from "./Image/dots-icon.png";
import Hexa from "./Image/hexa-icon.png";

const Designed = () => {
  return (
    <section className="DFD-Page">
      <div className="main_slant">
        <div className="main-slant-body">
          <div className="Dfd-TEXT">
            <h4>Designed for developers</h4>
            <h1>Ship more quickly with powerful and easy-to-use APIs</h1>
            <p>
              Save engineering time with unified payments functionality. We
              obsess over the maze of gateways, payments rails, and financial
              institutions that make up the global economic landscape so that
              your teams can build what you need on one platform.
            </p>
            <button>
              Read the doc <FaGreaterThan className={`great `} />
              <FaArrowRight className={`arrows `} />
            </button>
          </div>
          <div className="code-video">
            <img src={Jsimage} alt="" />
          </div>
        </div>
        <div className="main-slant-footer">
          <div>
            <img src={Gear} alt="" />
            <h4>Use Stripe with your stack</h4>
            <p>
              We offer client and server libraries in everything from React and
              PHP to .NET and iOS.
            </p>
            <button>
              See libraries <FaGreaterThan className={`great `} />
              <FaArrowRight className={`arrows `} />
            </button>
          </div>
          <div>
            <img src={Dots} alt="" />
            <h4>Try no-code options</h4>
            <p>
              Customize and deploy payments interfaces directly from the Stripe
              Dashboard.
            </p>
            <button>
              Explore no-code <FaGreaterThan className={`great `} />
              <FaArrowRight className={`arrows `} />
            </button>
          </div>
          <div>
            <img src={Hexa} alt="" />
            <h4>Explore prebuilt integrations</h4>
            <p>
              Connect Stripe to over a hundred tools including Adobe,
              Salesforce, and Xero.
            </p>
            <button>
              Browse App Marketplace <FaGreaterThan className={`great `} />
              <FaArrowRight className={`arrows `} />
            </button>
          </div>
          <div>
            <img src={Message} alt="" />
            <h4>Build on Stripe Apps</h4>
            <p>
              Create an app just for your team or for the millions of businesses
              on Stripe.
            </p>
            <button>
              Learn about Apps <FaGreaterThan className={`great `} />
              <FaArrowRight className={`arrows `} />
            </button>
          </div>
        </div>
      </div>
      {/* =========slant  div====== */}
      <div className="small-slant"></div>
      <div className="smaller-slant"></div>
      <div className="small-slant-bottom"></div>
      <div className="smaller-slant-bottom"></div>
    </section>
  );
};

export default Designed;
