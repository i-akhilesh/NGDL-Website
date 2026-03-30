import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Content from "../../data/sections/qms.json";

const TechNetworkBackground = dynamic(() => import("../3d/TechNetworkBackground"), { ssr: false });

const QMSHero = () => {
    return (
        <section className="mil-banner mil-dark-bg mil-p-120-0" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', background: '#001F3F', overflow: 'hidden' }}>
            
            {/* 3D Starry Network Background */}
            <TechNetworkBackground showNetwork={false} />

            <div className="mil-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,31,63,0.4)', zIndex: 2 }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="row justify-content-center">
                    <div className="col-xl-9 mil-text-center">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mil-suptitle mil-mb-30" 
                            style={{ color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '4px' }}
                        >
                            {Content.subtitle}
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mil-mb-60" 
                            style={{ color: 'white', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
                        >
                            {Content.title.first} <span className="mil-accent" style={{ color: '#ffffff' }}>{Content.title.second}</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mil-text-lg mil-light-soft mil-mb-60"
                            style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}
                        >
                            {Content.description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <a href="#roadmap" className="mil-button mil-border mil-light">
                                <span>View Roadmap</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QMSHero;
