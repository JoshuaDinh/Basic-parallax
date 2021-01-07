import React, { useState, useEffect } from "react";
import "./App.css";
import bigRose from "./images/big-rose.png";
import smallRose from "./images/small-rose.png";
import chair from "./images/chair-intro.png";

const App = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <div className="intro-text">
          <h1>Comfort</h1>
          <h3>Your dream interior design</h3>
        </div>
        <img className="chair" src={chair} alt="big-rose" />
        <img
          style={{
            transform: `translateY(${offset * 0.5}px)`,
          }}
          className="small-rose"
          src={smallRose}
          alt="big-rose"
        />
        <img
          style={{
            transform: `translateY(${offset * 1.5}px)`,
          }}
          className="big-rose"
          src={bigRose}
          alt="chair"
        />
      </header>
      <section className="section-one">Paralax</section>
    </div>
  );
};

export default App;
