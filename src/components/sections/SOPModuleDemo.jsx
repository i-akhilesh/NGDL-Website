import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Users, ShieldCheck, CheckCircle, ArrowRight, Share2, Database } from 'lucide-react';

const SOPModuleDemo = () => {
    const [step, setStep] = useState(0);
    const steps = [
        { title: "Intelligent Drafting", action: "System: Generating SOP-2024-001", icon: FileText, color: "#6A9AB0" },
        { title: "Smart Routing", action: "QA Review: Pending Approval", icon: Users, color: "#EAD8B1" },
        { title: "Blockchain Verification", action: "Hash: 0x8f2...ae32 (Immutable)", icon: Database, color: "#3A6D8C" },
        { title: "Module Approved", action: "Status: Live & Compliant", icon: ShieldCheck, color: "#27c93f" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mil-software-demo" style={{
            background: '#0a1018',
            borderRadius: '32px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.4)',
            height: '500px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Window Header */}
            <div style={{ height: '45px', background: '#161d27', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ff5f56' }} />
                    <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ffbd2e' }} />
                    <div style={{ width: 10, height: 10, borderRadius: 5, background: '#27c93f' }} />
                </div>
                <div className="mil-font-2" style={{ color: 'white', fontSize: '10px', opacity: 0.5, marginLeft: '20px', letterSpacing: '2px' }}>
                    NEXTGEN QMS / SOP MODULE / CORE_ENGINE
                </div>
            </div>

            {/* Application Interface */}
            <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
                {/* Sidebar */}
                <div style={{ width: '70px', background: '#0d141e', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0', gap: '25px' }}>
                    {[Database, FileText, Users, Share2].map((Icon, i) => (
                        <Icon key={i} size={20} color={i === step ? '#EAD8B1' : 'rgba(255,255,255,0.2)'} style={{ transition: 'all 0.3s ease' }} />
                    ))}
                </div>

                {/* Main Content */}
                <div style={{ flex: 1, padding: '40px', position: 'relative', overflow: 'hidden' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ 
                                    width: '80px', 
                                    height: '80px', 
                                    borderRadius: '20px', 
                                    background: `${steps[step].color}20`, 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    border: `1px solid ${steps[step].color}40`
                                }}>
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >
                                        {React.createElement(steps[step].icon, { size: 35, color: steps[step].color })}
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="mil-font-1 mil-light" style={{ margin: 0, fontSize: '2rem' }}>{steps[step].title}</h3>
                                    <p className="mil-font-2 mil-accent" style={{ color: steps[step].color, margin: 0, fontWeight: '600' }}>{steps[step].action}</p>
                                </div>
                            </div>

                            {/* Workflow Visualizer */}
                            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', padding: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    {steps.map((s, i) => (
                                        <React.Fragment key={i}>
                                            <div style={{ 
                                                width: '10px', 
                                                height: '10px', 
                                                borderRadius: '5px', 
                                                background: i <= step ? s.color : 'rgba(255,255,255,0.1)',
                                                boxShadow: i === step ? `0 0 10px ${s.color}` : 'none',
                                                transition: 'all 0.5s ease'
                                            }} />
                                            {i < steps.length - 1 && (
                                                <div style={{ flex: 1, height: '2px', background: i < step ? steps[i+1].color : 'rgba(255,255,255,0.05)', transition: 'all 0.5s ease' }} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Floating Decorative Elements */}
                    <div style={{ position: 'absolute', bottom: '20px', right: '20px', opacity: 0.1 }}>
                        <Database size={100} color="white" />
                    </div>
                </div>
            </div>

            {/* Action Bar */}
            <div style={{ height: '60px', background: '#0d141e', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 30px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ width: '100px', height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }} />
                    <div style={{ width: '60px', height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }} />
                </div>
                <div style={{ 
                    padding: '6px 15px', 
                    borderRadius: '20px', 
                    background: '#EAD8B1', 
                    color: '#001F3F', 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '5px' 
                }}>
                    SYSTEM SECURED <CheckCircle size={12} />
                </div>
            </div>
        </div>
    );
};

export default SOPModuleDemo;
