import React, { useState } from 'react'


export default function Navbar({ current, onNavigate }) {
const [open, setOpen] = useState(false)


const handleNav = (r) => {
onNavigate(r)
setOpen(false)
}


return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
<div className="container">
<a className="navbar-brand" href="#" onClick={(e)=>{e.preventDefault(); handleNav('home')}}>TuNombre</a>
<button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
<span className="navbar-toggler-icon"></span>
</button>


<div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<a className={`nav-link ${current === 'home' ? 'active' : ''}`} href="#" onClick={(e)=>{e.preventDefault(); handleNav('home')}}>Inicio</a>
</li>
<li className="nav-item">
<a className={`nav-link ${current === 'about' ? 'active' : ''}`} href="#" onClick={(e)=>{e.preventDefault(); handleNav('about')}}>Sobre mí</a>
</li>
<li className="nav-item">
<a className={`nav-link ${current === 'projects' ? 'active' : ''}`} href="#" onClick={(e)=>{e.preventDefault(); handleNav('projects')}}>Proyectos</a>
</li>
<li className="nav-item">
<a className={`nav-link ${current === 'contact' ? 'active' : ''}`} href="#" onClick={(e)=>{e.preventDefault(); handleNav('contact')}}>Contacto</a>
</li>
</ul>
</div>
</div>
</nav>
)
}