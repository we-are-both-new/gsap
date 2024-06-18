import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapCont14 = () => {
    useEffect(() => {
        const horizontal = document.querySelector("#horizontal");
        const sections = gsap.utils.toArray("#horizontal > section");

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => "+=" + (horizontal.offsetWidth - window.innerWidth),
                pin: true,
                anticipatePin: 1,
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        gsap.to(".img4", {
            y: -200,
            duration: 2,
            ease: "elastic",
            scrollTrigger: {
                trigger: ".img4",
                containerAnimation: scrollTween,
                start: "left center",
                toggleActions: "play none reverse none",
                markers: false,
                id: "img4",
            },
        });

        gsap.to(".img5", {
            rotation: 720,
            duration: 2,
            ease: "elastic",
            scrollTrigger: {
                trigger: ".img5",
                containerAnimation: scrollTween,
                start: "left center",
                toggleActions: "play none reverse none",
                markers: false,
                id: "img5",
            },
        });

        gsap.to(".img6", {
            scale: 0.3,
            duration: 2,
            ease: "elastic",
            scrollTrigger: {
                trigger: ".img6",
                containerAnimation: scrollTween,
                start: "left center",
                toggleActions: "play none reverse none",
                markers: false,
                id: "img6",
            },
        });
    });
    return (
        <div>
            <main id="parallax__cont_14">
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
                        <figure className="parallax__item__imgWrap img4">
                            <div className="parallax__item__img"></div>
                        </figure>
                    </section>

                    <section id="section5" className="parallax__item">
                        <span className="parallax__item__num">05</span>
                        <figure className="parallax__item__imgWrap img5">
                            <div className="parallax__item__img"></div>
                        </figure>
                    </section>

                    <section id="section6" className="parallax__item">
                        <span className="parallax__item__num">06</span>
                        <figure className="parallax__item__imgWrap img6">
                            <div className="parallax__item__img"></div>
                        </figure>
                    </section>

                    <section id="section7" className="parallax__item">
                        <span className="parallax__item__num">07</span>
                        <figure className="parallax__item__imgWrap img7">
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
        </div>
    );
};

export default GsapCont14;
