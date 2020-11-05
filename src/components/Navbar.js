import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar">
			<h1 className="steve">Steve Dole</h1>
			<span className="links">
				<Link to="/about">
					<h1>About</h1>
				</Link>
				<Link to="/projects">
					<h1>Projects</h1>
				</Link>
				<Link to="/skills">
					<h1>Skills</h1>
				</Link>
				<Link to="/contact">
					<h1>Contact</h1>
				</Link>
			</span>
		</div>
	);
}

export default Navbar;
