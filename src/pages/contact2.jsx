import React from "react";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

const Careers = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Careers"}
        pageTitle={
          <>
            Join Our <br /> Team
          </>
        }
      />

      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-xl-6 mil-mb-120">
              <div className="mil-card mil-dark mil-p-60">
                <h3 className="mil-mb-20">We’re Working on It!</h3>
                <p className="mil-mb-30 ">
                  Our online application form is currently under development.  
                  Meanwhile, you can send your updated resume and a short introduction  
                  to <strong>info@nextgendigilab.com</strong>.
                </p>

                <p className="mil-mb-40">
                  Our team will review your profile and get in touch with you shortly if your
                  skills match our open positions.
                </p>

                <div className="mil-divider mil-mb-40" />

                <h5 className="mil-mb-20">Opportunities Await</h5>
                <p className="mil-light-soft">
                  We’re always looking for enthusiastic engineers, developers, and innovators 
                  who are passionate about IoT, automation, and smart systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Careers;
