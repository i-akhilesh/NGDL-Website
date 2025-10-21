import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const Solution1About = dynamic(
  () => import("@/src/components/sliders/Solution1About"),
  {
    ssr: false,
  }
);
const Solution1MilBoxSlider = dynamic(
  () => import("@/src/components/sliders/Solution1MilBoxSlider"),
  {
    ssr: false,
  }
);
const SolutionMilReviSlider = dynamic(
  () => import("@/src/components/sliders/SolutionMilReviSlider"),
  {
    ssr: false,
  }
);
const Solution1 = () => {
  return (
    <Layouts footer={1}>
      <PageBanner
        pageName={"Solution"}
        pageTitle={"Synchronized Clock System"}
      />

      {/* call to action */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/11.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                  Our Synchronized Clock System ensures every lab, facility, or department 
                  runs perfectly on the same time — while continuously tracking temperature 
                  and humidity in real-time. Designed for precision, reliability, and compliance, 
                  it’s ideal for pharmaceutical labs, hospitals, and industrial environments.
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <a href="contact" className="mil-button mil-border mil-mb-30">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* title */}
      <section className="mil-p-120-0">
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Consulting and Development
            </span>
            <h2>
              AI Consulting and Development Company <br /> With{" "}
              <span className="mil-accent">Extensive Know How</span>
            </h2>
          </div>
        </div>
      </section>
      {/* title end */}
      {/* about */}
      <Solution1About />
      {/* about end */}
      {/* title */}
      <section className="mil-p-120-0">
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Artificial Intelligence Consulting
            </span>
            <h2>Artificial Intelligence Solutions in Focus</h2>
          </div>
        </div>
      </section>
      {/* title end */}
      {/* ??? */}
      <Solution1MilBoxSlider />
      {/* ??? end */}
      {/* ??? */}
      <SolutionMilReviSlider />
      {/* ??? end */}
      {/* call to action */}
      <section className="call-to-action mil-gradient-bg mil-p-120-120">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: 0, left: "15%" }}
        />
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "15%", transform: "rotate(180deg)" }}
        />

        <div className="container mil-text-center">
          <div className="mil-cta-frame">
            <div className="mil-icon-frame mil-icon-frame-md mil-mb-50">
              <img src="img/icons/md/13l.svg" alt="icon" />
            </div>
            <p className="mil-light mil-mb-30">Synchronized Clock System</p>
            <h3 className="mil-light">
              Ensure all your facility clocks are perfectly{" "}
              <span className="mil-accent">synchronized</span> <br />and monitor{" "}
              <span className="mil-accent">temperature & humidity </span> 
              in real-time to maintain <br />controlled environments and prevent errors.
            </h3>
          </div>
        </div>
      </section>

      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            System Components
          </span>
          <h2 className="mil-mb-90">
            Synchronized Clock <span className="mil-accent">System Features</span>
          </h2>
          <div className="row mil-grid-lines">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>NTP Time Sync</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Temperature Sensors</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Humidity Sensors</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Cloud Dashboard</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Real-Time Alerts</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Audit Reporting</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Multi-Device Monitoring</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Historical Data Logging</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tech stack end */}
    </Layouts>
  );
};
export default Solution1;
