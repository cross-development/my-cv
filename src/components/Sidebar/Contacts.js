//Core
import React from 'react';
//Style
import '../../styles/main.css';

const Contacts = () => (
	<div className="contacts-container">
		<h3 className="contacts-title">Contacts</h3>

		<div className="contact-address">
			<p>Urlivska Street, 24 Kyiv, Ukraine</p>
		</div>

		<div>
			<span className="contact-link-type">C:</span>
			<a className="contact-link tel" href="tel:380509958345">
				+38(050)-99-58-345 (telegram)
			</a>
		</div>

		<div>
			<span className="contact-link-type">E:</span>
			<a className="contact-link" href="mailto:derdavitaliy@gmail.com">
				derdavitaliy@gmail.com
			</a>
		</div>

		<div>
			<span className="contact-link-type">in:</span>
			<a className="contact-link" href="https://www.linkedin.com/in/vitaliy-derda/">
				linkedin.com/in/vitaliy-derda
			</a>
		</div>

		<div>
			<span className="contact-link-type">gh:</span>
			<a className="contact-link" href="https://github.com/cross-development">
				github.com/cross-development
			</a>
		</div>
	</div>
);

export default Contacts;
