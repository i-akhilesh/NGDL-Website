import React from 'react';
import { motion } from 'framer-motion';

const ScreenshotShowcase = ({ invert, title, description, badge, list, imgSrc }) => {
    return (
        <div className={`row align-items-center mil-mb-120 ${invert ? 'flex-row-reverse' : ''}`} style={{ marginBottom: '140px' }}>
            <div className="col-lg-5">
                <motion.div
                    initial={{ opacity: 0, x: invert ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="mil-suptitle mil-suptitle-2 mil-mb-30" style={{ color: '#3A6D8C', fontWeight: '700' }}>
                        {badge}
                    </div>
                    <h3 className="mil-mb-30 mil-font-1" style={{ color: '#121820', fontSize: '2.5rem', lineHeight: '1.2' }}>
                        {title}
                    </h3>
                    <p className="mil-font-2 mil-mb-30" style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.7' }}>
                        {description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {list.map((item, idx) => (
                            <li key={idx} className="mil-font-2" style={{
                                marginBottom: '15px',
                                color: '#121820',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1rem',
                                fontWeight: '500'
                            }}>
                                <span style={{
                                    color: '#3A6D8C',
                                    marginRight: '15px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(58, 109, 140, 0.1)',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    fontSize: '10px'
                                }}>✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <div className="col-lg-6 offset-lg-1">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div style={{
                        background: '#f8f8f8',
                        border: '1px solid rgba(0, 31, 63, 0.05)',
                        borderRadius: '32px',
                        boxShadow: '0 30px 60px rgba(0, 31, 63, 0.1)',
                        padding: '12px',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/10',
                            background: '#0a1018',
                            borderRadius: '24px',
                            border: '1px solid rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}>
                            {/* Browser/App Header */}
                            <div style={{ width: '100%', height: '45px', background: '#1a222e', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ff5f56' }} />
                                <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ffbd2e' }} />
                                <div style={{ width: 10, height: 10, borderRadius: 5, background: '#27c93f' }} />
                                <div style={{ height: 24, width: '60%', background: 'rgba(255,255,255,0.05)', borderRadius: 12, marginLeft: 20 }} />
                            </div>
                            {/* App Viewport */}
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <img src={imgSrc || "/img/portfolio/1.jpg"} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                <div style={{ 
                                    position: 'absolute', 
                                    inset: 0, 
                                    background: 'linear-gradient(to bottom right, rgba(0,31,63,0.4), transparent)',
                                    pointerEvents: 'none'
                                }} />
                                <span className="mil-font-2" style={{ position: 'absolute', color: 'white', opacity: 0.6, fontSize: '10px', bottom: '20px', right: '20px', letterSpacing: '2px' }}>
                                    NEXTGEN INTERFACE
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ScreenshotShowcase;
