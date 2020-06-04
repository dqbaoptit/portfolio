import React from 'react' 
import avatar from '../../assests/avt.png';
import './index.css'
import 'antd/dist/antd.css';

export default () =>{
    return(
        <div align="center" className="nav">
            <div className="avt-container">
                <img src={avatar} alt="avatar" width='30px' />
            </div>
            <div className="button" >
                <span className="button-item"><strong>Dương Quốc Bảo</strong> </span>
                <span className="button-item"><strong>Dòng thời gian</strong> </span>
            </div>
        </div>
    )
}