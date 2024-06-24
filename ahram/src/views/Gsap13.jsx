/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gsap13() {
  const horizontal = document.querySelector("#horizontal");
  const sections = gsap.utils.toArray("#horizontal > section");

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontal,
          start: "top top",
          end: () => "+=" + (sections.length - 1) + "00%",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
          },
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="parallax__cont_13">
      <section id="section1" className="parallax__item">
        <span className="parallax__item__num">01</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
      </section>

      <section id="section2" className="parallax__item">
        <span className="parallax__item__num">02</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
      </section>

      <main id="horizontal">
        <section id="section3" className="parallax__item">
          <span className="parallax__item__num">03</span>
          <figure className="parallax__item__imgWrap">
            <div className="parallax__item__img"></div>
          </figure>
        </section>

        <section id="section4" className="parallax__item">
          <span className="parallax__item__num">04</span>
          <figure className="parallax__item__imgWrap">
            <div className="parallax__item__img"></div>
          </figure>
        </section>

        <section id="section5" className="parallax__item">
          <span className="parallax__item__num">05</span>
          <figure className="parallax__item__imgWrap">
            <div className="parallax__item__img"></div>
          </figure>
        </section>

        <section id="section6" className="parallax__item">
          <span className="parallax__item__num">06</span>
          <figure className="parallax__item__imgWrap">
            <div className="parallax__item__img"></div>
          </figure>
        </section>

        <section id="section7" className="parallax__item">
          <span className="parallax__item__num">07</span>
          <figure className="parallax__item__imgWrap">
            <div className="parallax__item__img"></div>
          </figure>
        </section>
      </main>
      <section id="section8" className="parallax__item">
        <span className="parallax__item__num">08</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
      </section>

      <section id="section9" className="parallax__item">
        <span className="parallax__item__num">09</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
      </section>
    </main>
  );
}
