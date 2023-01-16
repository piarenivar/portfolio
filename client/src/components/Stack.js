import React from "react";
import Tech from './Tech';
import stack from '../stack-list';

function renderTech(tech) {
    return <Tech key={tech.id} url={tech.url} tech={tech.tech} />
}

export default function Stack() {
    return (
        <div id="stack">
            <h2>Tech Stack</h2>
            <div className="stack">
                {stack.map(renderTech)}
            </div>
        </div>
    );
}
