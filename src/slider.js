import React, { useState, useEffect } from "react";
import { IoIosCopy } from "react-icons/io";
import { details } from "./SlideData";
import AmazonLogo from "./Image/Amazon-Logo.png";
import AmazonGray from "./Image/amazon-gray.png";
import BmwLogo from "./Image/bmw.png";
import BmwGray from "./Image/Bmw-gray.png";
import MaerskLogo from "./Image/maersk-logo.png";
import MaerskGray from "./Image/maersk-gray.png";
import TwilioLogo from "./Image/twilio-logo.png";
import TwiliGray from "./Image/twilio-gray.png";
import { FaGreaterThan, FaArrowRight } from "react-icons/fa";
const Slider = () => {
  const [itemImage, setItemImage] = useState(details);
  const [index, setIndex] = useState(0);
  const [read, setRead] = useState(false);
  const [milli, setMilli] = useState(false);
  const [ama, setama] = useState(false);
  const [constr, setconstr] = useState(false);
  const [infra, setinfra] = useState(false);
  useEffect(() => {
    if (index > itemImage.length - 1) {
      setIndex(0);
    }
  }, [index, itemImage]);

  useEffect(() => {
    setMilli(false);
    setama(false);
    setconstr(false);
    setinfra(false);
    const slider = setInterval(() => setIndex((indexno) => indexno + 1), 6000);
    if (index === 0) {
      setMilli(true);
    }
    if (index === 1) {
      setama(true);
    }
    if (index === 2) {
      setconstr(true);
    }
    if (index === 3) {
      setinfra(true);
    }
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="slider">
      <div className="Enterprise">
        <h4>Enterprise reinvention</h4>
        <h1>Bring agility to your enterprise</h1>
        <p>
          Quickly build great payments experiences, improve performance, expand
          into new markets, and engage customers with subscriptions and
          marketplaces. Get expert integration guidance from our professional
          services team and certified partners, and connect Stripe to
          Salesforce, SAP, and more through the Stripe App Marketplace.
        </p>
        <button>
          Explore Stripe for enterprises <FaGreaterThan className="great" />
          <FaArrowRight className="arrows" />
        </button>
      </div>
      <div className="slider-container">
        {itemImage.map(
          (
            {
              head_text,
              head_para,
              body_para,
              body_text,
              footer_text,
              icon1,
              icon2,
              icon1_text,
              icon2_text,
              background,
              nav_img,
              closing_text,
              id,
            },
            currentindex
          ) => {
            let position = "nextslide";
            let linear;
            if (index === currentindex) {
              position = "activeslide";
              if (head_text === "Millions") {
                linear = `to bottom,
                rgba(0, 0, 255, 0.245),
                rgba(0, 0, 255, 0.468),
                rgba(0, 0, 255, 0.626),
                rgba(0, 0, 255, 0.83)`;
              }
              if (head_text === "5+") {
                linear = `to bottom,      
                rgba(255, 166, 0, 0.245),
                rgba(255, 166, 0, 0.468),
                rgba(255, 166, 0, 0.626),
                rgba(255, 166, 0, 0.83)`;
              }
              if (head_text === "130") {
                linear = `to bottom,
                rgba(0, 0, 255, 0.245),
                rgba(0, 0, 255, 0.468),
                rgba(0, 0, 255, 0.626),
                rgba(0, 0, 255, 0.83)`;
              }
              if (head_text === "+5.5%") {
                linear = `  to bottom,
                rgba(220, 20, 60, 0.245),
                rgba(220, 20, 60, 0.468),
                rgba(220, 20, 60, 0.626),
                rgba(220, 20, 60, 0.83) `;
              }
            }
            if (
              currentindex === index - 1 ||
              (index === 0 && currentindex === itemImage.length - 1)
            ) {
              position = "lastslide";
            }
            const backgroundStyle = {
              background: `linear-gradient(${linear}),url(${background})center/cover `,
            };
            const ShowRead = () => {
              setRead(true);
            };
            const removeRead = () => {
              setRead(false);
            };
            return (
              <div
                className={`slide ${position}`}
                key={id}
                onMouseEnter={ShowRead}
                onMouseLeave={removeRead}
              >
                <div className="para">
                  <h3>{head_text}</h3>
                  <p className="para-para">{head_para}</p>
                  <h3>{body_text}</h3>
                  <p className="para-para">{body_para}</p>
                  <h4>{footer_text}</h4>
                  <p>
                    <img src={icon1} alt="" />
                    {icon1_text}
                  </p>
                  <p>
                    <img src={icon2} alt="" />
                    {icon2_text}
                  </p>
                </div>
                <div className="slide-img" style={backgroundStyle}>
                  <div className={`slider-img-nav ${read && "showRead"}`}>
                    <p>
                      <img
                        src={nav_img}
                        alt=""
                        className="slider-img-nav-img"
                      />
                    </p>
                    <p>
                      <IoIosCopy />
                    </p>
                  </div>
                  <div className="slider-img-footer">
                    <h1>{closing_text}</h1>
                    <p>
                      <button
                        className={`slider-img-footer-btn ${
                          read && "slider-img-footer-btn-showbtn"
                        }`}
                      >
                        read more
                        <FaGreaterThan
                          className={`great ${read && "removeicons"}`}
                        />
                        <FaArrowRight
                          className={`arrows ${read && "showicons"}`}
                        />
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="each-img">
        <div onClick={() => setIndex(0)}>
          <p className={`bmwLine ${milli && "showLines"}`}></p>
          <img src={milli ? BmwLogo : BmwGray} alt="" />
        </div>
        <div onClick={() => setIndex(1)}>
          <p className={`amazonLine ${ama && "showLines"}`}></p>
          <img src={ama ? AmazonLogo : AmazonGray} alt="" />
        </div>
        <div onClick={() => setIndex(2)}>
          <p className={`maerskLine ${constr && "showLines"}`}></p>
          <img src={constr ? MaerskLogo : MaerskGray} alt="" />
        </div>
        <div onClick={() => setIndex(3)}>
          <p className={`twilioLine ${infra && "showLines"}`}></p>
          <img src={infra ? TwilioLogo : TwiliGray} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
