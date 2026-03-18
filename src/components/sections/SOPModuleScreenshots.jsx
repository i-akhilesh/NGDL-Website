import React from 'react';
import { motion } from 'framer-motion';

const ScreenshotShowcase = ({ invert, title, description, badge, list, imgSrc }) => {
    return (
        <div className={`row align-items-center mil-mb-90 ${invert ? 'flex-row-reverse' : ''}`} style={{ margin: '80px 0' }}>
            <div className="col-lg-5">
                <motion.div
                    initial={{ opacity: 0, x: invert ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: 'rgba(58, 109, 140, 0.15)',
                        border: '1px solid rgba(106, 154, 176, 0.3)',
                        borderRadius: '20px',
                        color: '#EAD8B1',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        marginBottom: '15px'
                    }}>
                        {badge}
                    </div>
                    <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '2.5rem' }}>
                        {title}
                    </h3>
                    <p style={{ color: '#EAD8B1', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px', opacity: 0.8 }}>
                        {description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {list.map((item, idx) => (
                            <li key={idx} style={{
                                marginBottom: '15px',
                                color: '#EAD8B1',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1.05rem',
                                opacity: 0.9
                            }}>
                                <span style={{
                                    color: '#6A9AB0',
                                    marginRight: '12px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    background: 'rgba(106, 154, 176, 0.1)',
                                    padding: '5px',
                                    borderRadius: '50%'
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
                        background: 'rgba(58, 109, 140, 0.1)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(106, 154, 176, 0.2)',
                        borderRadius: '24px',
                        boxShadow: '0 8px 32px 0 rgba(0, 31, 63, 0.37)',
                        padding: '10px',
                        position: 'relative'
                    }}>
                        {/* Replace with actual high fidelity screenshot */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/10',
                            background: 'linear-gradient(135deg, rgba(58, 109, 140, 0.3) 0%, rgba(0, 31, 63, 0.8) 100%)',
                            borderRadius: '16px',
                            border: '1px solid rgba(106, 154, 176, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
                            overflow: 'hidden'
                        }}>
                            {/* Fake UI Header */}
                            <div style={{ width: '100%', height: '40px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 15px', gap: '8px' }}>
                                <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ef4444' }} />
                                <div style={{ width: 10, height: 10, borderRadius: 5, background: '#eab308' }} />
                                <div style={{ width: 10, height: 10, borderRadius: 5, background: '#22c55e' }} />
                                <div style={{ height: 20, width: '40%', background: 'rgba(255,255,255,0.05)', borderRadius: 10, marginLeft: 20 }} />
                            </div>
                            {/* Fake App Body showing text "Image Placeholder" */}
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <img src={imgSrc || "/img/portfolio/1.jpg"} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, mixBlendMode: 'overlay' }} />
                                <h4 style={{ position: 'absolute', color: '#EAD8B1', opacity: 0.5 }}>Screenshot Placeholder</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ScreenshotShowcase;
