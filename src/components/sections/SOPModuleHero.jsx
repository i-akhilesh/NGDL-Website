import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Content from '../../data/sections/sop.json';

const TechNetworkBackground = dynamic(() => import("../3d/TechNetworkBackground"), { ssr: false });

const SOPModuleHero = () => {
    const { hero } = Content;

    return (
        <section className="mil-banner mil-dark-bg mil-p-120-0" style={{ position: 'relative', height: '100vh', minHeight: '800px', background: '#001F3F', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            
            {/* 3D Starry Network Background (Stars Only Mode for Product Focus) */}
            <TechNetworkBackground showNetwork={false} />

            <div className="mil-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,31,63,0.4)', zIndex: 2 }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="row justify-content-center">
                    <div className="col-xl-10 mil-text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', marginBottom: '30px', pointerEvents: 'auto' }}>
                                <a href="/qms" className="mil-link mil-light mil-uppercase" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: '700' }}>
                                    ← Back to QMS Suite
                                </a>
                                <span className="mil-suptitle mil-suptitle-2 mil-accent" style={{ margin: 0, color: '#EAD8B1' }}>
                                    {hero.badge}
                                </span>
                            </div>
                            
                            <h1 className="mil-mb-30 mil-light mil-font-1" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: '1.1' }}>
                                <span className="mil-font-2" style={{ fontWeight: 300, display: 'block', marginBottom: '10px', fontSize: '0.4em', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '8px' }}>
                                    {hero.title_first}
                                </span>
                                <span className="mil-accent" style={{ color: '#ffffff' }}>{hero.title_second}</span>
                            </h1>

                            <p className="mil-text-lg mil-light-soft mil-mb-60" style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.25rem' }}>
                                {hero.description}
                            </p>

                            <div style={{ pointerEvents: 'auto' }}>
                                <a href="#demo" className="mil-button mil-border mil-light" style={{ borderColor: '#EAD8B1', color: '#EAD8B1' }}>
                                    <span>Explore Technology <i className="fas fa-arrow-down" style={{ marginLeft: '10px' }} /></span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SOPModuleHero;
