import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const TechNetworkBackground = dynamic(() => import("../3d/TechNetworkBackground"), { ssr: false });

const TOTAL = 2;

const slide0Variants = {
  initial: (dir) => ({
    opacity: 0,
    scale: dir === 1 ? 0.85 : 1.5,
  }),
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: (dir) => ({
    opacity: 0,
    scale: dir === 1 ? 1.6 : 0.8,
    transition: { duration: 0.7, ease: "easeIn" },
  }),
};

const slide1Variants = {
  initial: (dir) => ({
    opacity: 0,
    y: dir === 1 ? 70 : -50,
  }),
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: (dir) => ({
    opacity: 0,
    y: dir === -1 ? 80 : -60,
    transition: { duration: 0.6, ease: "easeIn" },
  }),
};

const CustomHero3D = () => {
  const [slide, setSlide] = useState(0);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);
  const cooldown = useRef(false);
  const touchStartY = useRef(null);
  // Keep mutable refs so the event handler can read latest values without re-registering
  const slideRef = useRef(slide);
  const doneRef = useRef(done);
  slideRef.current = slide;
  doneRef.current = done;

  const advance = useCallback(() => {
    if (cooldown.current) return;
    cooldown.current = true;
    setTimeout(() => { cooldown.current = false; }, 1000);
    const current = slideRef.current;
    if (current + 1 >= TOTAL) {
      setDone(true);
      doneRef.current = true;
    } else {
      setDir(1);
      setSlide(current + 1);
      slideRef.current = current + 1;
    }
  }, []);

  const retreat = useCallback(() => {
    if (cooldown.current) return;
    cooldown.current = true;
    setTimeout(() => { cooldown.current = false; }, 1000);
    const current = slideRef.current;
    if (current <= 0) return;
    setDir(-1);
    setDone(false);
    doneRef.current = false;
    setSlide(current - 1);
    slideRef.current = current - 1;
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      const isDone = doneRef.current;

      if (!isDone) {
        // Hero is active — intercept ALL scroll
        e.preventDefault();
        e.deltaY > 0 ? advance() : retreat();
      } else {
        // Hero is "done" but user scrolled back to very top → re-engage
        if (e.deltaY < 0 && window.scrollY <= 1) {
          e.preventDefault();
          if (cooldown.current) return;
          cooldown.current = true;
          setTimeout(() => { cooldown.current = false; }, 1000);
          setDir(-1);
          setDone(false);
          doneRef.current = false;
          // slide stays at 1 so user can then scroll up to reach slide 0
        }
      }
    };

    const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 30) {
        const isDone = doneRef.current;
        if (!isDone) {
          e.preventDefault();
          delta > 0 ? advance() : retreat();
        } else if (delta < 0 && window.scrollY <= 1) {
          e.preventDefault();
          setDir(-1);
          setDone(false);
          doneRef.current = false;
        }
      }
      touchStartY.current = null;
    };

    // Always keep listener active so we can detect scroll-up from below
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [advance, retreat]); // only depends on stable callbacks — NOT on done/slide

  return (
    <>
      <div style={{
        position: done ? "relative" : "fixed",
        top: 0, left: 0,
        width: "100%", height: "100vh",
        zIndex: done ? "auto" : 100,
        background: "#001F3F",
        overflow: "hidden",
      }}>
        {/* 3D Background — never moves */}
        <TechNetworkBackground showNetwork={true} />

        {/* Vignette */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 0%, rgba(0,31,63,0.5) 70%, rgba(0,31,63,0.85) 100%)", zIndex: 2 }} />

        {/* Slide Content */}
        <div style={{ position: "absolute", inset: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
          <AnimatePresence mode="wait" custom={dir}>
            {slide === 0 && (
              <motion.div
                key="slide0"
                custom={dir}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slide0Variants}
                style={{ textAlign: "center" }}
              >
                <h1 className="mil-font-1 mil-light" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "2px", fontWeight: "800", lineHeight: 1.15 }}>
                  NEXTGEN<br />DIGI LAB
                </h1>
                <p style={{ color: "rgba(255,255,255,0.3)", marginTop: "32px", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>
                  Scroll down ↓
                </p>
              </motion.div>
            )}
            {slide === 1 && (
              <motion.div
                key="slide1"
                custom={dir}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slide1Variants}
                style={{ textAlign: "center", maxWidth: "820px" }}
              >
                <span style={{ color: "#EAD8B1", fontSize: "11px", letterSpacing: "4px", fontWeight: "700", textTransform: "uppercase", display: "block", marginBottom: "28px" }}>
                  NEXT GEN DIGI LAB
                </span>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)", lineHeight: 1.8, fontWeight: "300" }}>
                  Transform your business with tailored digital and IoT solutions. At Nextgen Digi Lab, we help enterprises{" "}
                  <span style={{ color: "#EAD8B1", fontWeight: "600" }}>innovate, automate, and scale</span>{" "}
                  efficiently through smart technology and seamless integration.
                </p>
                <p style={{ color: "rgba(255,255,255,0.2)", marginTop: "40px", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>
                  Scroll down to continue ↓
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div style={{ position: "absolute", right: "28px", top: "50%", transform: "translateY(-50%)", zIndex: 20, display: "flex", flexDirection: "column", gap: "10px" }}>
          {[0, 1].map((i) => (
            <div key={i}
              onClick={() => { setDir(i > slide ? 1 : -1); setSlide(i); slideRef.current = i; if (i < TOTAL - 1) { setDone(false); doneRef.current = false; } }}
              style={{ width: "7px", height: "7px", borderRadius: "50%", background: i === slide ? "#EAD8B1" : "rgba(255,255,255,0.25)", transition: "all 0.3s", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      {/* Spacer while hero is fixed */}
      {!done && <div style={{ height: "100vh" }} />}
    </>
  );
};

export default CustomHero3D;