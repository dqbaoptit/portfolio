import React from 'react';
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
// import Nav from './components/Nav'
import { BackTop } from 'antd';
import Header from '../../components/Header'
import Poster from '../../components/Poster';
import Footer from '../../components/Footer';
import avt from '../../assests/avt.png';

import './index.css'
function App() {
return (
	<div align="center">
	<div className="root">
		<div>
			<div className='Header' >
				<Header avatar={avt} name="Dương Quốc Bảo"/>
			</div>
			</div>
		<div>
			<div align="center">
			<div className="mainn">
				<div className="main-left">
					<div className="Contact">
						<Contact />
					</div>
					<div className="Skills"> 
						<Skills />
					</div>
					
				</div>
				<div className="main-right">
					<div className="post">
						<Poster school={true} type='education' time="tháng 9 năm 2018 đến nay" title="Học vấn "/>
					</div>
					<div className="post">
						<Poster type='exper' time="tháng 9 năm 2018 đến nay" title="Kinh nghiệm"/>
					</div>
					<div className="post">
						<Poster  type='skills' time="tháng 9 năm 2018 đến nay" title="Kỹ năng"/>
					</div>
					<div  className="Footer-home">
						<Footer />
					</div>
				</div>
			</div>
			</div>
		</div>
		<BackTop />
	</div>
	</div>
);
}

export default App;
