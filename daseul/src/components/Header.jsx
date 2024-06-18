import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
    let location = useLocation();

    return (
        <>
            <header id="parallax__title">
                <div>
                    {props.Data.map((item, index) => {
                        return location.pathname === item.view ? (
                            <div key={index}>
                                <h1>
                                    GSAP Parallax Effect
                                    {index + 1 > 9 ? "" : 0}
                                    {index + 1}
                                </h1>
                                <p>GSAP scrollTrigger - {item.desc}</p>
                            </div>
                        ) : (
                            ""
                        );
                    })}

                    <ul>
                        {props.Data.map((item, index) => {
                            return (
                                <li key={index} className={location.pathname === item.view ? "active" : ""}>
                                    <Link to={item.view}>{index + 1}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
