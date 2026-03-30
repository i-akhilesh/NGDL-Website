import Link from "next/link";
import dynamic from "next/dynamic";

const StarryBackground = dynamic(() => import("./StarryBackground"), { ssr: false });

const PageBanner = ({ pageTitle, pageName }) => {
  return (
    <div className="mil-banner-sm mil-dark-bg" style={{ position: 'relative', overflow: 'hidden', background: '#001F3F' }}>
      <StarryBackground />
      
      <div className="mil-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,31,63,0.4)', zIndex: 1 }} />

      <div
        className="mil-deco mil-deco-accent"
        style={{ top: "47%", right: "10%", transform: "rotate(90deg)", zIndex: 2 }}
      />
      <div className="mil-banner-content" style={{ position: 'relative', zIndex: 5 }}>
        <div className="container mil-relative">
          <ul className="mil-breadcrumbs mil-mb-30">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#">{pageName}</a>
            </li>
          </ul>
          <h2 className="mil-uppercase" style={{ color: 'white' }}>{pageTitle}</h2>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
