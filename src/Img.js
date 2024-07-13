import React from "react";
import Amazon from "./Image/Amazon-Logo.png";
import Bmw from "./Image/bmw.png";
import Google from "./Image/google.png";
import Marriott from "./Image/marriott.png";
import Salesforce from "./Image/salesforce.png";
import Shopify from "./Image/shopify.png";
import urban from "./Image/urbn.png";
import whatapp from "./Image/WhatsApp-Emblem.png";

const Img = () => {
  return (
    <div className="images">
      <img src={Amazon} alt="Amazon" />
      <img src={Salesforce} alt="Salesforce" />
      <img src={Google} alt="Google" />
      <div className="urbn">
        <img src={urban} alt="urban" />
      </div>
      <img src={Shopify} alt="Shopify" />
      <img src={whatapp} alt="whatapp" />
      <img src={Bmw} alt="Bmw" />
      <img src={Marriott} alt="Marriott" />
    </div>
  );
};

export default Img;
