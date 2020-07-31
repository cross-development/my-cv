//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import '../../styles/main.css';

const SoftSkills = ({ softSkills }) => (
	<div className="skills-container">
		<h3 className="skills-title">Soft Skills</h3>
		<ul>
			{softSkills.map(({ id, soft_skill }) => (
				<li key={id} className="skills-item">
					<span>{soft_skill}</span>
				</li>
			))}
		</ul>
	</div>
);

SoftSkills.propTypes = {
	softSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SoftSkills;
