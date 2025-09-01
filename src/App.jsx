import React from "react";
import Hero from "./components/Hero";
import ForDiners from "./components/ForDiners";
import ForRestaurants from "./components/ForRestaurants";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Diners Section */}
      <div id="diners">
        <ForDiners />
      </div>

      {/* Restaurants Section */}
      <div id="restaurants">
        <ForRestaurants />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </>
  );
}
