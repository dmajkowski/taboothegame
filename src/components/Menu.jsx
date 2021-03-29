import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import '../styles/Menu.css'



const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <button onClick={toggleMenu} className={`menu-btn ${isMenuOpen ? "opened" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
        </button>

    );
}

export default Menu;