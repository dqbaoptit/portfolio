import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../ArrowButton';
import Heart from '../Heart';
import './index.css'


 export default (props) => {
   return(
		<div className="landing-container" align="center">
			<Heart />
			<div className="landing">
				<AnchorLink href={props.to}>
					<div className="landing-content" align="center">
						<button className="button">
							<h3>Hi, I'm <strong style={{fontSize:30}}>Quoc Bao</strong>.</h3>
							<p style={{color:"#fff"}}>I'm  a</p> <h3>Front-end Developer.</h3>
							<div className="button__horizontal"></div>
							<div className="button__vertical"></div>
						</button>
					</div>
				</AnchorLink>
			</div>
			<div className="arr-but">
				<AnchorLink href={props.to}><Button /></AnchorLink>
			</div>
		</div>
    )
   }