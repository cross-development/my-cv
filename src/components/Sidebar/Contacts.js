//Core
import React from 'react';
//Style
import '../../styles/main.css';

const Contacts = () => (
	<div className="contacts-container">
		<h3 className="contacts-title">Contacts</h3>
		<div>
			<span className="contact-link-type">C:</span>
			<a className="contact-link tel" href="tel:380951138598">
				+38 050 995 83 45
			</a>
		</div>
		<div>
			<span className="contact-link-type">E:</span>
			<a className="contact-link" href="mailto:derda_vs@ukr.net">
				derda_vs@ukr.net
			</a>
		</div>
	</div>
);

export default Contacts;
