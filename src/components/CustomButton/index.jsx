import React from 'react';
import './index.css'

export default ()=>{
    return(
        <div>
            <a className="a-button" href="https://drive.google.com/file/d/1DZxJGnLDh3paSD9VlWGHYqu4i5C0yDTt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <svg className="icon-arrow before">
                    <use href="#arrow"></use>
                </svg>
                <span className="label">View my  CV</span>
                <svg className="icon-arrow after">
                    <use href="#arrow"></use>
                </svg>
            </a>
            <svg className="svg">
            <defs>
                <symbol id="arrow" viewBox="0 0 35 15">
                <title>Arrow</title>
                <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
                </symbol>
            </defs>
            </svg>
    </div>
    )
}