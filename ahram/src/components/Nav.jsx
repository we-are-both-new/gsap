/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const NavList = [
  {
    goTo: "#section1",
    name: "s1",
  },
  {
    goTo: "#section2",
    name: "s2",
  },
  {
    goTo: "#section3",
    name: "s3",
  },
  {
    goTo: "#section4",
    name: "s4",
  },
  {
    goTo: "#section5",
    name: "s5",
  },
  {
    goTo: "#section6",
    name: "s6",
  },
  {
    goTo: "#section7",
    name: "s7",
  },
  {
    goTo: "#section8",
    name: "s8",
  },
  {
    goTo: "#section9",
    name: "s9",
  },
];

const Nav = (props) => {
  let links = gsap.utils.toArray(`#parallax__nav_${props.num} ul li a`);
  console.log("links ::: ", links);

  function setActive(link) {
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    links.forEach((link) => {
      let element = document.querySelector(link.getAttribute("data-goto"));
      let linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top",
      });

      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => setActive(link),
      });

      link.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: linkST.start,
          overwrite: "auto",
        });
      });
    });
  });

  return (
    // eslint-disable-next-line react/prop-types
    <nav id={`parallax__nav_${props.num}`}>
      <ul>
        {NavList.map((nav, index) => {
          return (
            <li key={index}>
              <Link
                data-goto={nav.goTo}
                className={index === 0 ? "active" : ""}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
