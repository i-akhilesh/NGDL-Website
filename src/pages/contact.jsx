"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_jlkh89g", // ✅ Your EmailJS Service ID
        "template_fa938zk", // ✅ Your EmailJS Template ID
        form.current,
        "V5FuQVo0Y0cE13ps_" // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Layouts>
      <PageBanner
        pageName={"Contact Us"}
        pageTitle={
          <>
            Let's build the future of <br /> pharma & IoT together
          </>
        }
      />

      {/* Contact Form Section */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            {/* Contact Form */}
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <form ref={form} onSubmit={sendEmail}>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">Contact Information</span> 
                </h4>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Name</span>
                      </label>
                      <input type="text" name="user_name" required placeholder="Your Name" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Email</span>
                      </label>
                      <input type="email" name="user_email" required placeholder="you@domain.com" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Phone</span>
                      </label>
                      <input type="text" name="user_phone" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Message</span>
                      </label>
                      <textarea
                        name="message"
                        placeholder="Write your message here..."
                        required
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button className="mil-button mil-border mil-fw" type="submit">
                      <span>Submit Now</span>
                    </button>
                  </div>
                </div>

                {status && (
                  <p
                    className="mil-mt-30"
                    style={{
                      color: status.includes("✅") ? "lightgreen" : "salmon",
                      fontWeight: "500",
                    }}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Support Request</h5>
                <p className="mil-mb-20">
                  Our experts are ready to answer your questions.
                </p>
                <Link href="contact" className="mil-link mil-link-sm">
                  <span>Support Now</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>

              <div className="mil-divider mil-mb-60" />

              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/8.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
                <p>
                  For technical or business inquiries, please contact us at{" "}
                  <b>info@nextgendigilab.com</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div>
        <div className="mil-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.5885772595959!2d73.75544460702238!3d18.59443550839919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b966edbb4ce5%3A0x9412af3ad6ec1c0b!2sSai%20Arcade!5e0!3m2!1sen!2sin!4v1759927366620!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Contact Info */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">INDIA</h4>
                <h5 className="mil-list-title mil-mb-15">Pimpri Chinchwad</h5>
                <p className="mil-mb-30">
                  B-602 Sai Arcade, Bhujbal Vasti, Wakad, Pimpri-Chinchwad,
                  Maharashtra 411057
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+91</span> 70202 88467
                </h6>
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+91</span> 94045 14989
                </h6>
                <h6>
                  <span className="mil-accent">info</span>@nextgendigilab.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Contact;
