//Core
import React from 'react';
//Styles
import '../../styles/main.css';

const WorkExp = () => (
	<div className="work-container">
		<h3 className="about-me-title">Work Experience</h3>

		<div>
			<h4 className="profession-title">
				Junior Front-end developer <span className="profession-company">Freelance</span>
			</h4>
			<span className="time-period">
				December 2019 - Present <span>|</span> Ukraine
			</span>

			<ul className="profession-duties">
				Responsibilities:
				<li>Verbal and written communication with customers;</li>
				<li>One-on-One meeting with the customer to understand business requirements;</li>
				<li>Design, development, and debugging of consumer-based products;</li>
				<li>All-time education, learning, and investigation of new front-end trends.</li>
			</ul>

			<ul className="profession-duties">
				Involved technologies & tools:
				<li>HTML5;</li>
				<li>CSS3/SASS/styled-components;</li>
				<li>JavaScript;</li>
				<li>React.js;</li>
				<li>Redux;</li>
				<li>Node.js;</li>
				<li>Firebase.</li>
			</ul>
		</div>

		<div>
			<h4 className="profession-title">
				Financial manager of Finance and Credit Department{' '}
				<span className="profession-company">UkrAgroCom LLC</span>
			</h4>
			<span className="time-period">
				December 2012 - Present <span>|</span> Ukraine
			</span>

			<ul className="profession-duties">
				Responsibilities:
				<li>cooperation with banks, insurance, and audit companies;</li>
				<li>financial reporting;</li>
				<li>budget planning.</li>
			</ul>
		</div>
	</div>
);

export default WorkExp;
