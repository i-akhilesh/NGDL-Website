import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution3ReviSlider = () => {
  return (
    <section className="mil-p-0-90">
      <div
        className="mil-deco"
        style={{ bottom: 0, right: "40%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <h2 className="mil-mb-60">
          Industry <span className="mil-accent">Specific IoT</span> Development
        </h2>
        <Swiper
          {...sliderProps.milReviSlider}
          className="swiper-container mil-revi-slider mil-mb-90"
        >
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/farm.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Agriculture & Farming</h5>
              <p>
                Real-time soil moisture, pH, NPK, and EC measurements help optimize irrigation and fertilization for better yield.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/research.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Agri Research & Development</h5>
              <p>
                Detailed soil parameter tracking enables precise experiments, soil studies, and long-term sustainability research.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/greenhouse.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Greenhouse Management</h5>
              <p>
                Monitor soil and ambient conditions including temperature and humidity to ensure optimal crop growth indoors.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/landscape.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Landscaping & Horticulture</h5>
              <p>
                Maintain soil health and plant growth by continuously tracking key parameters and environmental conditions.
              </p>
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

export default Solution3ReviSlider;
