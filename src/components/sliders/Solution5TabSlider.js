import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution5TabSlider = () => {
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Data Logger Implementation Roadmap
        </span>
        <h2 className="mil-mb-90">
          How <span className="mil-accent">Data Logging</span> Works
        </h2>

        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="mil-tabs-left-nav mil-mb-60">
              <li><a href="#tab-l-1" className="mil-h4 mil-active">Device Setup</a></li>
              <li><a href="#tab-l-2" className="mil-h4">Parameter Customization</a></li>
              <li><a href="#tab-l-3" className="mil-h4">Data Collection</a></li>
              <li><a href="#tab-l-4" className="mil-h4">Cloud & Reporting</a></li>
              <li><a href="#tab-l-5" className="mil-h4">Multi-Industry Usage</a></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Swiper {...sliderProps.milTabsSlider} className="swiper-container mil-tabs-slider mil-mb-60">
              <SwiperSlide className="swiper-slide" data-hash="tab-l-1">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/setup.svg" alt="Setup Icon" />
                  </div>
                  <p>Plug-and-play setup for temperature & humidity logging with minimal configuration.</p>
                  <Link href="about" className="mil-link"><span>See More</span><i className="fas fa-arrow-right" /></Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/customize.svg" alt="Customization Icon" />
                  </div>
                  <p>Configure your logger to measure any parameter required by your industry.</p>
                  <Link href="about" className="mil-link"><span>See More</span><i className="fas fa-arrow-right" /></Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/data.svg" alt="Data Icon" />
                  </div>
                  <p>Continuous data collection ensures reliable environmental tracking and historical records.</p>
                  <Link href="about" className="mil-link"><span>See More</span><i className="fas fa-arrow-right" /></Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/cloud.svg" alt="Cloud Icon" />
                  </div>
                  <p>Sync your data to cloud servers, visualize trends, and generate automated reports.</p>
                  <Link href="about" className="mil-link"><span>See More</span><i className="fas fa-arrow-right" /></Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-5">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/industry.svg" alt="Industry Icon" />
                  </div>
                  <p>Deploy across multiple industries with customized parameters, opening new business opportunities.</p>
                  <Link href="about" className="mil-link"><span>See More</span><i className="fas fa-arrow-right" /></Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution5TabSlider;
