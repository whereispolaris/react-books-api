import React from "react";

const Header = () => {
    return (
        <div className="container">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#">LOGO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Saved</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;