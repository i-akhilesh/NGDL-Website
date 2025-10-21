import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Project = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
        />
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <Link href="portfolio" className="mil-link link-left mil-mb-30">
              <i className="fas fa-arrow-left" />
              <span>All Cases</span>
            </Link>
            <h2 className="mil-uppercase">Synchronized Clock System</h2>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* project */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div className="mil-project-info mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Project Info</h5>
                <p className="mil-mb-10">Client</p>
                <h6 className="mil-mb-15">Research Laboratories / Pharma Facilities</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Service</p>
                <h6 className="mil-mb-15">IoT Development & Embedded Systems</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Industry</p>
                <h6 className="mil-mb-15">Pharma, Clinical, Research Labs</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Stack</p>
                <h6>Processor, Sensors (Temperature & Humidity), Display, WiFi Networking</h6>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overviews
              </span>
              <h3 className="mil-mb-30">Challenge</h3>
              <p className="mil-mb-60">
                The client’s laboratories faced several operational challenges:
                <br />
                <br />- Inconsistent clocks across departments causing timing errors in experiments.
                <br />- Manual logging of temperature and humidity, prone to human error.
                <br />- Difficulty in maintaining historical records for regulatory compliance.
                <br />- Limited visibility of environmental conditions and time status across multiple lab rooms.
                <br /><br />The client needed a reliable, centralized, and IoT-based solution to synchronize time across all clocks and continuously monitor environmental conditions in the lab.
              </p>
              <h3 className="mil-mb-30">Our Solution</h3>
              <p className="mil-mb-60">
                Nextgen Digi Lab developed a WiFi-based Synchronized Clock System with integrated temperature and humidity monitoring.
                <br /><br />Key highlights include:
              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Accurate Time Synchronization
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Temperature & Humidity Monitoring
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Cloud-Enabled Dashboard
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Alerts & Notifications
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Audit-Ready Records
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mil-mb-60">
              <br />
                This system allowed the client to transition from manual checks and disconnected 
                clocks to a fully connected, automated monitoring environment.
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* project */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">The Solution</h3>
              <p className="mil-mb-30">
                The platform was implemented across multiple departments with minimal disruption. 
                It enabled users to:
              </p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Synchronize clocks across all departments
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Monitor temperature and humidity in real-time
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Receive automated alerts and notifications
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Visualize historical trends and generate reports
                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/2.jpg" alt="Project" />
              </div>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">The Impact</h3>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Improved Laboratory Coordination
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Enhanced Environmental Compliance
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Data Integrity & Accountability
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/9.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Operational Efficiency
                </p>
              </div>
              <p className="mil-mb-30">
                The result — a reliable, precise, and transparent lab monitoring ecosystem that supports safe, 
                compliant, and efficient operations.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/2.jpg" alt="Project" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* conclusion */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "30%" }} />
        <div className="container">
          <div className="row align-items-end mil-mb-90">
            <div className="col-xl-6">
              <h2 className="mil-mb-30">Conclusion</h2>
              <p>
                The Synchronized Clock System for Labs demonstrates how IoT-driven solutions can modernize laboratory operations. With Nextgen Digi Lab’s domain expertise and custom development approach, the client achieved:
                <br />1. Accurate and synchronized time across all lab units
                <br />2. Continuous monitoring of temperature and humidity
                <br />3. Real-time alerts for deviations
                <br />4. Streamlined reporting and regulatory compliance
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Time Synchronization</h4>
                  <p className="mil-box-text mil-mb-30">
                    All clocks display consistent time across multiple departments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Environmental Monitoring</h4>
                  <p className="mil-box-text mil-mb-30">
                    Real-time logging of temperature and humidity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/3.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Audit-Ready Data Logs</h4>
                  <p className="mil-box-text mil-mb-30">
                    Secure historical records for compliance and reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* conclusion end */}
      <div className="container">
        <div className="mil-divider mil-mb-60" />
      </div>
      {/* pagination */}
      <div className="container mil-mb-120">
        <div className="mil-pagination mil-hidden-button">
          <Link href="project" className="mil-slider-nav">
            <div className="mil-slider-btn-prev mil-button-sm mil-blog-prev">
              <i className="fas fa-arrow-left" />
              <span className="mil-h6">Prev</span>
            </div>
          </Link>
          <Link href="portfolio" className="mil-button-all">
            <span>
              <i className="fas fa-list" />
            </span>
          </Link>
          <div className="mil-slider-nav">
            <Link href="project" className="mil-slider-btn-next mil-blog-next">
              <span className="mil-h6">Next</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
      {/* pagination end */}
    </Layouts>
  );
};
export default Project;
