import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
const Service1 = () => {
  return (
    <Layouts footer={1}>
      <PageBanner
        pageName={"Service"}
        pageTitle={"Document Control"}
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
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                  Nextgen Digi Lab’s <span className="mil-accent">Document Control software </span>helps organizations manage, 
                  track, and secure all critical documents in one centralized platform.
                  <br/><span className="mil-accent">Ensure compliance </span>, <span className="mil-accent">improve collaboration </span>, and <span className="mil-accent">reduce errors</span> with real-time 
                  version control and access management.
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <a href="/contact" className="mil-button mil-border mil-mb-30">
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
      {/* steps */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "35%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-12 mil-mb-90">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Services and Solutions
              </span>
              <h2 className="mil-mb-30">
                Our Document Control Software Helps You <br/>Manage Documents Efficiently
              </h2>
              <p className="mil-dark">
                Nextgen Digi Lab’s Document Control software streamlines document management, 
                <br/>ensures compliance, and enhances collaboration across your organization.
              </p>
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">Document Management Consulting</h4>
                <p>
                  We analyze your current documentation workflows and design a 
                  strategy to improve efficiency, compliance, and accessibility.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15">Design and Implementation</h4>
                <p>
                  Custom implementation of a centralized document control 
                  system with user-friendly interfaces and role-based access.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">End-to-End Document Control</h4>
                <p>
                  From creation to approval, storage, and archiving, 
                  manage all documents seamlessly in one platform.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">Migration of Existing Documents</h4>
                <p>
                  Securely migrate legacy documents into the new system without 
                  losing version history or metadata.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">Third-Party Integrations</h4>
                <p>
                  Integrate with ERP, LMS, or other enterprise systems to ensure 
                  smooth data flow and workflow automation.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-mb-15">Support and Maintenance</h4>
                <p>
                  Continuous monitoring, updates, and support to ensure 
                  your document control system stays compliant and efficient.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <a href="#." className="mil-button mil-border mil-mb-30">
                <span>Tell us about your project</span>
              </a>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-link mil-mb-30">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div> */}

        </div>
      </section>
      {/* steps end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* next step */}
      <section className="mil-p-120-0">
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Safeguard Modern
            </span> */}
            <h2>Ready To Take The Next Step?</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-hover-card mil-mb-30">
                <h4 className="mil-mb-30">Get a Live Demo</h4>
                <p className="mil-mb-30">
                  Experience how Nextgen Digi Lab’s Document Control software can streamline 
                  your workflows, ensure compliance, and improve collaboration across your 
                  organization.
                </p>
                <a href="/contact" className="mil-link">
                  <span>Request a Free Demo</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-hover-card mil-mb-30">
                <h4 className="mil-mb-30">Start Now</h4>
                <p className="mil-mb-30">
                  Take the first step towards efficient, compliant, and streamlined 
                  document management.
                  <br/>Empower your team with real-time access, version control, and seamless collaboration.
                </p>
                <a href="/contact" className="mil-link">
                  <span>Get In Touch</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* next step end */}
      {/* partners */}
      {/* <div className="mil-partners mil-partners-spaces">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="img/partners/1.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/3.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/4.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/5.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/6.png" alt="partner" />
            </a>
          </div>
        </div>
      </div>
      partners end */}

      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* services */}
      <section className="mil-services mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "40%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Quality and Performance
          </span>
          <h2 className="mil-mb-90">
            Our Approach To <span className="mil-accent">Document Control Software</span>{" "}
          </h2>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">01</span> Requirement Analysis & Tech Stack Selection
                  </h5>
                  <p>
                    We evaluate your organization’s needs and choose the most suitable technology 
                    stack to ensure robust, scalable, and user-friendly solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/2.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">02</span> Multi-User & Role-Based Architecture
                  </h5>
                  <p>
                    Design a system with multi-level access control and role-based permissions 
                    to ensure proper document security and compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/3.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">03</span> Third Party
                    Integration
                  </h5>
                  <p>
                    Seamlessly integrate with ERP, LMS, and other enterprise tools to 
                    enable smooth workflows and automated processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/4.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">04</span> Scalability & Flexibility
                  </h5>
                  <p>
                    Our solutions are designed to grow with your organization, accommodating 
                    more users, documents, and complex workflows over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/5.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">05</span> Security & Compliance Audits
                  </h5>
                  <p>
                    Regular security audits and compliance checks ensure that your document 
                    management system adheres to industry standards and regulations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/6.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">06</span> Smooth Deployment & Support
                  </h5>
                  <p>
                    We handle end-to-end deployment and provide continuous support, updates, 
                    and training for hassle-free adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <a href="/contact" className="mil-button mil-border mil-mb-30">
                <span>Talk To Our DoC Experts</span>
              </a>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-link mil-mb-30">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* services end */}
      {/* services */}
      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: 0, left: "5%" }}
        />
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">
              Always The Best
            </span>
            <h2 className="mil-light mil-mb-30">
              Types Of <span className="mil-accent">Software Applications</span> We
              Deliver
            </h2>
            <p className="mil-light-soft">
              We build secure, scalable, and industry-ready software solutions designed to 
              streamline operations and <br/>drive digital transformation in pharma, clinical, 
              and research environments.
            </p>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light">Document Control Systems</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-light">IoT Platforms</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-light">Pharma ERP Solutions</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-light">Study Management Systems</p>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                <p className="mil-light">Accounting Systems</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/1.svg" alt="icon" />
                </div>
                <p className="mil-light">Document Auto. Solutions</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-light">Cybersecurity Platforms</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-light">HR/HRM Software</p>
              </div>
            </div> */}
          </div>
          <div className="mil-text-center">
            <a href="/contact" className="mil-button mil-border mil-light mil-mb-30">
              <span>Talk To Our DoC Experts</span>
            </a>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Service1;
