import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Modal from "./Modal";
import Img from "./Img";
import MainBody from "./MainBody";
import BodyCo from "./BodyCo";
import Slider from "./slider";
import Built from "./Built";
import Designed from "./Designed";
import Lunch from "./Lunch";
const App = () => {
  return (
    <section className="General-section">
      <section className="first-section">
        <NavBar />
        <SideBar />
        <Modal />
        <MainBody />
      </section>
      <Img />
      <BodyCo />
      <Slider />
      <Built />
      <Designed />
      <Lunch />
    </section>
  );
};

export default App;
