import React from 'react'


export default function ProjectCard({ project }) {
return (
<div className="card mb-4 shadow-sm">
<div className="card-body">
<h5 className="card-title">{project.title}</h5>
<p className="card-text">{project.description}</p>
<div className="mb-2">
{project.tags.map((t, i) => (
<span key={i} className="badge bg-secondary me-1">{t}</span>
))}
</div>
<a href={project.link} className="btn btn-outline-primary" target="_blank" rel="noreferrer">Ver</a>
</div>
</div>
)
}