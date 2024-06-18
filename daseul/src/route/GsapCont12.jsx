import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapCont12 = () => {
    // ---------- gsap context
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ---------- selecting all horizontal sections
            const horizontalSections = gsap.utils.toArray("#parallax__cont_12 .parallax__item");

            // ---------- applying horizontal scroll animation
            gsap.to(horizontalSections, {
                xPercent: -100 * (horizontalSections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#parallax__cont_12",
                    pin: true,
                    scrub: 1,
                    snap: 1 / (horizontalSections.length - 1),
                    end: () => "+=" + document.querySelector("#parallax__cont_12").offsetWidth,
                },
            });
        });

        return () => ctx.revert();
    }, []);
    return (
        <main id="parallax__cont_12">
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
};

export default GsapCont12;
