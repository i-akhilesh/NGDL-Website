import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Publication = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm-2 mil-deep-bg">
        <img
          src="img/blog/clock-blog.jpg"
          className="mil-background-image"
          style={{ objectPosition: "center" }}
          alt="WiFi Clock System"
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
                Smart Infrastructure
              </span>
              <h3 className="mil-up-font mil-mb-30">
                Revolutionizing Time Management with WiFi-Based Synchronized
                Clocks
              </h3>

              <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                <li className="mil-post-author">
                  <img src="img/faces/2.jpg" alt="Author" />
                  <span>Akhilesh Pimparkhedkar</span>
                </li>
                <li>09 Oct. 2025</li>
                <li>7 min read</li>
              </ul>

              <div className="mil-divider mil-mb-60" />

              <p className="mil-mb-30">
                Time synchronization plays a critical role in modern industries,
                where accuracy and reliability are non-negotiable. From
                laboratories to manufacturing plants, every second matters. Our
                WiFi-based synchronized clock system ensures that every unit
                across your facility stays perfectly aligned with global NTP
                servers — eliminating manual adjustments and human error.
              </p>

              <p className="mil-mb-60">
                Built using IoT technology and cloud integration, this solution
                provides centralized monitoring and control of all clocks within
                a facility. Whether you manage multiple buildings or a single
                lab, the system maintains absolute precision — ensuring smooth
                coordination and compliance with industry standards.
              </p>

              <h3 className="mil-mb-50">Why Time Synchronization Matters</h3>

              <p className="mil-mb-30">
                In industries like pharmaceuticals, research labs, and data
                centers, even a one-minute deviation can cause massive
                operational or data integrity issues. With NTP-based time sync,
                you get accuracy down to milliseconds, reducing the chances of
                record mismatches and audit non-compliance.
              </p>

              <p className="mil-mb-60">
                Our clock system automatically connects to WiFi and fetches
                real-time data from the NTP server. The synchronization process
                happens periodically, ensuring that all devices stay aligned
                without any user intervention.
              </p>

              <blockquote cite="getyourweb.in" className="mil-mb-60">
                <p className="mil-text-lg mil-mb-20">
                  “Automation is not just convenience — it's the foundation of
                  accuracy, compliance, and efficiency in connected facilities.”
                </p>
                <span className="mil-h4 mil-font-3 mil-accent">
                  - &nbsp;NextGen Digi Lab
                </span>
              </blockquote>

              <h3 className="mil-mb-50">Technology Behind the System</h3>
              <p className="mil-mb-30">
                Our solution leverages NodeMCU (ESP8266), TFT SPI displays, and
                DHT22 sensors for environmental data logging. Integration with
                Firebase enables real-time monitoring, while WiFiManager ensures
                flexible setup without reprogramming. Together, these components
                create a scalable, reliable, and intelligent ecosystem.
              </p>

              <p className="mil-mb-60">
                The system also supports custom firmware updates and cloud
                reporting. Administrators can monitor clock uptime, network
                status, and sync frequency through a central dashboard.
              </p>

              <div className="row mil-mb-30">
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="img/blog/clock1.jpg"
                    alt="Clock Hardware"
                    className="mil-post-image"
                  />
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="img/blog/clock2.jpg"
                    alt="Cloud Dashboard"
                    className="mil-post-image"
                  />
                </div>
              </div>

              <h3 className="mil-mb-50">Conclusion</h3>
              <p className="mil-mb-60">
                WiFi-based synchronized clock systems are redefining precision
                and reliability in modern facilities. By combining IoT
                technology, cloud data management, and automated synchronization,
                organizations can ensure every operation runs in perfect time.
              </p>

              <ul className="mil-tags mil-mb-60">
                <li className="mil-h6">Tags:&nbsp;&nbsp; </li>
                <li>
                  <a href="#.">IoT</a>
                </li>
                <li>
                  <a href="#.">Time Synchronization</a>
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
                  We design intelligent IoT systems that make industries smarter,
                  more reliable, and perfectly synchronized.
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
                    <h6>Integrating IoT in Smart Labs</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/5.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Environmental Monitoring Systems</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/4.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Industrial Automation with IoT</h6>
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
                Have a project or collaboration idea? Let’s build the next
                innovation together.
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
