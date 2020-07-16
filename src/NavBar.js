import React from 'react';

const NavBar = () =>{
	return(
		<nav>
			<ul className="navBar-list">
				<li>
					<a href="#home-start">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#education">Education</a>
				</li>
				<li>
					<a href="#project">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
