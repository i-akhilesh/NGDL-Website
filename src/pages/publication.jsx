import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Publication = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm-2 mil-deep-bg">
        <img
          src="img/blog/iot-pharma.jpg"
          className="mil-background-image"
          style={{ objectPosition: "center" }}
          alt="IoT in Pharma Industry"
        />
        <div className="mil-overlay" />
      </div>
      {/* banner end */}

      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <span className="mil-suptitle mil-accent mil-mb-30">
                Internet of Things in Pharma
              </span>
              <h3 className="mil-up-font mil-mb-30">
                Transforming Pharma, Clinical & Preclinical Research with IoT
              </h3>
              <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                <li className="mil-post-author">
                  <img src="img/faces/3.jpg" alt="Author" />
                  <span>Akhilesh Pimparkhedkar</span>
                </li>
                <li>09 Oct. 2025</li>
                <li>8 min read</li>
              </ul>

              <div className="mil-divider mil-mb-60" />

              <p className="mil-mb-30">
                The pharmaceutical and life sciences industries are undergoing
                a major digital transformation, and IoT (Internet of Things) is
                leading that change. From maintaining temperature-sensitive
                samples to ensuring compliance with 21 CFR Part 11, IoT is now a
                vital part of pharma manufacturing, clinical trials, and
                preclinical research. It bridges the gap between data, devices,
                and decision-making — creating a connected, compliant, and
                efficient environment.
              </p>

              <p className="mil-mb-60">
                In today’s regulated environments, manual monitoring is no
                longer sufficient. IoT-enabled sensors continuously track
                temperature, humidity, pressure, and vibration — ensuring
                real-time data visibility. This not only improves accuracy but
                also minimizes the risk of human error and data loss, which are
                critical concerns during audits or inspections.
              </p>

              <h3 className="mil-mb-50">Why IoT Matters in Pharma</h3>
              <p className="mil-mb-30">
                IoT solutions enable seamless data acquisition from laboratory
                instruments, cold-chain logistics, cleanrooms, and production
                lines. With secure cloud connectivity and real-time dashboards,
                QA teams can instantly detect deviations, respond faster, and
                generate audit-ready reports. This proactive approach ensures
                continuous GMP compliance while maintaining operational
                excellence.
              </p>

              <p className="mil-mb-60">
                In clinical and preclinical research, IoT systems enhance
                traceability and reproducibility. Smart sensors in animal rooms,
                incubators, and bioassay setups allow researchers to maintain
                stable environmental conditions. Automated alerts for out-of-
                range values help prevent experiment loss and ensure data
                integrity for regulatory submissions.
              </p>

              <blockquote cite="getyourweb.in" className="mil-mb-60">
                <p className="mil-text-lg mil-mb-20">
                  “IoT is not just about sensors — it’s about trust, traceability,
                  and transparency across every stage of drug discovery and
                  manufacturing.”
                </p>
                <span className="mil-h4 mil-font-3 mil-accent">
                  - &nbsp;Nextgen Digi Lab
                </span>
              </blockquote>

              <p className="mil-mb-60">
                Whether it’s a temperature excursion in a stability chamber or
                a humidity spike in a clinical storage unit, IoT systems provide
                early warnings through SMS and email notifications. Integration
                with cloud-based analytics helps companies detect long-term
                trends, optimize maintenance schedules, and make data-driven
                decisions.
              </p>

              <div className="row mil-mb-30">
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="img/blog/iot-lab.jpg"
                    alt="IoT Lab Monitoring"
                    className="mil-post-image"
                  />
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="img/blog/iot-dashboard.jpg"
                    alt="IoT Cloud Dashboard"
                    className="mil-post-image"
                  />
                </div>
              </div>

              <h3 className="mil-mb-50">Conclusion</h3>
              <p className="mil-mb-60">
                IoT is rapidly redefining the future of pharma and research.
                It ensures data integrity, regulatory compliance, and operational
                efficiency — three pillars that drive innovation and reliability.
                For organizations seeking to adopt Industry 4.0, implementing
                IoT is no longer an option but a necessity.
              </p>

              <ul className="mil-tags mil-mb-60">
                <li className="mil-h6">Tags:&nbsp;&nbsp; </li>
                <li><a href="#.">IoT</a></li>
                <li><a href="#.">Pharma</a></li>
                <li><a href="#.">Compliance</a></li>
                <li><a href="#.">Automation</a></li>
              </ul>

              <div className="mil-divider mil-mb-60" />

              <h5 className="mil-mb-30">Was this article helpful?</h5>
              <a
                href="#."
                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-15"
              >
                <span>Yes, it was informative!</span>
              </a>
              <a
                href="#."
                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-60"
              >
                <span>No, I need more details</span>
              </a>

              {/* <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-60">
                Comments - <span className="mil-accent">00</span>
              </h3>

              <h3 className="mil-mb-60">Leave a Reply</h3>
              
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Name</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="text" placeholder="Enter Your Name Here" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Address</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Message</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="mil-shortened"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="mil-button mil-border mil-fw">
                      <span>Post Comment</span>
                    </button>
                  </div>
                </div>
              </form> */}
            </div>

            {/* sidebar */}
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About Nextgen Digi Lab</h5>
                <p className="mil-mb-30">
                  We specialize in building IoT-based systems for Pharma,
                  Clinical, and Preclinical industries — integrating hardware,
                  sensors, and cloud dashboards to ensure data accuracy,
                  compliance, and operational transparency.
                </p>
                <Link href="team2" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">Akhilesh Pimparkhedkar</h4>
                    <p className="mil-text-sm">Founder &amp; IoT Engineer</p>
                  </div>
                </Link>
              </div>

              <div className="mil-divider mil-mb-60" />
              <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
              <Link href="publication" className="mil-post-sm mil-mb-15">
                <div className="mil-cover-frame">
                  <img src="img/blog/iot-clinical.jpg" alt="IoT Clinical" />
                </div>
                <div className="mil-description">
                  <h6>IoT-Driven Data Integrity in Clinical Research</h6>
                </div>
              </Link>
              <Link href="publication" className="mil-post-sm mil-mb-15">
                <div className="mil-cover-frame">
                  <img src="img/blog/iot-compliance.jpg" alt="IoT Compliance" />
                </div>
                <div className="mil-description">
                  <h6>Ensuring 21 CFR Part 11 Compliance with IoT Systems</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Publication;
