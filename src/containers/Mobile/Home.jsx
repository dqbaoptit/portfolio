import React from 'react';
import Header from '../../components/MobileHeader';
import Contact from '../../components/MobileContact';
import Poster from '../../components/Poster';
import Footer from '../../components/Footer';
import Button from '../../components/CustomButton';
import Landing from '../../components/Landing';
import { BackTop } from 'antd';
import './index.css'

let isUsed=false;
const handleClick = () => {
	isUsed = true;
}
export default ()=>{
    return(
        <div align="center">
            <div onClick={handleClick}>
			{!isUsed ? <Landing to="#m-root"/> : null}
		    </div>
            <div id="m-root">
                <div className="m-Header">
                    <Header />
                </div>
                <div align="center" className="m-Button">
                    <Button />
                </div>
                <div className="m-Contact">
                    <Contact />
                </div>
                <div className="m-post">
                    <Poster school={true} type='education' time="tháng 9 năm 2018 đến nay" title="Học vấn "/>
                </div>
                <div className="m-post">
                    <Poster type='exper' time="tháng 9 năm 2018 đến nay" title="Kinh nghiệm"/>
                </div>
                <div className="m-post">
                    <Poster  type='skills' time="tháng 9 năm 2018 đến nay" title="Kỹ năng"/>
                </div>
            </div>
            <BackTop />
            <Footer />
        </div>
    )
}