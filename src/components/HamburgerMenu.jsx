import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import '../styles/HamburgerMenu.css'


const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className={`menu ${isMenuOpen ? "menu--opened" : "menu--closed"}`}>
            <button onClick={toggleMenu} className={`menu-btn ${isMenuOpen ? "opened" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className="menu__items">
                <li className="menu__item"><Link to="/mainmenu">Strona główna</Link></li>
                <li className="menu__item"><Link to="/game">Zacznij od nowa</Link></li>
                <li className="menu__item"><Link to="">TBA</Link></li>
                <li className="menu__item">TBA</li>
                <li className="menu__item">TBA</li>
            </ul>
        </div>
    );
}

export default Menu;
