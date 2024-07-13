import React, { useEffect, useState, useRef } from "react";
import Payment from "./Image/Payment.png";
import Billing from "./Image/Billing.png";
import Issuing from "./Image/Issuing.png";
import Connect from "./Image/Connect.png";
import { FaGreaterThan, FaArrowRight } from "react-icons/fa";
import Video from "./video/istockphoto.mp4";
import Author2 from "./Image/Authorization 2.png";
import Capital2 from "./Image/Capital 2.png";
import Billing2 from "./Image/Billing 2.png";
import Connect2 from "./Image/Connect 2.png";
import Data2 from "./Image/Data 2.png";
import Invoicing2 from "./Image/Invocing 2.png";
import Issuing2 from "./Image/Issuing 2.png";
import Payment2 from "./Image/payment 2.png";
import Radar2 from "./Image/Radar 2.png";
import Revenue2 from "./Image/Revenue 2.png";
import Sigma2 from "./Image/Sigma 2.png";
import Tax2 from "./Image/Tax 2.png";
import Terminal2 from "./Image/Terminal 2.png";
import Treasury2 from "./Image/Treasury 2.png";
import Diam from "./Image/Diamond.png";
import Author from "./Image/Authorization-removebg-preview.png";
import Capitalr from "./Image/Capital-removebg-preview.png";
import Billingr from "./Image/Billing-removebg-preview.png";
import Data from "./Image/Data-removebg-preview.png";
import Invoicing from "./Image/Invoicing-removebg-preview.png";
import Paymentr from "./Image/Payment-removebg-preview.png";
import Radar from "./Image/Radar-removebg-preview.png";
import Sigma from "./Image/Sigma-removebg-preview.png";
import Terminal from "./Image/Terminal-removebg-preview.png";
import ChipperImg from "./Image/chipper-img.webp";
import Chippy from "./Image/chipper-img2.webp";
import fintech from "./Image/Fintech.jpg";
const BodyCo = () => {
  const [red, setRed] = useState(true);
  const [blue, setBlue] = useState(false);
  const [green, setGreen] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [indigo, setIndigo] = useState(false);
  const [fixed, setFixed] = useState(false);

  // =====Icons======
  const [capitalIcon, setCapitalIcon] = useState(false);
  const [bill, setBill] = useState(false);
  const [Auth, setAuth] = useState(false);
  const [Dat, setDat] = useState(false);
  const [Rada, setRad] = useState(false);
  const [Sigm, setSigm] = useState(false);
  const [invoic, setInvoic] = useState(false);
  const [termin, setTermin] = useState(false);
  const [pay, setPay] = useState(false);
  const [term, setTerm] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const Height = window.scrollY;
      setFixed(false);
      setRed(true);
      if (Height >= 1095) {
        setFixed(true);
      }
      if (Height >= 1776) {
        setRed(false);
        setBlue(true);
      }
      if (Height >= 2472) {
        setBlue(false);
        setGreen(true);
      }
      if (Height >= 3164) {
        setGreen(false);
        setYellow(true);
      }
      if (Height >= 3857) {
        setFixed(false);
        setYellow(false);
        setIndigo(true);
      }
    });
  }, []);

  useEffect(() => {
    // first
    const timeOutCap = setTimeout(
      () =>
        setInterval(() => {
          setCapitalIcon((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 5000),
      1000
    );
    const timeOutBill = setTimeout(
      () =>
        setInterval(() => {
          setBill((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 5000),
      2000
    );
    // second
    const timeOutAuth = setTimeout(
      () =>
        setInterval(() => {
          setAuth((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 7000),
      5000
    );
    const timeOutData = setTimeout(
      () =>
        setInterval(() => {
          setDat((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 7000),
      6000
    );
    // =====Third
    const timeOutRada = setTimeout(
      () =>
        setInterval(() => {
          setRad((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 9000),
      9000
    );
    const timeOutSigma = setTimeout(
      () =>
        setInterval(() => {
          setSigm((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 9000),
      10000
    );
    // =====fourth====

    const timeOutInvoice = setTimeout(
      () =>
        setInterval(() => {
          setInvoic((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 11000),
      12000
    );
    const timeOutTerminal = setTimeout(
      () =>
        setInterval(() => {
          setTermin((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 11000),
      13000
    );
    // ======Last===
    const timeOutPay = setTimeout(
      () =>
        setInterval(() => {
          setPay((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 13000),
      15000
    );
    const timeOutTerm = setTimeout(
      () =>
        setInterval(() => {
          setTerm((preCapitalIcon) => {
            let newIcons = !preCapitalIcon;
            return newIcons;
          });
        }, 13000),
      16000
    );
    return () => {
      clearInterval(timeOutCap);
      clearInterval(timeOutBill);
      clearInterval(timeOutAuth);
      clearInterval(timeOutData);
      clearInterval(timeOutRada);
      clearInterval(timeOutSigma);
      clearInterval(timeOutInvoice);
      clearInterval(timeOutTerminal);
      clearInterval(timeOutPay);
      clearInterval(timeOutTerm);
    };
  }, []);

  return (
    <section className="second-section">
      <div className="second-section-holder">
        <div className="static">
          <div className="Modular">
            <h3>Modular solutions</h3>
            <h2>A fully integrated suite of financial and payments products</h2>
            <p>
              Reduce costs, grow revenue, and run your business more efficiently
              on a fully integrated platform. Use Stripe to handle all of your
              payments-related needs, manage revenue operations, and launch (or
              invent) new business models.
            </p>
          </div>
          <div className="Payments">
            <aside className="payment-head">
              <img src={Payment} alt="payment-icon" />
              <h3>Payments</h3>
            </aside>
            <h2>Accept and optimize payments, globally</h2>
            <p>
              Increase authorization rates, optimize your checkout conversion,
              and offer local payment methods in every market.
            </p>
            <p>
              <a href="#" className="startnow">
                Start with payment
                <FaGreaterThan className="great" />
                <FaArrowRight className="arrows" />
              </a>
            </p>
            <article>
              <h3 className="see">see also</h3>
              <h4>
                <a href="#" className="special">
                  Tax{" "}
                </a>
                for automating sales tax and VAT
              </h4>
              <h4>
                <a href="#" className="special">
                  Radar{" "}
                </a>
                for fraud prevention and management
              </h4>
              <h4>
                <a href="#" className="special">
                  Terminal{" "}
                </a>
                for custom in-person payments
              </h4>
            </article>
          </div>
          <div className="Payments">
            <aside className="payment-head">
              <img src={Billing} alt="payment-icon" />
              <h3>Billing</h3>
            </aside>
            <h2>Capture recurring revenue</h2>
            <p>
              Support recurring business models, minimize churn, and automate
              finance operations.
            </p>
            <p>
              <a href="#" className="startnow">
                Start with Billing
                <FaGreaterThan className="great" />
                <FaArrowRight className="arrows" />
              </a>
            </p>
            <article>
              <h3 className="see">see also</h3>
              <h4>
                <a href="#" className="special">
                  Invoicing
                </a>{" "}
                for invoice creation, collection, and tracking
              </h4>
              <h4>
                <a href="#" className="special">
                  Revenue Recognition
                </a>{" "}
                for streamlined accrual accounting
              </h4>
              <h4>
                <a href="#" className="special">
                  Sigma
                </a>{" "}
                for custom revenue reports
              </h4>
            </article>
          </div>
          <div className="Payments">
            <aside className="payment-head">
              <img src={Connect} alt="payment-icon" />
              <h3>Connect</h3>
            </aside>
            <h2>Set up multiparty payments and payouts</h2>
            <p>
              Integrate payments into your platform or marketplace for
              end-to-end payments experiences.
            </p>
            <p>
              <a href="#" className="startnow">
                Start with connect
                <FaGreaterThan className="great" />
                <FaArrowRight className="arrows" />
              </a>
            </p>
            <article>
              <h3 className="see">see also</h3>
              <h4>
                <a href="#" className="special">
                  Terminal
                </a>{" "}
                for custom in-person payments
              </h4>
              <h4>
                <a href="#" className="special">
                  Instant Payouts
                </a>{" "}
                for fast payments to users
              </h4>
              <h4>
                <a href="#" className="special">
                  Payment Elements
                </a>{" "}
                for customizable UIs
              </h4>
            </article>
          </div>
          <div className="Payments">
            <aside className="payment-head">
              <img src={Issuing} alt="payment-icon" />
              <h3>Issuing</h3>
            </aside>
            <h2>Build a fintech offering with banking-as-a-service</h2>
            <p>
              Launch, manage, and scale a commercial card program without any
              setup fees.
            </p>
            <p>
              <a href="#" className="startnow">
                Start with Issuing
                <FaGreaterThan className="great" />
                <FaArrowRight className="arrows" />
              </a>
            </p>
            <article>
              <h3 className="see">see also</h3>
              <h4>
                <a href="#" className="special">
                  Treasury
                </a>{" "}
                for financial accounts
              </h4>
              <h4>
                <a href="#" className="special">
                  Capital
                </a>{" "}
                for offering fast, flexible financing
              </h4>
              <h4>
                <a href="#" className="special">
                  Connect
                </a>{" "}
                for powering platform payments
              </h4>
            </article>
          </div>
        </div>
        <div className={`sticky ${fixed && "stop"}`}>
          {red && (
            <div className="red">
              <div className="icons-container">
                <div></div>
                <div></div>
                <div className={`icon-size ${Auth && "zoom"}`}>
                  <img src={`${Auth ? Author : Author2}`} alt="" />
                  {Auth && <h6 className="placetext">Author</h6>}
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`icon-size ${capitalIcon && "zoom"}`}>
                  <img
                    src={`${capitalIcon ? Capitalr : Capital2}`}
                    alt="Capital"
                  />
                  {capitalIcon && <h6 className="placetext">Capital</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size ${bill && "zoom"}`}>
                  <img src={`${bill ? Billingr : Billing2}`} alt="" />
                  {bill && <h6 className="placetext">Billings</h6>}
                </div>
                <div className={`icon-size ${invoic && "zoom"}`}>
                  <img src={`${invoic ? Invoicing : Invoicing2}`} alt="" />
                  {invoic && <h6 className="placetext">Invoicing</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size`}>
                  <img src={Connect2} alt="" />
                </div>
                <div className={`icon-size ${Dat && "zoom"}`}>
                  <img src={`${Dat ? Data : Data2}`} alt="" />
                  {Dat && <h6 className="placetext">Data</h6>}
                </div>
                <div className={`icon-size`}>
                  <img src={Issuing2} alt="" />
                </div>
                <div></div>
                <div className={`icon-size ${pay && "zoom"}`}>
                  <img src={pay ? Paymentr : Payment2} alt="" />
                  {pay && <h6 className="placetext">Payment</h6>}
                </div>
                <div className={`icon-size ${Rada && "zoom"}`}>
                  <img src={`${Rada ? Radar : Radar2}`} alt="" />
                  {Rada && <h6 className="placetext">Radar</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size `}>
                  <img src={Revenue2} alt="" />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`icon-size ${Sigm && "zoom"}`}>
                  <img src={`${Sigm ? Sigma : Sigma2}`} alt="" />
                  {Sigm && <h6 className="placetext">Sigma</h6>}
                </div>
                <div className={`icon-size `}>
                  <img src={Tax2} alt="" />
                </div>
                <div className={`icon-size ${termin && "zoom"}`}>
                  <img
                    src={`${termin || term ? Terminal : Terminal2}`}
                    alt=""
                  />
                  {termin && <h6 className="placetext">Terminal</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size`}>
                  <img src={Treasury2} alt="" />
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size `}>
                  <img src={Diam} alt="" />
                </div>
                <div className={`icon-size `}>
                  <img src={Diam} alt="" />
                </div>
                {/* ===lines ===== */}
                <p className={`straight-line ${capitalIcon && "Anime"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`downward ${Dat && "showdown"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`upward ${Auth && " showup"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`left-straight ${invoic && "showleft"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`curve ${Rada && "showcurve"}`}></p>
                <p className={`left-straight-curve ${pay && "leftCurve"}`}></p>
              </div>
            </div>
          )}
          {blue && (
            <div className="blue">
              <div className="icons-container">
                <div></div>
                <div></div>
                <div className={`icon-size ${Auth && "zoom"}`}>
                  <img src={`${Auth ? Author : Author2}`} alt="" />
                  {Auth && <h6 className="placetext">Author</h6>}
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`icon-size ${capitalIcon && "zoom"}`}>
                  <img
                    src={`${capitalIcon ? Capitalr : Capital2}`}
                    alt="Capital"
                  />
                  {capitalIcon && <h6 className="placetext">Capital</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size ${bill && "zoom"}`}>
                  <img src={`${bill ? Billingr : Billing2}`} alt="" />
                  {bill && <h6 className="placetext">Billings</h6>}
                </div>
                <div className={`icon-size ${invoic && "zoom"}`}>
                  <img src={`${invoic ? Invoicing : Invoicing2}`} alt="" />
                  {invoic && <h6 className="placetext">Invoicing</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size`}>
                  <img src={Connect2} alt="" />
                </div>
                <div className={`icon-size ${Dat && "zoom"}`}>
                  <img src={`${Dat ? Data : Data2}`} alt="" />
                  {Dat && <h6 className="placetext">Data</h6>}
                </div>
                <div className={`icon-size`}>
                  <img src={Issuing2} alt="" />
                </div>
                <div></div>
                <div className={`icon-size ${pay && "zoom"}`}>
                  <img src={pay ? Paymentr : Payment2} alt="" />
                  {pay && <h6 className="placetext">Payment</h6>}
                </div>
                <div className={`icon-size ${Rada && "zoom"}`}>
                  <img src={`${Rada ? Radar : Radar2}`} alt="" />
                  {Rada && <h6 className="placetext">Radar</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size `}>
                  <img src={Revenue2} alt="" />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`icon-size ${Sigm && "zoom"}`}>
                  <img src={`${Sigm ? Sigma : Sigma2}`} alt="" />
                  {Sigm && <h6 className="placetext">Sigma</h6>}
                </div>
                <div className={`icon-size `}>
                  <img src={Tax2} alt="" />
                </div>
                <div className={`icon-size ${termin && "zoom"}`}>
                  <img
                    src={`${termin || term ? Terminal : Terminal2}`}
                    alt=""
                  />
                  {termin && <h6 className="placetext">Terminal</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size`}>
                  <img src={Treasury2} alt="" />
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size `}>
                  <img src={Diam} alt="" />
                </div>
                <div className={`icon-size `}>
                  <img src={Diam} alt="" />
                </div>
                {/* ===lines ===== */}
                <p className={`straight-line ${capitalIcon && "Anime"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`downward ${Dat && "showdown"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`upward ${Auth && " showup"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`left-straight ${invoic && "showleft"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`curve ${Rada && "showcurve"}`}></p>
                <p className={`left-straight-curve ${pay && "leftCurve"}`}></p>
              </div>
              <div className="blue-img">
                <img src={ChipperImg} alt="" />
              </div>
            </div>
          )}
          {green && (
            <div className="green">
              <div className="icons-container">
                <div></div>
                <div></div>
                <div className={`icon-size ${Auth && "zoom"}`}>
                  <img src={`${Auth ? Author : Author2}`} alt="" />
                  {Auth && <h6 className="placetext">Author</h6>}
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`icon-size ${capitalIcon && "zoom"}`}>
                  <img
                    src={`${capitalIcon ? Capitalr : Capital2}`}
                    alt="Capital"
                  />
                  {capitalIcon && <h6 className="placetext">Capital</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size ${bill && "zoom"}`}>
                  <img src={`${bill ? Billingr : Billing2}`} alt="" />
                  {bill && <h6 className="placetext">Billings</h6>}
                </div>
                <div className={`icon-size ${invoic && "zoom"}`}>
                  <img src={`${invoic ? Invoicing : Invoicing2}`} alt="" />
                  {invoic && <h6 className="placetext">Invoicing</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size`}>
                  <img src={Connect2} alt="" />
                </div>
                <div className={`icon-size ${Dat && "zoom"}`}>
                  <img src={`${Dat ? Data : Data2}`} alt="" />
                  {Dat && <h6 className="placetext">Data</h6>}
                </div>
                <div className={`icon-size`}>
                  <img src={Issuing2} alt="" />
                </div>
                <div></div>
                <div className={`icon-size ${pay && "zoom"}`}>
                  <img src={pay ? Paymentr : Payment2} alt="" />
                  {pay && <h6 className="placetext">Payment</h6>}
                </div>
                <div className={`icon-size ${Rada && "zoom"}`}>
                  <img src={`${Rada ? Radar : Radar2}`} alt="" />
                  {Rada && <h6 className="placetext">Radar</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size `}>
                  <img src={Revenue2} alt="" />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`icon-size ${Sigm && "zoom"}`}>
                  <img src={`${Sigm ? Sigma : Sigma2}`} alt="" />
                  {Sigm && <h6 className="placetext">Sigma</h6>}
                </div>
                <div className={`icon-size `}>
                  <img src={Tax2} alt="" />
                </div>
                <div className={`icon-size ${termin && "zoom"}`}>
                  <img
                    src={`${termin || term ? Terminal : Terminal2}`}
                    alt=""
                  />
                  {termin && <h6 className="placetext">Terminal</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size`}>
                  <img src={Treasury2} alt="" />
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size `}>
                  <img src={Diam} alt="" />
                </div>
                <div className={`icon-size `}>
                  <img src={Diam} alt="" />
                </div>
                {/* ===lines ===== */}
                <p className={`straight-line ${capitalIcon && "Anime"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`downward ${Dat && "showdown"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`upward ${Auth && " showup"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`left-straight ${invoic && "showleft"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`curve ${Rada && "showcurve"}`}></p>
                <p className={`left-straight-curve ${pay && "leftCurve"}`}></p>
              </div>
              <div className="green-img">
                <img src={Chippy} alt="" />
              </div>
            </div>
          )}
          {yellow && (
            <div className="yellow">
              <div className="icons-container">
                <div></div>
                <div></div>
                <div className={`icon-size ${Auth && "zoom"}`}>
                  <img src={`${Auth ? Author : Author2}`} alt="" />
                  {Auth && <h6 className="placetext">Author</h6>}
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`icon-size ${capitalIcon && "zoom"}`}>
                  <img
                    src={`${capitalIcon ? Capitalr : Capital2}`}
                    alt="Capital"
                  />
                  {capitalIcon && <h6 className="placetext">Capital</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size ${bill && "zoom"}`}>
                  <img src={`${bill ? Billingr : Billing2}`} alt="" />
                  {bill && <h6 className="placetext">Billings</h6>}
                </div>
                <div className={`icon-size ${invoic && "zoom"}`}>
                  <img src={`${invoic ? Invoicing : Invoicing2}`} alt="" />
                  {invoic && <h6 className="placetext">Invoicing</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size`}>
                  <img src={Connect2} alt="" />
                </div>
                <div className={`icon-size ${Dat && "zoom"}`}>
                  <img src={`${Dat ? Data : Data2}`} alt="" />
                  {Dat && <h6 className="placetext">Data</h6>}
                </div>
                <div className={`icon-size`}>
                  <img src={Issuing2} alt="" />
                </div>
                <div></div>
                <div className={`icon-size ${pay && "zoom"}`}>
                  <img src={pay ? Paymentr : Payment2} alt="" />
                  {pay && <h6 className="placetext">Payment</h6>}
                </div>
                <div className={`icon-size ${Rada && "zoom"}`}>
                  <img src={`${Rada ? Radar : Radar2}`} alt="" />
                  {Rada && <h6 className="placetext">Radar</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size `}>
                  <img src={Revenue2} alt="" />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`icon-size ${Sigm && "zoom"}`}>
                  <img src={`${Sigm ? Sigma : Sigma2}`} alt="" />
                  {Sigm && <h6 className="placetext">Sigma</h6>}
                </div>
                <div className={`icon-size `}>
                  <img src={Tax2} alt="" />
                </div>
                <div className={`icon-size ${termin && "zoom"}`}>
                  <img
                    src={`${termin || term ? Terminal : Terminal2}`}
                    alt=""
                  />
                  {termin && <h6 className="placetext">Terminal</h6>}
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size`}>
                  <img src={Treasury2} alt="" />
                </div>
                <div></div>
                <div></div>
                <div className={`icon-size `}>
                  <img src={Diam} alt="" />
                </div>
                <div className={`icon-size `}>
                  <img src={Diam} alt="" />
                </div>
                {/* ===lines ===== */}
                <p className={`straight-line ${capitalIcon && "Anime"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`downward ${Dat && "showdown"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`upward ${Auth && " showup"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`left-straight ${invoic && "showleft"}`}>
                  <video src={Video} loop autoPlay muted></video>
                </p>
                <p className={`curve ${Rada && "showcurve"}`}></p>
                <p className={`left-straight-curve ${pay && "leftCurve"}`}></p>
              </div>
              <div className="yellow-img">
                <img src={fintech} alt="" />
              </div>
            </div>
          )}
          {indigo && <div className="indigo"></div>}
        </div>
      </div>
      <div className="leftCurve-wave">
        <div className="Global">
          <h3>Global scale</h3>
          <h2>The backbone for global commerce</h2>
          <p>
            Stripe makes moving money as easy and programmable as moving data.
            Our teams are based in offices around the world and we process
            hundreds of billions of dollars each year for ambitious businesses
            of all sizes
          </p>
        </div>
        <div className="fiveM">
          <div>
            <h3>500M+</h3>
            <h4>Api request per day,peaking at 13,000 request a seconds</h4>
          </div>
          <div>
            <h3>99.999%</h3>
            <h4>
              historical up time for{""}{" "}
              <span className="color"> Stripe service</span>
            </h4>
          </div>
          <div>
            <h3>90%</h3>
            <h4>of U.S. adults have bought from businesses using stripe</h4>
          </div>
          <div>
            <h3>135+</h3>
            <h4>currencies and payment method supported.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyCo;
