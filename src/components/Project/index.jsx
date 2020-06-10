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
    <div align="left">
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
                    <div className="project-item" align="center">
                        <Card
                            hoverable
                            style={{ width:100 }}
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
            <hr id="line" />
            <div className="project" >
                <div className="project-item">
                    <Card
                        hoverable
                        style={{ width:100 }}
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
                </div>
            </div>
            <hr id="line" />
            <div className="project" >
                <div className="project-item" align="center">
                    <Card
                        hoverable
                        style={{ width:100 }}
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
                        style={{ width:100 }}
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
                    <p>Tạo playlist nghe nhạc theo source nhạc có sẵn</p>
                    <p>Dùng Reactjs. Không có gì đặc sắc. </p>
                </div>
            </div>
            <hr id="line"/>

           

            <div className="project" >
                <div className="project-item" align="center">
                    <Card
                        hoverable
                        style={{ width:100 }}
                        cover={<img alt="example" src="https://www.epmmagazine.com/downloads/6952/download/Automation%20concept.jpg?cb=174f59890b7416f88b2bb9180b10ca30&w=1000" />}
                    >
                        <Meta title="Tinder Auto Swiper" />
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
            <hr id="line" />

            <div className="project" >
                <div className="project-item" align="center">
                    <Card
                        hoverable
                        style={{ width:100 }}
                        cover={<img alt="example" src="https://www.bravo.com.vn/Uploads/_images/Online/SEO/Xuyen_D5.jpg" />}
                    >
                        <Meta title="Quản lý sinh viên" />
                    </Card>
                </div>
                <div className="project-item" align="left">
                    <strong>Link Github : </strong> <a href="https://github.com/dqbaoptit/QuanLiDiemSV" target="_blank"  rel="noopener noreferrer">Phần mềm quản lý sinh viên</a>
                    <h3>Mô tả :</h3>
                    <br />
                    <p>Sản phẩm là đồ án môn Cấu trúc dữ liệu và Giải thuật. </p>
                    <p>Language : C++ </p>
                    <p>Đồ hoạ Console, library Ncurses</p>
                </div>
            </div>
        </div>

        </div>
    </div>
    )
}