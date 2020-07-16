import React from 'react';
import GitLogo from './../Images/GitHub-Mark-Light-64px.png';

const ArticlePage = () =>(
	<>
		<section className="project-page">
			<h2 id="project">Projects</h2>
			<div className="project-flex">
				<div className="project-wrapper tower-defense">
					<h3> Tower Defense </h3>
					<button class="button tower-btn"></button>
					<p>
						This is a tower defense I created using Unity. The game has 20 levels with 5 different minion types and has a user friendly interface. It's an easy and fun game that you can try out!
					</p>
					<a href="https://github.com/CS4474-Team5-2020/TowerDefenceGame" className="git-button">
						<img src={GitLogo} alt="git icon" className="git-icon-project" />
					</a>
				</div>
				<div className="project-wrapper website">
					<h3> This Website </h3>
					<button class="button website-btn"></button>
					<p>
						I designed and built this website to showcase some of my work and to tell you a little bit about myself.
					</p>
				</div>
			</div>
		</section>
	</>
);

export default ArticlePage;
