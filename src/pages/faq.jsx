import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

const Faq = () => {
  return (
    <Layouts>
      <PageBanner pageName={"FAQs"} pageTitle={"FAQs"} />

      {/* FAQ Section */}
      <section className="mil-faqs mil-p-60-60">
        <div
          className="mil-deco"
          style={{ bottom: 0, left: "10%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="mil-tabs">
            {/* TAB 1 - Information */}
            <input type="radio" name="tabs" id="tab1" defaultChecked="checked" />
            <label htmlFor="tab1">Information</label>
            <div className="mil-tab">
              <div className="row justify-content-between align-items-start">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-20">
                    At <span className="mil-accent">Nextgen Digi Lab</span>, we believe in
                    collaboration, knowledge-sharing, and innovation.
                  </h3>
                  <p className="mil-mb-30">
                    We welcome guest writers, industry experts, and professionals
                    who want to share insights, case studies, or research related to
                    pharma, clinical, IoT, and digital transformation.
                  </p>
                </div>

                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>Information about Nextgen Digi Lab</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        We welcome experts and researchers to contribute on:
                        <br />• Pharma and clinical software solutions
                        <br />• IoT innovations in labs and healthcare
                        <br />• Data management & compliance
                        <br />• Digital transformation and Industry 4.0
                        <br />• Software development & integration
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Benefits of collaborating with Nextgen Digi Lab</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Expertise:</strong> Domain knowledge in pharma, clinical, IoT, and preclinical systems.</li>
                        <li><strong>Customization:</strong> Tailored software & hardware solutions for unique workflows.</li>
                        <li><strong>Innovation:</strong> Cutting-edge IoT and AI-driven technologies.</li>
                        <li><strong>Scalability:</strong> Solutions that grow with your organization.</li>
                        <li><strong>Support:</strong> Long-term maintenance and continuous improvement.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>How much does Nextgen Digi Lab Software cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        Pricing depends on your project’s scope, requirements,
                        and number of IoT integrations. For tailored quotes, please
                        contact our team directly.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        All client deliverables are the client’s property, while internal
                        frameworks remain with Nextgen Digi Lab unless otherwise stated.
                        We guarantee confidentiality and IP protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 2 - Pricing */}
            <input type="radio" name="tabs" id="tab2" />
            <label htmlFor="tab2">Pricing Plans</label>
            <div className="mil-tab">
              <div className="row justify-content-between align-items-start">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-20">
                    <span className="mil-accent">Flexible pricing</span> that scales with your needs.
                  </h3>
                  <p className="mil-mb-30">
                    Whether you’re a startup or enterprise, our pricing adapts
                    to your requirements, integrations, and long-term goals.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>How do you determine software cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        Costs vary based on project complexity, custom IoT hardware,
                        integration needs, and ongoing support. We provide transparent
                        estimates after requirement analysis.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Do you offer subscription-based models?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        Yes — subscription and pay-per-use models are available for
                        cloud dashboards, analytics, and device management systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 3 - Data & Privacy */}
            <input type="radio" name="tabs" id="tab3" />
            <label htmlFor="tab3">Data & Privacy</label>
            <div className="mil-tab">
              <div className="row justify-content-between align-items-start">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-20">
                    <span className="mil-accent">Data privacy</span> is our top priority.
                  </h3>
                  <p className="mil-mb-30">
                    We adhere to international data security standards and
                    ensure your information is protected at every level.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>How do you ensure data protection?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        We implement role-based access, end-to-end encryption,
                        and compliance with GDPR and 21 CFR Part 11 for all our systems.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Who owns the collected data?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        All collected data belongs solely to the client. We do not
                        store, reuse, or share client data without explicit consent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 4 - Security */}
            <input type="radio" name="tabs" id="tab4" />
            <label htmlFor="tab4">Security</label>
            <div className="mil-tab">
              <div className="row justify-content-between align-items-start">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-20">
                    <span className="mil-accent">Secure systems</span> built with integrity and trust.
                  </h3>
                  <p className="mil-mb-30">
                    From firmware to cloud, every layer of our IoT infrastructure
                    is designed for security and reliability.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>What security standards do you follow?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        We follow OWASP, ISO 27001, and industry best practices
                        to prevent vulnerabilities and unauthorized access.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Do you perform regular audits?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        Yes — periodic vulnerability assessments and penetration
                        testing ensure consistent system security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <ContactForm /> */}
    </Layouts>
  );
};

export default Faq;
