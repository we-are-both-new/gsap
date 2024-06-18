import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapCont12 = () => {
    // ---------- gsap context
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ---------- selecting all horizontal sections
            const horizontalSections = gsap.utils.toArray(".horizontal-section");

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
            {/* ---------- section 01 ---------- */}
            <section className="horizontal-section">
                <h1 className="heading">Horizontal Scroll</h1>
            </section>

            {/* ---------- section 02 ---------- */}
            <section className="horizontal-section">
                <h1 className="heading">01</h1>
            </section>

            {/* ---------- section 02 ---------- */}
            <section className="horizontal-section">
                <h1 className="heading">02</h1>
            </section>

            {/* ---------- section 03 ---------- */}
            <section className="horizontal-section">
                <h1 className="heading">03</h1>
            </section>
        </main>
    );
};

export default GsapCont12;
