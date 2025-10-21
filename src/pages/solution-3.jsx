import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";
const Solution3BoxSlider = dynamic(
  () => import("@/src/components/sliders/Solution3BoxSlider"),
  {
    ssr: false,
  }
);
const Solution3ReviSlider = dynamic(
  () => import("@/src/components/sliders/Solution3ReviSlider"),
  {
    ssr: false,
  }
);
const Solution3TabsSlider = dynamic(
  () => import("@/src/components/sliders/Solution3TabsSlider"),
  {
    ssr: false,
  }
);

const Solution3 = () => {
  return (
    <Layouts footer={1}>
      <PageBanner pageName={"Solution"} pageTitle={"Soil Quality Monitoring"} />
      {/* Overview Section */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-text-center mil-mb-90">
            End-to-End <span className="mil-accent">Soil Quality Monitoring</span> Solutions
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-30">
                  Embedded <br />
                  Soil Sensors
                </h5>
                <p>
                  Measure soil moisture, pH, temperature, NPK, and EC in real-time with our advanced embedded sensors.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">
                  Cloud Dashboards <br />
                  & Analytics
                </h5>
                <p>
                  Monitor soil and environmental data remotely with intuitive dashboards, real-time alerts, and historical trend analysis.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">
                  Mobile App <br />
                  Integration
                </h5>
                <p>
                  Access real-time soil parameters, receive notifications, and remotely manage irrigation and soil health via our mobile app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section */}
      <section className="mil-p-0-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/solution/soil1.jpg" alt="Smart Agriculture" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Smart Agriculture Monitoring</h3>
              <p className="mil-mb-30">
                Deploy end-to-end soil and environmental monitoring for optimized crop growth and sustainable farming practices.
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
                <img src="img/photo/17.jpg" alt="Farm Management Analytics" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Farm Management Analytics</h3>
              <p className="mil-mb-30">
                Use dashboards for irrigation scheduling, fertilizer recommendations, and soil health tracking based on real-time data.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/photo/18.jpg" alt="Precision Fertilization" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Precision Fertilization Systems</h3>
              <p className="mil-mb-30">
                Automate NPK and pH monitoring to apply fertilizers efficiently, improving soil fertility and reducing wastage.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/photo/19.jpg" alt="Industrial Agriculture Solutions" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Industrial Agriculture Solutions</h3>
              <p className="mil-mb-30">
                Implement scalable soil monitoring solutions for research farms, greenhouses, and large-scale plantations.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews/Sliders */}
      {/* <Solution3ReviSlider />
      <div className="container">
        <div className="mil-divider" />
      </div>
      <Solution3TabsSlider />
      <div className="container">
        <div className="mil-divider" />
      </div>
      <Solution3BoxSlider /> */}
    </Layouts>
  );
};
export default Solution3;
