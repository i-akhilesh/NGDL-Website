import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution4ReviSlider = () => {
  return (
    <section className="mil-p-0-90">
      <div className="mil-deco" style={{ bottom: 0, right: "40%", transform: "rotate(180deg)" }} />
      <div className="container">
        <h2 className="mil-mb-60">
          Industry <span className="mil-accent">Specific IoT</span> Solutions
        </h2>
        <Swiper {...sliderProps.milReviSlider} className="swiper-container mil-revi-slider mil-mb-90">
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/12.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Residential Water Safety</h5>
              <p>Ensure clean water at home by monitoring pH, temperature, and turbidity in real time.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/13.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Industrial Water Monitoring</h5>
              <p>Track TDS, turbidity, and pH for industrial plants, optimizing operations and regulatory compliance.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/14.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Agriculture & Irrigation</h5>
              <p>Monitor water quality for irrigation systems, ensuring healthy crops and soil sustainability.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Municipal Water Management</h5>
              <p>Real-time monitoring for urban water supply to prevent contamination and maintain quality standards.</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="row align-items-center flex-sm-row-reverse">
          <div className="col-lg-6">
            <div className="mil-adaptive-right mil-mb-30">
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
          <div className="col-lg-6">
            <a href="#." className="mil-link mil-mb-30">
              <span>Talk to Our IoT Agent</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution4ReviSlider;
