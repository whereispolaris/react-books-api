import React from "react";
import { Link } from "react-router-dom";
import bookLogo from "./books.png"

const Header = () => {
    return (
        <div className="container">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}><img src={bookLogo} /></Link>
                </li>
                <li className="nav-item">
                    {/* Search: onClick focus on Search Bar */}
                    <Link className="nav-link" to={"/"}>Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/saved"}>Saved</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;