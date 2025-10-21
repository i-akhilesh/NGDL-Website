import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";
const Solution2LeftTabSlider = dynamic(
  () => import("@/src/components/sliders/Solution2LeftTabSlider"),
  { ssr: false }
);
const Solution2ReviSlider = dynamic(
  () => import("@/src/components/sliders/Solution2ReviSlider"),
  { ssr: false }
);
const Solution2TabSlider = dynamic(
  () => import("@/src/components/sliders/Solution2TabSlider"),
  { ssr: false }
);

const Solution2 = () => {
  return (
    <Layouts footer={1}>
      <PageBanner pageName={"Solution"} pageTitle={"Smart Fridge Thermostat"} />

      {/* Intro Section */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-mb-60">
            Intelligent <span className="mil-accent">Temperature Control</span>{" "}
            for Precision Cooling, <br />
            Anytime, Anywhere
          </h2>
          <p className="mil-mb-60">
            Our Smart Fridge Thermostat is engineered to bring automation,
            accuracy, and insight to temperature management in cold storage
            environments. Whether in pharmaceutical warehouses, laboratories, or
            food logistics, it ensures consistent cooling, minimizes human
            error, and maintains complete traceability through IoT connectivity
            and real-time cloud monitoring.
          </p>

          <div className="row">
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/17.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6>
                      Maintain a Unified <br /> Temperature Record
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/19.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6>
                      Automate Cooling <br /> Adjustments with Precision
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/18.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6>
                      Enhance Efficiency <br /> through Smart Alerts
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/11.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6>
                      Scale Seamlessly <br /> with Cloud-Connected Devices
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* Slider Section */}
      <Solution2ReviSlider />

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* Additional Slider Section */}
      <Solution2TabSlider />

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* Left Tab Section */}
      <Solution2LeftTabSlider />

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* Values Section */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "15%" }} />
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              A Great Service
            </span>
            <h2 className="mil-mb-30">
              Values That <span className="mil-accent">Lead Us</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-20">Precision</h5>
                <p>
                  We focus on accuracy in every degree—ensuring every storage
                  unit maintains its required temperature without deviation.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-20">Transparency</h5>
                <p>
                  Every reading is logged, timestamped, and securely stored,
                  giving complete traceability for audits and quality checks.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-20">Innovation</h5>
                <p>
                  We merge IoT and automation to create intelligent systems that
                  predict issues before they affect critical storage conditions.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>IV</h3>
                </div>
                <h5 className="mil-mb-20">Sustainability</h5>
                <p>
                  Our systems optimize energy use, minimize wastage, and
                  contribute to eco-friendly and cost-efficient operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <ContactForm /> */}
    </Layouts>
  );
};

export default Solution2;
