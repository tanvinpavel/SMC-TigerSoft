import React from 'react';

const Footer = () => {
    return (
        <>
            <section className="cta-section cta-style-1">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="box-section">
                        <div className="entry-text">
                            <h1
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                            >
                            Build The Future With SMC
                            </h1>
                            <p
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                            >
                            Now is the best time to get into SMC. <br />
                            What can you build with the power & scale of SMC
                            Blockchain?
                            </p>
                        </div>
                        <div
                            className="entry-buttons"
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                        >
                            <a href="#" className="btn-ghost">Get Involved</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <footer className="footer-wrap style-1">
                <div
                    className="footer-top"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <ul className="footer-menu d-flex justify-content-sm-between">
                    <li className="menu-item"><a href="index.html">Home</a></li>
                    <li className="menu-item">
                        <a href="documentation-a.html">Documentation</a>
                    </li>
                    <li className="menu-item"><a href="tutorial.html">Tutorials</a></li>
                    <li className="menu-item">
                        <a href="coming-soon.html">Learn by Code</a>
                    </li>
                    <li className="menu-item">
                        <a href="coming-soon.html">Setup SMC</a>
                    </li>
                    <li className="menu-item"><a href="coming-soon.html">API’s</a></li>
                    <li className="menu-item">
                        <a href="coming-soon.html">Community</a>
                    </li>
                    <li className="menu-item">
                        <a href="coming-soon.html">Get Involved</a>
                    </li>
                    </ul>
                </div>
                <div
                    className="footer-bottom"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <div className="footer-social-wrap">
                        <a href="#"><img src="image/fb-logo.svg" alt="facebook" /></a>
                        <a href="#"><img src="image/twitter-logo.svg" alt="twitter" /></a>
                        <a href="#"><img src="image/inst-icon.svg" alt="instagram" /></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;