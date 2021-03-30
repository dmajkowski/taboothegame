import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import '../styles/Menu.css'



const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className={isMenuOpen ? "menu--opened" : "menu"}>
            <button onClick={toggleMenu} className={`menu-btn ${isMenuOpen ? "opened" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}

export default Menu;