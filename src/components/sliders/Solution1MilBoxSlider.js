import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution1MilBoxSlider = () => {
  return (
    <section className="mil-awards">
      <div className="row m-0">
        {/* Left Side Slider */}
        <div className="col-xl-6 p-0 mil-relative">
          <img
            src="img/photo/14.jpg"
            className="mil-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.05"
            alt="image"
          />
          <div className="mil-overlay mil-gradient-bg" />
          <div className="mil-fake-container mil-p-120-120">
            <Swiper
              {...sliderProps.milBoxSlider}
              className="swiper-container mil-box-slider mil-mb-80"
            >
              {/* Slide 1 */}
              <SwiperSlide className="swiper-slide">
                <div data-swiper-parallax-y={-50} data-swiper-parallax-opacity={0}>
                  <h3 className="mil-light mil-mb-30">
                    Time <span className="mil-accent">Synchronization</span>
                  </h3>
                  <div className="mil-hori-box mil-mb-15">
                    <div className="mil-mr-10">
                      <div className="mil-icon-frame mil-light mil-icon-frame-md">
                        <img src="img/icons/md/10.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="mil-light">NTP Server Sync</h5>
                  </div>
                  <p className="mil-light-soft mil-mb-30">
                    Ensure all clocks across your facility stay perfectly in sync, eliminating manual adjustments and timing errors.
                  </p>
                  <p className="mil-light-soft">
                    Accurate timekeeping is critical for labs, warehouses, and industrial operations.
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide className="swiper-slide">
                <div data-swiper-parallax-y={-50} data-swiper-parallax-opacity={0}>
                  <h3 className="mil-light mil-mb-30">
                    <span className="mil-accent">Temperature</span> & Humidity Monitoring
                  </h3>
                  <div className="mil-hori-box mil-mb-30">
                    <div className="mil-mr-10">
                      <div className="mil-icon-frame mil-light mil-icon-frame-md">
                        <img src="img/icons/md/11.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="mil-light">Environmental Tracking</h5>
                  </div>
                  <p className="mil-light-soft mil-mb-10">
                    Continuous logging of temperature and humidity to maintain controlled lab or storage conditions.
                  </p>
                  <p className="mil-light-soft">
                    Supports compliance, safety, and optimal performance for sensitive environments.
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide className="swiper-slide">
                <div data-swiper-parallax-y={-50} data-swiper-parallax-opacity={0}>
                  <h3 className="mil-light mil-mb-30">
                    Cloud <span className="mil-accent">Dashboard & Reporting</span>
                  </h3>
                  <div className="mil-hori-box mil-mb-30">
                    <div className="mil-mr-10">
                      <div className="mil-icon-frame mil-light mil-icon-frame-md">
                        <img src="img/icons/md/12.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="mil-light">Remote Monitoring</h5>
                  </div>
                  <p className="mil-light-soft mil-mb-10">
                    Visualize real-time and historical data, generate audit-ready reports, and monitor multiple units remotely.
                  </p>
                  <p className="mil-light-soft">
                    Enables better decision-making and proactive maintenance.
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide className="swiper-slide">
                <div data-swiper-parallax-y={-50} data-swiper-parallax-opacity={0}>
                  <h3 className="mil-light mil-mb-30">
                    <span className="mil-accent">Alerts & Notifications</span>
                  </h3>
                  <div className="mil-hori-box mil-mb-15">
                    <div className="mil-mr-10">
                      <div className="mil-icon-frame mil-light mil-icon-frame-md">
                        <img src="img/icons/md/13.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="mil-light">Instant Notifications</h5>
                  </div>
                  <p className="mil-light-soft mil-mb-10">
                    Receive instant alerts via email or SMS for out-of-range conditions.
                  </p>
                  <p className="mil-light-soft">
                    Helps prevent costly mistakes and ensures consistent environmental conditions.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Slider Navigation */}
            <div className="mil-slider-nav">
              <div className="mil-slider-btn-prev mil-box-prev mil-light">
                <i className="fas fa-arrow-left" />
                <span className="mil-h6">Prev</span>
              </div>
              <div className="mil-slider-btn-next mil-box-next mil-light">
                <span className="mil-h6">Next</span>
                <i className="fas fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div
          className="col-xl-6 p-0 mil-relative"
          style={{ overflow: "hidden" }}
        >
          <img
            src="img/photo/14.jpg"
            className="mil-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.05"
            alt="image"
          />
          <div className="mil-overlay mil-with-deco mil-super-light" />
        </div>
      </div>
    </section>
  );
};

export default Solution1MilBoxSlider;
