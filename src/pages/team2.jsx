import ContactForm from "@/src/components/ContactForm";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const TeamSingle = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <div className="row justify-content-between">
              <div className="col-lg-6 mil-adaptive-center">
                <Link href="team" className="mil-link link-left mil-mb-30">
                  <i className="fas fa-arrow-left" />
                  <span>Go Back</span>
                </Link>
                <h2 className="mil-uppercase mil-mb-30">Akhilesh Pimparkhedkar</h2>
                <p>Co-Founder – Nextgen Digi Lab</p>
              </div>
            </div>
            <div className="mil-portrait-position">
              <div className="mil-portrait-frame">
                <img src="img/faces/t1.png" alt="Hayman Andrews" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* team member */}
      <section className="mil-team mil-p-120-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8 col-lg-8 col-xl-8">
              <h3 className="mil-mb-30">Biography</h3>
              <p className="mil-mb-60">
                Akhilesh Umesh Pimparkhedkar is a passionate technologist and innovator leading 
                Nextgen Digi Lab, a company dedicated to transforming ideas into intelligent 
                digital and IoT-driven solutions. With a background in IoT Engineering and deep 
                expertise in software systems and hardware integration, Akhilesh has 
                successfully built solutions that bridge technology with real-world applications — 
                from environmental monitoring systems to enterprise-grade SaaS platforms for the 
                pharmaceutical industry.
              </p>
              <ul className="mil-timeline">
              <li>
                  <h5 className="mil-mb-5">Nextgen Digi Lab</h5>
                  <p className="mil-text-sm">2024-Today</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">Consultation</h5>
                  <p className="mil-text-sm">2023-2024</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">B-Tech</h5>
                  <p className="mil-text-sm">2019-2023</p>
                </li>
              </ul>
              <p className="mil-mb-60">
                His approach blends creative engineering, design thinking, and system optimization, 
                ensuring every product built under his leadership is both functional and futuristic.
              </p>
              <div className="mil-divider mil-mb-60" />
              <div className="row">
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">IoT System <br/>Architecture</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "95%" }}
                      />
                    </div>
                    <div className="mil-text-sm">95%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Product Design & Prototyping</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="mil-text-sm">90%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Software & Hardware Integration</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <div className="mil-text-sm">85%</div>
                  </div>
                </div>
              </div>
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-30">Skills</h3>
              <p className="mil-mb-60">
                Akhilesh combines strong engineering fundamentals with a passion for innovation 
                in the Internet of Things (IoT). His work bridges hardware and software, creating 
                intelligent systems that connect devices, data, and people seamlessly. From sensor 
                integration and embedded systems to cloud connectivity and data visualization, 
                Akhilesh ensures every project delivers both precision and performance. His approach 
                is rooted in curiosity, clarity, and a drive to make technology simpler and smarter 
                for real-world applications.
              </p>
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-60">Social</h3>
              <ul className="mil-social-links mil-mb-30">
                <li>
                  <a href="#.">Facebook</a>
                </li>
                <li>
                  <a href="#.">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/akhilesh-pimparkhedkar/">LinkedIn</a>
                </li>
                <li>
                  <a href="#.">Twitter</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-3 col-lg-3">
              <div className="mil-icon-box mil-mt-60-adapt">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/7.svg" alt="icon" />
                </div>
                <h4 className="mil-mb-30">
                  “<span className="mil-accent">Innovation starts with curiosity</span> — every project at Nextgen Digi Lab 
                  is a step toward creating smarter, more connected systems for tomorrow.”
                </h4>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Akhilesh Pimparkhedkar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team member end */}
      {/* contact */}
      {/* <ContactForm /> */}
    </Layouts>
  );
};
export default TeamSingle;
