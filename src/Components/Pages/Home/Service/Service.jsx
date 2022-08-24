import React from 'react';

const Service = () => {
    return (
        <section id="services" class="service-section service-wrap style-1">
          <div class="container">
            <h1
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="800"
            >
              Start Building Within Minutes
            </h1>
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div
                  class="service-box"
                  data-sal="slide-up"
                  data-sal-delay="200"
                  data-sal-duration="800"
                >
                  <div class="icon"><img src="image/pen.svg" alt="pen" /></div>
                  <h3><a href="coming-soon.html">Read Docs</a></h3>
                  <p>
                    Hundreds of Articles Explaining SMC Technology Writen by Our
                    Staff, Improved & Enriched by Our Community
                  </p>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div
                  class="service-box"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-duration="800"
                >
                  <div class="icon">
                    <img src="image/setting.svg" alt="pen" />
                  </div>
                  <h3><a href="coming-soon.html">Setup SMC</a></h3>
                  <p>
                    Get The Step-by-Step Guidelines To Launching an SMC
                    Environment No Matter Which Stack You’re Using
                  </p>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-6 col-md-6"
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-duration="800"
              >
                <div class="service-box">
                  <div class="icon"><img src="image/play.svg" alt="pen" /></div>
                  <h3><a href="coming-soon.html">See Tutorials </a></h3>
                  <p>
                    Video Tutorials for Beginners As Well As Advanced
                    Practitioners Covering Key Concepts of SMC Blockchain
                  </p>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-6 col-md-6"
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-duration="800"
              >
                <div class="service-box">
                  <div class="icon"><img src="image/bulb.svg" alt="pen" /></div>
                  <h3><a href="coming-soon.html">Get Help </a></h3>
                  <p>
                    Find Online Communities Where SMC is Discussed. Find
                    Like-Minded Builders Who Can Help You Build Your Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Service;