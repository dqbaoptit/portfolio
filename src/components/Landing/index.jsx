import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../ArrowButton';
import Heart from '../Heart';
import './index.css'


 export default (props) => {
   return(
		<div className="landing-container">
			<div className="landing">
				<AnchorLink href={props.to}>
					<div className="landing-content" align="center">
						<button class="button">
							<h3>Hi, I'm <strong>Quoc Bao</strong>.</h3>
							<p>I'm  a</p> <h3>Front-end Developer.</h3>
							<div class="button__horizontal"></div>
							<div class="button__vertical"></div>
						</button>
					</div>
				</AnchorLink>
			</div>
			<Heart />

			<div className="arr-but">
				<AnchorLink href={props.to}><Button /></AnchorLink>
			</div>
		</div>
    )
   }