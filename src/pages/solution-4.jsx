import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";
const Solution4BoxSlider = dynamic(
  () => import("@/src/components/sliders/Solution4BoxSlider"),
  { ssr: false }
);
const Solution4ReviSlider = dynamic(
  () => import("@/src/components/sliders/Solution4ReviSlider"),
  { ssr: false }
);
const Solution4TabsSlider = dynamic(
  () => import("@/src/components/sliders/Solution4TabsSlider"),
  { ssr: false }
);

const Solution4 = () => {
  return (
    <Layouts footer={1}>
      <PageBanner pageName={"Solution"} pageTitle={"Water Quality Monitoring"} />

      {/* End-to-End IoT Development */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-text-center mil-mb-90">
            End-to-End <span className="mil-accent">Water Quality IoT</span> Development
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-30">Embedded IoT Solutions</h5>
                <p>
                  Build smart IoT-enabled water monitoring devices to measure Temperature, TDS, Turbidity, and pH in real time.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">IoT Cloud Dashboards</h5>
                <p>
                  Monitor water quality remotely with cloud dashboards showing trends, alerts, and historical data for smarter decision-making.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">Mobile App Integration</h5>
                <p>
                  Stay connected on-the-go with mobile applications that provide real-time water quality updates and notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Projects */}
      <section className="mil-p-0-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/photo/water1.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Smart Water Monitoring</h3>
              <p className="mil-mb-30">
                Track temperature, TDS, turbidity, and pH to ensure safe and clean water supply for industrial and residential use.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover mil-type-2">
                <img src="img/photo/water2.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Industrial Water IoT</h3>
              <p className="mil-mb-30">
                Real-time water quality monitoring for industrial plants to optimize processes and maintain compliance with safety standards.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-specific IoT */}
      <Solution4ReviSlider />

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* IoT Implementation Roadmap */}
      <Solution4TabsSlider />

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* Client Reviews / Testimonials */}
      <Solution4BoxSlider />
    </Layouts>
  );
};

export default Solution4;
