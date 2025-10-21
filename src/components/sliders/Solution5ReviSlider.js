import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution5ReviSlider = () => {
  return (
    <section className="mil-p-0-90">
      <div className="mil-deco" style={{ bottom: 0, right: "40%", transform: "rotate(180deg)" }} />
      <div className="container">
        <h2 className="mil-mb-60">
          Industry <span className="mil-accent">Applications</span> of Data Logger
        </h2>
        <Swiper {...sliderProps.milReviSlider} className="swiper-container mil-revi-slider mil-mb-90">
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/pharma.svg" alt="Pharma Icon" />
              </div>
              <h5 className="mil-mb-30">Pharmaceuticals</h5>
              <p>Track temperature and humidity in storage & production environments for compliance.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/food.svg" alt="Food Icon" />
              </div>
              <h5 className="mil-mb-30">Food & Beverage</h5>
              <p>Ensure quality by monitoring environmental conditions in food processing & storage.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/agriculture.svg" alt="Agri Icon" />
              </div>
              <h5 className="mil-mb-30">Agriculture</h5>
              <p>Optimize crop yield and storage conditions by tracking temperature & humidity.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/lab.svg" alt="Lab Icon" />
              </div>
              <h5 className="mil-mb-30">Research Labs</h5>
              <p>Maintain accurate environmental logs for sensitive experiments and materials.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Solution5ReviSlider;
