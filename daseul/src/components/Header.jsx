import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <header id="parallax__title">
                <div>
                    <h1>GSAP Parallax Effect01</h1>
                    <p>GSAP scrollTrigger - 애니메이션 기본 효과</p>
                    {/* {props.headerNav.map((index) => {
                        return (
                            <>
                                <ul>
                                    <li key={index} className="active">
                                        <Link to={`/gsap0${index + 1}`}>{index + 1}</Link>
                                    </li>
                                </ul>
                            </>
                        );
                    })} */}
                    <ul>
                        <li className="active">
                            <Link to={`/gsap01`}>1</Link>
                        </li>
                        <li>
                            <Link to={`/gsap02`}>2</Link>
                        </li>
                        <li>
                            <Link to={`/gsap03`}>3</Link>
                        </li>
                        <li>
                            <Link to={`/gsap04`}>4</Link>
                        </li>
                        <li>
                            <Link to={`/gsap05`}>5</Link>
                        </li>
                        <li>
                            <Link to={`/gsap06`}>6</Link>
                        </li>
                        <li>
                            <Link to={`/gsap07`}>7</Link>
                        </li>
                        <li>
                            <Link to={`/gsap08`}>8</Link>
                        </li>
                        <li>
                            <Link to={`/gsap09`}>9</Link>
                        </li>
                        <li>
                            <Link to={`/gsap10`}>10</Link>
                        </li>
                        <li>
                            <Link to={`/gsap11`}>11</Link>
                        </li>
                        <li>
                            <Link to={`/gsap12`}>12</Link>
                        </li>
                        <li>
                            <Link to={`/gsap13`}>13</Link>
                        </li>
                        <li>
                            <Link to={`/gsap14`}>14</Link>
                        </li>
                        <li>
                            <Link to={`/gsap15`}>15</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
