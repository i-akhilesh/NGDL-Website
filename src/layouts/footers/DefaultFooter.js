const DefaultFooter = () => {
  return (
    <footer className="mil-dark-bg">
      <img src="img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content mil-p-120-90">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 mil-mb-30">
              <img
                src="img/logo/logo-light.png"
                alt="logo"
                className="mil-logo mil-mb-30"
                style={{ width: 160 }}
              />
              <p className="mil-light-soft mil-mb-30">
                Nextgen Digi Lab empowers industries through intelligent digital
                solutions — from IoT systems and automation to customized software
                for pharma, research, and enterprise needs.
              </p>
              <a href="#." className="mil-app-btn mil-mb-5">
                <i className="fab fa-google-play" />
                <div className="mil-app-text">
                  <span className="mil-accent mil-text-sm">
                    Available soon on
                  </span>
                  <div className="mil-h6">Google Play</div>
                </div>
              </a>
              <a href="#." className="mil-app-btn">
                <i className="fab fa-apple" />
                <div className="mil-app-text">
                  <span className="mil-accent mil-text-sm">
                    Coming soon to
                  </span>
                  <div className="mil-h6">App Store</div>
                </div>
              </a>
            </div>

            <div className="col-xl-7 mil-mt-60-adapt">
              <div className="row">
                <div className="col-lg-7 mil-mb-30">
                  <h3 className="mil-light mil-up-font mil-mb-30">
                    Join The <span className="mil-accent">Nextgen Digi Lab</span> <br />
                    Innovation Journey
                  </h3>
                  <p className="mil-light-soft">
                    Follow us on social media to Stay updated with our latest innovations, case studies, and
                    technology insights that are transforming industries.
                  </p>
                </div>
                <div className="col-lg-5 mil-mb-30">
                  {/* <form>
                    <input
                      className="mil-rounded-input mil-text-center mil-mb-5"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button className="mil-button mil-accent-bg mil-fw">
                      <span>Subscribe Now</span>
                    </button>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mil-divider mil-light" />

        <div className="mil-footer-links">
          <ul className="mil-social mil-light">
            <li className="mil-adapt-links">
              <a href="https://facebook.com">Facebook</a>
              <a href="https://facebook.com">FB</a>
            </li>
            <li className="mil-adapt-links">
              <a href="https://instagram.com">Instagram</a>
              <a href="https://instagram.com">IG</a>
            </li>
            <li className="mil-adapt-links">
              <a href="https://linkedin.com/company/nextgen-digilab">LinkedIn</a>
              <a href="https://linkedin.com/company/nextgen-digilab">IN</a>
            </li>
            <li className="mil-adapt-links">
              <a href="https://twitter.com">Twitter</a>
              <a href="https://twitter.com">TW</a>
            </li>
            <li className="mil-adapt-links">
              <a href="https://youtube.com">YouTube</a>
              <a href="https://youtube.com">YT</a>
            </li>
          </ul>

          <ul className="mil-additional-links mil-light">
            <li>
              <a href="/terms">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">
            © {new Date().getFullYear()} Nextgen Digi Lab. <br/>All Rights Reserved.
          </p>
          <p className="mil-text-sm mil-light">
            Designed & Developed with ❤️ <br/>by Nextgen Digi Lab.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
