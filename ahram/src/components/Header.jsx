/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLink = [
  { url: "/", num: "1", title: "애니메이션 기본 효과" },
  { url: "/gsap02", num: "2", title: "Pin 애니메이션" },
  { url: "/gsap03", num: "3", title: "배경 고정하기" },
  { url: "/gsap04", num: "4", title: "이질감 효과" },
  { url: "/gsap05", num: "5", title: "나타나기 효과" },
  { url: "/gsap06", num: "6", title: "텍스트 효과" },
  { url: "/gsap07", num: "7", title: "배경색 효과" },
  { url: "/gsap08", num: "8", title: "진행바 효과" },
  { url: "/gsap09", num: "9", title: "메뉴 이동 효과" },
  { url: "/gsap10", num: "10", title: "메뉴 축소 효과" },
  { url: "/gsap11", num: "11", title: "메뉴 숨기기 효과" },
  { url: "/gsap12", num: "12", title: "가로 효과" },
  { url: "/gsap13", num: "13", title: "가로/세로 효과" },
  { url: "/gsap14", num: "14", title: "가로/세로 나타나기 효과" },
  { url: "/gsap15", num: "15", title: "스무스 효과" },
];

const Header = () => {
  const location = useLocation();
  return (
    <header id="parallax__title">
      {navLink.map((nav, index) => {
        return (
          <div key={index}>
            {location.pathname === nav.url ? (
              <>
                <h1>GSAP Parallax Effect {nav.num}</h1>
                <p>GSAP scrollTrigger - {nav.title}</p>
              </>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <ul>
        {navLink.map((nav, index) => {
          return (
            <li
              className={location.pathname === nav.url ? "active" : ""}
              key={index}
            >
              <NavLink to={nav.url}>{index + 1}</NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
