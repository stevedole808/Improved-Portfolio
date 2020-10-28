import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
	return (
		<div className="navbar">
			<h1 className="steve">Steve Dole</h1>
			<span className="links">
				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
				>
					<h1>About</h1>
				</Link>
				<Link
					activeClass="active"
					to="projects"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
				>
					<h1>Projects</h1>
				</Link>
				<Link
					activeClass="active"
					to="skills"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
				>
					<h1>Skills</h1>
				</Link>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
				>
					<h1>Contact</h1>
				</Link>
			</span>
		</div>
	);
}

export default Navbar;
