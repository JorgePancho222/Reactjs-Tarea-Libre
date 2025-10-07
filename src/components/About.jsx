import React from 'react'


export default function About() {
return (
<section>
<h2>Sobre mí</h2>
<p>Breve biografía: experiencia, habilidades y tecnologías que usas.</p>


<div className="row mt-4">
<div className="col-md-6">
<h5>Habilidades</h5>
<ul>
<li>JavaScript / ES6+</li>
<li>React</li>
<li>Node.js</li>
<li>Bootstrap & Responsive Design</li>
</ul>
</div>
<div className="col-md-6">
<h5>Educación</h5>
<p>Licenciatura / Cursos / Certificaciones</p>
</div>
</div>
</section>
)
}