import React from 'react';
import Form from '../../components/Form';
import Header from '../../components/MobileHeader';
import Footer from '../../components/Footer';


export default ()=>{
    return(
        <div align="center">
            <div className="m-Header">
                <Header />
            </div>
            <div align="center">
                <Form />
            </div>
            <Footer />
        </div>
    )
}