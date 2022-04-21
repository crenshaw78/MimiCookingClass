import React from "react";
import Jumbotron from "./Components/Jumbotron";
import About from "./Components/About";
import Schedule from "./Components/Schedule";
import Gallery from "./Components/Gallery";
import BookEvent from "./Components/BookEvent";
import Contact from "./Components/Contact";
import SocialMedia from "./Components/SocialMedia";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
  <div>
      <Jumbotron />
        <About />
        <Schedule />
        <Gallery />
        <BookEvent />
        <Contact />
        <SocialMedia />
    </div>
  );
}

export default App;
