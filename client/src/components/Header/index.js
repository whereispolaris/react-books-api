import React from "react";
import { Link } from "react-router-dom";
import bookLogo from "./books.png"
import "./Header.css";

const Header = () => {
    return (
        <div className="container">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}><img src={bookLogo} alt="book icon" /></Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;