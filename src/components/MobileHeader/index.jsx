import React,{useEffect, useRef, useState} from 'react'
import './index.css'
import tick from '../../assests/tick.png';
import avatar from '../../assests/avt.png';
import Nav from '../Nav';

export default ()=>{
    const [isSticky, setSticky] = useState(true);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
    return(
        <div className="m-container-header">
                <div className={`sticky-wrapper${isSticky ? ' sticky' : 'non-sticky'}`} ref={ref}>
                    <Nav />
                </div>
            <div className="m-header">
                <div className="m-header-left">
                    <div className="m-avatar-container" align="center">
                        <img src={avatar} alt="avatar" className="m-avatar"/>
                    </div>
                </div>
            </div>
            <div className="m-header-bot">
                <div className="m-name" align="center">
                    <h2>Dương Quốc Bảo</h2>
                    <div className="m-tick">
                        <img src={tick} alt="tick" width="30px" />
                    </div>
                </div>
                <div align="center" className="bio">
                    <p><strong>05 - 04 - 2000</strong></p>
                    <p>Fresher Web Front-end Developer </p>
                    <p>Mình muốn học hỏi và trau dồi kinh nghiệm để phục vụ cho công việc. Mục tiêu trở thành Full-stack Developer.</p>
                </div>
            </div>
        </div>
    )
}