import React from 'react'
import Form from '../../components/Form';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import avatar from '../../assests/avt.png';

export default ()=>{
    return(
        <div align="center">

        <div className="root">
            <div>
                <div className="Header">
                    <Header avatar={avatar} name="Dương Quốc Bảo" />
                </div>
            </div>
            <div align="center" className="Intro">
                <Form />
            </div>
        </div>
        <div className="Footer">
                <Footer />
            </div>
        </div>
    )
}