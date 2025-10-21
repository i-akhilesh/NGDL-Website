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
                <Link href="/team" className="mil-link link-left mil-mb-30">
                  <i className="fas fa-arrow-left" />
                  <span>Go Back</span>
                </Link>
                <h2 className="mil-uppercase mil-mb-30">
                  Dr. Dhanashri Kulkarni
                </h2>
                <p>Founder – Nextgen Digi Lab</p>
              </div>
            </div>
            <div className="mil-portrait-position">
              <div className="mil-portrait-frame">
                <img src="img/faces/1.jpg" alt="Dr. Dhanashri Kulkarni" />
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
                Dr. Dhanashri Kulkarni is the visionary Founder and Director of
                <span className="mil-accent"> Nextgen Digi Lab</span>, leading
                digital transformation for the pharmaceutical, clinical, and
                research industries. With deep expertise in quality systems,
                regulatory compliance, and process automation, she has been
                instrumental in bridging the gap between technology and life
                sciences.
              </p>
              <p className="mil-mb-60">
                Under her leadership, Nextgen Digi Lab has developed several
                intelligent platforms that help organizations meet
                <b> 21 CFR Part 11 </b> and other regulatory standards through
                innovative, validated software solutions.
              </p>

              <ul className="mil-timeline">
                <li>
                  <h5 className="mil-mb-5">Founder – Nextgen Digi Lab</h5>
                  <p className="mil-text-sm">2024 – Present</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">Consultant – Pharma Compliance & Automation</h5>
                  <p className="mil-text-sm">2019 – 2023</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">Academic & Research Contributor</h5>
                  <p className="mil-text-sm">2010 – 2019</p>
                </li>
              </ul>

              <div className="mil-divider mil-mb-60" />

              <h3 className="mil-mb-30">Key Focus Areas</h3>
              <div className="row">
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Regulatory Compliance</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div className="mil-skill-prog" style={{ width: "95%" }} />
                    </div>
                    <div className="mil-text-sm">95%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Digital Transformation</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div className="mil-skill-prog" style={{ width: "90%" }} />
                    </div>
                    <div className="mil-text-sm">90%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Leadership & Strategy</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div className="mil-skill-prog" style={{ width: "92%" }} />
                    </div>
                    <div className="mil-text-sm">92%</div>
                  </div>
                </div>
              </div>

              <div className="mil-divider mil-mb-60" />

              <h3 className="mil-mb-30">Vision & Mission</h3>
              <p className="mil-mb-60">
                Dr. Kulkarni envisions a future where every organization can
                harness the power of technology to ensure quality, compliance,
                and efficiency. Her mission is to enable a new era of smart,
                validated systems that redefine how pharma and research
                organizations operate in a digital-first world.
              </p>

              <div className="mil-divider mil-mb-60" />

              <h3 className="mil-mb-60">Social Presence</h3>
              <ul className="mil-social-links mil-mb-30">
                <li>
                  <a href="https://linkedin.com/company/nextgen-digilab" target="_blank">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/nextgendigilab" target="_blank">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/nextgendigilab" target="_blank">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/nextgendigilab" target="_blank">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="mil-icon-box mil-mt-60-adapt">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/7.svg" alt="icon" />
                </div>
                <h4 className="mil-mb-30">
                  “At Nextgen Digi Lab, we don’t just create software — we
                  <span className="mil-accent"> build trust </span> through
                  innovation and compliance.”
                </h4>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>– Dr. Dhanashri Kulkarni</p>
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
