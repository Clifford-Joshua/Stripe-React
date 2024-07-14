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
import Ready from "./Ready";
import Footer from "./Footer";
import Reloder from "./Reloder";
const App = () => {
  return (
    <section className="General-section">
      <Reloder />
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
      <Ready />
      <Footer />
    </section>
  );
};

export default App;
