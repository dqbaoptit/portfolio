import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './index.css'
import { Radio } from 'antd';

import tick from '../../assests/tick.png';
export default (props)=>{
    const [selection, setSelection] = useState('');
    const handleChange=(e)=>{
        setSelection(e.target.value)
    }

    return (
        <div>
        <div className="header">
            <div className="header-left">
                <div className="avatar-container" align="center">
                    <img src={props.avatar} alt="avatar" className="avatar"/>
                </div>
                <div className="name">
                    <div>
                        <h2>{props.name}</h2>
                    </div>
                    <div className="tick">
                        <img src={tick} alt="tick" width="30px" />
                    </div>
                </div>
               
            </div>
        </div>
        <div className="base">
                <Radio.Group value={selection} onChange={handleChange}  style={{ marginBottom: 16,  marginLeft:250 }}>
                    <Link to='/'><Radio.Button  id="button-tab" value="small"><strong>Dòng thời gian</strong></Radio.Button></Link>
                    <Link to='/intro/'> <Radio.Button value="medium" id="button-tab"><strong>Giới thiệu</strong></Radio.Button></Link>
                    <Link to='/projects/'><Radio.Button value="large" id="button-tab"><strong>Dự án cá nhân</strong></Radio.Button></Link>
                    <Link to='/connect/'><Radio.Button value="large" id="button-tab"><strong>Connect</strong></Radio.Button></Link>
                </Radio.Group>
        </div>
        </div>
    )
}