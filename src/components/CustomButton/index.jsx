import React from 'react';
import './index.css'

export default ()=>{
    return(
        <div>
            <a href="https://drive.google.com/file/d/1tvSmLolOdo_sCSutZP_CPuk_IxQZgOtl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="button">
                    <strong>View or Download my CV</strong>
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                </button>
            </a>
        </div>
    )
}