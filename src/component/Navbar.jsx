import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav migration_allowed="1" migrated="0" role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-slide">
                <ul id="menu-1-fad0d9e" className="elementor-nav-menu" data-smartmenus-id="17082570285130984">
                    
                    
                </ul>
            </nav>
            <nav>
                <div className='row'>
            <div className="container" style={{ textAlign: 'normal', fontFamily: 'Arial', fontWeight: 'bold' }}>
            
            
            <Link to='/' style={{ fontSize: '28px',display: 'inline-block',color:'black',textDecoration: 'none'}}>ALL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                <Link to='/fullstack'style={{ fontSize: '28px',display: 'inline-block',color:'black',textDecoration: 'none'}}>FULLSTACK DEVELOPMENT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Link>
                <Link to='/datascience' style={{ fontSize: '28px',display: 'inline-block',color:'black',textDecoration: 'none'}}>DATASCIENCE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                <Link to='/cybersecurity' style={{ fontSize: '28px',display: 'inline-block',color:'black',textDecoration: 'none'}}>CYBER SECURITY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                <Link to='/career' style={{ fontSize: '28px',display: 'inline-block',color:'black',textDecoration: 'none'}}>CAREER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div></div>
            </nav><br />
            
            <div class="border:1px"></div>
        </div>
    );
};

export default Navbar;
<br></br>

