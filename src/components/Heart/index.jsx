import React from 'react';
import './index.css'
export default ()=>{
    return(
        <div>
            <svg className="logo" viewBox="0 0 70 70" version="1.1">
                <g className="logo__mainGroup">
                    <g className="logo__grayGroup">
                    <path className="logo__square" fill="none" strokeWidth="1" d="M0,0 0,70 70,70 70,0z"/>
                    <path className="logo__line logo__line-1" fill="none" strokeWidth="1" d="M10,0 10,70"/>
                    <path className="logo__line logo__line-2" fill="none" strokeWidth="1" d="M20,0 20,70"/>
                    <path className="logo__line logo__line-3" fill="none" strokeWidth="1" d="M30,0 30,70"/>
                    <path className="logo__line logo__line-4" fill="none" strokeWidth="1" d="M40,0 40,70"/>
                    <path className="logo__line logo__line-5" fill="none" strokeWidth="1" d="M50,0 50,70"/>
                    <path className="logo__line logo__line-6" fill="none" strokeWidth="1" d="M60,0 60,70"/>
                    <path className="logo__line logo__line-1" fill="none" strokeWidth="1" d="M0,10 70,10"/>
                    <path className="logo__line logo__line-2" fill="none" strokeWidth="1" d="M0,20 70,20"/>
                    <path className="logo__line logo__line-3" fill="none" strokeWidth="1" d="M0,30 70,30"/>
                    <path className="logo__line logo__line-4" fill="none" strokeWidth="1" d="M0,40 70,40"/>
                    <path className="logo__line logo__line-5" fill="none" strokeWidth="1" d="M0,50 70,50"/>
                    <path className="logo__line logo__line-6" fill="none" strokeWidth="1" d="M0,60 70,60"/>
                    </g>
                    <g className="logo__colorGroup">
                    <path className="logo__stroke" fill="none" strokeWidth="1" d="M0,70 0,40 50,40 50,60 60,60 60,30 40,30 40,10 10,10 10,20 30,20 30,30 0,30 0,0 50,0 50,20 70,20 70,70 40,70 40,50 10,50 10,60 30,60 30,70 0,70" />
                    <path className="logo__fill" fill="none" strokeWidth="10" d="M30,25 5,25 5,5 45,5 45,25 65,25 65,65 45,65 45,45 5,45 5,65 30,65" />
                    </g>
                </g>
            </svg>
        </div>
    )
}