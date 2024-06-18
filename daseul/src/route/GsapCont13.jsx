import React, { useEffect } from "react";
import gsap from "gsap";

const GsapCont13 = () => {
    useEffect(() => {
        const horizontal = document.querySelector("#horizontal");
        const sections = gsap.utils.toArray("#horizontal > section");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => "+=" + (horizontal.offsetWidth - window.innerWidth),
                /*
                    end: () => "+=" + (horizontal.offsetWidth - innerWidth)는
                    애니메이션이 끝나는 시점을 지정하는 옵션입니다.
                    horizontal.offsetWidth - innerWidth는 horizontal 요소의 
                    너비에서 현재 뷰포트의 너비를 뺀 값으로, 
                    애니메이션이 끝나는 지점을 설정합니다.
                    pin: true는 스크롤 트리거 요소를 고정시키는 옵션입니다.
                    즉, 트리거 요소가 스크롤되면서 다른 요소들이 지나가는 것처럼 보이게 됩니다.
                */
                pin: true,
                scrub: 1, // 트리거 요소가 스크롤되는 동안 애니메이션을 부드럽게 진행하기 위한 옵션
                snap: {
                    snapTo: 1 / (sections.length - 1), // 스크롤 위치를 요소들의 위치에 스냅하는 옵션입니다. 1 / (section.length - 1)은 각 요소 사이의 스냅 간격을 설정
                    inertia: false, // 스냅 시의 관성 효과를 비활성화
                    duration: { min: 0.1, max: 0.1 }, // 스냅 애니메이션의 최소 및 최대 지속 시간
                },
                invalidateOnRefresh: true, // 페이지 새로고침 시 스크롤 트리거 위치를 재계산하도록
                anticipatePin: 1, // 스크롤 트리거 요소의 위치를 예측하여 부드럽게 고정하는 옵션
            },
        });
    });

    return (
        <div>
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
        </div>
    );
};

export default GsapCont13;
