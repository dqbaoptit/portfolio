import React from 'react'
import './index.css'
import logo from '../../assests/ptitlogo.png';
import coding from '../../assests/coding.jpg';
import avatar from '../../assests/avt.png';
import Education from './education';
import Exper from './exper';
import Skills from './skills';
export default (props)=>{
    const {school} = props;
    const {type} = props;
    let content;
    if(type==="education")
        content = <Education />
    else if(type==="exper")
        content= <Exper />
    else if(type==="skills")
        content = <Skills />
    return(
        <div align="center">
            <div className='container'>
                <div className="postman">
                    <img src={avatar} alt="avatar" />
                    <div className="details">
                        <div align="left">
                            <div className="name">
                                <a href="/portfolio"><strong>Dương Quốc Bảo</strong></a>
                                <p>đã cập nhật sự kiện.</p>
                            </div>
                            <div className="status">
                                <p className="time"><strong>{props.time} </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    {school && <div><h5>Học viện Công nghệ Bưu Chính Viễn Thông
                    <br />TP.HCM </h5> 
                    <img src={logo} alt="logo" width="100px"/></div>
                    }
                    {type==="exper" && <img src={coding} alt="coding" width="200px" />}
                    <div className="content" align="left">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}