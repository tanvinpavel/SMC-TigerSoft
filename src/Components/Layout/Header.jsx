import React from 'react';

const Header = () => {
    return (
      <header className="header header1">
        <div id="navbar-wrap" className="navbar-wrap">
          <div className="container">
            <div className="navbar-content">
              <div className="site-branding">
                <a href="index.html" className="logo logo-light"><img src="./image/logo.svg" alt="Logo"/></a>
              </div>

              <nav id="dropdown" className="template-main-menu menu-text-dark">
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
                    <i className="fal fa-times"></i>
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

              {/* Hambarger Manue Icon */}
              <ul className="header-action-items">
                <li className="sidemenu-btn">
                  {/* <button className="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuRight"> */}
                  <span></span>
                  <span></span>
                  <span></span>
                  {/* </button> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;