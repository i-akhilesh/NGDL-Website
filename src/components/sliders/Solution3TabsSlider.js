import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution3TabsSlider = () => {
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Our Soil Monitoring Expertise
        </span>
        <h2 className="mil-mb-90">
          Soil Quality Monitoring System <span className="mil-accent">Roadmap</span>
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="mil-tabs-left-nav mil-mb-60">
              <li>
                <a href="#tab-l-1" className="mil-h4 mil-active">
                  Discovery &amp; R&amp;D
                </a>
              </li>
              <li>
                <a href="#tab-l-2" className="mil-h4">
                  Prototype Development
                </a>
              </li>
              <li>
                <a href="#tab-l-3" className="mil-h4">
                  Pilot Deployment & Testing
                </a>
              </li>
              <li>
                <a href="#tab-l-4" className="mil-h4">
                  Scaling & Optimization
                </a>
              </li>
              <li>
                <a href="#tab-l-5" className="mil-h4">
                  Cloud Dashboard & Ecosystem Setup
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Swiper
              {...sliderProps.milTabsSlider}
              className="swiper-container mil-tabs-slider mil-mb-60"
            >
              <SwiperSlide className="swiper-slide" data-hash="tab-l-1">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/soil-research.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Conduct soil analysis and research to understand key parameters like moisture, pH, NPK, EC, temperature, and ambient humidity. Identify patterns to optimize soil health and crop yield.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/soil-sensor.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Develop a working prototype of the Soil Quality Monitoring System with 9 sensor parameters. Ensure accurate real-time measurements for soil and ambient conditions.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/testing.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Deploy the system in test fields or farms, monitoring all soil and environmental parameters. Validate sensor accuracy, data logging, and cloud connectivity.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/scaling.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Scale the Soil Quality Monitoring System for multiple fields or greenhouses. Optimize sensor performance, cloud integration, and reporting features for end-users.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" data-hash="tab-l-5">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/cloud-dashboard.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Set up cloud dashboards and analytics for real-time monitoring, historical trends, and alerts. Enable farmers and agronomists to make data-driven decisions easily.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution3TabsSlider;
