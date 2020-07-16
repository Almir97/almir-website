import React from 'react';
import GitLogo from './../Images/GitHub-Mark-Light-64px.png';
import LinkedinLogo from './../Images/LI-In-Bug.png';

const ContactPage = () => (
	<>
		<footer className="contact-page">
			<h2 id ="contact"> Contact</h2>
				<div className="flex-icons">
					<a href="https://github.com/Almir97" className="git-button">
						<img src={GitLogo} alt="git icon" className="git-icon-contact" />
					</a>
					<a href="https://linkedin.com/in/almir-smailovic" className="git-button">
						<img src={LinkedinLogo} alt="linkedin icon" className="git-icon-contact" />
					</a>
				</div>
				<p>
					asmailov@uwo.ca
				</p>
				<p>
					Almir Smailovic © 2020
				</p>
		</footer>
	</>
);

export default ContactPage;
