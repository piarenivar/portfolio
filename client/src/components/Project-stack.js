import React from "react";
import projects from "../project-list";

export default function Projectstack(props) {
    return (
        <div className="project-stack-containter">
            {props.tech.map((tech_item, idx) => {
                return <span className="project-stack" key={idx}>{tech_item}</span>
            })}
        </div>
    );
}
