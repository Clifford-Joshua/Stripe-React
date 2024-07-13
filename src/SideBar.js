import React from "react";
import { useGlobalContent } from "./content";

const SideBar = () => {
  const { isSideBarOpen } = useGlobalContent();
  return <>{isSideBarOpen && <h1>SideBarsss</h1>}</>;
};

export default SideBar;
