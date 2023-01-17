import React, { useState } from "react";
import Moon from './Moon';
import Sun from './Sun';

export default function Nav(props) {
    const [menu, setMenu] = useState(true);
    function openMenu() {
        setMenu(!menu);
    }

    return (
        <nav id="nav">
            <a href="/" id="nav-brand" className="nav-brand">Pablo Arenivar</a>
            <div className={menu ? 'nav-links' : 'nav-links nav-links-active'}>
                <a onClick={openMenu} href="#work" className="nav-link">Work & Projects</a>
                <a onClick={openMenu} href="#stack" className="nav-link">Tech Stack</a>
                <a onClick={openMenu} href="#about" className="nav-link">About</a>
                <a onClick={openMenu} href="#contact" className="nav-link">Contact</a>
                {/* <a onClick={openMenu} href="#contact" className="nav-link nav-resume">Resume</a> */}
            </div>
            <div className="rev">
                <div onClick={openMenu} className={menu ? 'hamburger not-active' : 'hamburger active'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button onClick={props.toggleTheme}><Moon /><Sun /></button>
            </div>
        </nav>
    );
}
