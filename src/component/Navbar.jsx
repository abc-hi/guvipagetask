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
            <div className="container"  >
            
            
            
            <Link to='/' style={{ marginLeft:'140px',marginRight: '50px', color: 'black', fontSize: '20px',textDecoration: 'none',fontFamily: 'Arial', fontWeight: 'bold' }}>ALL</Link>
                        <Link to='/fullstack' style={{ marginRight: '50px', color: 'black', fontSize: '20px',textDecoration: 'none',fontFamily: 'Arial', fontWeight: 'bold' }}>FULLSTACK DEVELOPMENT</Link>
                        <Link to='/datascience' style={{ marginRight: '50px', color: 'black', fontSize: '20px',textDecoration: 'none',fontFamily: 'Arial', fontWeight: 'bold' }}>DATA SCIENCE</Link>
                        <Link to='/cybersecurity' style={{ marginRight: '50px', color: 'black', fontSize: '20px',textDecoration: 'none',fontFamily: 'Arial', fontWeight: 'bold' }}>CYBER SECURITY</Link>
                        <Link to='/career' style={{ marginRight: '50px',color: 'black', fontSize: '20px',textDecoration: 'none',fontFamily: 'Arial', fontWeight: 'bold' }}>CAREER</Link></div></div>
            </nav><br />
         
        </div>
    );
};

export default Navbar;
<br></br>

