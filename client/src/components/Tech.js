import React from "react";

export default function Tech (props) {
    return (
        <img src={props.url} alt={props.tech} className="tech"/>
    );
}
