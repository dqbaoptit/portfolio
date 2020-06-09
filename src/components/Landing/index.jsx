import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../ArrowButton';
import './index.css'


 export default () => {
   return(
	   <div className="landing-container">
        <div className="landing">
		  <div className="landing-content" align="center">
			<h3>Hi, I'm <strong>Quoc Bao</strong>.</h3>
			<h3>I'm  a front-end website developer.</h3>
		  </div>
        </div>
		<div className="arr-but">
        	<AnchorLink href='#main'><Button /></AnchorLink>
		</div>
		</div>
    )
   }