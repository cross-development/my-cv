//Core
import React from 'react';
//Components
import Contacts from './Contacts';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';
import ProfilePhoto from './ProfilePhoto';
import LanguageSkills from './LanguageSkills';
//Styles
import '../../styles/main.css';

const Sidebar = () => (
	<aside className="sidebar">
		<ProfilePhoto />

		<Contacts />

		<HardSkills />

		<SoftSkills />

		<LanguageSkills />
	</aside>
);

export default Sidebar;
