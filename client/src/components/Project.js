import React from "react";
import Projectstack from './Project-stack';

export default function Project(props) {
    return (
        <div className="project">
            <a href={props.url} target="_blank" className="img-link">
                <span>Visit Site</span>
                <img src={props.imgurl} />
            </a>
            <div className="project-right">
                <h4>{props.type}</h4>
                <h3>{props.header}</h3>
                <p>{props.p}</p>
                <div className="project-list-tech">
                    <Projectstack tech={props.tech} />
                </div>
                <div>
                    <a href={props.url} target="_blank">Visit Site</a>
                    <a href={props.github} target="_blank">See Code</a>
                </div>
            </div>
        </div>
    );
}
