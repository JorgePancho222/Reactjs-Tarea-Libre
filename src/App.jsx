import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default function App() {
// 'route' controla la sección visible para mantenerlo como SPA simple
const [route, setRoute] = useState('home')


return (
<div>
<Navbar current={route} onNavigate={setRoute} />


<main className="container mt-5 pt-4">
{route === 'home' && <Home onNavigate={setRoute} />}
{route === 'about' && <About />}
{route === 'projects' && <Projects />}
{route === 'contact' && <Contact />}
</main>


<footer className="bg-dark text-light py-4 mt-5">
<div className="container text-center">
<small>© {new Date().getFullYear()} Tu Nombre — Portafolio</small>
</div>
</footer>
</div>
)
}
