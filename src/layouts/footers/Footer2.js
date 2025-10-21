const Footer2 = () => {
  return (
    <footer className="mil-dark-bg">
      <img src="img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content">
          <div className="row align-items-center mil-p-120-60">
            <div className="col-xl-6 mil-mb-60">
              <h3 className="mil-light mil-mb-15">
                Join The <span className="mil-accent">Nextgen Digi Lab</span> Experience
              </h3>
              <p className="mil-light-soft">
                Empowering pharma, clinical, and research industries with innovative 
                software and IoT solutions that simplify compliance, boost efficiency, and accelerate growth.
              </p>
            </div>

          </div>

          <div className="mil-divider mil-light" />

          <div className="row justify-content-between mil-p-120-60">
            <div className="col-md-3 col-lg-3 col-xl-3 mil-mb-30">
              <img
                src="img/logo/logo-light.png"
                alt="logo"
                className="mil-logo mil-mb-60"
                style={{ width: 140 }}
              />
              <p className="mil-light mil-light-soft" style={{ marginBottom: 45 }}>
                B-602 Sai Arcade, Bhujbal Vasti, Wakad, Pimpri-Chinchwad, Maharashtra 411057, India
              </p>
              <ul className="mil-simple-list mil-mb-15">
                <li className="mil-light">
                  <span className="mil-accent">+91</span>&nbsp;
                  <span className="mil-light-soft">70202 88467</span>
                </li>
                <li>
                  <span className="mil-accent">info</span>
                  <span className="mil-light mil-light-soft">
                    @nextgendigilab.com
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-md-8 col-lg-7 col-xl-7">
              <div className="row justify-content-end">
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Social</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li><a href="https://www.facebook.com/nextgendigilab" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com/nextgendigilab" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/nextgen-digi-lab/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com/nextgendigilab" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.youtube.com/@nextgendigilab" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                  </ul>
                </div>

                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Support</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/faq">FAQs</a></li>
                    {/* <li><a href="/support">Support</a></li>
                    <li><a href="/documentation">Documentation</a></li>
                    <li><a href="/sitemap">Sitemap</a></li> */}
                  </ul>
                </div>

                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Links</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/terms">Terms &amp; Conditions</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/partners">Partners</a></li>
                    <li><a href="/press">Press</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© {new Date().getFullYear()} Nextgen Digi Lab. All Rights Reserved.</p>
          <p className="mil-text-sm mil-light">Designed & Developed with ❤️ by Nextgen Digi Lab.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
