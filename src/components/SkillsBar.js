import React from 'react';
import Skills from './Skills';
import './Skills';
import Colab from '../images/colab.png';
import Fast from '../images/fast.png';
import Dynamic from '../images/optimal.png';
import Responsive from '../images/responsive.png';

function SkillsBar() {
	return (
		<div id="skills" className="skill">
			<h1>Skills</h1>
			<div className="skills-container">
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
				<div className="keywords">
					<h1>Responsive</h1>
					<img src={Responsive} alt="responsive-logo" />
					<h1>Optimal</h1>
					<img src={Fast} alt="fast-logo" />
					<h1>Dynamic</h1>
					<img src={Dynamic} alt="dynamic-logo" />
					<h1>Collaboration</h1>
					<img src={Colab} alt="colab-logo" />
				</div>
			</div>
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
