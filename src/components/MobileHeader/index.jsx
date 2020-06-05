import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './index.css'
import { Radio } from 'antd';
import tick from '../../assests/tick.png';
import avatar from '../../assests/avt.png';

export default ()=>{

    const [selection, setSelection] = useState('');
    const handleChange=(e)=>{
        setSelection(e.target.value)
    }
    
    return(
        <div>
            <div className="m-header">
                <div className="m-header-left">
                    <div className="m-avatar-container" align="center">
                        <img src={avatar} alt="avatar" className="m-avatar"/>
                    </div>
                </div>
            </div>
            <div className="m-header-bot">
                <div className="m-name" align="center">
                    <h2>Dương Quốc Bảo</h2>
                    <div className="m-tick">
                        <img src={tick} alt="tick" width="30px" />
                    </div>
                </div>
                <div align="center" className="bio">
                    <p><strong>05 - 04 - 2000</strong></p>
                    <p>Fresher Web Front-end Developer </p>
                    <p>Mình muốn học hỏi và trau dồi kinh nghiệm để phục vụ cho công việc. Mục tiêu trở thành Full-stack Developer.</p>
                </div>
            </div>
            <div className="m-base">
                <Radio.Group value={selection} onChange={handleChange}  style={{ marginBottom: 16}}>
                    <Link to='/'> <Radio.Button value="medium" id="button-tab"><strong>Dòng thời gian</strong></Radio.Button></Link>
                    <Link to='/projects/'><Radio.Button value="large" id="button-tab"><strong>Dự án cá nhân</strong></Radio.Button></Link>
                    <Link to='/connect/'><Radio.Button value="large" id="button-tab"><strong>Connect</strong></Radio.Button></Link>
                </Radio.Group>
            </div>
        </div>
    )
}