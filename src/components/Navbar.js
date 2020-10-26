import React from 'react';
import './Navbar.css';

function Navbar() {
	return (
		<div className="navbar">
			<h1 className="steve">Steve Dole</h1>
			<span className="links">
				<h1>About</h1>
				<h1>Projects</h1>
				<h1>Contact</h1>
				<h1>Resume</h1>
			</span>
		</div>
	);
}

export default Navbar;
