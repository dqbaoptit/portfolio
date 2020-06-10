import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../ArrowButton';
import './index.css'


 export default () => {
   return(
	   <div className="landing-container">
        <div className="landing">
			<AnchorLink href='#main'>
				<div className="landing-content" align="center">
					<button class="button">
						<h3>Hi, I'm <strong>Quoc Bao</strong>.</h3>
						<h3>I'm  a Front-end Developer.</h3>
						<div class="button__horizontal"></div>
						<div class="button__vertical"></div>
					</button>
				</div>
			</AnchorLink>
        </div>
		<div className="arr-but">
        	<AnchorLink href='#main'><Button /></AnchorLink>
		</div>
		</div>
    )
   }