import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const SolutionMilReviSlider = () => {
  return (
    <section className="mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: "30%" }} />
      <div className="container">
        <div className="row align-items-end mil-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Solutions of Monitoring
            </span>
            <h2>
              <span className="mil-accent">Industry Specific</span> Time & Environmental Monitoring
            </h2>
          </div>
          <div className="col-md-6 col-xl-6">
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
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/12.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Laboratories & Research</h5>
              <p>
                Synchronize all clocks and continuously monitor temperature and humidity to maintain optimal lab conditions and experimental accuracy.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/13.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Cold Storage & Warehouses</h5>
              <p>
                Track real-time environmental conditions across storage units to prevent spoilage and ensure consistent product quality.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/14.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Pharmaceutical & Life Sciences</h5>
              <p>
                Maintain audit-ready logs of temperature, humidity, and time synchronization to comply with industry regulations effortlessly.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Educational <br/>Institutes</h5>
              <p>
                Ensure synchronized clocks in classrooms and laboratories while monitoring environmental conditions for safety and efficiency.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <a href="contact" className="mil-link">
          <span>Monitor and Synchronize Your Facilities Effectively</span>
          <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  );
};

export default SolutionMilReviSlider;
