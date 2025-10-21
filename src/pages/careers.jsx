import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "../lib/posts";

const CareersBannerSlider = dynamic(
  () => import("@/src/components/sliders/CareersBannerSlider"),
  {
    ssr: false,
  }
);
const LatestPostsSlider = dynamic( () => import("../components/sliders/LatestPosts"), { ssr: false } );

const Careers = (props) => {
  return (
    <Layouts>
      <PageBanner pageName={"Careers"} pageTitle={"Careers"} />
      {/* careers */}
      <section className="mil-careers mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between mil-mb-90">
            <div className="col-xl-6">
              <h3 className="mil-mb-30">
                Inspire and Get Inspired by <br />
                <span className="mil-accent">Professional</span> Experts
              </h3>
            </div>
            <div className="col-xl-4">
              <p>
                At <span className="mil-accent">Nextgen Digi Lab</span>, we believe in growing together with our people.
                We are building a team of innovators, creators, and problem-solvers 
                who are passionate about technology, 
                IoT, and pharma digital transformation.
                If you’re looking for an <span className="mil-accent">environment where your ideas matter, your skills are valued</span>
                , and your career can thrive, 
                you’ll feel right at home with us.
              </p>
            </div>
          </div>
          <ul className="mil-vacancies-frame">
            
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Remote</span>
                  </div>
                  <h4>Java Developer Intern</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    We’re seeking a Java Developer Intern to assist in building and maintaining 
                    backend systems. You’ll work with APIs, databases, and real-world projects to strengthen 
                    your coding and problem-solving skills.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="/contact2" className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Remote</span>
                  </div>
                  <h4>Next.js Developer Intern</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    We’re looking for a Next.js Developer Intern to create modern, 
                    responsive web applications. You’ll work with React, Next.js, and 
                    Tailwind CSS to deliver fast, user-friendly interfaces.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="/contact2" className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            
            {/* <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge mil-badge-dark">Remote</span>
                    <span className="mil-text-sm mil-dark">Whole world</span>
                  </div>
                  <h4>Sell Agent</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li> */}
            
            {/* <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Toronto</span>
                  </div>
                  <h4>UI/UX Designer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
      {/* careers end */}
      {/* about */}
      <section className="mil-about mil-deep-bg mil-p-120-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Work With Us
              </span>
              <h2 className="mil-mb-30">
                Why <span className="mil-accent">Choose</span> Us?
              </h2>
              <p className="mil-mb-15">
                At Nextgen Digi Lab, we don’t just deliver projects—we build long-term partnerships. 
                Our team blends deep industry expertise with cutting-edge technology to create solutions that empower your business to grow, adapt, and lead.
                Partner with us to accelerate your digital journey and achieve measurable success.
              </p>

              <div className="mil-buttons-frame">
                <a href="about" className="mil-button mil-border">
                  <span>Read more</span>
                </a>
                {/* <a href="portfolio" className="mil-link">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right" />
                </a> */}
              </div>
            </div>
            {/* <div className="col-xl-6">
              <div className="mil-about-illustration-2">
                <div className="mil-image-frame">
                  <img src="img/photo/8.jpg" alt="Office" />
                </div>
                <a href="#." className="mil-play-button">
                  <i className="fas fa-play" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="mil-counters mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h3 className="mil-mb-20">Focused<br/>Expertise</h3>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Dedicated to Pharma, Clinical & IoT Solutions</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h3 className="mil-mb-20">Early Success Stories</h3>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Delivering impactful software & hardware deployments</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h3 className="mil-mb-20">Growing Client Trust</h3>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Building partnerships with research & healthcare enterprises</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h3 className="mil-mb-20">Committed to Quality</h3>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Driven by innovation, reliability, and precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      {/* banners slider */}
      {/* <CareersBannerSlider /> */}
      {/* banners slider end */}
      {/* partners */}
      {/* <div className="mil-partners mil-p-90-60">
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
      </div> */}
      {/* partners end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* blog */}
      {/* <LatestPostsSlider posts={props.posts} /> */}
    </Layouts>
  );
};
export default Careers;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    }
  }
}
