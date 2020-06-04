import React from 'react';
import './index.css'
import {ProjectOutlined} from '@ant-design/icons'
import snake from '../../assests/snake.jpg';
import gif from '../../assests/giphy.jpeg';
import music from '../../assests/music.jpeg';
import { Card } from 'antd';

const { Meta } = Card;
export default()=>{
    return(
    <div align="center">
    <div className="Project">
        <div className="card">
            <div className="card-header">
                <div className="info-header">
                    <ProjectOutlined />
                    <h3>Projects</h3>
                </div>
            </div>
        </div>
        <div className="projects">
            <div className="project" >
                <div className="project-item">
                    <Card
                        hoverable
                        style={{ width:240 }}
                        cover={<img alt="example" src={snake} />}
                    >
                        <Meta title="Classic Snake" />
                        <a href="https://dqbaoptit.github.io/snake-reactjs" target="_blank"  rel="noopener noreferrer">Demo</a>
                    </Card>
                </div>
                <div className="project-item" align="left">
                    <strong>Link Github : </strong> <a href="https://github.com/dqbaoptit/snake-reactjs" target="_blank"  rel="noopener noreferrer"> Snake - React.JS</a>
                    <br />
                    <h3>Mô tả :</h3>
                    <br />
                    <p>Sử dụng logic game Snake cổ điển</p>
                    <p>Dùng CSS và Reactjs để tạo animation</p>
                </div>
            </div>
            <hr id="line" />
            <div className="project" >
                <div className="project-item" align="center">
                    <Card
                        hoverable
                        style={{ width:240 }}
                        cover={<img alt="example" src={gif} />}
                    >
                        <Meta title="Let's GIF" />
                        <a href="https://dqbaoptit.github.io/Gifs" target="_blank"  rel="noopener noreferrer">Demo</a>
                    </Card>
                </div>
                <div className="project-item" align="left">
                    <strong>Link Github : </strong> <a href="https://github.com/dqbaoptit/Gifs" target="_blank"  rel="noopener noreferrer"> Let's GIF</a>
                    <h3>Mô tả :</h3>
                    <br />
                    <p>Sử dụng API Giphy</p>
                    <p>Áp dụng Debouce Searching, </p>
                </div>
            </div>
            <hr id="line" />
            <div className="project" >
                <div className="project-item" align="center">
                    <Card
                        hoverable
                        style={{ width:240 }}
                        cover={<img alt="example" src={music} />}
                    >
                        <Meta title="MP3 Player" />
                        <a href="https://dqbaoptit.github.io/mp3-player" target="_blank"  rel="noopener noreferrer">Demo</a>
                    </Card>
                </div>
                <div className="project-item" align="left">
                    <strong>Link Github :</strong> <a href="https://github.com/dqbaoptit/mp3-player" target="_blank"  rel="noopener noreferrer">MP3 Player</a>
                    <h3>Mô tả :</h3> 
                    <br />
                    <p>Tạo playlist nghe nhạc theo source có sẵn</p>
                    <p>Dùng Reactjs. Không có gì đặc sắc :D </p>
                </div>
            </div>
            <hr id="line"/>

            <div className="project" >
                <div className="project-item" align="center">
                    <Card
                        hoverable
                        style={{ width:240 }}
                        cover={<img alt="example" src="https://cdn1.vectorstock.com/i/1000x1000/60/40/businessman-finding-job-with-magnifier-vector-15376040.jpg" />}
                    >
                        <Meta title="Model JAV Searcher" />
                        <a href="https://dqbaoptit.github.io/jav" target="_blank"  rel="noopener noreferrer">Demo</a>
                    </Card>
                </div>
                <div className="project-item" align="left">
                    <strong>Link Github : </strong> <a href="https://github.com/dqbaoptit/jav" target="_blank"  rel="noopener noreferrer"> Model JAV Seacher</a>
                    <h3>Mô tả :</h3>
                    <br />
                    <p>Sử dụng API của Toidicodedao.</p>
                    <p>Áp dụng Debouce Searching</p>
                    <p>Áp dụng Lazy loading</p>
                    <h3 color="red">Có thể chứa nội dung 16+</h3>
                </div>
            </div>
            <div className="project" >
                <div className="project-item" align="center">
                    <Card
                        hoverable
                        style={{ width:240 }}
                        cover={<img alt="example" src="data:image/jpeg;base64,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" />}
                    >
                        <Meta title="Auto Swiper" />
                    </Card>
                </div>
                <div className="project-item" align="left">
                    <strong>Link Github : </strong> <a href="https://github.com/dqbaoptit/bot-tinder" target="_blank"  rel="noopener noreferrer"> Bot Tinder</a>
                    <h3>Mô tả :</h3>
                    <br />
                    <p>Sử dụng Selenium package tạo auto swipe </p>
                    <p>Video demo : <a href="https://www.facebook.com/quocbao.duong.399/videos/1195447684141686/" target="_blank" rel="noopener noreferrer"> Here </a>  </p>
                </div>
            </div>
        </div>

        </div>
    </div>
    )
}