import React from 'react';
import { motion } from 'framer-motion';

const SOPModuleHero = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            minHeight: '800px',
            background: 'transparent',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        }}>


            {/* Foreground Content */}
            <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
                <div className="row">
                    <div className="col-lg-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 20px',
                                background: 'rgba(106, 154, 176, 0.2)',
                                border: '1px solid rgba(106, 154, 176, 0.4)',
                                borderRadius: '30px',
                                color: '#EAD8B1',
                                fontWeight: '600',
                                marginBottom: '20px',
                                pointerEvents: 'auto'
                            }}>
                                Next-Gen Module
                            </div>
                            <h1 style={{
                                color: 'white',
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                fontWeight: '800',
                                lineHeight: '1.1',
                                marginBottom: '30px'
                            }}>
                                Standard Operating<br />
                                <span style={{
                                    background: 'linear-gradient(to right, #6A9AB0, #EAD8B1)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Procedures Reimagined</span>
                            </h1>
                            <p style={{
                                color: '#EAD8B1',
                                fontSize: '1.25rem',
                                maxWidth: '600px',
                                marginBottom: '40px',
                                lineHeight: '1.6',
                                opacity: 0.9
                            }}>
                                Digitize, streamline, and secure your organizational knowledge. Our SOP module ensures compliance, accelerates training, and maintains ultimate version control.
                            </p>

                            <div style={{ pointerEvents: 'auto' }}>
                                <a href="#demo" style={{
                                    background: '#EAD8B1',
                                    color: '#001F3F',
                                    padding: '16px 40px',
                                    borderRadius: '30px',
                                    fontWeight: '700',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 25px -5px rgba(234, 216, 177, 0.3)'
                                }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    Watch Demo <span style={{ fontSize: '1.2rem' }}>↓</span>
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
