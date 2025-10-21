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
            <h2 className="mil-uppercase">Digitizing Documentation System</h2>
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
                <h6 className="mil-mb-15">Confidential</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Service</p>
                <h6 className="mil-mb-15">SaaS & Web Application Development</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Industry</p>
                <h6 className="mil-mb-15">Pharma, Quality Assurance</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Stack</p>
                <h6>Node.js, React.js, PostgreSQL, Firebase, REST API</h6>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overviews
              </span>
              <h3 className="mil-mb-30">Challenge</h3>
              <p className="mil-mb-60">
                The existing manual documentation process led to:
                <br />
                <br />Inefficient version control and approval tracking.
                <br />High risk of non-compliance during audits.
                <br />Difficulty in maintaining electronic signatures and access logs.
                <br />Limited visibility of document status across departments.
                <br /><br />The client needed a secure, scalable, and regulatory-compliant digital solution that could centralize document storage and streamline collaboration.
              </p>
              <h3 className="mil-mb-30">Our Solution</h3>
              <p className="mil-mb-60">
                Nextgen Digi Lab developed a custom Document Control System designed specifically for pharma and research organizations.
                <br /><br />Key highlights include:
              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        21 CFR Part 11 Compliance
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Automated Workflows
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Version & Revision Control
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Cloud-Enabled Architecture
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Role Based Access
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mil-mb-60">
              <br />
                This system allowed the client to transition seamlessly from paper-based operations to a fully digital, validated environment.
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
                  Upload, edit, and approve documents securely
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Track document history and maintain full traceability
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Automatically notify teams of pending approvals
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Generate audit-ready reports in seconds
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
                  75% reduction in document processing time
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  100% compliance with audit requirements
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Enhanced data integrity and accountability
                </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/9.svg" alt="icon" />
                </div>
                <p className="mil-dark">
                  Improved cross-department collaboration
                </p>
              </div>
              <p className="mil-mb-30">
                The result — a streamlined, transparent, and compliant documentation ecosystem that supports 
                continuous quality improvement and regulatory readiness.
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
                The Digitizing Pharma Documentation System demonstrates how tailored 
                digital solutions can revolutionize regulated industries. With Nextgen Digi Lab’s 
                domain expertise and agile approach, the client achieved faster document cycles, 
                error-free audits, and long-term digital transformation.
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
                  <h4 className="mil-mb-30">Document Data Management</h4>
                  <p className="mil-box-text mil-mb-30">
                    Securely organize, track, and manage all documents with centralized storage, 
                    version control, and real-time audit trails.
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
                  <h4 className="mil-mb-30">Workflow Management</h4>
                  <p className="mil-box-text mil-mb-30">
                    Enable seamless collaboration across departments with automated review, 
                    approval, and notification systems.
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
                  <h4 className="mil-mb-30">Custom Software Development</h4>
                  <p className="mil-box-text mil-mb-30">
                    Tailored development to meet pharma regulatory standards, integrate with existing 
                    systems, and support enterprise adoption.
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
