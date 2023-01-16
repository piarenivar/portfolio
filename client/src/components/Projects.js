import React from "react";
import Project from './Project';
import projects from '../project-list';

function renderProject(project) {
    return <Project key={project.id} imgurl={project.imgurl} url={project.url} type={project.type} header={project.header} p={project.p} github={project.github} tech={project.tech} />
}

export default function Projects() {
    return (
        <section id="work" className="projects">
            <h2>Work & Projects</h2>
            {projects.map(renderProject)}
        </section>
    );
}
