import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution2LeftTabSlider = () => {
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Precision Cooling. Smarter Living.
        </span>
        <h2 className="mil-mb-90">
          Our <span className="mil-accent">Smart Thermostat</span> Development{" "}
          <br /> Approach
        </h2>

        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="mil-tabs-left-nav mil-mb-60">
              <li>
                <a href="#tab-l-1" className="mil-h4 mil-active">
                  Prototype & Core Integration
                </a>
              </li>
              <li>
                <a href="#tab-l-2" className="mil-h4">
                  Intelligent Control & Connectivity
                </a>
              </li>
              <li>
                <a href="#tab-l-3" className="mil-h4">
                  Continuous Optimization & Insights
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <Swiper
              {...sliderProps.milTabsSlider}
              className="swiper-container mil-tabs-slider mil-mb-60"
            >
              {/* TAB 1 */}
              <SwiperSlide className="swiper-slide" data-hash="tab-l-1">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    The foundation of our Smart Fridge Thermostat begins with
                    hardware–software synergy. We start by designing precision
                    temperature sensors and integrating IoT modules that connect
                    seamlessly with cloud dashboards. The prototype stage
                    focuses on achieving ±0.1°C accuracy while maintaining power
                    efficiency and real-time monitoring through WiFi or BLE
                    connectivity.
                  </p>
                </div>
              </SwiperSlide>

              {/* TAB 2 */}
              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    Once the core system is stable, we integrate advanced control
                    logic—AI-driven temperature prediction, adaptive cooling, and
                    smart scheduling based on usage behavior. The device syncs
                    with mobile apps and dashboards, providing remote control,
                    live status, and automated alerts for temperature deviation
                    or power fluctuations.
                  </p>
                </div>
              </SwiperSlide>

              {/* TAB 3 */}
              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    Continuous improvement is driven by analytics. Data gathered
                    from temperature cycles, energy usage, and environmental
                    conditions is analyzed to refine algorithms, reduce power
                    consumption, and enhance compressor performance. The system
                    evolves with every update—ensuring smarter, faster, and more
                    efficient cooling over time.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution2LeftTabSlider;
