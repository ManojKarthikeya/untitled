import React from "react";
import './header.styles.scss'

import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
        <div className="name">
            <Link to="/">SPANDANA SIRISINAHAL</Link>
        </div>
        <div className="options">
            <Link to="/about" className="option">
                ABOUT
            </Link>
            <Link to="/gallery"className="option">
                GALLERY
            </Link>
            <Link to="/contact"className="option">
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;