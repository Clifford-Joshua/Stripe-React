import React from "react";
import stripe from "./Image/stripe-logo.png";
import stripe2 from "./Image/stripe-logo2.png";
import { links } from "./Data";
import { useContext, useState} from "react";

const AppContent = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);


  const [pages, setPages] = useState({ page: "", more: {}, Alllinks: [] });
  const HoverLogo = () => {
    setIsLogoHovered(true);
  };
  const NotHoverLogo = () => {
    setIsLogoHovered(false);
  };

  const OpenModal = (pageheader, coor_dinates) => {
    const page = links.find((link) => link.page === pageheader);
    setPages(page);
    setLocation(coor_dinates);
    setIsModalOpen(true);
  };
  const CloseModal = () => {
    setIsModalOpen(false);
  };

  const OpenSideBar = () => {
    setIsSideBarOpen(true);
  };
  const CloseSideBar = () => {
    setIsSideBarOpen(false);
  };
  return (
    <AppContent.Provider
      value={{
        stripe,
        stripe2,
        isLogoHovered,
        HoverLogo,
        NotHoverLogo,
        isModalOpen,
        OpenModal,
        CloseModal,
        location,
        pages,
        isSideBarOpen,
        OpenSideBar,
        CloseSideBar,
      }}
    >
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContent = () => {
  return useContext(AppContent);
};

export { AppContent, AppProvider };
