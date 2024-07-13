import React from "react";
// import { useEffect } from "react";
import { useGlobalContent } from "./content";
import { FaGreaterThan, FaBars, FaArrowRight } from "react-icons/fa";

import { links } from "./Data";
const NavBar = () => {
  // const [navLinks, setNavLinks] = useState(links);
  const {
    stripe,
    stripe2,
    isLogoHovered,
    HoverLogo,
    NotHoverLogo,
    OpenModal,
    CloseModal,
    OpenSideBar,
  } = useGlobalContent();

  const DisplayModal = (e) => {
    const pageheader = e.target.textContent;
    const meters = e.target.getBoundingClientRect();
    const center = (meters.left + meters.right) / 2;
    const bottomDistance = meters.bottom + 5;
    OpenModal(pageheader, { center, bottomDistance });
  };

  const UnDisplayModal = (e) => {
    if (!e.target.classList.contains("navigation-links")) {
      CloseModal();
    }
  };

  return (
    <nav onMouseOver={UnDisplayModal}>
      <img
        src={isLogoHovered ? stripe2 : stripe}
        alt="logo"
        className={`stripe-logo`}
        onMouseEnter={HoverLogo}
        onMouseLeave={NotHoverLogo}
      />
      <div className="nav-links-container">
        <ul className="nav-links">
          {links.map(({ page, Alllinks }, index) => {
            return (
              <li
                className="navigation-links"
                key={index}
                onMouseEnter={DisplayModal}
              >
                {page}
              </li>
            );
          })}
          <li className="navigation-links">pricing</li>
        </ul>
        <ul className="nav-sign-in">
          <li className="contacts">
            Contact sales <FaGreaterThan className="great" />
            <FaArrowRight className="arrows" />
          </li>
          <li className="sign-in">
            Sign in <FaGreaterThan className="great" />
            <FaArrowRight className="arrows" />
          </li>
        </ul>
        <button className="toggle-btn" onClick={OpenSideBar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
