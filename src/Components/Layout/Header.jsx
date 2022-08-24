import React, { useState } from 'react';
import './Layout.css';

const Header = () => {
  const [navbarToggler, setNavbarToggler] = useState(false); 
    return (
      <header className="header header1">
        <div id="navbar-wrap" className="navbar-wrap">
          <div className="container">
            <div className="navbar-content">
              <div className="site-branding">
                <a href="index.html" className="logo logo-light"><img src="./image/logo.svg" alt="Logo"/></a>
              </div>

              <nav id="dropdown" className={navbarToggler ? "template-main-menu menu-text-dark expand" : "template-main-menu menu-text-dark collapse"}>
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
                    <li className="nav-item">
                      <a className="scroll" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="scroll" href="documentation-a.html">Documentation</a>
                    </li>
                    <li className="nav-item">
                      <a className="scroll" href="tutorial.html">Tutorials</a>
                    </li>
                    <li className="nav-item">
                      <a className="scroll" href="tutorial-video.html">Tutorial Video</a>
                    </li>
                    <li className="nav-item">
                      <a className="scroll" href="coming-soon.html">Learn by Code</a>
                    </li>
                    <li className="nav-item">
                      <a className="scroll" href="coming-soon.html">Setup SMC</a>
                    </li>
                    <li className="nav-item">
                      <a className="scroll" href="coming-soon.html">API’s</a>
                    </li>
                    <li className="nav-item">
                      <a className="scroll" href="coming-soon.html">Community</a>
                    </li>
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