import './App.css'
import { About, Contact, Hero, Nav, Projects, Skills } from './components'

function App() {
	return (
		<div className=" ">
			<section id="hero" className="h-screen  snap-center relative p-12">
				<Hero />
			</section>
			<section id="about" className="h-screen flex flex-col justify-center  snap-center">
				<About />
			</section>
			<section id="projects" className="h-screen flex flex-col justify-center snap-center">
				<Projects />
			</section>
			<section id="skills" className="h-screen flex flex-col justify-center snap-center">
				<Skills />
			</section>
			<section id="contact" className="h-screen flex flex-col justify-center snap-center">
				<Contact />
			</section>
		</div>
	)
}

export default App
