import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'


export default function Projects() {
return (
<section>
<h2>Proyectos</h2>
<p>Algunos trabajos destacados.</p>


<div className="row">
{projects.map(p => (
<div className="col-md-6" key={p.id}>
<ProjectCard project={p} />
</div>
))}
</div>
</section>
)
}