import React from 'react';
import Skills from './Skills';
import './Skills';

function SkillsBar() {
	return (
		<div id="skills" className="skill">
			<h1>Skills</h1>
			<span className="skills-list">
				<h1>HTML</h1>
				<h1>CSS</h1>
				<h1>Javascript</h1>
				<h1>React</h1>
				<h1>Node.js</h1>
				<h1>PostgreSQL</h1>
				<h1>Material UI</h1>
				<h1>Python</h1>
			</span>
			{/* <span className="bar">
				<span>
					<Skills done="90" />
				</span>
				<span>
					<Skills done="90" />
				</span>
				<span>
					<Skills done="80" />
				</span>
				<span>
					<Skills done="80" />
				</span>
				<span>
					<Skills done="70" />
				</span>
				<span>
					<Skills done="70" />
				</span>
				<span>
					<Skills done="80" />
				</span>
				<span>
					<Skills done="70" />
				</span>
			</span> */}
		</div>
	);
}

export default SkillsBar;
