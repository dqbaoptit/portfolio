import React from 'react';
import {FacebookOutlined,BankOutlined,InstagramOutlined,GithubOutlined,LinkedinFilled} from '@ant-design/icons'
import Light from '../../assests/light.png';
import Earth from './icons';
import './index.css'

export default ()=>{
    return(
        <div className="contact-container">
            <div className="info-header">
                <span>
                    <Earth />
                </span>
                <h3>Giới thiệu</h3>
            </div>
            <div align="left" className="bio">
                <p>05 - 04 - 2000</p>
                <p>Fresher Web Front-end Developer </p>
                <p>Mình muốn học hỏi và trau dồi kinh nghiệm để phục vụ cho công việc.</p> <p> Mục tiêu trở thành Full-stack Developer.</p>
            </div>
            <hr id="line" />
            <div className="info-container">
                <div className="info" align="left">
                    <BankOutlined />
                    <p>Học Information Technology <p><strong> Học viện Công nghệ Bưu chính Viễn thông cơ sở tại TP.HCM </strong></p></p>
                </div>
                <div className="info">
                        <FacebookOutlined />
                        <a href="https://facebook.com/quocbao.duong.399" target="_blank"  rel="noopener noreferrer" >Dương Quốc Bảo</a>
                </div>
                <div className="info">
                    <InstagramOutlined />
                    <a href="https://instagram.com/quocbao.___" target="_blank"  rel="noopener noreferrer" >quocbao.___</a>
                </div>
                <div className="info">
                <GithubOutlined />
                    <a href="https://github.com/dqbaoptit"  target="_blank" rel="noopener noreferrer">dqbaoptit</a>
                </div>
                <div className="info">
                    <LinkedinFilled />
                    <a href="https://linkedin.com/in/duong-bao-a8934119a?fbclid=IwAR2fMJmXKhy1RfknijrDEiwpuN71bHYNzRqhGjZDrqYf3gejA31maR8zHpI" target="_blank"  rel="noopener noreferrer">duong-bao-a8934119a</a>
                </div>
            </div>
            <div className="cer" align="center">
               <img src={Light} alt="spot" width="300px"/>
            </div>
        </div>
    )
}