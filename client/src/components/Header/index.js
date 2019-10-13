import React from "react";

const Header = () => {
    return (
        <div className="container">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">REACT BOOKS</a>
                </li>
                <li className="nav-item">
                    {/* Search: onClick focus on Search Bar */}
                    <a className="nav-link" href="/">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/saved">Saved</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;