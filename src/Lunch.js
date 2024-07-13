import { useRef, React } from "react";
import BuildSvg from "./Image/build_with_stripe.svg";
import ButtonSvg from "./Image/buttons.svg";
import AtlasHome from "./Image/atlas_home_rocketrides_Latin_English__United_States_.png";
import { FaGreaterThan, FaArrowRight } from "react-icons/fa";

const Lunch = () => {
  const Built_container = useRef(null);
  const Built_container1 = useRef(null);
  const Built_container2 = useRef(null);
  // =====First=====
  const Resize = () => {
    Built_container.current.classList.add("Lunch-resize");
  };
  const OriginalSize = () => {
    Built_container.current.classList.remove("Lunch-resize");
  };
  // =======Second======
  const Resize1 = () => {
    Built_container1.current.classList.add("Lunch-resize");
  };
  const OriginalSize1 = () => {
    Built_container1.current.classList.remove("Lunch-resize");
  };
  // ====Third=====
  const Resize2 = () => {
    Built_container2.current.classList.add("Lunch-resize");
  };
  const OriginalSize2 = () => {
    Built_container2.current.classList.remove("Lunch-resize");
  };
  // =====Fourth======

  // ==========
  // =========
  // =========
  return (
    <div className="Lunch-section">
      <div className="Lunch built">
        <h4>Launch with ease</h4>
        <h1>Low- and no-code options for getting started</h1>
        <p>
          If you’d like to use Stripe for your business but don’t have
          developers on staff, no problem. We have a few options depending on
          your needs.
        </p>
      </div>
      <div className="Lunch-img-area">
        <div
          className="Lunch-img-text"
          onMouseEnter={Resize}
          onMouseLeave={OriginalSize}
        >
          <div className="Lunch-img-container" ref={Built_container}>
            <img src={ButtonSvg} alt="" />
          </div>
          <div className="Lunch-text-container">
            <h2>Use a pre-integrated platform</h2>
            <p className="Lunch-p">
              Explore our directory to find out-of-the-box solutions that
              connect with Stripe, such as
              <span className="color high"> Squarespace </span> and
              <span className="color high"> Lightspeed. </span>
            </p>
            <button className="built-text-container-button">
              See directory
              <FaGreaterThan className={`great `} />
              <FaArrowRight className={`arrows `} />
            </button>
          </div>
        </div>
        <div
          className="Lunch-img-text"
          onMouseEnter={Resize1}
          onMouseLeave={OriginalSize1}
        >
          <div className="Lunch-img-container " ref={Built_container1}>
            <img src={BuildSvg} alt="" />
          </div>
          <div className="Lunch-text-container">
            <h2>Build with Stripe-certified experts</h2>
            <p className="Lunch-p">
              Work with a Stripe consulting partner that can integrate and
              deploy Stripe solutions for you.
            </p>
            <button className="built-text-container-button">
              View partners
              <FaGreaterThan className={`great `} />
              <FaArrowRight className={`arrows `} />
            </button>
          </div>
        </div>
        <div
          className="Lunch-img-text"
          onMouseEnter={Resize2}
          onMouseLeave={OriginalSize2}
        >
          <div className="Lunch-img-container " ref={Built_container2}>
            <img src={AtlasHome} alt="" />
          </div>
          <div className="Lunch-text-container">
            <h2>Try our no-code products</h2>
            <p>
              Create an invoice, accept an in-person payment with your phone, or
              share a payment link directly 
              <span className="color high"> from your Dashboard </span> to start
              generating revenue in 
              <span className="color high"> minutes—no code </span> required.
            </p>
            <button className="built-text-container-button">
              Explore no-code
              <FaGreaterThan className={`great `} />
              <FaArrowRight className={`arrows `} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
