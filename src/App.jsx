import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Coverage from "./components/Coverage";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { COLORS, FONTS } from "./utils/constants";

function App() {
  // Styles globaux inline - CORRIGÉS
  const appStyles = {
    fontFamily: FONTS.secondary,
    fontWeight: 400,
    lineHeight: 1.6,
    color: COLORS.brownDark,
    backgroundColor: COLORS.cream,
    margin: 0,
    padding: 0,
    width: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
  };

  return (
    <div style={appStyles}>
      <Header />
      <Hero />
      <Services />
      <About />
      <Coverage />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
