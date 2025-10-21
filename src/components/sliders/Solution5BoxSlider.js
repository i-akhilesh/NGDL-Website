import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution5BoxSlider = () => {
  return (
    <section className="mil-gradient-bg mil-p-120-120">
      <div className="mil-deco mil-deco-accent" style={{ top: 0, right: "30%" }} />
      <div className="mil-deco mil-deco-accent" style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }} />
      <div className="container">
        <Swiper {...sliderProps.milBoxSlider} className="swiper-container mil-box-slider">
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card text-center">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/temperature.svg" alt="Temperature Icon" />
              </div>
              <h5 className="mil-mb-20">Temperature & Humidity Logging</h5>
              <p>Accurate real-time monitoring for temperature and humidity in any environment.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card text-center">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/customize.svg" alt="Customization Icon" />
              </div>
              <h5 className="mil-mb-20">Customizable Parameters</h5>
              <p>Configure the Data Logger for any parameter to meet your industry requirements.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card text-center">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/industry.svg" alt="Industry Icon" />
              </div>
              <h5 className="mil-mb-20">Multi-Industry Applications</h5>
              <p>Use across industries like pharma, food, agriculture, and more for versatile monitoring.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Solution5BoxSlider;
