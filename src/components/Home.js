import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import SkillsBar from './SkillsBar';

function Home() {
	return (
		<Router>
			<About />
			<Projects />
			<SkillsBar />
			<Contact />
		</Router>
	);
}

export default Home;
