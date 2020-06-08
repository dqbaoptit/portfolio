import React from 'react' 
import './index.css'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import {HomeOutlined,ProjectOutlined,ContactsOutlined} from '@ant-design/icons';
export default () =>{
    return(
        <div align="center" className="sticky-inner">
            <div className="button" >
                <div align="center" className="button-item">
                <Link to="/portfolio"><HomeOutlined style={{fontSize:42, color:"#fff"}} /></Link>
                </div>
                <div align="center" className="button-item">
                <Link to="/portfolio/projects" ><ProjectOutlined style={{fontSize:42,color:"#fff"}} /></Link>
                </div>
                <div align="center" className="button-item">
                <Link to="/portfolio/connect"><ContactsOutlined style={{fontSize:42,color:"#fff"}} /></Link>
                </div>
            </div>
        </div>
    )
}