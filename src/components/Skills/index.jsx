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
    const data = [[html,75,"Intermediate"],[CSS3,65,"Intermediate"],[js,70,"Intermediate"],[react,65,"Intermediate"],[redux,45,"Beginner+"],[git,40,"Beginner"]];
    return(
            <div className="skills-container">
                <div className="info-header">
                    <FireOutlined style={{fontSize:30}}/>
                    <h3>Kỹ năng</h3>
                </div>
                <div align="left">
							<div>
                            {
                            data.map((img,i) =>(
									<div key={i}  className='item-container' style={{ padding: 10 }} >
										<img src={img[0]}  className="item" alt="skill" width='100px' height="50px"/>
                                        <div className="skill-liner">
                                            <div className = "skill-line gradient" style={{width:`${img[1]}%`}} />
                                            <h3>{img[2]}</h3>
                                        </div>
                                    </div>
                                    ))
                            }
							</div>
						</div>
            </div>
    )
}