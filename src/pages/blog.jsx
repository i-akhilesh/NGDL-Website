import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Blog = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Blog"} pageTitle={"Our Blog"} />
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            {/* Blog List */}
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              
              {/* Blog 1 */}
              <Link href="publication" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/blog1.jpg" alt="WiFi Clock System" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>IoT</li>
                      <li>02 Oct. 2025</li>
                    </ul>
                    <h4>Transforming Pharma, Clinical & Preclinical Research with IoT</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Discover how our NTP-synced WiFi Clock System ensures precise
                      timekeeping across laboratories and industries—eliminating manual
                      calibration and ensuring total synchronization with global servers.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Blog 2 */}
              <Link href="publication2" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/blog2.jpg" alt="Environmental Monitoring" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Automation</li>
                      <li>09 Oct. 2025</li>
                    </ul>
                    <h4>Revolutionizing Time Management with WiFi-Based Synchronized Clocks</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Explore how our intelligent monitoring system automates
                      temperature and humidity tracking using IoT sensors, real-time
                      dashboards, and alert-based controls for labs and pharma units.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Blog 3 */}
              <Link href="publication3" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/blog3.jpg" alt="Water Quality Monitoring" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Research</li>
                      <li>17 Oct. 2025</li>
                    </ul>
                    <h4>IoT-Driven Environmental Monitoring for Precise Temperature and Humidity Control</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Learn how our IoT-based system measures pH, turbidity, and TDS in
                      real-time while streaming results to the cloud—helping facilities
                      maintain compliance and environmental safety.
                    </p>
                  </div>
                </div>
              </Link>

              <div className="mil-divider mil-mb-60" />
              
              {/* Pagination */}
              <div className="mil-pagination mil-hidden-arrows">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-blog-prev">
                    <i className="fas fa-arrow-left" />
                    <span className="mil-h6">Prev</span>
                  </div>
                </div>
                <ul className="mil-pagination-numbers">
                  <li className="mil-active">
                    <a href="#.">1</a>
                  </li>
                  <li>
                    <a href="#.">2</a>
                  </li>
                  <li>
                    <a href="#.">3</a>
                  </li>
                </ul>
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-next mil-blog-next">
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-xl-3 mil-mb-120">

              {/* About */}
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About NextGen Digi Lab</h5>
                <p className="mil-mb-30">
                  NextGen Digi Lab pioneers IoT and software automation solutions for
                  pharmaceutical, clinical, and research sectors—bridging innovation and
                  precision to enable smarter digital transformation.
                </p>
                <Link href="team2" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/faces/2.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">Akhilesh Pimparkhedkar</h4>
                    <p className="mil-text-sm">Co-Founder</p>
                  </div>
                </Link>
              </div>

              <div className="mil-divider mil-mb-60" />

              {/* Search */}
              <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Search articles..."
                />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </form>

              <div className="mil-divider mil-mb-60" />

              {/* Recent Posts */}
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/clock.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>WiFi-Based Synchronized Clock System</h6>
                  </div>
                </Link>
                <Link href="publication2" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/enviro-blog.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>IoT Environmental Monitoring</h6>
                  </div>
                </Link>
                <Link href="publication3" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/water-quality.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Water Quality Monitoring System</h6>
                  </div>
                </Link>
              </div>

              <div className="mil-divider mil-mb-60" />

              {/* Categories */}
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Categories</h5>
                <ul className="mil-hover-link-list">
                  <li><a href="#.">IoT Systems</a></li>
                  <li><a href="#.">Automation</a></li>
                  <li><a href="#.">Cloud & Data</a></li>
                  <li><a href="#.">Sensors</a></li>
                  <li><a href="#.">Industry 4.0</a></li>
                </ul>
              </div>

              <div className="mil-divider mil-mb-60" />

              {/* Tags */}
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Tags</h5>
                <ul className="mil-tags">
                  <li><a href="#.">IoT</a></li>
                  <li><a href="#.">Automation</a></li>
                  <li><a href="#.">Cloud</a></li>
                  <li><a href="#.">Sensors</a></li>
                  <li><a href="#.">Hardware</a></li>
                </ul>
              </div>

              <div className="mil-divider mil-mb-60" />

              {/* Newsletter */}
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                <form className="mil-sidebar-input-frame">
                  <input
                    type="text"
                    className="mil-sidebar-input"
                    placeholder="Your email address"
                  />
                  <button type="submit">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>

              <div className="mil-divider mil-mb-60" />

              {/* Contact */}
              <h5 className="mil-list-title mil-mb-30">Contact Us</h5>
              <p className="mil-mb-30">
                Have a project in mind or want to automate your lab? Let’s talk about how IoT can make it smarter.
              </p>
              <Link href="contact" className="mil-link">
                <span>Send Message</span>
                <i className="fas fa-arrow-right" />
              </Link>

            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
    </Layouts>
  );
};

export default Blog;
