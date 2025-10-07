import React, { useState } from 'react'


export default function Contact() {
const [form, setForm] = useState({name:'', email:'', message:''})
const [sent, setSent] = useState(false)


const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})


const handleSubmit = (e) => {
e.preventDefault()
// Aquí podrías integrar un servicio de correo o backend.
console.log('Enviando mensaje...', form)
setSent(true)
setForm({name:'', email:'', message:''})
}


return (
<section>
<h2>Contacto</h2>
{sent && <div className="alert alert-success">Gracias — tu mensaje ha sido enviado (simulado).</div>}


<form onSubmit={handleSubmit} className="mb-4">
<div className="mb-3">
<label className="form-label">Nombre</label>
<input name="name" value={form.name} onChange={handleChange} className="form-control" required />
</div>
<div className="mb-3">
<label className="form-label">Email</label>
<input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
</div>
<div className="mb-3">
<label className="form-label">Mensaje</label>
<textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" required />
</div>
<button className="btn btn-primary">Enviar</button>
</form>


<div>
<h5>Otras formas de contacto</h5>
<p>Email: <a href="mailto:tu@correo.com">tu@correo.com</a></p>
</div>
</section>
)
}