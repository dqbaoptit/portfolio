import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Project from '../../components/Project';
import scr from '../../assests/avt.png'
import './index.css';
import { BackTop } from 'antd';

export default ()=>{
    return(
        <div align="center">
            <div className="root">
                <div>
                    <div className="Header">
                        <Header name="Dương Quốc Bảo" avatar={scr} />
                    </div>
                </div>
                <div>
                    <Project />
                </div>
                <BackTop />
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </div>
    )
}