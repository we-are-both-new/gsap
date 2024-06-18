import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapCont03 = () => {
    useEffect(() => {
        let panels = gsap.utils.toArray(".parallax__item");
        let tops = panels.map((panel) => ScrollTrigger.create({ trigger: panel, start: "top top" }));

        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () => (panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom"),
                pin: true,
                pinSpacing: false,
            });
        });

        ScrollTrigger.create({
            snap: {
                snapTo: (progress, self) => {
                    let panelStarts = tops.map((st) => st.start),
                        snapScroll = gsap.utils.snap(panelStarts, self.scroll());
                    return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
                },
                duration: 0.5,
            },
        });
    });

    return (
        <div>
            <main id="parallax__cont_03">
                <section id="section1" className="parallax__item">
                    <span className="parallax__item__num">01</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section1</h2>
                </section>

                <section id="section2" className="parallax__item">
                    <span className="parallax__item__num">02</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section2</h2>
                </section>

                <section id="section3" className="parallax__item">
                    <span className="parallax__item__num">03</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section3</h2>
                </section>

                <section id="section4" className="parallax__item">
                    <span className="parallax__item__num">04</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section4</h2>
                </section>

                <section id="section5" className="parallax__item">
                    <span className="parallax__item__num">05</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section5</h2>
                </section>

                <section id="section6" className="parallax__item">
                    <span className="parallax__item__num">06</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section6</h2>
                </section>

                <section id="section7" className="parallax__item">
                    <span className="parallax__item__num">07</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section7</h2>
                </section>

                <section id="section8" className="parallax__item">
                    <span className="parallax__item__num">08</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section8</h2>
                </section>

                <section id="section9" className="parallax__item">
                    <span className="parallax__item__num">09</span>
                    <div className="parallax__item__img"></div>
                    <h2 className="parallax__item__title">section9</h2>
                </section>
            </main>
        </div>
    );
};

export default GsapCont03;
