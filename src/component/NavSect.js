import React, { useEffect, useState } from "react";
import img from "../util/img/clouds.png";
import plane from "../util/img/plane.gif";
import night from "../util/img/night.jpg";
import { about, options, vowelcheck } from "../helper";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";
import Typed from "typed.js";

const NavSect = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isXlScreen = useMediaQuery({ minWidth: "767px", maxWidth: "2000px" });
  const isSmScreen = useMediaQuery({ minWidth: "250px", maxWidth: "767px" });
  const [item, setitem] = useState("...");

  const divStyle = {
    ...(isXlScreen && {
      backgroundImage: `url(${img})`,
      marginLeft: "1.25rem",
      marginRight: "1.25rem",
      height: "38rem",
      backgroundRepeat: "repeat",
      backgroundSize: "contain",
    }),
    ...(isSmScreen && {
      backgroundImage: `url(${night})`,
      marginLeft: "0",
      marginRight: "0",
      backgroundSize: "cover",
    }),
  };

  useEffect(() => {
    let currentindex = 0;
    const inter = setInterval(() => {
      if (currentindex < about.length) {
        let currItem = about[currentindex];
        currentindex++;
        if (currentindex === about.length) {
          currentindex = 0;
        }
        setitem(currItem);
      }
    }, 3000);
    let typedInstance;

    // Create a new Typed instance
    typedInstance = new Typed("#typing", options);
    return () => {
      clearInterval(inter);
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return (
    <header className="sm:bg-blue-500" style={divStyle}>
      <Navbar />

      <section className="sm:p-[2rem] flex flex-col items-center justify-center">
        <img className="sm:hidden" alt="plane" src={plane}></img>

        <span
          id="title"
          className="font-medium text-white sm:text-5xl text-7xl"
        >
          Ajay Pandey
        </span>
        <br />

        <span className=" xl:text-white sm:text-xl xl:text-2xl xl:mt-4 font-bold sm:font-light sm:text-white sm:mt-1  ">
          I am {vowelcheck(item)}{" "}
          {/* <span id="typing" className=" font-mono text-white text-3xl sm:text-xl">
            {item}.
          </span> */}
          <span
            id="typing"
            className=" font-mono text-white text-3xl sm:text-xl"
          ></span>
        </span>
        <br />

        <button
          onClick={() => scrollToSection("coffeee")}
          className="border bottom-1 rounded-full text-white p-3 mt-2"
        >
          COFFEE WITH ME
        </button>
      </section>
    </header>
  );
};

export default NavSect;
