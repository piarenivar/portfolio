import React from "react";

export default function Intro() {
    return (
        <section className="intro">
            <div className="intro-left">
                <h3 className="hi">Hi, I'm Pablo</h3>
                <h1>I build websites.</h1>
                <p>I'm a freelance front-end web developer with experience handling every step of development & deployment to production. Currently learning TypeScript & Go.</p>
                <div>
                    <a href="#work">View Work</a>
                    <a href="#stack">View Tech Stack</a>
                </div>
            </div>
            <div className="intro-right"></div>
        </section>
    );
}
