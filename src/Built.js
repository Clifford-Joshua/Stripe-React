import { useRef, React } from "react";
import AtlasIcon from "./Image/Atlas-icon-text.png";
import PaymentIcon from "./Image/Payment-icon-text.png";
import CashoutIcon from "./Image/Checkout-icon-text.png";
import InvocingIcon from "./Image/invoicing-icon-text.png";
import AtlasHome from "./Image/atlas_home_rocketrides_Latin_English__United_States_.png";
import { FaGreaterThan, FaArrowRight } from "react-icons/fa";

const Built = () => {
  const Built_container = useRef(null);
  const Built_container1 = useRef(null);
  const Built_container2 = useRef(null);
  const Built_container3 = useRef(null);
  // =====First=====
  const Resize = () => {
    Built_container.current.style.background = `linear-gradient(
    to right,
    #f6f9fc,
    rgba(255, 166, 0, 0.695),
    rgba(255, 166, 0, 0.792))`;
    Built_container.current.classList.add("resize");
  };
  const OriginalSize = () => {
    Built_container.current.style.background = ``;
    Built_container.current.classList.remove("resize");
  };
  // =======Second======
  const Resize1 = () => {
    Built_container1.current.style.background = `linear-gradient(to right, #f6f9fc,rgba(0, 0, 255, 0.338),rgba(0, 0, 255, 0.77))`;
    Built_container1.current.classList.add("resize");
  };
  const OriginalSize1 = () => {
    Built_container1.current.style.background = ``;
    Built_container1.current.classList.remove("resize");
  };
  // ====Third=====
  const Resize2 = () => {
    Built_container2.current.style.background = `linear-gradient(to right, #f6f9fc,rgba(40, 255, 25, 0.338),rgba(40, 255, 25, 0.77))`;
    Built_container2.current.classList.add("resize");
  };
  const OriginalSize2 = () => {
    Built_container2.current.style.background = ``;
    Built_container2.current.classList.remove("resize");
  };
  // =====Fourth======
  const Resize3 = () => {
    Built_container3.current.style.background = `linear-gradient(to right, #f6f9fc,rgba(200, 80, 25, 0.338),rgba(200, 80, 25, 0.77))`;
    Built_container3.current.classList.add("resize");
  };
  const OriginalSize3 = () => {
    Built_container3.current.style.background = ``;
    Built_container3.current.classList.remove("resize");
  };
  // ==========
  // =========
  // =========
  return (
    <div className="Built-section">
      <div className="built">
        <h4>Built for growth</h4>
        <h1>Take your startup farther, faster</h1>
        <p>
          Startups build on Stripe to launch faster, adapt as they grow, and
          automate workflows to do more with less. Build your own API-based
          integration or use our low- to no-code solutions, which are simple
          enough for easy implementation and powerful enough to scale as fast
          and as far as you need.
        </p>
      </div>
      <div className="built-img-area">
        <div className="built-left-side">
          <div
            className="built-img-text"
            onMouseEnter={Resize}
            onMouseLeave={OriginalSize}
          >
            <div className="built-img-container" ref={Built_container}>
              <img src={AtlasHome} alt="" />
            </div>
            <div className="built-text-container">
              <img src={AtlasIcon} alt="" />
              <h2>Incorporate your company</h2>
              <p>
                Form a legal entity, issue stock, and start accepting payments
              </p>
              <button className="built-text-container-button">
                Learn about Atlas
                <FaGreaterThan className={`great `} />
                <FaArrowRight className={`arrows `} />
              </button>
            </div>
          </div>
          <div
            className="built-img-text"
            onMouseEnter={Resize1}
            onMouseLeave={OriginalSize1}
          >
            <div className="built-img-container" ref={Built_container1}>
              <img src={AtlasHome} alt="" />
            </div>
            <div className="built-text-container">
              <img src={CashoutIcon} alt="" />
              <h2>Sell to consumers</h2>
              <p>
                Launch a B2C business with a prebuilt payment page that’s
                optimized for conversion.
              </p>
              <button className="built-text-container-button">
                start about Checkout
                <FaGreaterThan className={`great `} />
                <FaArrowRight className={`arrows `} />
              </button>
            </div>
          </div>
        </div>
        <div className="built-right-side">
          <div
            className="built-img-text"
            onMouseEnter={Resize2}
            onMouseLeave={OriginalSize2}
          >
            <div className="built-img-container" ref={Built_container2}>
              <img src={AtlasHome} alt="" />
            </div>
            <div className="built-text-container">
              <img src={PaymentIcon} alt="" />
              <h2>Validate your idea</h2>
              <p>
                Test your product idea by launching payments with little to no
                code.
              </p>
              <button className="built-text-container-button">
                Try Payment Links
                <FaGreaterThan className={`great `} />
                <FaArrowRight className={`arrows `} />
              </button>
            </div>
          </div>
          <div
            className="built-img-text"
            onMouseEnter={Resize3}
            onMouseLeave={OriginalSize3}
          >
            <div className="built-img-container" ref={Built_container3}>
              <img src={AtlasHome} alt="" />
            </div>
            <div className="built-text-container">
              <img src={InvocingIcon} alt="" />
              <h2>Sell to businesses</h2>
              <p>
                Launch a B2B business and collect one-time or recurring payments
                from customers.
              </p>
              <button className="built-text-container-button">
                Explore Invoicing
                <FaGreaterThan className={`great `} />
                <FaArrowRight className={`arrows `} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
