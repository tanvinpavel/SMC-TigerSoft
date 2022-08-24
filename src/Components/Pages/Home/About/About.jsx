import React from 'react';

const About = () => {
    return (
        <section id="about" class="about-section about-wrap style-1">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-md-12 order-3 order-lg-1 p-l">
                <div class="left">
                  <h1
                    data-sal="slide-right"
                    data-sal-delay="200"
                    data-sal-duration="800"
                  >
                    Together We Can Build <br />
                    a Better World
                  </h1>
                  <p
                    data-sal="slide-right"
                    data-sal-delay="300"
                    data-sal-duration="800"
                  >
                    SMC is the world’s first truly scalable blockchain and is
                    fully backed by the SMC Foundation. But as we take SMC to
                    the world, we rely on our developer community to
                    continuously come up with new innovations and exciting apps
                    which accelerate the adoption of SMC. Join us in building a
                    better world powered by the world’s fastest & safest
                    blockchain.
                  </p>
                  <div
                    class="entry-buttons"
                    data-sal="slide-right"
                    data-sal-delay="400"
                    data-sal-duration="800"
                  >
                    <a href="#" class="btn-ghost">Get Involved</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 order-2">
                <div class="right">
                  <img src="image/about/about1.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default About;