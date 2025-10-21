import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution2ReviSlider = () => {
  return (
    <section className="mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: "20%" }} />
      <div className="container">
        <div className="row align-items-end mil-mb-90">
          <div className="col-md-6 col-xl-7">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Smart Cooling Solutions
            </span>
            <h2>
              Our IoT-Driven Smart Fridge Thermostat Solutions to{" "}
              <span className="mil-accent">Power Every Industry</span>
            </h2>
          </div>
          <div className="col-md-6 col-xl-5">
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-revi-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-revi-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          {...sliderProps.milReviSlider}
          className="swiper-container mil-revi-slider mil-mb-90"
        >
          {/* Slide 1 */}
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/12.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Cold Chain & Storage</h5>
              <p>
                Maintain precise temperature control for vaccines, food, and lab
                reagents with IoT-enabled thermostats that ensure 24/7 monitoring,
                remote alerts, and energy-efficient cooling performance.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/13.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Smart Kitchen & Appliances</h5>
              <p>
                Empower modern households with intelligent temperature automation.
                The system learns user habits, adjusts cooling patterns, and syncs
                seamlessly with mobile apps for complete control anytime, anywhere.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/14.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Pharma & Laboratory Applications</h5>
              <p>
                Designed for pharmaceutical and clinical labs, our smart
                thermostats ensure stable storage conditions, cloud-based logging,
                and real-time compliance reporting with FDA and 21 CFR standards.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Industrial & Commercial Refrigeration</h5>
              <p>
                Reduce energy costs and downtime through predictive maintenance and
                AI-driven cooling cycles optimized for large-scale refrigeration
                systems in warehouses and production facilities.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Solution2ReviSlider;
