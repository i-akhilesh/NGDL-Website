import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution4TabsSlider = () => {
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Water Quality IoT Roadmap</span>
        <h2 className="mil-mb-90">
          Implementation <span className="mil-accent">Roadmap</span> for Water Monitoring
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="mil-tabs-left-nav mil-mb-60">
              <li><a href="#tab-l-1" className="mil-h4 mil-active">Sensor Deployment</a></li>
              <li><a href="#tab-l-2" className="mil-h4">Data Logging & Storage</a></li>
              <li><a href="#tab-l-3" className="mil-h4">Cloud Analytics</a></li>
              <li><a href="#tab-l-4" className="mil-h4">Mobile Alerts</a></li>
              <li><a href="#tab-l-5" className="mil-h4">Automated Reporting</a></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Swiper {...sliderProps.milTabsSlider} className="swiper-container mil-tabs-slider mil-mb-60">
              <SwiperSlide className="swiper-slide" data-hash="tab-l-1">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/24.svg" alt="icon" />
                  </div>
                  <p>Deploy temperature, TDS, turbidity, and pH sensors at critical points for continuous water monitoring.</p>
                  <Link href="about" className="mil-link">
                    <span>See More</span><i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <p>Log all sensor readings in real-time and store securely on cloud servers for analysis.</p>
                  <Link href="about" className="mil-link">
                    <span>See More</span><i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/21.svg" alt="icon" />
                  </div>
                  <p>Analyze water quality trends using cloud-based analytics, generating actionable insights and alerts.</p>
                  <Link href="about" className="mil-link">
                    <span>See More</span><i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/20.svg" alt="icon" />
                  </div>
                  <p>Receive instant mobile notifications for out-of-range water quality readings.</p>
                  <Link href="about" className="mil-link">
                    <span>See More</span><i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" data-hash="tab-l-5">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/19.svg" alt="icon" />
                  </div>
                  <p>Automate reporting with dashboards and periodic summaries for compliance and operational efficiency.</p>
                  <Link href="about" className="mil-link">
                    <span>See More</span><i className="fas fa-arrow-right" />
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

export default Solution4TabsSlider;
