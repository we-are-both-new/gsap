import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapCont02 = () => {
    // gsap 안에 scrolltrigger 를 쓰는 것보다 좀 더 많은 옵션 사용가능
    const elRef1 = useRef(null);
    const elRef2 = useRef(null);
    const elRef3 = useRef(null);
    const elRef4 = useRef(null);
    const elRef5 = useRef(null);
    const elRef6 = useRef(null);
    const elRef7 = useRef(null);
    const elRef8 = useRef(null);
    const elRef9 = useRef(null);

    useEffect(() => {
        const el1 = elRef1.current;
        const el2 = elRef2.current;
        const el3 = elRef3.current;
        const el4 = elRef4.current;
        const el5 = elRef5.current;
        const el6 = elRef6.current;
        const el7 = elRef7.current;
        const el8 = elRef8.current;
        const el9 = elRef9.current;

        const ani1 = gsap.timeline();
        const ani2 = gsap.timeline();
        const ani3 = gsap.timeline();
        const ani4 = gsap.timeline();
        const ani5 = gsap.timeline();
        const ani6 = gsap.timeline();
        const ani7 = gsap.timeline();
        const ani8 = gsap.timeline();
        const ani9 = gsap.timeline();

        ani1.to("#section1 .parallax__item__img", {
            rotation: 720,
            scale: 0,
            borderRadius: 200,
        }).to("#section1 .parallax__item__img", {
            rotation: 0,
            scale: 1,
            borderRadius: 20,
        });

        ScrollTrigger.create({
            animation: ani1,
            trigger: el1,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // pin을 자연스럽게 만들어줌
        });

        ani2.from("#section2 .i1", {
            y: -100,
            autoAlpha: 0,
        })
            .from("#section2 .i2", {
                y: 100,
                autoAlpha: 0,
            })
            .from("#section2 .i3", {
                y: -100,
                autoAlpha: 0,
            });

        ScrollTrigger.create({
            animation: ani2,
            trigger: el2,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // pin을 자연스럽게 만들어줌
        });

        //03 이미지를 랜덤으로 나오기
        ani3.from("#section3 .parallax__item__img", {
            y: -100,
            autoAlpha: 0,
            ease: "back.out(4)",
            // stagger: 0.1,
            stagger: {
                amount: 3, //빠르기
                from: "random", // 효과
            },
        });

        ScrollTrigger.create({
            animation: ani3,
            trigger: el3,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // pin을 자연스럽게 만들어줌
        });

        ani4.from("#section4 .parallax__item__img", {
            autoAlpha: 0,
            scale: 5,
            width: "100vw",
            height: "100vh",
        });
        //04 이미지 축소하기
        ScrollTrigger.create({
            animation: ani4,
            trigger: el4,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // pin을 자연스럽게 만들어줌
        });

        ani5.to(
            "#section5 .t1",
            {
                xPercent: 300,
            },
            "text" // 임의의 문자를 동일하게 하면 같이 동작
        )
            .to(
                "#section5 .t2",
                {
                    xPercent: -300,
                },
                "text" // "-=1" 순서가 먼저 움직임
            )
            .to(
                "#section5 .t3",
                {
                    xPercent: 300,
                },
                "text"
            )
            .to(
                "#section5 .t4",
                {
                    xPercent: -300,
                },
                "text"
            );
        //05 텍스트 애니메이션
        ScrollTrigger.create({
            animation: ani5,
            trigger: el5,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // pin을 자연스럽게 만들어줌
        });

        ani6.to("#section6 .parallax__item__text", {
            scale: 60,
            duration: 2,
        }).to("#section6 .parallax__item__text", {
            autoAlpha: 0,
        });
        //06 텍스트 확대하기
        ScrollTrigger.create({
            animation: ani6,
            trigger: el6,
            start: "top top",
            end: "+=3000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // pin을 자연스럽게 만들어줌
        });

        ani7.from(
            "#section7 .t1",
            {
                autoAlpha: 0,
                duration: 1,
                y: 50,
            },
            "+=1"
        )
            .from(
                "#section7 .t2",
                {
                    autoAlpha: 0,
                    duration: 1,
                    y: 50,
                },
                "+=1"
            )
            .from(
                "#section7 .t3",
                {
                    autoAlpha: 0,
                    duration: 1,
                    y: 50,
                },
                "+=1"
            )
            .from(
                "#section7 .t4",
                {
                    autoAlpha: 0,
                    duration: 1,
                    y: 50,
                },
                "+=1"
            )
            .from(
                "#section7 .t5",
                {
                    autoAlpha: 0,
                    duration: 1,
                    y: 50,
                },
                "+=1"
            )
            .from(
                "#section7 .t6",
                {
                    autoAlpha: 0,
                    duration: 1,
                    y: 50,
                },
                "+=1"
            )
            .from(
                "#section7 .t7",
                {
                    autoAlpha: 0,
                    duration: 1,
                    y: 50,
                },
                "+=1"
            );

        //07 텍스트 제자리 애니메이션
        ScrollTrigger.create({
            animation: ani7,
            trigger: el7,
            start: "top top",
            end: "+=6000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // pin을 자연스럽게 만들어줌
            markers: false,
            id: "section7",
        });

        ani8.from("#section8 .t1", {
            x: window.innerWidth * 1,
        })
            .from("#section8 .t2", {
                x: window.innerWidth * -1,
            })
            .from("#section8 .t3", {
                x: window.innerWidth * 1,
            })
            .from("#section8 .i1", {
                x: window.innerWidth * -1,
                rotation: 360,
                scale: 5.5,
            });
        //08 텍스트 애니메이션
        ScrollTrigger.create({
            animation: ani8,
            trigger: el8,
            start: "top top",
            end: "+=6000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // pin을 자연스럽게 만들어줌
        });

        ani9.to("#section9 .parallax__item__img", {
            scale: 13,
        }).to("#section9 .parallax__item__img", {
            autoAlpha: 0,
        });
        //09 이미지 확대하기
        ScrollTrigger.create({
            animation: ani9,
            trigger: el9,
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true,
            markers: false,
            anticipatePin: 1,
        });
    });
    return (
        <div>
            <main id="parallax__cont_02">
                <section id="section1" className="parallax__item" ref={elRef1}>
                    <span className="parallax__item__num">01</span>
                    <div className="parallax__item__img"></div>
                </section>

                <section id="section2" className="parallax__item" ref={elRef2}>
                    <span className="parallax__item__num">02</span>
                    <div className="parallax__item__img i1"></div>
                    <div className="parallax__item__img i2"></div>
                    <div className="parallax__item__img i3"></div>
                </section>

                <section id="section3" className="parallax__item" ref={elRef3}>
                    <span className="parallax__item__num">03</span>
                    <div className="parallax__item__img"></div>
                    <div className="parallax__item__img"></div>
                    <div className="parallax__item__img"></div>
                    <div className="parallax__item__img"></div>
                    <div className="parallax__item__img"></div>
                    <div className="parallax__item__img"></div>
                </section>

                <section id="section4" className="parallax__item" ref={elRef4}>
                    <span className="parallax__item__num">04</span>
                    <div className="parallax__item__img"></div>
                </section>

                <section id="section5" className="parallax__item" ref={elRef5}>
                    <span className="parallax__item__num">05</span>
                    <div className="parallax__item__text t1">section5</div>
                    <div className="parallax__item__text t2">section5</div>
                    <div className="parallax__item__text t3">section5</div>
                    <div className="parallax__item__text t4">section5</div>
                </section>

                <section id="section6" className="parallax__item" ref={elRef6}>
                    <span className="parallax__item__num">06</span>
                    <div className="parallax__item__text">section6</div>
                </section>

                <section id="section7" className="parallax__item" ref={elRef7}>
                    <span className="parallax__item__num">07</span>
                    <div className="parallax__item__text t1">코딩이란</div>
                    <div className="parallax__item__text t2">프로그래밍 코드를</div>
                    <div className="parallax__item__text t3">어딘가에</div>
                    <div className="parallax__item__text t4">적는 것을 말한다</div>
                    <div className="parallax__item__text t5">코딩은</div>
                    <div className="parallax__item__text t6">누구나</div>
                    <div className="parallax__item__text t7">할 수 있다.</div>
                </section>

                <section id="section8" className="parallax__item" ref={elRef8}>
                    <span className="parallax__item__num">08</span>
                    <div className="parallax__item__text t1">section8 title1</div>
                    <div className="parallax__item__text t2">section8 title2</div>
                    <div className="parallax__item__text t3">section8 title3</div>
                    <div className="parallax__item__img i1"></div>
                </section>

                <section id="section9" className="parallax__item" ref={elRef9}>
                    <span className="parallax__item__num">09</span>
                    <div className="parallax__item__img"></div>
                </section>
            </main>
        </div>
    );
};

export default GsapCont02;
