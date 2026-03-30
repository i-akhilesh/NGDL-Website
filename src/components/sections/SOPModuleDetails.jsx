import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Users, Clock, RefreshCw, Zap } from 'lucide-react';
import ScreenshotShowcase from './SOPModuleScreenshots';
import SOPModuleDemo from './SOPModuleDemo';
import Content from '../../data/sections/sop.json';

const iconMap = {
    ShieldCheck,
    FileText,
    Users,
    Clock,
    RefreshCw,
    Zap
};

const FeatureCard = ({ icon: iconName, title, description, delay }) => {
    const Icon = iconMap[iconName] || ShieldCheck;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, margin: "-50px" }}
            className="mil-dark-card mil-mb-30"
            style={{
                background: '#001F3F',
                border: '1px solid rgba(106, 154, 176, 0.2)',
                borderRadius: '24px',
                padding: '40px',
                height: 'calc(100% - 30px)',
                transition: 'all 0.4s ease'
            }}
        >
            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <Icon size={28} strokeWidth={1.5} color="#EAD8B1" />
            </div>
            <h4 className="mil-light mil-mb-20 mil-font-1">{title}</h4>
            <p className="mil-text-sm mil-light-soft mil-font-2" style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>{description}</p>
        </motion.div>
    );
};

const SOPModuleDetails = () => {
    return (
        <section id="demo" className="mil-p-120-120" style={{ background: '#ffffff' }}>
            <div className="container">
                
                {/* Section Header */}
                <div className="row justify-content-center mil-mb-90">
                    <div className="col-xl-8 mil-text-center">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30" style={{ color: '#121820' }}>
                            Advanced Compliance Architecture
                        </span>
                        <h2 className="mil-mb-30 mil-font-1" style={{ color: '#121820' }}>
                           Technical <span className="mil-accent" style={{ color: '#3A6D8C' }}>Deep-Dive</span>
                        </h2>
                        <p className="mil-font-2" style={{ color: '#666', fontSize: '1.15rem' }}>
                            Explore the features and technologies that make NextGen SOP the standard for pharmaceutical and research document management.
                        </p>
                    </div>
                </div>

                {/* Showcases */}
                {Content.showcases.map((showcase, index) => (
                    <ScreenshotShowcase
                        key={showcase.id}
                        invert={index % 2 !== 0}
                        badge={showcase.badge}
                        title={showcase.title}
                        description={showcase.description}
                        list={showcase.list}
                        imgSrc={showcase.img}
                    />
                ))}

                {/* Software Simulation Demo Section */}
                <div className="row justify-content-center mil-p-120-120">
                     <div className="col-xl-10">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 className="mil-mb-30 mil-font-1" style={{ color: '#121820' }}>
                                Experience the <span className="mil-accent" style={{ color: '#3A6D8C' }}>Workflow</span>
                            </h2>
                            <p className="mil-font-2" style={{ color: '#666', fontSize: '1.15rem' }}>
                                Watch how our SOP module automates the entire document lifecycle, from drafting to secure blockchain approval.
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mil-mb-90"
                        >
                            <SOPModuleDemo />
                        </motion.div>
                     </div>
                </div>

                {/* Features Grid */}
                <div className="row justify-content-center mil-mb-90">
                    <div className="col-xl-7 mil-text-center">
                        <h2 className="mil-mb-30 mil-font-1" style={{ color: '#121820' }}>
                            Enterprise <span className="mil-accent" style={{ color: '#3A6D8C' }}>Feature Set</span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    {Content.features.map((feature, index) => (
                        <div className="col-lg-4 col-md-6" key={feature.id}>
                            <FeatureCard 
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                delay={0.1 * index}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx global>{`
                .mil-dark-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0, 31, 63, 0.2);
                    border-color: rgba(106, 154, 176, 0.4) !important;
                }
            `}</style>
        </section>
    );
};

export default SOPModuleDetails;
