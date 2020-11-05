import React from 'react';
import './AboutMe.css';
import colab from '../images/colab.png';
import fast from '../images/fast.png';
import optimal from '../images/optimal.png';
import responsive from '../images/responsive.png';
import basketball from '../images/basketball.jpg';

function AboutMe() {
	return (
		<div className="app">
			<div className="header">
				<section className="top-container">
					<h1> - Learn About Me!</h1>
					<h2>I’M AN AMBITIOUS 19 YEAR OLD DEVELOPER BASED ON OAHU, HAWAII</h2>
					<p>
						Welcome to my Portfolio! I am a Full Stack Web Developer who has
						attended Lambda School. During my time there, I learned HTML, CSS,
						Javascript, React.js, Node.js, and Python. Please check out my
						projects and feel free to contact me! I currently reside in Oahu,
						Hawaii and relocation is always up for discussion, but if not I
						would be able to work remotely as well!
					</p>
				</section>
				<section className="skills">
					<h2>My Skills</h2>
					<div className="skills-container">
						<ul className="list-1">
							<li>Javascript</li>
							<li>HTML</li>
							<li>React/Redux</li>
							<li>Node/Express</li>
							<li>Material UI</li>
							<li>Flask</li>
						</ul>
						<ul className="list-2">
							<li>Python</li>
							<li>PostgreSQL</li>
							<li>SQLite</li>
							<li>CSS</li>
							<li>SASS</li>
							<li>Bootstrap</li>
						</ul>
					</div>
				</section>
			</div>
			<section className="icons">
				<img src={responsive} alt="" />
				<img className="optimal" src={optimal} alt="" />
				<img src={fast} alt="" />
				<img src={colab} alt="" />
			</section>
			<section className="descriptions">
				<h3>Responsive Websites</h3>
				<h3>Responsive Websites</h3>
				<h3>Responsive Websites</h3>
				<h3>Responsive Websites</h3>
			</section>
			<div className="bottom">
				<section className="likes">
					<h1> - Things I Like To Do</h1>
					<ul className="list-3">
						<li>Play Basketball</li>
						<li>Spend Time With Friends {'&'} Family</li>
						<li>Go To The Gym</li>
						<li>Listen To Podcasts</li>
						<li>Travel...</li>
						<li>Eat GOOD Food</li>
					</ul>
				</section>

				<img className="basketball-img" src={basketball} alt="" />
			</div>
		</div>
	);
}

export default AboutMe;
