import React from 'react';

const Banner = () => {
    return (
        <section class="banner banner-1">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="banner-content">
                  <div class="entry-content">
                    <h1
                      class="entry-title"
                      data-sal="slide-up"
                      data-sal-delay="200"
                      data-sal-duration="800"
                    >
                      Build Your Future <br />
                      with SMC
                    </h1>
                    <p
                      class="entry-subtitle"
                      data-sal="slide-up"
                      data-sal-delay="200"
                      data-sal-duration="800"
                    >
                      Official Developer Resource Center for SMC <br />
                      Blockchain Technology
                    </p>
                    <div class="entry-buttons">
                      <a
                        href="#"
                        class="btn-fill"
                        data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-duration="800"
                        >Get Involved</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Banner;