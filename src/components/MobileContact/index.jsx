import React from 'react';
import {GooglePlusOutlined,PhoneOutlined,BookOutlined,FacebookOutlined,BankOutlined,InstagramOutlined,GithubOutlined,LinkedinFilled} from '@ant-design/icons'
import Light from '../../assests/light.png';
import Earth from '../Contact/icons';
import './index.css'

export default ()=>{
    return(
        <div className="m-contact-container">
            <div className="info-header">
                <span>
                    <Earth />
                </span>
                <h3>Giới thiệu</h3>
            </div>
            <div className="info-container">
                <div className="info" align="left">
                    <BankOutlined />
                    <p>Học Information Technology tại <strong> Học viện Công nghệ Bưu chính Viễn thông cơ sở tại TP.HCM </strong> khoá <strong>2018 - 2023</strong></p> 
                </div>
                <div className="info" align="left">
                        <BankOutlined />
                        <p>Sống tại  <strong> 97 Man Thiện phường Hiệp Phú - Quận 9 - Thành phố Hồ Chí Minh</strong></p>
                </div>
                <div className="info">
                    <BookOutlined />
                    <p>Làm việc tại  <strong>Freelance</strong></p>        
                </div>
                <div className="info">
                    <PhoneOutlined />
                    <p> + 84 973 286 174</p>
                </div>
                <div className="info">
                    <GooglePlusOutlined />
                    <p> dqbaoptit@gmail.com</p>
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