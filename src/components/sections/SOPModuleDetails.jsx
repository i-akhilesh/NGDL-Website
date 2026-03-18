import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Users, Clock, RefreshCw, Zap } from 'lucide-react';
import ScreenshotShowcase from './SOPModuleScreenshots';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
                background: 'rgba(58, 109, 140, 0.1)',
                border: '1px solid rgba(106, 154, 176, 0.2)',
                borderRadius: '24px',
                padding: '30px',
                height: '100%',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden'
            }}
            className="feature-card-hover"
        >
            <style jsx>{`
        .feature-card-hover:hover {
          background: rgba(106, 154, 176, 0.15) !important;
          transform: translateY(-8px);
          border-color: rgba(106, 154, 176, 0.4) !important;
          box-shadow: 0 20px 40px -10px rgba(0, 31, 63, 0.5);
        }
      `}</style>
            <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(58, 109, 140, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: '#EAD8B1',
                boxShadow: 'inset 0 0 10px rgba(106, 154, 176, 0.1)'
            }}>
                <Icon size={28} strokeWidth={1.5} />
            </div>
            <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '1.3rem' }}>{title}</h4>
            <p style={{ color: '#EAD8B1', lineHeight: '1.6', margin: 0, opacity: 0.8 }}>{description}</p>
        </motion.div>
    );
};

const SOPModuleDetails = () => {
    return (
        <section id="demo" style={{ background: 'transparent', padding: '120px 0', position: 'relative' }}>
            <div className="container">

                {/* Deep Dive Screenshot Showcases */}
                <div style={{ marginBottom: '140px', paddingTop: '40px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '15px' }}>
                            Inside the <span style={{ color: '#6A9AB0' }}>Platform</span>
                        </h2>
                        <p style={{ color: '#EAD8B1', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', opacity: 0.8 }}>
                            Explore the interfaces designed to make compliance effortless and procedure management completely frictionless.
                        </p>
                    </div>

                    <ScreenshotShowcase
                        invert={false}
                        badge="Intelligent Dashboard"
                        title="Command Center for Compliance"
                        description="Get a bird's-eye view of your entire procedural landscape. Track pending approvals, upcoming review cycles, and team training progress entirely in real-time."
                        list={[
                            "Real-time analytics and compliance scoring",
                            "Actionable alerts for expiring documents",
                            "Customizable widgets for role-specific views"
                        ]}
                    />

                    <ScreenshotShowcase
                        invert={true}
                        badge="Document Editor"
                        title="Rich Procedure Authoring"
                        description="Say goodbye to static PDFs. Our dynamic editor allows you to build interactive, media-rich Standard Operating Procedures that teams actually understand."
                        list={[
                            "Drag-and-drop media embedding (images, videos)",
                            "Automated versioning completely hidden from the author",
                            "Inline commenting and collaborative drafting"
                        ]}
                    />

                    <ScreenshotShowcase
                        invert={false}
                        badge="Approval Workflows"
                        title="Accelerated Sign-offs"
                        description="Route documents through rigorous yet rapid approval chains. Complete with 21 CFR Part 11 compliant electronic signatures."
                        list={[
                            "Multi-stage routing (Author -> QA -> Reviewer -> Approver)",
                            "One-click secure biometric/password signatures",
                            "Complete, immutable audit trails logging every action"
                        ]}
                    />
                </div>

                {/* Demo Video Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '140px' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '15px' }}>See It In Action</h2>
                        <p style={{ color: '#EAD8B1', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
                            Watch how our SOP module simplifies compliance and procedure management.
                        </p>
                    </div>

                    <div style={{
                        position: 'relative',
                        paddingTop: '56.25%', // 16:9 Aspect Ratio
                        background: 'rgba(58, 109, 140, 0.1)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '1px solid rgba(106, 154, 176, 0.2)',
                        boxShadow: '0 25px 50px -12px rgba(0, 31, 63, 0.5)'
                    }}>
                        <iframe
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 0
                            }}
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&showinfo=0&rel=0&autoplay=0&loop=1&mute=1"
                            title="SOP Module Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '15px' }}>Powerful Features</h2>
                    <p style={{ color: '#EAD8B1', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
                        Everything you need to manage procedures effectively in one cohesive ecosystem.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Compliant by Design"
                            description="Built to meet strict regulatory standards including FDA 21 CFR Part 11 and ISO 9001, providing complete audit trails."
                            delay={0}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                        <FeatureCard
                            icon={RefreshCw}
                            title="Version Control"
                            description="Never lose track of changes. Automated versioning ensures your team always accesses the most current approved procedure."
                            delay={0.1}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                        <FeatureCard
                            icon={Users}
                            title="Role-Based Access"
                            description="Granular permission settings control who can view, edit, approve, and distribute specific operational documents."
                            delay={0.2}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                        <FeatureCard
                            icon={Zap}
                            title="Automated Workflows"
                            description="Accelerate approvals with customized routing, automated notifications, and one-click electronic signatures."
                            delay={0.3}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                        <FeatureCard
                            icon={Clock}
                            title="Review Cycles"
                            description="Set automated reminders for periodic document reviews to ensure your procedures never fall out of compliance."
                            delay={0.4}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                        <FeatureCard
                            icon={FileText}
                            title="Rich Media Support"
                            description="Embed videos, images, and diagrams directly into procedures to improve comprehension and reduce training time."
                            delay={0.5}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SOPModuleDetails;
