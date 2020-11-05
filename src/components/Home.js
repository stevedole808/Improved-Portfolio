import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import SkillsBar from './SkillsBar';

function Home() {
	return (
		<div>
			<About />
			<Projects />
		</div>
	);
}

export default Home;
