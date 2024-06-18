import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GsapCont01() {
    const elRef1 = useRef(null);
    const elRef2 = useRef(null);
    const elRef3 = useRef(null);
    const elRef4 = useRef(null);
    const elRef5 = useRef(null);
    const elRef6 = useRef(null);
    const elRef7 = useRef(null);
    const elRef8 = useRef(null);

    useEffect(() => {
        const el = elRef1.current;
        const el2 = elRef2.current;
        const el3 = elRef3.current;
        const el4 = elRef4.current;
        const el5 = elRef5.current;
        const el6 = elRef6.current;
        const el7 = elRef7.current;
        const el8 = elRef8.current;

        //01 기본 애니메이션
        gsap.to(el, {
            x: 500,
            duration: 1, //1 = 1초
            borderRadius: 100,
            rotation: 360,
            scrollTrigger: {
                trigger: el,
            },
        });
        //02 trigger
        gsap.to(el2, {
            x: 500,
            duration: 2,
            borderRadius: 100,
            rotation: 360,
            scrollTrigger: {
                trigger: el2,
            },
        });
        //03 toggleActions
        gsap.to(el3, {
            x: 500,
            duration: 2,
            borderRadius: 100,
            rotation: 360,
            scrollTrigger: {
                trigger: el3,
                toggleActions: "play pause reverse none",
                // onEnter onLeave onEnterBack onLeaveBack
            },
        });
        //04 start end
        gsap.to(el4, {
            x: 500,
            duration: 2,
            borderRadius: 100,
            rotation: 360,
            scrollTrigger: {
                trigger: el4,
                start: "top 50%",
                end: "bototm 20%",
                toggleActions: "play pause reverse none",
                markers: false,
            },
        });

        //05 : scrub
        gsap.to(el5, {
            x: 500,
            duration: 2,
            borderRadius: 100,
            rotation: 360,
            scrollTrigger: {
                trigger: el5,
                start: "top 50%",
                end: "bototm 20%",
                scrub: 1, // true , 1 , 2
                markers: false,
            },
        });

        //06 : pin
        gsap.to(el6, {
            x: 500,
            duration: 2,
            borderRadius: 100,
            rotation: 360,
            scrollTrigger: {
                trigger: el6,
                start: "top 50%",
                // end: "top 100%",
                end: "top 200px",
                scrub: 1, // true , 1 , 2
                pin: true,
                markers: false,
            },
        });

        //07 : toggleClass
        gsap.to(el7, {
            x: 500,
            duration: 2,
            borderRadius: 100,
            rotation: 360,
            scrollTrigger: {
                trigger: el7,
                start: "top center",
                end: "bottom top",
                scrub: 1, // true , 1 , 2
                toggleClass: "active",
                markers: false,
                id: "el7",
            },
        });

        //08 : callback function
        gsap.to(el8, {
            x: 500,
            duration: 2,
            borderRadius: 100,
            rotation: 360,
            scrollTrigger: {
                trigger: el8,
                start: "top center",
                end: "bottom top",
                scrub: 1, // true , 1 , 2
                markers: false,
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
    }, []);
    return (
        <div>
            <main id="parallax__cont_01">
                <section id="section1 " className="parallax__item">
                    <span className="parallax__item__num">01</span>
                    <div className="parallax__item__img" ref={elRef1}></div>
                </section>
                <section id="section2" className="parallax__item">
                    <span className="parallax__item__num">02</span>
                    <div className="parallax__item__img" ref={elRef2}></div>
                </section>

                <section id="section3" className="parallax__item">
                    <span className="parallax__item__num">03</span>
                    <div className="parallax__item__img" ref={elRef3}></div>
                </section>

                <section id="section4" className="parallax__item">
                    <span className="parallax__item__num">04</span>
                    <div className="parallax__item__img" ref={elRef4}></div>
                </section>

                <section id="section5" className="parallax__item">
                    <span className="parallax__item__num">05</span>
                    <div className="parallax__item__img" ref={elRef5}></div>
                </section>

                <section id="section6" className="parallax__item">
                    <span className="parallax__item__num">06</span>
                    <div className="parallax__item__img" ref={elRef6}></div>
                </section>

                <section id="section7" className="parallax__item">
                    <span className="parallax__item__num">07</span>
                    <div className="parallax__item__img" ref={elRef7}></div>
                </section>

                <section id="section8" className="parallax__item">
                    <span className="parallax__item__num">08</span>
                    <div className="parallax__item__img" ref={elRef8}></div>
                </section>

                <section id="section9" className="parallax__item">
                    <span className="parallax__item__num">09</span>
                    <div className="parallax__item__img"></div>
                </section>
            </main>
        </div>
    );
}

export default GsapCont01;
