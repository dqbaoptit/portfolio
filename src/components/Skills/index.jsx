import React from 'react'
import {FireOutlined} from '@ant-design/icons';
import CSS3 from '../../assests/css3.jpg';
import git from '../../assests/git.png';
import html from '../../assests/html.jpg';
import js from '../../assests/js.png';
import react from '../../assests/react-hooks.png';
import redux from '../../assests/redux.jpg';

import './index.css'

export default ()=>{
    const data = [html,CSS3,js,react,redux,git];
    return(
            <div className="skills-container">
                <div className="info-header">
                    <FireOutlined style={{fontSize:30}}/>
                    <h3>Kỹ năng</h3>
                </div>
                <div align="center">
							<div>
                            {
                            data.map((img,i) =>(
									<div key={i}  className='item-container' style={{ margin: 10 }} >
										<img src={img}  className="item" alt="skill" width='200px'/>
                                    </div>
                                    ))
                            }
							</div>
						</div>
            </div>
    )
}