import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution2TabSlider = () => {
  return (
    <section className="mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, left: "15%" }} />
      <div className="container">
        <div className="mil-text-center mil-mb-90">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Smart Cooling Features
          </span>
          <h2 className="mil-mb-30">
            Supercharge <span className="mil-accent">Your Fridge</span> With
            IoT
          </h2>
        </div>
        <div className="mil-tab-buttons mil-tab-buttons-2 mil-mb-90">
          <a href="#tab1" className="mil-active">
            <div>
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                <img src="img/icons/md/20.svg" alt="icon" />
              </div>
              <h6>Remote Control</h6>
            </div>
          </a>
          <a href="#tab2">
            <div>
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                <img src="img/icons/md/21.svg" alt="icon" />
              </div>
              <h6>Energy & Safety Optimization</h6>
            </div>
          </a>
        </div>

        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          {/* Tab 1: Remote Control */}
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div data-swiper-parallax-y={-100} data-swiper-parallax-opacity={0}>
              <p>
                Monitor and control your smart fridge temperature remotely via
                mobile apps. Receive instant alerts if temperatures deviate from
                preset ranges, ensuring optimal storage for food, medicines, or
                laboratory samples.
              </p>
            </div>
          </SwiperSlide>

          {/* Tab 2: Energy & Safety Optimization */}
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div data-swiper-parallax-y={-100} data-swiper-parallax-opacity={0}>
              <p>
                Optimize energy consumption with AI-driven cooling cycles and
                predictive maintenance alerts. Safeguard your perishables with
                automated safety protocols and cloud-based logging for cold
                chain compliance.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Solution2TabSlider;
