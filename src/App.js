import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SkillsBar from './components/SkillsBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import AllProjects from './components/AllProjects';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={AboutMe} />
				<Route path="/contact" component={Contact} />
				<Route path="/projects" component={AllProjects} />
			</Switch>
		</Router>
	);
}

export default App;
