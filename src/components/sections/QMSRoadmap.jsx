import { motion } from "framer-motion";
import Content from "../../data/sections/qms.json";

const ProgressBar = ({ progress }) => {
    return (
        <div style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className="mil-font-2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Development Maturity
                </span>
                <span className="mil-font-2" style={{ color: '#EAD8B1', fontSize: '12px', fontWeight: '700' }}>
                    {progress}%
                </span>
            </div>
            <div style={{ 
                width: '100%', 
                height: '6px', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.02)'
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    style={{ 
                        height: '100%', 
                        background: 'linear-gradient(90deg, #3A6D8C 0%, #6A9AB0 100%)',
                        boxShadow: '0 0 15px rgba(106, 154, 176, 0.4)'
                    }}
                />
            </div>
        </div>
    );
};

const QMSRoadmap = () => {
    return (
        <section className="mil-roadmap mil-p-120-90" id="roadmap" style={{ background: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center mil-mb-90">
                    <div className="col-xl-9 mil-text-center">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30" style={{ color: '#121820' }}>
                            Future-Proof Compliance
                        </span>
                        <h2 className="mil-mb-30" style={{ color: '#121820' }}>
                            Software Roadmap & <span className="mil-accent" style={{ color: '#3A6D8C' }}>Progress Tracking</span>
                        </h2>
                        <p style={{ color: '#666' }}>
                            We are committed to delivering a fully integrated, cloud-native compliance ecosystem. Our development follows a transparent milestone system to ensure each module meets the highest regulatory standards.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {Content.items.map((item, key) => (
                        <div className="col-lg-12" key={`roadmap-item-${key}`}>
                            <div className="mil-dark-card mil-mb-30" style={{ 
                                background: '#001F3F', 
                                padding: '50px', 
                                borderRadius: '30px', 
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '40px',
                                position: 'relative',
                                border: '1px solid rgba(255,255,255,0.05)',
                                overflow: 'hidden'
                            }}>
                                <div className="mil-roadmap-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                        <img src={item.icon} alt="icon" style={{ filter: 'brightness(0) invert(1)' }} />
                                    </div>
                                </div>
                                <div className="mil-roadmap-content" style={{ flex: '1', minWidth: '250px' }}>
                                    <div className="mil-flex-between mil-mb-20">
                                        <h4 style={{ color: 'white', margin: 0 }}>{item.name}</h4>
                                        <div style={{ 
                                            padding: '4px 16px', 
                                            borderRadius: '50px', 
                                            fontSize: '11px', 
                                            fontWeight: '700', 
                                            background: item.status === 'Ready' ? '#6A9AB0' : 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            textTransform: 'uppercase'
                                        }}>
                                            {item.launch}
                                        </div>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6' }}>
                                        {item.text}
                                    </p>
                                    
                                    {/* Development Progress Bar */}
                                    <ProgressBar progress={item.progress} />
                                </div>
                                
                                {item.status === 'Ready' && (
                                    <div className="mil-roadmap-action">
                                        <a href={item.link} className="mil-button mil-accent-bg">
                                            <span>Explore Module</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Agile Strategy Legend */}
                <div className="row justify-content-center mil-mt-90">
                    <div className="col-xl-10">
                        <div style={{ 
                            background: '#f8f9fa', 
                            padding: '60px', 
                            borderRadius: '32px', 
                            border: '1px solid rgba(0,0,0,0.03)',
                            textAlign: 'center'
                        }}>
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30" style={{ color: '#3A6D8C' }}>{Content.agile_strategy.title}</span>
                            <h3 className="mil-mb-30 mil-font-1">{Content.agile_strategy.description}</h3>
                            <div className="row mil-pt-30 justify-content-center">
                                {Content.agile_strategy.milestones.map((milestone, i) => (
                                    <div key={i} className="col-lg-2 col-md-4 col-6 mil-mb-30">
                                        <div style={{ fontSize: '2rem', fontWeight: '800', color: milestone.color }}>{milestone.percent}%</div>
                                        <div className="mil-font-2" style={{ fontSize: '12px', fontWeight: '700', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '10px' }}>
                                            {milestone.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .mil-dark-card {
                    transition: all 0.4s ease;
                }
                .mil-dark-card:hover {
                    box-shadow: 0 40px 80px rgba(0, 31, 63, 0.2);
                    border-color: rgba(106, 154, 176, 0.3);
                }
                .mil-accent-bg {
                    background: #3A6D8C;
                    color: white;
                    border: none;
                }
                .mil-accent-bg:hover {
                    background: #6A9AB0;
                }
            `}</style>
        </section>
    );
};

export default QMSRoadmap;
