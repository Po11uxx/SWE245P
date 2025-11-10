import "./Header.css";

import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <>
            <div className="header">
                <a href="#default" className="logo">
                    Xinyi's Page
                </a>
                {/*<div className="headerRight">*/}
                {/*    <a className="active" href="#home">*/}
                {/*        Home*/}
                {/*    </a>*/}
                {/*    <a href="#contact">Contact</a>*/}
                {/*    <a href="#about">About</a>*/}
                {/*</div>*/}
                <div className="headerRight">
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Landing View
                    </Link>

                    <Link
                        to="/seconddataview"
                        className={location.pathname === "/seconddataview" ? "active" : ""}
                    >
                        Second Data View
                    </Link>
                </div>
            </div>
        </>
    );
}


export default Header;