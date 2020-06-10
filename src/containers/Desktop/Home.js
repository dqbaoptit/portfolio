import React from 'react';
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
import Header from '../../components/Header'
import Poster from '../../components/Poster';
import Footer from '../../components/Footer';
import Button from '../../components/CustomButton';
import avt from '../../assests/avt.png';
import Landing from '../../components/Landing';

import './index.css'

let isUsed=false;
const handleClick = () => {
	isUsed = true;
}
function App() {
return (
	<div>
		<div onClick={handleClick}>
			{!isUsed ? <Landing /> : null}
		</div>
	<div align="center">
		<div className="root">
			<div>
				<div className='Header' >
					<Header avatar={avt} name="Dương Quốc Bảo"/>
				</div>
				</div>
			<div>
			<div align="center">
				<div className="Button" align="center">
						<Button />
				</div>
			<div className="mainn">
				<div className="main-left">
					<div className="Contact">
						<Contact />
					</div>
					<div className="Skills"> 
						<Skills />
					</div>
					<div  className="Footer-home">
						<Footer />
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
					
				</div>
				</div>
				</div>
			</div>
		</div>
	</div>
	</div>
);
}

export default App;
