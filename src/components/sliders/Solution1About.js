import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const clickedTabsSliderButton = event => {
  const buttons = document.querySelectorAll('.mil-tab-buttons a');
  buttons.forEach((button) => {
    button.classList.remove('mil-active');
  });

  event.currentTarget.classList.toggle('mil-active');
}

const Solution1About = () => {
  return (
    <section className="mil-deep-bg mil-p-120-0">
      <div className="container">
      <div className="mil-tab-buttons mil-mt-60-adapt">
          <a href="#tab1" className="mil-active" onClick={clickedTabsSliderButton}>
            <span>Time Synchronization</span>
          </a>
          <a href="#tab2" onClick={clickedTabsSliderButton}>
            <span>Environmental Monitoring</span>
          </a>
          <a href="#tab3" onClick={clickedTabsSliderButton}>
            <span>Cloud Dashboard & Reporting</span>
          </a>
          <a href="#tab4" onClick={clickedTabsSliderButton}>
            <span>Alerts & Notifications</span>
          </a>
        </div>
        <br/>
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/2.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Time Synchronization</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Ensure all clocks across your facility are perfectly aligned using NTP server 
                      integration. This eliminates the need for manual adjustments, prevents timing 
                      errors, and maintains consistency across labs, research centers, or storage 
                      units.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      By keeping your clocks unified, teams can rely on consistent scheduling 
                      and event tracking. This is particularly critical in regulated environments 
                      where accurate time records are required for audits, compliance, and 
                      operational accountability.
                    </p>
                  </div>
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8">
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/solution/sync-clock1.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/1.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Environmental Monitoring</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Our system continuously logs temperature and humidity with 
                      high precision, providing detailed insights into your lab or 
                      storage conditions. This ensures sensitive materials and 
                      experiments are maintained under optimal environments, minimizing 
                      the risk of deviations that could affect results.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Historical and real-time data allow you to analyze trends, 
                      identify anomalies, and optimize environmental conditions 
                      proactively. This monitoring reduces manual checks and enhances 
                      operational efficiency while maintaining regulatory compliance.
                    </p>
                  </div>
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8">
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/solution/sync-clock2.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab3">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/11.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Cloud Dashboard & Reporting</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      The cloud-based dashboard allows you to visualize both 
                      real-time and historical data in a clear and intuitive interface. 
                      Users can monitor multiple clocks and environmental sensors from a 
                      single platform, making management of large facilities seamless.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Audit-ready reports can be generated instantly, helping teams 
                      maintain compliance with industry standards. The dashboard also 
                      supports data export, trend analysis, and centralized monitoring 
                      for improved decision-making across departments.
                    </p>
                  </div>
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/solution/sync-clock3.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab4">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/3.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Alerts & Notifications</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Instant alerts via email or SMS notify you immediately of 
                      any temperature or humidity deviations, helping prevent costly 
                      mistakes or potential damage to sensitive materials. This proactive 
                      notification system ensures you can act before issues escalate.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      The alert system can be configured with custom thresholds 
                      for different units, providing tailored monitoring for each environment. 
                      It enhances safety, reliability, and accountability while reducing the 
                      need for constant manual supervision.
                    </p>
                  </div>
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/solution/sync-clock4.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Solution1About;
