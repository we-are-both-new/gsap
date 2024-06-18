import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapCont05 = () => {
    useEffect(() => {
        const hide = (item) => {
            gsap.set(item, { autoAlpha: 0 });
        };

        const animate = (item) => {
            let x = 100;
            let y = 100;
            let delay = item.dataset.delay;
            if (item.classList.contains("reveal_LTR")) {
                x = -100;
            } else if (item.classList.contains("reveal_BTT")) {
                x = 0;
                y = 100;
            } else {
                x = 100;
                y = 0;
            }

            // fromTo: 전후 가능
            gsap.fromTo(
                item,
                {
                    // 전
                    autoAlpha: 0,
                    x: x,
                    y: y,
                },
                {
                    // 후
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    delay: delay,
                    duration: 1.25,
                    overwrite: "auto", // 애니메이션 버그 같지 않게
                }
            );
        };

        gsap.utils.toArray(".reveal").forEach((item) => {
            hide(item);
            ScrollTrigger.create({
                trigger: item,
                //위아래로 꽉차게 해주면 깜빡이는 부분이 안보임
                start: "top bottom", // 위에서 내리면서 밑으로 나오는거니까
                end: "bottom top", // 밑에서 위로 올라오면서
                markers: false,
                onEnter: () => {
                    animate(item);
                },
            });

            // item.style.opacity = "0";
        });
    });

    return (
        <div>
            <main id="parallax__cont_05">
                <section id="section1" className="parallax__item">
                    <span className="parallax__item__num">01</span>
                    <h2 className="parallax__item__title">section1</h2>
                    <figure className="parallax__item__imgWrap reveal reveal_BTT">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal reveal_LTR">높은 목표를 세우고, 스스로 채찍질 한다.</p>
                </section>

                <section id="section2" className="parallax__item">
                    <span className="parallax__item__num">02</span>
                    <h2 className="parallax__item__title">section2</h2>
                    <figure className="parallax__item__imgWrap reveal" data-delay="0.8">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal" data-delay="0.5">
                        결과도 중요하지만, 과정을 더 중요하게 생각한다.
                    </p>
                </section>

                <section id="section3" className="parallax__item">
                    <span className="parallax__item__num">03</span>
                    <h2 className="parallax__item__title">section3</h2>
                    <figure className="parallax__item__imgWrap">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal reveal_LTR">매 순간에 최선을 다하고, 끊임없이 변화한다.</p>
                </section>

                <section id="section4" className="parallax__item">
                    <span className="parallax__item__num">04</span>
                    <h2 className="parallax__item__title">section4</h2>
                    <figure className="parallax__item__imgWrap">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal">모든 일에는 기본을 중요하게 생각한다.</p>
                </section>

                <section id="section5" className="parallax__item">
                    <span className="parallax__item__num">05</span>
                    <h2 className="parallax__item__title">section5</h2>
                    <figure className="parallax__item__imgWrap">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal reveal_LTR">열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.</p>
                </section>

                <section id="section6" className="parallax__item">
                    <span className="parallax__item__num">06</span>
                    <h2 className="parallax__item__title">section6</h2>
                    <figure className="parallax__item__imgWrap">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal">천 마디 말보단 하나의 행동이 더 값지다.</p>
                </section>

                <section id="section7" className="parallax__item">
                    <span className="parallax__item__num">07</span>
                    <h2 className="parallax__item__title">section7</h2>
                    <figure className="parallax__item__imgWrap">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal reveal_LTR">조그만 성공에 만족하지 않으며, 방심을 경계한다.</p>
                </section>

                <section id="section8" className="parallax__item">
                    <span className="parallax__item__num">08</span>
                    <h2 className="parallax__item__title">section8</h2>
                    <figure className="parallax__item__imgWrap">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal">나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.</p>
                </section>

                <section id="section9" className="parallax__item">
                    <span className="parallax__item__num">09</span>
                    <h2 className="parallax__item__title">section9</h2>
                    <figure className="parallax__item__imgWrap">
                        <div className="parallax__item__img"></div>
                    </figure>
                    <p className="parallax__item__desc reveal reveal_LTR">꿈이 있다면, 그 꿈을 잡고 절대 놓아주지마라.</p>
                </section>
            </main>
        </div>
    );
};

export default GsapCont05;
