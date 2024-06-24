/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gsap01() {
  const effect01 = useRef(null);
  const effect02 = useRef(null);
  const effect03 = useRef(null);
  const effect04 = useRef(null);
  const effect05 = useRef(null);
  const effect06 = useRef(null);
  const effect07 = useRef(null);
  const effect08 = useRef(null);

  useEffect(() => {
    // 01
    gsap.to(effect01.current, {
      x: 500,
      duration: 1,
      borderRadius: 100,
      rotation: 360,
    });

    // 02
    gsap.to(effect02.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,
      scrollTrigger: {
        trigger: effect02.current, // 시작되는 기준점
      },
    });

    // 03
    gsap.to(effect03.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,
      scrollTrigger: {
        trigger: effect03.current,
        toggleActions: "play pause reverse none", // toggleActions
      },
    });

    // 04
    gsap.to(effect04.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: effect04.current,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play pause reverse none",
        markers: false,
      },
    });

    // 05
    gsap.to(effect05.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: effect05.current,
        start: "top 50%",
        end: "bottom 20%",
        scrub: true, // 스크롤 하는 만큼 (true, 1, 2, ...)
        markers: false,
      },
    });

    // 06
    gsap.to(effect06.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: effect06.current,
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    // 07
    gsap.to(effect07.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: 100,

      scrollTrigger: {
        trigger: effect07.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        toggleClass: "active", // toggle class 추가하기
        markers: false,
        id: "box7",
      },
    });

    // 08
    gsap.to(effect08.current, {
      x: 500,
      duration: 2,
      borderRadius: 100,
      rotation: 360,
      scrollTrigger: {
        trigger: effect08.current,
        start: "top center",
        end: "bottom top",
        scrub: 1, // true , 1 , 2
        markers: true,
        id: "el8",
        onEnter: () => {
          console.log("onEnter");
        },
        onLeave: () => {
          console.log("onLeave");
        },
        onEnterBack: () => {
          console.log("onEnterBack");
        },
        onLeaveBack: () => {
          console.log("onLeaveBack");
        },
        onUpdate: (self) => {
          console.log("onUpdate", self.progress.toFixed(3));
        },
        onToggle: (self) => {
          console.log("onToggle", self.isActive);
        },
      },
    });
  });

  return (
    <main id="parallax__cont_1">
      <section id="section1" className="parallax__item">
        <span className="parallax__item__num">01</span>
        <div className="parallax__item__img" ref={effect01}></div>
      </section>

      <section id="section2" className="parallax__item">
        <span className="parallax__item__num">02</span>
        <div className="parallax__item__img" ref={effect02}></div>
      </section>

      <section id="section3" className="parallax__item">
        <span className="parallax__item__num">03</span>
        <div className="parallax__item__img" ref={effect03}></div>
      </section>

      <section id="section4" className="parallax__item">
        <span className="parallax__item__num">04</span>
        <div className="parallax__item__img" ref={effect04}></div>
      </section>

      <section id="section5" className="parallax__item">
        <span className="parallax__item__num">05</span>
        <div className="parallax__item__img" ref={effect05}></div>
      </section>

      <section id="section6" className="parallax__item">
        <span className="parallax__item__num">06</span>
        <div className="parallax__item__img" ref={effect06}></div>
      </section>

      <section id="section7" className="parallax__item">
        <span className="parallax__item__num">07</span>
        <div className="parallax__item__img" ref={effect07}></div>
      </section>

      <section id="section8" className="parallax__item">
        <span className="parallax__item__num">08</span>
        <div className="parallax__item__img" ref={effect08}></div>
      </section>

      <section id="section9" className="parallax__item">
        <span className="parallax__item__num">09</span>
        <div className="parallax__item__img"></div>
      </section>
    </main>
  );
}
