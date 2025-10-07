import React from 'react'


export default function Home({ onNavigate }) {
return (
<section className="text-center">
<div className="row align-items-center">
<div className="col-lg-6">
<h1 className="display-5">Hola, soy Tu Nombre</h1>
<p className="lead">Desarrollador / Diseñador / Ingeniero de software. Creo productos digitales que la gente disfruta usar.</p>
<p>
<button className="btn btn-primary me-2" onClick={() => onNavigate('projects')}>Ver proyectos</button>
<button className="btn btn-outline-primary" onClick={() => onNavigate('contact')}>Contactarme</button>
</p>
</div>
<div className="col-lg-6 d-none d-lg-block text-center">
<div className="profile-placeholder rounded-circle mx-auto" style={{width:220,height:220,display:'inline-block'}}>
{/* Aquí podrías poner una <img> con tu foto real */}
</div>
</div>
</div>
</section>
)
}