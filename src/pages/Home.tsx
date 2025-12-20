import React from "react"; // Ensure React is imported if not already
import { motion } from "framer-motion";
import {
  // Smartphone,
  // Tablet,
  // Laptop,
  // Watch,
  CheckCircle,
  Clock,
  ShieldCheck,
  Wrench,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Assets
const heroBg =
  "/attached_assets/generated_images/modern_high-tech_electronics_repair_workbench_background.png";
const heroBg1 =
  "/attached_assets/generated_images/professional_iphone_repair_workspace_close_up_black_and_white.png";
const iconIphone =
  "/attached_assets/generated_images/iphone_repair_icon_style_illustration.png";
const iconMacbook =
  "/attached_assets/generated_images/macbook_repair_icon_style_illustration.png";
const iconWatch =
  "/attached_assets/generated_images/apple_watch_repair_icon_style_illustration.png";
const iconIpad =
  "/attached_assets/generated_images/ipad_repair_icon_style_illustration.png";
// const logoImg =  "/attached_assets/photo_2025-12-13_12-20-32_1765608981907.jpg";
const logoImg = "/attached_assets/ashuraSaif.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Saif Phone Logo"
            className="h-10 w-10 rounded-full object-cover border border-primary/20"
          />
          <span className="font-display font-bold text-xl tracking-tight text-primary">
            ASHURA SAIF{" "}
            <span className="text-white">MOBILE PHONE REPAIR LLC.S.O.C</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#why-us"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Why Us
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button
            asChild
            className="bg-primary text-black hover:bg-primary/90 font-semibold rounded-full px-6"
          >
            {/* Use 'tel:' followed by the number without spaces or dashes */}
            <a href="tel:+971563231520">Call Now</a>
          </Button>
          {/* <Button className="bg-primary text-black hover:bg-primary/90 font-semibold">Get Quote</Button> */}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-card border-b border-white/10"
        >
          <div className="flex flex-col p-4 gap-4">
            <a
              href="#home"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Electronics Workbench"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              Best Apple Service Center in UAE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Expert Repair for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Your Valuable Devices
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We don't just repair; we restore. Specialized in iPhone, iPad,
            MacBook, and Apple Watch repairs with original parts and guaranteed
            quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-bold text-lg h-14 px-8"
            >
              {/* Use 'tel:' followed by the number without spaces or dashes */}
              <a href="tel:+971563231520">Book a Repair</a>
            </Button>
            {/* <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg h-14 px-8">
              Book a Repair
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-medium text-lg h-14 px-8"
            >
              Free Diagnostics
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "iPhone Repair",
      icon: iconIphone,
      desc: "Screen, battery, and motherboard repairs.",
    },
    {
      title: "iPad Repair",
      icon: iconIpad,
      desc: "Glass replacement, charging issues, and more.",
    },
    {
      title: "MacBook Repair",
      icon: iconMacbook,
      desc: "Keyboard, logic board, and screen services.",
    },
    {
      title: "Apple Watch Repair",
      icon: iconWatch,
      desc: "Glass replacement and sensor repairs.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our Expertise
          </h2>
          <p className="text-muted-foreground">
            Specialized services for all your Apple devices
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-colors duration-300 group h-full">
                <CardContent className="p-6 flex flex-col items-center text-center pt-10">
                  <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="relative z-10 w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Free Diagnostics",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      desc: "We check hardware and software issues for free.",
    },
    {
      title: "Quick Repair Process",
      icon: <Clock className="w-6 h-6 text-primary" />,
      desc: "Most repairs finished in under 25 minutes.",
    },
    {
      title: "30-Day Warranty",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      desc: "Guarantee on almost all our repairs.",
    },
    {
      title: "High Quality Parts",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      desc: "Original Apple parts for lasting performance.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Choose Our <br />
              <span className="text-primary">Service Center?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              There are many valid reasons why you should choose us to take care
              of your valuable device. The most important is that you don't just
              want a repair. We are the best iPhone repair specialist.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-md bg-primary/10">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src={heroBg1}
              alt="Tech Lab"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="bg-primary text-black font-bold px-4 py-2 rounded mb-2 inline-block">
                Trusted by Thousands
              </div>
              <h3 className="text-2xl font-bold text-white">
                Your device is in safe hands.
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OurPromise = () => {
  const steps = [
    {
      number: "1",
      title: "FAST REPAIRS",
      text: "We value your time. Most repairs are completed while you wait, typically taking less than 25 minutes to get you back online.",
    },
    {
      number: "2",
      title: "ORIGINAL SPARE PARTS",
      text: "We prioritize quality by using only genuine, high-grade Apple components to ensure your device functions exactly as it should.",
    },
    {
      number: "3",
      title: "FREE DIAGNOSTICS",
      text: "Not sure what the issue is? We perform comprehensive hardware and software checks to pinpoint the problem at absolutely no cost to you.",
    },
    {
      number: "4",
      title: "30 DAY’S GUARANTEE",
      text: "We are confident in our expertise. To ensure your peace of mind, we back our craftsmanship and parts with a 30-day warranty.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our Promise
          </h2>
          <p className="text-muted-foreground">
            Commitment to excellence in every repair
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 border-l-2 border-primary/30 hover:border-primary bg-gradient-to-br from-card to-transparent transition-all"
            >
              <div className="text-5xl font-display font-bold text-white/5 absolute top-2 right-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mockup = () => {
  // --- Animation Logic for the Geometric Shapes ---
  const orbitItems = useMemo(() => {
    const items = [];
    const baseSize = 55; // vmin
    const length = 101;
    const half = Math.floor(length / 2);
    const gapDist = baseSize / length;
    const gapSize = baseSize / half;
    const time = 2.5;
    const delay = time / half;
    const ratioA = 0.5;
    const ratioB = 0.25;

    // Helper to generate style object
    // const getStyle = (i, sign, offsetIndex) => {
    //   const d = sign * (i * gapDist * 1.75);
    //   const size = baseSize - gapSize * (i - 1);

    //   return {
    //     '--delay': `${delay * i}s`,
    //     '--dist': `${d}vmin`,
    //     width: `${size}vmin`,
    //     height: `${size}vmin`,
    //     '--after-size': `${size * ratioA}vmin`,
    //     '--before-size': `${size * ratioB}vmin`,
    //     zIndex: 10 + (sign * i),
    //     '--li-index': i,
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //   };
    // };
    const getStyle = (i: number, sign: number): React.CSSProperties => {
      const d = sign * (i * gapDist * 1.75);
      const size = baseSize - gapSize * (i - 1);

      return {
        "--delay": `${delay * i}s`,
        "--dist": `${d}vmin`,
        width: `${size}vmin`,
        height: `${size}vmin`,
        "--after-size": `${size * ratioA}vmin`,
        "--before-size": `${size * ratioB}vmin`,
        zIndex: 10 + sign * i,
        "--li-index": i,
        position: "absolute",
        top: "50%",
        left: "50%",
      } as React.CSSProperties;
    };

    // First Half of the loop
    for (let i = 1; i <= half; ++i) {
      items.push(getStyle(i, 1));
    }
    // Second Half of the loop
    for (let i = 1; i <= half; ++i) {
      items.push(getStyle(i, -1));
    }

    return items;
  }, []);

  // --- Clock Logic for Status Bar ---
  const [timeStr, setTimeStr] = useState("14:35");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      setTimeStr(`${hh}:${mm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // --- Theme Colors (Neon Green & Black) ---
  const theme = {
    bg: "#020202", // Deep Black background
    neonPrimary: "#0FFF50", // Main bright neon green
    neonLight: "#80ff80", // Lighter green for gradients
    neonDark: "#054a15", // Darker green for animation depth shadows
  };

  return (
    // UPDATED: Main background color to deep black
    <div
      className={`min-h-screen bg-[${theme.bg}] text-white overflow-hidden relative font-sans`}
    >
      {/* Injecting CSS for the specific animations with UPDATED NEON COLORS */}
      <style>{`
        :root {
          --color-1: ${theme.neonLight}; /* Light Neon Green */
          --color-2: ${theme.neonPrimary}; /* Main Neon Green */
          --color-3: ${theme.neonDark}; /* Darker Green Shadow */
        }
        .hero-bg section {
          display: flex; align-items: center; justify-content: center;
          animation: anim-v 20s ease-in-out infinite alternate;
          transform-style: preserve-3d; width: 100%; height: 100%;
        }
        .hero-bg ul {
          display: flex; align-items: center; justify-content: center; position: relative;
          list-style: none; transform-style: preserve-3d;
          animation: anim-r 20s linear infinite;
          width: 55vmin; height: 55vmin; padding: 0; margin: 0;
        }
        .hero-bg li {
          transform-style: preserve-3d;
          animation: anim-h 2.5s var(--delay, 0s) ease-in-out infinite alternate;
          /* UPDATED: Shadow color for depth */
          box-shadow: 0 0 2.75vmin 0.6875vmin rgba(5, 74, 21, 0.5) inset; 
          border-radius: 50%; will-change: transform; background: none;
        }
        .hero-bg li::before, .hero-bg li::after {
          content: ''; position: absolute; left: 50%; top: 50%;
          transform: translate(-50%,-50%); pointer-events: none; border-radius: 50%;
        }
        .hero-bg li::after {
          animation: anim-s 2.5s ease-in-out infinite alternate;
          /* UPDATED: Main neon glow */
          box-shadow: 0 0 1.375vmin 0.34375vmin rgba(15, 255, 80, 0.5) inset;
          width: var(--after-size, 0); height: var(--after-size, 0);
        }
        .hero-bg li::before {
          animation: anim-spin 2.5s var(--delay, 0s) linear infinite;
          /* UPDATED: Lighter neon glow highlight */
          box-shadow: 0 0 .6875vmin 0.171875vmin rgba(128, 255, 128, 0.75) inset;
          width: var(--before-size, 0); height: var(--before-size, 0);
        }
        @keyframes anim-v { 0% { transform: translate3d(0, 10vh, 0); } 100% { transform: translate3d(0,-10vh, 0) rotate3d(0,0,1,90deg);} }
        @keyframes anim-h { 0% { transform: translate(-50%, -50%) translate3d(0,0,0);} 100% { transform: translate(-50%, -50%) translate3d(0,0,var(--dist,0));} }
        @keyframes anim-spin { 0% { transform: translate(-50%,-50%) rotate(0deg);} 100% { transform: translate(-50%,-50%) rotate(360deg);} }
        @keyframes anim-s { 0% { transform: translate(-50%,-50%) scale3d(1,1,1);} 100% { transform: translate(-50%,-50%) scale3d(1.5,1.5,1.5);} }
        @keyframes anim-r { 0% { transform: rotate3d(1,1,0,75deg) rotate3d(0,0,-1,0deg);} 100% { transform: rotate3d(1,1,0,75deg) rotate3d(0,0,-1,360deg);} }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 h-full">
        {/* === LEFT SIDE: TEXT CONTENT === */}
        <div className="flex-1 flex flex-col items-start space-y-8 z-10 text-center lg:text-left">
          <div className="space-y-4">
            {/* UPDATED: Subtitle color to neon green */}
            <h2
              className={`text-[${theme.neonPrimary}] font-bold tracking-widest text-sm uppercase`}
            >
              Repair & Care Services
            </h2>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Revive Your <br />
              {/* UPDATED: Gradient text to neon green range */}
              <span
                className={`text-white bg-clip-text bg-gradient-to-r from-[${theme.neonLight}] to-[${theme.neonPrimary}]`}
              >
                Digital Life
              </span>
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At{" "}
              <strong className="text-white">
                ASHURA SAIF MOBILE PHONE REPAIR LLC.S.O.C
              </strong>
              , we don't just fix devices; we restore your connection to the
              world. From cracked screens to complex chip repairs, we deliver
              speed, precision, and privacy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* UPDATED: Primary button colors and shadow to neon green */}
            <button
              className={`bg-[${theme.neonPrimary}] text-white hover:bg-[${theme.neonLight}] px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(15,255,80,0.4)]`}
            >
              <a href="tel:+971563231520">Book a Repair</a>
            </button>
            {/* UPDATED: Secondary button borders and text to neon green */}
            <button
              className={`border border-[${theme.neonPrimary}]/30 text-[${theme.neonPrimary}] hover:bg-[${theme.neonPrimary}]/10 px-8 py-4 rounded-full font-bold text-lg transition-all`}
            >
              Our Pricing
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full">
            <div>
              <p className="text-3xl font-bold text-white">25m</p>
              <p className="text-sm text-gray-400">Avg. Repair Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">30d</p>
              <p className="text-sm text-gray-400">Warranty</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-400">Data Privacy</p>
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE: MOCKUP === */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          {/* MOCKUP CONTAINER */}
          <div className="relative w-[300px] h-[600px] md:w-[360px] md:h-[720px] bg-[#ececec] rounded-[44px] shadow-2xl border-[4px] border-[#d1d5db] overflow-hidden shrink-0">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-[#1c1c1e] rounded-[13px] z-20 shadow-sm"></div>

            {/* Buttons */}
            <div className="absolute -right-[6px] top-[100px] w-[3px] h-[50px] bg-[#c4c4c4] rounded bg-opacity-60 z-10"></div>
            <div className="absolute -left-[6px] top-[92px] w-[3px] h-[36px] bg-[#c4c4c4] rounded bg-opacity-60 z-10"></div>
            <div className="absolute -left-[6px] top-[144px] w-[3px] h-[36px] bg-[#c4c4c4] rounded bg-opacity-60 z-10"></div>

            {/* Inner Screen */}
            <div className="absolute inset-0 bg-black rounded-[40px] overflow-hidden z-[1]">
              <div className="relative w-full h-full flex flex-col">
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-[44px] flex justify-between items-center px-6 z-30 text-white text-sm font-medium select-none">
                  <span>{timeStr}</span>
                  <div className="flex gap-2">
                    {/* Signal */}
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 22 13"
                      fill="currentColor"
                    >
                      <rect x="0.5" y="9" width="3" height="3.5" rx="1" />
                      <rect x="5.5" y="6" width="3" height="6.5" rx="1" />
                      <rect x="10.5" y="3" width="3" height="9.5" rx="1" />
                      <rect
                        x="15.5"
                        y="0"
                        width="3"
                        height="12.5"
                        rx="1"
                        opacity="0.3"
                      />
                    </svg>
                    {/* Wifi */}
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 19 13"
                      fill="currentColor"
                    >
                      <path d="M9.5 11.5C10.05 11.5 10.5 11.05 10.5 10.5C10.5 9.94 10.05 9.5 9.5 9.5C8.94 9.5 8.5 9.94 8.5 10.5C8.5 11.05 8.94 11.5 9.5 11.5Z" />
                      <path
                        d="M3.07 7.5C5.38 5.18 9.61 5.18 11.92 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0.92 5C4.82 1.1 13.17 1.1 17.07 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Battery */}
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 25 13"
                      fill="currentColor"
                    >
                      <rect
                        x="1"
                        y="2"
                        width="19"
                        height="9"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <rect x="21" y="5" width="2.5" height="3" rx="1" />
                      <rect x="3" y="4" width="15" height="5" rx="1" />
                    </svg>
                  </div>
                </div>

                {/* GEOMETRIC ANIMATION BG */}
                <div className="absolute inset-0 flex items-center justify-center hero-bg overflow-hidden pointer-events-none">
                  <section aria-hidden="true">
                    <ul>
                      {orbitItems.map((style, index) => (
                        <li key={index} style={style} />
                      ))}
                    </ul>
                  </section>
                </div>

                {/* MOCKUP CONTENT */}
                <main className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
                  <h1 className="text-3xl font-black text-white tracking-widest uppercase mb-2 drop-shadow-lg">
                    ASHURA SAIF MOBILE PHONE REPAIR LLC.S.O.C
                  </h1>
                  <p className="text-white/80 text-sm mb-8 leading-relaxed max-w-[80%]">
                    Premium Smartphones & <br />
                    Repair Services.
                    <br />
                    Experience Excellence.
                  </p>
                  {/* UPDATED: Button gradient inside mockup to neon green */}
                  <button className="bg-[#39FF14] text-black font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:shadow-[0_0_30px_rgba(57,255,20,0.8)] hover:scale-105 transition-all duration-300">
                    <a href="#services" className="text-sm font-medium">
                      View Products
                    </a>
                  </button>
                </main>

                {/* Home Indicator */}
                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[110px] h-[5px] bg-white rounded-full opacity-60 z-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <>
      <section className="py-12 border-t border-white/5 bg-card/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-xl font-bold text-white mb-4">Privacy Policy</h3>
          <p className="text-muted-foreground text-sm">
            We prioritize your data privacy. Your device's information is
            treated with strict confidentiality and is never shared with third
            parties. We value the trust you place in us.
          </p>
        </div>
      </section>
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Changed background from bg-slate-900 to bg-card/20 & border-white/5 to match top section */}
          <div className="bg-card/20 border border-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              {/* Left Column: Contact Info */}
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Visit Our Service Center
                </h2>
                {/* Changed text-slate-400 to text-muted-foreground */}
                <p className="text-muted-foreground mb-10 text-lg">
                  Ready to fix your device? Visit us today or give us a call. We
                  are open and ready to help.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                      {/* Changed text-blue-400 to text-primary */}
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        17 18 St Al Murar, Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p
                        className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          (window.location.href = "tel:+971563231520")
                        }
                      >
                        +971 56 323 1520
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p
                        className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          (window.location.href = "mailto:hr@saifphone.com")
                        }
                      >
                        hr@saifphone.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Google Map */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10 h-full min-h-[400px] relative overflow-hidden group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  {/* Google Map Iframe */}
                  <iframe
                    title="Google Map Location"
                    width="100%"
                    height="100%"
                    src="https://maps.google.com/maps?q=11%2018A%20St%20Al%20Murar%20Dubai%20UAE&z=16&output=embed"
                    className="w-full h-full filter grayscale invert-[.85] contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
                  ></iframe>

                  {/* Floating Location Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 text-white p-4 rounded-xl shadow-2xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-sm">
                          ASHURA SAIF MOBILE PHONE REPAIR LLC.S.O.C
                        </p>
                        <p className="text-xs text-gray-400">
                          11 18A St - Al Murar - Dubai - United Arab Emirates
                        </p>
                      </div>
                      <a
                        href="https://www.google.com/maps?q=11+18A+St+Al+Murar+Dubai+UAE"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-primary/20 hover:bg-primary/40 text-primary p-2 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black pt-20 pb-10 border-t border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logoImg}
                alt="Saif Phone Logo"
                className="h-8 w-8 rounded-full border border-primary/20"
              />
              <span className="font-display font-bold text-lg text-white">
                ASHURA SAIF MOBILE PHONE{" "}
                <span className="text-primary">REPAIR LLC.S.O.C</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Professional Apple device repair center in UAE. Fast, reliable,
              and secure repairs for all your Apple products.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">
                iPhone Repair
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                iPad Repair
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                MacBook Repair
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Apple Watch Repair
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:hr@saifphone.com"
                  className="hover:text-white transition-colors"
                >
                  hr@saifphone.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+971563231520"
                  className="hover:text-white transition-colors"
                >
                  +971 56 323 1520
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="hover:text-white transition-colors">
                  11 18A St - Al Murar - Dubai - United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ASHURA SAIF MOBILE PHONE REPAIR LLC.S.O.C
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <OurPromise />
      <Mockup />
      <PrivacyPolicy />

      <Footer />
    </div>
  );
}
