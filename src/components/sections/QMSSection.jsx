import Link from "next/link";
import Content from "../../data/sections/qms.json";

const ModuleContent = ({ item }) => (
    <>
        <div style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '25px',
            padding: '4px 12px',
            borderRadius: '50px',
            fontSize: '10px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: item.status === 'Ready' ? '#6A9AB0' : 'rgba(255,255,255,0.1)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 2
        }}>
            {item.status === 'Ready' && (
                <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    background: '#EAD8B1', 
                    display: 'inline-block',
                    boxShadow: '0 0 10px #EAD8B1' 
                }} />
            )}
            {item.status}
        </div>

        <div className="mil-service-icon mil-mb-30">
            <div className={`mil-icon-frame mil-icon-frame-sm ${item.status !== 'Ready' ? 'mil-grayscale' : ''}`}>
                <img src={item.icon} alt="icon" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
        </div>
        <div className="mil-service-text">
            <h5 className="mil-mb-20" style={{ color: 'white' }}>
                {item.name}
            </h5>
            <p className="mil-text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {item.text}
            </p>
            {item.status === 'Ready' && (
                <span className="mil-link mil-accent mil-mt-20" style={{ fontSize: '12px', color: '#6A9AB0' }}>
                    View Module <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }} />
                </span>
            )}
        </div>
    </>
);

const QMSSection = () => {
    return (
        <section className="mil-qms mil-p-120-90" style={{ background: '#ffffff' }}>
            <div className="container">
                <div className="row align-items-end mil-mb-90">
                    <div className="col-xl-7">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30" style={{ color: '#121820' }}>
                            {Content.subtitle}
                        </span>
                        <h2 className="mil-mb-30" style={{ color: '#121820' }}>
                            {Content.title.first} <span className="mil-accent" style={{ color: '#3A6D8C' }}>{Content.title.second}</span>
                        </h2>
                        <p style={{ maxWidth: '600px', color: '#666' }}>
                            {Content.description}
                        </p>
                    </div>
                    <div className="col-xl-5">
                        <div className="mil-adaptive-right mil-mt-60-adapt">
                            <Link href="/qms" className="mil-button mil-border mil-mb-30">
                                <span>{Content.explore_label}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {Content.items.map((item, key) => (
                        <div className="col-md-6 col-xl-4" key={`qms-item-${key}`}>
                            <div className="mil-dark-card mil-mb-60" style={{ 
                                background: '#001F3F', 
                                padding: '40px', 
                                borderRadius: '24px', 
                                position: 'relative',
                                height: 'calc(100% - 60px)',
                                transition: 'all 0.4s ease',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                {item.status === 'Ready' ? (
                                    <Link href={item.link || "#."} style={{ display: 'block', height: '100%' }}>
                                        <ModuleContent item={item} />
                                    </Link>
                                ) : (
                                    <div style={{ opacity: 0.8 }}>
                                        <ModuleContent item={item} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                .mil-dark-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0, 31, 63, 0.2);
                    border-color: rgba(106, 154, 176, 0.3);
                }
                .mil-grayscale img {
                    filter: grayscale(1) invert(1) opacity(0.3) !important;
                }
            `}</style>
        </section>
    );
};

export default QMSSection;
