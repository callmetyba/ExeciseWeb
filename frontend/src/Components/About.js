import React from "react";

const About = () => {
  return (
    <div>
      <section id="aboutimg">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div>
                <h2 id="abouth2">About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="choseus-section span">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>WHY CHOOSE US?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-034-stationary-bike" />
                <h4>Modern equipment</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut dolore facilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-033-juice" />
                <h4>Healthy nutrition plan</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-002-dumbell" />
                <h4>Proffesional training plan</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut dolore facilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-014-heart-beat" />
                <h4>Unique to your needs</h4>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div id="videobg" className="about-video set-bg">
                <a
                  href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-caret-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="about-text">
                <div className="section-title">
                  <span>About Us</span>
                  <h2>What we have done</h2>
                </div>
                <div className="at-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                    aliquip ex ea commodo consequat sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div className="about-bar">
                  <div className="ab-item">
                    <p>Body building</p>
                    <div id="bar1" className="barfiller">
                      <span className="fill" data-percentage={80} />
                      <div className="tipWrap">
                        <span className="tip" />
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Training</p>
                    <div id="bar2" className="barfiller">
                      <span className="fill" data-percentage={85} />
                      <div className="tipWrap">
                        <span className="tip" />
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Fitness</p>
                    <div id="bar3" className="barfiller">
                      <span className="fill" data-percentage={75} />
                      <div className="tipWrap">
                        <span className="tip" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
