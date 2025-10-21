import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Publication = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm-2 mil-deep-bg">
        <img
          src="img/blog/enviro-blog.jpg"
          className="mil-background-image"
          style={{ objectPosition: "center" }}
          alt="Environmental Monitoring System"
        />
        <div className="mil-overlay" />
      </div>
      {/* banner end */}

      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            {/* main blog content */}
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <span className="mil-suptitle mil-accent mil-mb-30">
                Smart Facility Solutions
              </span>
              <h3 className="mil-up-font mil-mb-30">
                IoT-Driven Environmental Monitoring for Precise Temperature and Humidity Control
              </h3>

              <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                <li className="mil-post-author">
                  <img src="img/faces/1.jpg" alt="Author" />
                  <span>Akhilesh Pimparkhedkar</span>
                </li>
                <li>09 Oct. 2025</li>
                <li>6 min read</li>
              </ul>

              <div className="mil-divider mil-mb-60" />

              <p className="mil-mb-30">
                Maintaining precise environmental conditions is essential across industries like pharmaceuticals, research laboratories, and data centers. Even slight deviations in temperature or humidity can compromise product quality or experiment accuracy. Our Environmental Monitoring System automates the process using IoT-based sensors and cloud integration to deliver real-time insights with exceptional accuracy.
              </p>

              <p className="mil-mb-60">
                The system continuously measures and logs environmental parameters using high-precision sensors such as DHT22 and DS18B20. Data is processed through NodeMCU and displayed locally on a TFT screen while being uploaded to the cloud for analysis, alerts, and compliance tracking. This ensures every environmental change is detected, recorded, and actionable.
              </p>

              <h3 className="mil-mb-50">Why Environmental Monitoring is Critical</h3>

              <p className="mil-mb-30">
                Temperature and humidity fluctuations can lead to significant losses in sensitive operations. In pharmaceutical labs, for instance, improper storage conditions can degrade compounds and render results invalid. Real-time monitoring not only prevents such issues but also simplifies audit trails and ensures regulatory compliance.
              </p>

              <p className="mil-mb-60">
                Our system eliminates manual monitoring by providing automatic data logging and cloud-based dashboards. Alerts can be configured for threshold breaches, ensuring immediate corrective action and complete traceability for GMP-compliant facilities.
              </p>

              <blockquote cite="getyourweb.in" className="mil-mb-60">
                <p className="mil-text-lg mil-mb-20">
                  “In precision-driven industries, environment control is not optional — it’s the backbone of quality assurance and reliability.”
                </p>
                <span className="mil-h4 mil-font-3 mil-accent">
                  - &nbsp;NextGen Digi Lab
                </span>
              </blockquote>

              <h3 className="mil-mb-50">Technology Behind the System</h3>

              <p className="mil-mb-30">
                Powered by NodeMCU (ESP8266) and Firebase, the system captures, visualizes, and stores sensor data in real time. The WiFiManager feature allows flexible setup across different networks, while the TFT SPI display provides immediate local visibility. The backend architecture supports scalability for multi-sensor and multi-location setups.
              </p>

              <p className="mil-mb-60">
                Optional analytics modules help generate trend graphs, statistical reports, and alert logs. Combined with a simple UI and modular hardware, the solution is both lab-friendly and industry-ready.
              </p>

              <div className="row mil-mb-30">
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="img/blog/enviro1.jpg"
                    alt="Sensor System"
                    className="mil-post-image"
                  />
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="img/blog/enviro2.jpg"
                    alt="Dashboard Interface"
                    className="mil-post-image"
                  />
                </div>
              </div>

              <h3 className="mil-mb-50">Conclusion</h3>
              <p className="mil-mb-60">
                Our Environmental Monitoring System combines precision sensors, IoT communication, and cloud analytics to deliver a complete visibility solution for temperature and humidity control. It helps industries maintain compliance, ensure data integrity, and minimize human intervention — paving the way for smarter, automated, and reliable operations.
              </p>

              <ul className="mil-tags mil-mb-60">
                <li className="mil-h6">Tags:&nbsp;&nbsp; </li>
                <li>
                  <a href="#.">IoT</a>
                </li>
                <li>
                  <a href="#.">Environmental Monitoring</a>
                </li>
                <li>
                  <a href="#.">Automation</a>
                </li>
              </ul>
            </div>

            {/* sidebar */}
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About NextGen Digi Lab</h5>
                <p className="mil-mb-30">
                  We create intelligent IoT systems that monitor, automate, and
                  optimize industrial environments for accuracy and compliance.
                </p>
                <Link href="team2" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">Akhilesh Pimparkhedkar</h4>
                    <p className="mil-text-sm">Founder & IoT Engineer</p>
                  </div>
                </Link>
              </div>

              <div className="mil-divider mil-mb-60" />

              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/6.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>WiFi-Based Synchronized Clock System</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/5.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Cloud-Connected Industrial Sensors</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/4.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>IoT in Pharma Quality Systems</h6>
                  </div>
                </Link>
              </div>

              <div className="mil-divider mil-mb-60" />

              <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
              <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Your email address"
                />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>

              <h5 className="mil-list-title mil-mb-30">Contact us</h5>
              <p className="mil-mb-30">
                Interested in real-time monitoring solutions for your lab or facility? Let’s talk.
              </p>
              <Link href="contact" className="mil-link mil-link-sm">
                <span>Send Message</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Publication;
