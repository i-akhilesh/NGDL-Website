import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";

// Dynamic imports for sliders
const Solution5BoxSlider = dynamic(() => import("@/src/components/sliders/Solution5BoxSlider"), { ssr: false });
const Solution5ReviSlider = dynamic(() => import("@/src/components/sliders/Solution5ReviSlider"), { ssr: false });
const Solution5TabSlider = dynamic(() => import("@/src/components/sliders/Solution5TabSlider"), { ssr: false });

const Solution5 = () => {
  return (
    <Layouts footer={1}>
      <PageBanner pageName={"Solution"} pageTitle={"Data Logger"} />

      {/* End-to-End IoT Development */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-text-center mil-mb-90">
            End-to-End <span className="mil-accent">Data Logging</span> Solutions
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-30">Temperature & Humidity Logging</h5>
                <p>
                  Accurately record temperature and humidity in real-time for industrial, research, or residential applications.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">Customizable Parameters</h5>
                <p>
                  Easily configure the Data Logger to measure any parameter you need, opening doors to multiple industries.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">Cloud & Multi-Industry Use</h5>
                <p>
                  Collect data on cloud dashboards, visualize trends, and implement across various industries with ease.
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
                <img src="img/photo/data1.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Industrial Temperature Monitoring</h3>
              <p className="mil-mb-30">
                Track temperature and humidity to optimize processes, maintain compliance, and ensure safety in industrial environments.
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
                <img src="img/photo/data2.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Customizable Data Logger Solutions</h3>
              <p className="mil-mb-30">
                Customize measurement parameters to meet the specific needs of any industry, from pharma to agriculture.
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
      <Solution5ReviSlider />

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* IoT Implementation Roadmap */}
      <Solution5TabSlider />

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* Client Reviews / Features */}
      <Solution5BoxSlider />
    </Layouts>
  );
};

export default Solution5;
