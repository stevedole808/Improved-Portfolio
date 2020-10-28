import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SkillsBar from './components/SkillsBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
