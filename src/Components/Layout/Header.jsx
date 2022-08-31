import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

const Header = ({headerData, transparent = true}) => {
  const [navbarToggler, setNavbarToggler] = useState(false);
  
    return (
      <header className={transparent ? "header header1" : "header header1 header-dark"}>
        <div id="navbar-wrap" className="navbar-wrap">
          <div className="container">
            <div className="navbar-content">
              <div className="site-branding">
                <NavLink to="/" className="logo logo-light"><img src="./image/logo.svg" alt="Logo"/></NavLink>
              </div>

              <nav id="dropdown" className={navbarToggler ? "template-main-menu menu-text-dark nav-expand" : "template-main-menu menu-text-dark nav-collapse"}>
                <nav className="mainmenu-nav" id="mobilemenu-popup">

                  <div className="close-btn">
                    {/* <div className="mobile-nav-header">
                        <div className="mobile-nav-logo">
                            <a href="index.html">  
                            <img src="image/logo.svg" alt="Logo"/>
                            </a>
                        </div>
                        <button className="mobile-menu-close" data-bs-dismiss="offcanvas"></button>
                    </div> */}
                    <i className="fal fa-times" onClick={()=>setNavbarToggler((prevState)=>!prevState)}></i>
                  </div>

                  <ul className="mainmenu">
                    {
                      headerData &&
                      headerData.map(item => 
                          <li key={Math.random()} className="nav-item">
                            <NavLink className="scroll" to={item.menu_link}>{item.anchor_Text}</NavLink>
                          </li>
                        )
                    }
                  </ul>

                  <div className="entry-buttons">
                    <a href="#" className="btn-fill">Get Involved</a>
                  </div>

                </nav>
              </nav>

              {/* Hamburger Menu Icon */}
              <ul className="header-action-items" onClick={()=>setNavbarToggler((prevState)=>!prevState)}>
                <li className="sidemenu-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;