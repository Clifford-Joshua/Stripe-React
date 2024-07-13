import React from "react";
import {
  IoRocket,
  IoStorefrontSharp,
  IoPeople,
  IoCopy,
  IoChatbubbles,
  IoBagSharp,
} from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { PiBuildings } from "react-icons/pi";
import { MdBarChart } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import {
  FaPlusSquare,
  FaLightbulb,
  FaBookDead,
  FaBookOpen,
} from "react-icons/fa";
import { TiGlobe } from "react-icons/ti";
import { SiBookstack } from "react-icons/si";
import { AiFillEdit, AiFillSlackCircle } from "react-icons/ai";
import { FiActivity, FiAlignJustify } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import { HiDatabase } from "react-icons/hi";
import Author from "./Image/Authorization.png";
import Capital from "./Image/Capital.png";
import Billing from "./Image/Billing.png";
import Connect from "./Image/Connect.png";
import Data from "./Image/Data.png";
import Invoicing from "./Image/Invoicing.png";
import Issuing from "./Image/Issuing.png";
import Payment from "./Image/Payment.png";
import Radar from "./Image/Radar.png";
import Revenue from "./Image/Revenue.png";
import Sigma from "./Image/Sigma.png";
import Tax from "./Image/Tax.png";
import Terminal from "./Image/Terminal.png";
import Treasury from "./Image/Treasury.png";

export const links = [
  {
    page: "Products",
    more: {
      title: "More",
      link: [
        { name: "Payment methods ", text: "Access to 100+ globally" },
        { name: "Link", text: "Accelerated checkout" },
        {
          name: "Financial Connections",
          text: "Linked financial account data",
        },
        { name: "Identity ", text: "Online identity verification" },
        { name: "Atlas ", text: "Startup incorporation" },
      ],
    },
    Alllinks: [
      {
        title: "GLOBAL PAYMENTS",
        link: [
          {
            id: 1,
            name: "Payments",
            text: "Online payments",
            icon_img: Payment,
            names: ["payment Links", "Checkout", "Elements"],
            urlsname: [
              "No-code payments",
              "Prebuilt payment form",
              "Flexible UI components",
            ],
            urls: [
              "https://stripe.com/payments/payment-links",
              "https://stripe.com/payments/checkout",
              "https://stripe.com/payments/elements",
            ],
          },
          {
            id: 2,
            name: "Terminal",
            text: "In-person payments",
            icon_img: Terminal,
          },
          {
            id: 3,
            name: "Radar",
            text: "Fraud prevention",
            icon_img: Radar,
          },
          {
            id: 4,
            name: "Authorization",
            text: "In-person payments",
            icon_img: Author,
          },
        ],
      },
      {
        title: "EMBEDDED PAYMENTS AND FINANCE",
        link: [
          {
            id: 1,
            icon_img: Connect,
            name: "Connect",
            text: "Payments for platform",
          },
          {
            id: 2,
            icon_img: Treasury,
            text: "Financial accounts",
            name: "Treasury",
          },
          {
            id: 3,
            icon_img: Capital,
            text: "Customer financing",
            name: "Capital",
          },
          {
            id: 4,
            icon_img: Issuing,
            text: "Physical and virtual cards",
            name: "Issuing",
          },
        ],
      },
      {
        title: "REVENUE AND FINANCE AUTOMATION",
        link: [
          {
            id: 1,
            icon_img: Billing,
            text: "Subscription management",
            name: "Billing",
          },
          {
            id: 2,
            icon_img: Revenue,
            text: "Accounting automation",
            name: "Revenue Recongination",
          },
          {
            id: 3,
            icon_img: Tax,
            text: "Sales tax & VAT automation",
            name: "Tax",
          },
          {
            id: 4,
            icon_img: Invoicing,
            text: "Online invoices",
            name: "Invoice",
          },
          {
            id: 5,
            icon_img: Sigma,
            text: "Custom report",
            name: "Sigma",
          },
          {
            id: 6,
            icon_img: Data,
            text: "Data warehouse sync",
            name: "Data Pipeline",
          },
        ],
      },
    ],
  },
  {
    page: "Solutions",
    Alllinks: [
      {
        title: "BY STAGE",
        link: [
          { name: "Enterprises ", icon: <PiBuildings /> },
          { name: "Startups ", icon: <IoRocket /> },
        ],
      },
      {
        title: "BY BUSINESS MODEL",
        link: [
          { name: "Ecommerce ", icon: <FaBookDead /> },
          { name: "SaaS ", icon: <TfiReload /> },
          { name: "Platforms ", icon: <HiDatabase /> },
          { name: "Marketplaces ", icon: <IoStorefrontSharp /> },
        ],
      },
      {
        title: "BY USE CASE",
        link: [
          { name: "Finance automation ", icon: <MdBarChart /> },
          { name: "Embedded finance ", icon: <AiTwotonePieChart /> },
          { name: "Global businesses ", icon: <TiGlobe /> },
          { name: "Crypto ", icon: <SiBookstack /> },
          { name: "Creator economy ", icon: <FaLightbulb /> },
        ],
      },
      {
        title: "ECOSYSTEM",
        link: [
          { name: "Stripe App Marketplace  ", icon: <AiFillEdit /> },
          { name: "Partners ", icon: <FaBookOpen /> },
          { name: "Professional services ", icon: <IoPeople /> },
        ],
      },
    ],
  },
  {
    page: "Developers",
    Alllinks: [
      {
        name: "Documentation",
        icon: <FaBookOpen />,
        text: [
          "GET STARTED",
          "GUIDES",
          "Prebuilt checkout ",
          "Accept online payments ",
          "Libraries and SDKs ",
          "Manage subscriptions ",
          "App integrations ",
          "Send payments ",
          "Code samples ",
          "Set up in-person payments ",
        ],
        iconslinks: [
          { name: "Full API reference ", icon: <FiAlignJustify /> },
          { name: "API changelog ", icon: <AiFillSlackCircle /> },
          { name: "API status ", icon: <FiActivity /> },
          { name: "Build on Stripe Apps ", icon: <IoCopy /> },
        ],
      },
    ],
  },
  {
    page: "Resources",
    Alllinks: [
      {
        firsticon: [
          { name: "Support plans ", icon: <AiFillSlackCircle /> },
          { name: "Guides ", icon: <FaBookDead /> },
          { name: "Customer stories ", icon: <FiAlignJustify /> },
          { name: "Blog  ", icon: <HiDatabase /> },
          { name: "Sessions ", icon: <IoBagSharp /> },
          { name: "Contact sales ", icon: <IoChatbubbles /> },
        ],
        seconficon: [
          { name: "Job", icon: <IoBagSharp /> },
          { name: "Stripe press", icon: <BsNewspaper /> },
          { name: "Newsroom", icon: <IoCopy /> },
          { name: "Become a partner", icon: <FaPlusSquare /> },
        ],
      },
    ],
  },
];
