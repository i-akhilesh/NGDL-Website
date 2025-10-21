import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
// import dynamic from "next/dynamic";
// const Service4Courses = dynamic(
//   () => import("@/src/components/sliders/Service4Courses"),
//   {
//     ssr: false,
//   }
// );
const Service2 = () => {
  return (
    <Layouts footer={1}>
      <PageBanner pageName={"Service"} pageTitle={"Study Plan Software"} />
      {/* about */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <div
                className="mil-circle-illustration mil-with-dots-2 mil-mb-60"
                data-swiper-parallax-scale=".8"
              >
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/faces/t4.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <h2 className="mil-mb-30">
                Plan Scientific Studies Effectively With{" "}
                <span className="mil-accent">Smart Scheduling</span>{" "} & 
                <span className="mil-accent">Task Management</span>{" "}
              </h2>
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <p>
                  Our{" "}
                  <span className="mil-accent">Study Plan Software</span>{" "}
                  helps scientists and research teams plan study timelines, 
                  schedule tasks, and track progress so experiments run smoothly and efficiently.
                </p>
              </div>
              <a href="/contact" className="mil-button mil-border mil-mb-30">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Discover Our Company
              </span>
              <h2 className="mil-mb-30">
                Explore <span className="mil-accent">Study Plan</span>{" "}
                Solutions
              </h2>
              <p className="mil-mb-90">
                Managing scientific studies can be complex, with multiple tasks, deadlines, and 
                dependencies. Nextgen Digi Lab’s Study Plan Software helps research teams:
                <br/><br/>1. Schedule experiments and tasks day-by-day.
                <br/>2. Assign responsibilities to team members.
                <br/>3. Track progress in real-time.
                <br/>4. Ensure compliance with study protocols.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-30">Task Scheduling</h5>
                <p>
                  Plan every step of your study with day-wise task allocation, set deadlines
                  , and ensure experiment stays on track.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">Study Timeline Visualization</h5>
                <p>
                  Visualize the full study from start to finish with clear timelines and milestones.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">Role-Based Task Assignment</h5>
                <p>
                  Assign tasks to team members and track who is responsible for each activity.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>IV</h3>
                </div>
                <h5 className="mil-mb-30">Progress Tracking & Notifications</h5>
                <p>
                  Receive updates on task completion and <br /> automated reminders for pending actions.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>V</h3>
                </div>
                <h5 className="mil-mb-30">Compliance & Documentation</h5>
                <p>
                  Ensure all planned tasks are documented for audits, regulatory reviews, and reproducibility.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>VI</h3>
                </div>
                <h5 className="mil-mb-30">Cloud-Enabled Collaboration</h5>
                <p>
                  Collaborate seamlessly across multiple teams and labs with centralized access to study plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-mb-90">
                Boost Your <span className="mil-accent">Research Efficiency</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>I</h3>
              </div>
              <h5 className="mil-mb-30">
                Study<br />
                Planning
              </h5>
              <p>
                Organize study objectives, tasks, and milestones efficiently in one place.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>II</h3>
              </div>
              <h5 className="mil-mb-30">
                Resource<br />
                Management
              </h5>
              <p>
                Track lab resources, instruments, and materials alongside your study plan.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>III</h3>
              </div>
              <h5 className="mil-mb-30">
                Real-Time<br />
                Monitoring
              </h5>
              <p>
                Monitor task completion and study progress in real-time.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>IV</h3>
              </div>
              <h5 className="mil-mb-30">
                Data-Driven<br />
                Insights
              </h5>
              <p>
                Analyze study timelines, detect bottlenecks, and optimize planning for future projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="mil-gradient-bg mil-p-120-90">
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-light mil-mb-90">
                Do You Know How{" "}
                <span className="mil-accent">Efficient</span> Your Study Planning Is?
              </h2>
            </div>
            <div className="col-xl-7 mil-mb-30">
              <p className="mil-light-soft mil-mb-30">
                By using our software, you can assess how well your study plans are organized, 
                identify potential gaps, and ensure all tasks are completed on time. Achieve 
                better control, reduce errors, and improve the success rate of your experiments.
              </p>
              <a href="/contact" className="mil-button mil-border mil-light">
                <span>Start Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* courses */}
      {/* <Service4Courses /> */}
      {/* courses end */}
      {/* contact */}
      <section className="mil-contact mil-gradient-bg mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: 0, right: "10%" }}
        />
        {/* <div className="container">
          <h2 className="mil-light mil-mb-90">
            Contact <span className="mil-accent">Us</span>
          </h2>
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Name</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <input type="text" placeholder="Enter Your Name Here" />
                </div>
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Email Adress</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="mil-input-frame mil-mb-60">
                  <label>
                    <span className="mil-light">Phone</span>
                    <span className="mil-light-soft">Optional</span>
                  </label>
                  <input type="number" placeholder="Your Phone" />
                </div>
                <div className="mil-attach-frame mil-mb-60">
                  <i className="fas fa-paperclip" />
                  <label className="mil-custom-file-input">
                    <span>Attach your file</span>
                    <input type="file" id="mil-file-input" />
                  </label>
                  <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Email Adress</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <textarea placeholder="Your Message" defaultValue={""} />
                </div>
                <p className="mil-text-sm mil-light-soft mil-mb-15">
                  We will process your personal information in accordance with
                  our Privacy Policy.
                </p>
                <div className="mil-checbox-frame mil-mb-60">
                  <input
                    className="mil-checkbox"
                    id="checkbox-1"
                    type="checkbox"
                    defaultValue="value"
                  />
                  <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                    I would like to be contacted with news and updates about
                    your{" "}
                    <a href="#." className="mil-accent">
                      events and services
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button className="mil-button mil-accent-bg mil-fw">
                  <span>Send Message Now</span>
                </button>
              </div>
            </div>
          </form>
        </div> */}
      </section>
      {/* contact end */}
    </Layouts>
  );
};
export default Service2;
