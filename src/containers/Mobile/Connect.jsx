import React from 'react';
import Form from '../../components/Form';
import Header from '../../components/MobileHeader';


export default ()=>{
    return(
        <div align="center">
            <div className="m-Header">
                <Header />
            </div>
            <div align="center">
                <Form />
            </div>
        </div>
    )
}