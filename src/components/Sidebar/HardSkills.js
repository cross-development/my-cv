//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import '../../styles/main.css';

const HardSkills = ({ hardSkills }) => (
	<div className="skills-container">
		<h3 className="skills-title">Tech Skills</h3>
		<ul>
			{hardSkills.map(({ id, tech_skill }) => (
				<li key={id} className="skills-item">
					<span>{tech_skill}</span>
				</li>
			))}
		</ul>
	</div>
);

HardSkills.propTypes = {
	hardSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HardSkills;
