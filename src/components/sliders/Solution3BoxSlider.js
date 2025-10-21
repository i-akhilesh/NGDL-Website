import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution3BoxSlider = () => {
  return (
    <section className="mil-gradient-bg mil-p-120-120">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, right: "30%" }}
      />
      <div
        className="mil-deco mil-deco-accent"
        style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <Swiper
          {...sliderProps.milBoxSlider}
          className="swiper-container mil-box-slider"
        >
          <SwiperSlide className="swiper-slide">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-3 offset-lg-1">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/farmer1.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                  <img src="img/icons/sm/soil.svg" alt="icon" />
                </div>
                <p className="mil-text-lg mil-light mil-mb-60">
                  “The soil monitoring system has transformed our farm management. Real-time soil moisture, pH, NPK, and EC data allow precise fertilization and irrigation scheduling.”
                </p>
                <h3 className="mil-light mil-mb-15">Ravi Kumar</h3>
                <p className="mil-light-soft">Organic Farmer</p>
                <p className="mil-accent">GreenFields Farm</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-3 offset-lg-1">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/farmer2.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                  <img src="img/icons/sm/soil.svg" alt="icon" />
                </div>
                <p className="mil-text-lg mil-light mil-mb-60">
                  “Thanks to the integrated dashboard, we can monitor temperature, humidity, and soil health remotely. It helps us improve crop yield and reduce water usage.”
                </p>
                <h3 className="mil-light mil-mb-15">Priya Sharma</h3>
                <p className="mil-light-soft">Farm Manager</p>
                <p className="mil-accent">AgriTech Solutions</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-3 offset-lg-1">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/farmer3.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                  <img src="img/icons/sm/soil.svg" alt="icon" />
                </div>
                <p className="mil-text-lg mil-light mil-mb-60">
                  “The precision NPK monitoring helps optimize fertilizer use and ensures soil fertility is maintained across seasons. A must-have tool for modern agriculture.”
                </p>
                <h3 className="mil-light mil-mb-15">Ankit Mehra</h3>
                <p className="mil-light-soft">Agricultural Consultant</p>
                <p className="mil-accent">AgroSmart Tech</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="row">
          <div className="col-lg-5">
            <div className="mil-slider-nav justify-content-lg-center mil-reviews-btns-space">
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
      </div>
    </section>
  );
};

export default Solution3BoxSlider;
