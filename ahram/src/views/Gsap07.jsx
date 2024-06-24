/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gsap07() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".parallax__item").forEach((item) => {
        let color = item.getAttribute("data-bgcolor");

        ScrollTrigger.create({
          trigger: item,
          start: "top 50%",
          end: "bottom 50%",
          markers: true,

          onEnter: () =>
            gsap.to("body", {
              backgroundColor: color,
              duration: 1.4,
            }),
          onEnterBack: () =>
            gsap.to("body", {
              backgroundColor: color,
              duration: 1.4,
            }),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="parallax__cont_7">
      <section id="section1" className="parallax__item" data-bgcolor="#111111">
        <span className="parallax__item__num">01</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          높은 목표를 세우고, 스스로 채찍질 한다.
        </p>
      </section>

      <section id="section2" className="parallax__item" data-bgcolor="#593b22">
        <span className="parallax__item__num">02</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          결과도 중요하지만, 과정을 더 중요하게 생각한다.
        </p>
      </section>

      <section id="section3" className="parallax__item" data-bgcolor="#245922">
        <span className="parallax__item__num">03</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          매 순간에 최선을 다하고, 끊임없이 변화한다.
        </p>
      </section>

      <section id="section4" className="parallax__item" data-bgcolor="#243859">
        <span className="parallax__item__num">04</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          모든 일에는 기본을 중요하게 생각한다.
        </p>
      </section>

      <section id="section5" className="parallax__item" data-bgcolor="#3f2459">
        <span className="parallax__item__num">05</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.
        </p>
      </section>

      <section id="section6" className="parallax__item" data-bgcolor="#59243c">
        <span className="parallax__item__num">06</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          천 마디 말보단 하나의 행동이 더 값지다.
        </p>
      </section>

      <section id="section7" className="parallax__item" data-bgcolor="#3f2459">
        <span className="parallax__item__num">07</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          조그만 성공에 만족하지 않으며, 방심을 경계한다.
        </p>
      </section>

      <section id="section8" className="parallax__item" data-bgcolor="#222222">
        <span className="parallax__item__num">08</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.
        </p>
      </section>

      <section id="section9" className="parallax__item" data-bgcolor="#592624">
        <span className="parallax__item__num">09</span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <p className="parallax__item__desc">
          꿈이 있다면, 그 꿈을 잡고 절대 놓아주지마라.
        </p>
      </section>
    </main>
  );
}
