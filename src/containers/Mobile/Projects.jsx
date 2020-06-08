import React from 'react'
import Header from '../../components/MobileHeader';
import Footer from '../../components/Footer';
import Project from '../../components/MobileProject';
import './index.css';
import { BackTop } from 'antd';

export default ()=>{
    return(
        <div align="center">
        <div className="m-Header">
            <Header />
        </div>
        <div>
            <Project />
        </div>
        <BackTop />
        <Footer />
        </div>
    )
}