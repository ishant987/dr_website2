import { Calendar, Phone, Clock, MapPin, Activity, Stethoscope, HeartPulse, Microscope, Award, GraduationCap, ShieldCheck, Mail, ChevronRight, UserCheck } from 'lucide-react';
import { CLINIC_INFO, SERVICES, HOMEPAGE_FAQS } from '../data';
import { AppRoute } from '../types';
import FAQAccordion from '../components/FAQAccordion';
import MedicalCalculator from '../components/MedicalCalculator';
import JsonLd from '../components/JsonLd';
import AppointmentForm from '../components/AppointmentForm';
import { motion } from 'motion/react';
import doctorImg from '../../assets/doctor.png';

interface HomeProps {
  onNavigate: (route: AppRoute) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  
  // JSON-LD structured data for the Home page
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": CLINIC_INFO.name,
    "medicalSpecialty": ["Endocrinology", "Diabetology"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "26A, Gariahat Road (South), Dhakuria",
      "addressLocality": "Kolkata",
      "postalCode": "700031",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "telephone": [CLINIC_INFO.phone, CLINIC_INFO.phoneAlt1, CLINIC_INFO.phoneMobile],
    "email": CLINIC_INFO.email,
    "openingHours": "Mo-Fr 12:00-20:00",
    "url": window.location.origin,
    "logo": `${window.location.origin}/assets/logo.png`,
    "description": "Specialist medical clinic in Dhakuria & Kolkata for elite diabetes, thyroid profile, metabolic obesity health, and hormone therapy co-management."
  };

  const trustTenets = [
    {
      title: "Specialist Endocrine Care",
      desc: "Comprehensive diagnostic investigations targeting pituitary, thyroid, parathyroid, adrenal, and pancreatic glands.",
      icon: Stethoscope
    },
    {
      title: "Evidence-Based Diabetes Management",
      desc: "Application of current ADA (American Diabetes Association) and RSSDI guidelines for glucose titration and cardiorenal preservation.",
      icon: Activity
    },
    {
      title: "Academic & Clinical Experience",
      desc: "Supervised by Dr. Anirban Majumder, Professor of Endocrinology with fellowship credentials (FRCP London, FACE, FICP).",
      icon: GraduationCap
    },
    {
      title: "Patient-Centered Consultation",
      desc: "Empathetic communication models, transparent care protocols, and respectful attention to patient convenience.",
      icon: ShieldCheck
    },
    {
      title: "Structured Follow-Up & Lifestyle Guidance",
      desc: "Coordinated support from certified educators for insulin injection coaching, hypoglycemia avoidance, and metabolic dieting.",
      icon: HeartPulse
    }
  ];

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-5 h-5 text-brand-800" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-brand-800" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-brand-800" />;
      default: return <Microscope className="w-5 h-5 text-brand-800" />;
    }
  };

  // Design-crafted Framer Motion variants
  const heroContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const heroItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const rightPanelEntrance = {
    hidden: { opacity: 0, scale: 0.97, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 14, delay: 0.2 }
    }
  };

  return (
    <div>
      <JsonLd schema={homeSchema} />

      {/* HERO SECTION */}
      <section className="relative pt-10 pb-16 sm:pb-24 border-b border-brand-400/30 overflow-hidden bg-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Core pitch */}
            <motion.div 
              className="lg:col-span-12 xl:col-span-7 space-y-6"
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider bg-brand-900/35 border border-brand-850/40 text-brand-800 px-4.5 py-1.5 rounded-full"
                variants={heroItem}
              >
                Specialist Endocrinology Care in Kolkata
              </motion.span>
              
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-100 font-bold leading-tight tracking-tight text-gradient-purple-pink"
                variants={heroItem}
              >
                Expert Diabetes, Thyroid, Obesity & Hormone Care
              </motion.h1>
              
              <motion.p 
                className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans"
                variants={heroItem}
              >
                The Diabetes-Obesity-Thyroid & Hormone Clinic integrates diagnostic precision, modern medical guidelines, and counseling values under the care of <span className="text-white font-semibold">{CLINIC_INFO.doctorName}</span>. Restoring metabolic and hormonal cellular balance with personalized treatment planning.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3.5 pt-2"
                variants={heroItem}
              >
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-8 py-3.5 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded-full text-sm font-semibold shadow-md shadow-brand-900/30 hover:scale-[1.02] duration-200 transition cursor-pointer flex items-center justify-center gap-2 border border-brand-800/35"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  Book Appointment
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phoneMobile}`}
                  className="px-8 py-3.5 border border-brand-400 hover:border-brand-800 hover:bg-brand-900/10 text-slate-300 hover:text-white rounded-full text-sm font-semibold transition duration-200 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 shrink-0 text-brand-800" />
                  Call Clinic: {CLINIC_INFO.phoneMobile}
                </a>
              </motion.div>

              {/* Trust Indicators snapshot */}
              <motion.div 
                className="pt-6 border-t border-brand-400/30 grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={heroItem}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-800 shrink-0" />
                  <span className="text-xs text-slate-400 font-semibold">Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-800 shrink-0" />
                  <span className="text-xs text-slate-400 font-semibold">FRCP London Fellow</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <UserCheck className="w-5 h-5 text-brand-800 shrink-0" />
                  <span className="text-xs text-slate-400 font-semibold">25+ Yrs Experience</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Borderless Typographic Column with Confidence Portrait */}
            <motion.div 
              className="lg:col-span-12 xl:col-span-5 space-y-7 self-stretch flex flex-col justify-between"
              variants={rightPanelEntrance}
              initial="hidden"
              animate="visible"
            >
              
              {/* Confident Portrait Block - Completely borderless, blends with page background */}
              <div className="relative overflow-hidden aspect-[16/11] sm:aspect-[16/9] lg:aspect-[4/3] group">
                
                {/* Dynamic radial gradient glow directly in background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1a163f]/60 via-[#120f2d]/30 to-brand-900/15 rounded-2xl" />
                
                {/* SVG High-Tech Composition */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 animate-fadeIn" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="16" y2="0" stroke="rgba(124, 58, 237, 0.03)" strokeWidth="1" />
                      <line x1="0" y1="0" x2="0" y2="16" stroke="rgba(124, 58, 237, 0.03)" strokeWidth="1" />
                    </pattern>
                    
                    <filter id="ecgGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <style>
                    {`
                      @keyframes sweep {
                        0% { stroke-dashoffset: 700; }
                        100% { stroke-dashoffset: 0; }
                      }
                      @keyframes heartbeat-blink {
                        0%, 100% { transform: scale(1); opacity: 0.3; }
                        25% { transform: scale(1.25); opacity: 1; }
                        40% { transform: scale(0.95); opacity: 0.4; }
                        55% { transform: scale(1.15); opacity: 0.9; }
                      }
                      .sweep-line {
                        stroke-dasharray: 130 570;
                        animation: sweep 2.6s linear infinite;
                      }
                      .blink-led-1 {
                        animation: heartbeat-blink 1.3s infinite ease-in-out;
                        transform-origin: 138px 230px;
                      }
                      .blink-led-2 {
                        animation: heartbeat-blink 1.3s infinite ease-in-out;
                        animation-delay: 0.65s;
                        transform-origin: 278px 230px;
                      }
                    `}
                  </style>

                  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.8" />

                  {/* Thyroid Gland Outline */}
                  <g transform="translate(15, 20) scale(1.1)" className="text-brand-800/20" stroke="currentColor">
                    <path d="M 60 70 C 40 70, 20 85, 20 115 C 20 145, 40 165, 55 165 C 65 165, 70 135, 70 120 C 70 105, 65 85, 65 70 Z" fill="none" strokeWidth="1.5" strokeDasharray="3 2" />
                    <path d="M 80 70 C 80 85, 75 105, 75 120 C 75 135, 80 165, 90 165 C 105 165, 125 145, 125 115 C 125 85, 105 70, 85 70 Z" fill="none" strokeWidth="1.5" strokeDasharray="3 2" />
                    <path d="M 65 135 C 68 140, 72 140, 75 135" fill="none" strokeWidth="1.5" />
                    <circle cx="40" cy="115" r="2.5" className="fill-brand-800" />
                    <circle cx="105" cy="120" r="2.5" className="fill-brand-800" />
                  </g>

                  {/* ECG trace */}
                  <path 
                    d="M 10 180 L 80 180 L 88 172 L 96 192 L 104 180 L 120 180 L 128 140 L 138 230 L 148 170 L 158 185 L 166 180 L 220 180 L 228 172 L 236 192 L 244 180 L 260 180 L 268 140 L 278 230 L 288 170 L 298 185 L 306 180 L 390 180" 
                    fill="none" 
                    stroke="rgba(124, 58, 237, 0.12)" 
                    strokeWidth="1.5" 
                    className="opacity-20"
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />

                  <path 
                    d="M 10 180 L 80 180 L 88 172 L 96 192 L 104 180 L 120 180 L 128 140 L 138 230 L 148 170 L 158 185 L 166 180 L 220 180 L 228 172 L 236 192 L 244 180 L 260 180 L 268 140 L 278 230 L 288 170 L 298 185 L 306 180 L 390 180" 
                    fill="none" 
                    stroke="#ec4899" 
                    strokeWidth="2.5" 
                    filter="url(#ecgGlow)"
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="sweep-line"
                  />

                  <circle cx="138" cy="230" r="4" className="fill-brand-700 blink-led-1" />
                  <circle cx="138" cy="230" r="1" className="fill-white" />

                  <circle cx="278" cy="230" r="4" className="fill-brand-700 blink-led-2" />
                  <circle cx="278" cy="230" r="1" className="fill-white" />
                </svg>
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-30 bg-brand-900/80 backdrop-blur-xs text-white text-[9px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-brand-800/30">
                  Clinical Endocrine Specialist
                </div>

                {/* Confident Doctor cutout */}
                <div className="absolute right-0 bottom-0 w-[58%] h-full z-20 pointer-events-none">
                  <img
                    src={doctorImg}
                    alt="Dr. Anirban Majumder, Consultant Endocrinologist & Diabetologist"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Blending perfect overlays directly fading into #030014 page background */}
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-950 via-brand-950/60 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-950/20 to-transparent pointer-events-none z-10" />
                </div>

                {/* Left blending gradient */}
                <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-brand-950/95 via-brand-950/40 to-transparent pointer-events-none z-15" />
                
                {/* Info Overlay */}
                <div className="absolute bottom-4 left-4 z-35 max-w-[200px] pointer-events-none">
                  <p className="text-[9px] text-brand-800 font-bold tracking-widest uppercase leading-none">DR. ANIRBAN MAJUMDER</p>
                  <p className="text-xs font-serif font-bold text-slate-100 leading-tight mt-1">Specialist Thyroid & Diabetes Care</p>
                </div>
              </div>

              {/* Typographic Credentials Block (No box background or shadow) */}
              <div 
                onClick={() => onNavigate('/dr-anirban-majumder')}
                className="pt-5 border-t border-brand-400/20 space-y-2 cursor-pointer select-none group/bio"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-800">
                    Academic Leadership
                  </span>
                  <span className="h-px bg-brand-400/10 flex-grow" />
                  <span className="text-[9px] uppercase font-bold tracking-wider text-brand-700 bg-brand-900/15 border border-brand-800/20 px-2 py-0.5 rounded">
                    Professor
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-serif font-bold text-slate-100 group-hover/bio:text-brand-800 transition duration-150">
                    {CLINIC_INFO.doctorName}
                  </h3>
                  <p className="text-xs text-slate-400 leading-snug">
                    Professor of Endocrinology & Conjoint Faculty (Newcastle, Aus)
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["MBBS", "MD", "DM (Endo)", "FRCP (London)"].map((deg) => (
                    <span key={deg} className="text-[10px] border border-brand-800/20 text-brand-800 px-2.5 py-0.5 font-mono font-medium rounded-full bg-brand-900/5">
                      {deg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flat Timings & Location Section with vertical separator */}
              <div className="grid grid-cols-2 gap-6 pt-5 border-t border-brand-400/20">
                {/* Timings */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-800">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span className="font-bold text-slate-200 font-serif text-xs">Clinic Hours</span>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[11px] text-slate-400 leading-tight font-medium">{CLINIC_INFO.workingHours}</p>
                    <p className="text-[10px] text-red-400 font-semibold leading-none">{CLINIC_INFO.closedDays}</p>
                  </div>
                </div>
                {/* Location */}
                <div 
                  onClick={() => onNavigate('/contact')}
                  className="space-y-1.5 border-l border-brand-400/20 pl-6 cursor-pointer group/loc"
                >
                  <div className="flex items-center gap-2 text-brand-800 group-hover/loc:text-brand-700 transition">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="font-bold text-slate-200 font-serif text-xs">Dhakuria Clinic</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{CLINIC_INFO.address.split(',')[0]}, Dhakuria</p>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* BOOK APPOINTMENT SECTION */}
      <section className="py-12 sm:py-16 bg-[#040314] border-t border-brand-400/20" aria-labelledby="book-appointment-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 xl:col-span-8">
              <h2 id="book-appointment-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold mb-2">Book an Appointment</h2>
              <p className="text-slate-400 text-sm mb-6">Use the form to request a consultation slot and our team will call to confirm your appointment.</p>
              <AppointmentForm />
            </div>

            <aside className="lg:col-span-5 xl:col-span-4">
              <div className="bg-[#07051a]/60 rounded-xl border border-brand-400/30 p-5 text-slate-200 shadow-lg">
                <h3 className="text-sm font-semibold text-slate-100">What to expect</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-brand-800 mt-0.5" /> Office hours: {CLINIC_INFO.workingHours}</li>
                  <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-brand-800 mt-0.5" /> Call us: <a href={`tel:${CLINIC_INFO.phoneMobile}`} className="text-brand-800 font-semibold">{CLINIC_INFO.phoneMobile}</a></li>
                  <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-brand-800 mt-0.5" /> Email: <a href={`mailto:${CLINIC_INFO.email}`} className="text-brand-800 font-semibold">{CLINIC_INFO.email}</a></li>
                </ul>
                <div className="mt-4 text-xs text-slate-400">
                  <p>Please keep a reachable phone number — our coordinator will call to finalise the slot.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE TRUST ELEMENTS SECTION */}
      <section className="py-16 sm:py-24 bg-[#060515] relative z-10 border-b border-brand-400/30" aria-labelledby="trust-section-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Healing Philosophy & Warm Quote */}
            <motion.div 
              className="lg:col-span-12 xl:col-span-5 space-y-6 lg:sticky lg:top-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span id="trust-section-heading" className="text-xs font-semibold text-brand-850 uppercase tracking-wider block">
                Our Healing Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-100 font-bold tracking-tight leading-tight">
                Empathy, Science & Professional Dignity
              </h2>
              
              <div className="relative border-l-3 border-brand-850 pl-5 py-2 my-6 bg-brand-100/35 border border-y-0 border-r-0 border-brand-400/30 rounded-r-xl pr-4">
                <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed font-serif">
                  "Behind every physiological report and blood marker lies a unique human story. My true medical calling is not just to prescribe, but to diagnose with absolute precision, listen with authentic empathy, and guide you toward harmony."
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-8 h-px bg-brand-800/40" />
                  <p className="text-xs text-slate-200 font-bold tracking-wide font-sans">{CLINIC_INFO.doctorName}</p>
                </div>
              </div>

              <div className="bg-brand-900/15 rounded-xl p-5 border border-brand-800/30 text-xs text-slate-450 space-y-2">
                <p className="font-bold text-brand-800 font-serif text-sm">A Patient-First Commitment</p>
                <p className="leading-relaxed">
                  We purposefully avoid high-frequency medical assembly lines. Every session is structured around detailed discussion, careful physiological review, and co-designed endocrine or diabetes treatment options.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Narrative Editorial List (The 5 Tenets) */}
            <motion.div 
              className="lg:col-span-12 xl:col-span-7 space-y-10 lg:pl-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.12 }}
            >
              {trustTenets.map((tenet, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-6 items-start group relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 90, damping: 14 }}
                >
                  {/* Line connection */}
                  {idx < trustTenets.length - 1 && (
                    <div className="absolute left-[18px] top-10 bottom-[-40px] w-0.5 bg-brand-400/20 hidden sm:block" />
                  )}

                  {/* Circle number */}
                  <div className="w-10 h-10 rounded-full bg-brand-900/30 text-brand-800 font-serif font-bold text-base flex items-center justify-center shrink-0 border border-brand-850/40 group-hover:bg-brand-850 group-hover:text-white group-hover:border-brand-850 transition-all duration-300 shadow-sm select-none">
                    {`0${idx + 1}`}
                  </div>
                  
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-100 leading-snug group-hover:text-brand-800 transition-colors duration-150">
                      {tenet.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                      {tenet.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICES SUMMARY - SLEEK BOOTSTRAP LIST-GROUP/ROW GRID OVERHAUL */}
      <section className="py-16 sm:py-24 bg-[#030014] relative z-10 border-b border-brand-400/30" aria-labelledby="focus-section-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="block text-xs font-semibold text-brand-850 uppercase tracking-wider">
                Specialized Services
              </span>
              <h2 id="focus-section-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
                Clinical Focus Areas
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/services')}
              className="text-brand-800 hover:text-brand-700 text-xs sm:text-sm font-bold flex items-center gap-1 group transition cursor-pointer"
            >
              View Services Hub
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Clean Flat Border Bootstrap-Style List Group Layout */}
          <div className="bootstrap-list-group shadow-2xl">
            {SERVICES.map((srv) => (
              <div 
                key={srv.id}
                onClick={() => onNavigate(srv.route)}
                className="bootstrap-list-item flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
              >
                {/* Left Side: Title & Description */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-brand-900/30 border border-brand-850/40 flex items-center justify-center shrink-0 mt-0.5">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-brand-800">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl">
                      {srv.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Right Side: Learn more CTA */}
                <div className="flex items-center gap-4 shrink-0 md:pl-0 pl-14 mt-2 md:mt-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-800 bg-brand-900/20 px-3 py-1 rounded-full border border-brand-850/30">
                    Clinical Guidance
                  </span>
                  <div className="text-brand-800 font-bold flex items-center gap-1 text-xs sm:text-sm hover:text-brand-700 transition">
                    <span>Learn About Care</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE CLINICAL SCREENER TOOLS */}
      <section className="py-16 sm:py-24 bg-[#060515] relative z-10 border-b border-brand-400/30" aria-labelledby="tools-section-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <span className="inline-block text-xs font-semibold text-brand-850 uppercase tracking-wider bg-brand-900/35 border border-brand-800/40 px-3 py-1 rounded-full">
                Self-Care Empowered screening
              </span>
              <h2 id="tools-section-heading" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
                Empowering Patient Awareness Clinically
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We believe that robust, evidence-guided medical calculators should be transparently accessible to everyone. Use these medical-grade widgets to convert HbA1c to estimated average blood sugar levels or audit metabolic hazard traits under the guidance of standard international reference parameters.
              </p>
              
              <div className="space-y-4 pt-2 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-800 mt-2 shrink-0 animate-pulse" />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Uses official ADA ADAG formulas to ensure reliable, mathematical blood glucose metric calibration.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-800 mt-2 shrink-0 animate-pulse" />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Metabolic evaluation adheres strictly to IDF Indian cardiovascular waist-risk assessment markers.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 95, damping: 15 }}
            >
              <MedicalCalculator />
            </motion.div>

          </div>
        </div>
      </section>

      {/* LOCAL SEO CORE HIGHLIGHT */}
      <section className="py-16 bg-[#030014] relative z-10 border-b border-brand-400/30" aria-label="Local clinic details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-100/40 backdrop-blur-md rounded-xl border border-brand-400/40 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 shadow-2xl">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif text-slate-100 font-bold">
                Specialist Endocrine and Diabetes Care in Dhakuria
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                The Diabetes-Obesity-Thyroid & Hormone Clinic is a dedicated medical destination strategically situated on Gariahat Road South, South Kolkata. Our clinic focuses solely on hormone-related concerns, general endocrinological dysfunction, TSH profiling, and comprehensive diabetes mellitus screening.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Conveniently local to Dhakuria, Gariahat, Jadavpur, and Garia, our facility supports diagnostic consultations, insulin teaching modules, lipid care, and regional academic projects under the professional care of Dr. Anirban Majumder.
              </p>
            </div>
            
            <div className="bg-brand-900/15 rounded-lg p-5 border border-brand-850/40 flex flex-col justify-between">
              <div className="space-y-3 text-xs">
                <span className="block font-serif font-bold text-brand-800 text-sm">
                  Kolkata Clinic Address
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
                <div className="text-[11px] text-slate-500 pt-1">
                  Landmark: {CLINIC_INFO.landmark}
                </div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="mt-6 w-full text-center py-3 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-850 hover:to-brand-650 text-white rounded text-xs font-semibold tracking-wider uppercase transition cursor-pointer border border-brand-800/35 hover:scale-[1.01]"
              >
                Access Map & Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="py-16 sm:py-24 bg-[#060515] relative z-10" aria-labelledby="faq-section-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="text-xs font-semibold text-brand-850 uppercase tracking-wider bg-brand-900/35 border border-brand-800/40 px-3 py-1.5 rounded-full">
              FAQ Guidelines
            </span>
            <h2 id="faq-section-title" className="text-2xl sm:text-3xl font-serif text-slate-100 font-bold tracking-tight">
              Frequently Asked Clinic Questions
            </h2>
          </div>

          <FAQAccordion items={HOMEPAGE_FAQS} />
          
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('/contact')}
              className="text-brand-800 hover:text-brand-700 text-xs sm:text-sm font-semibold hover:underline cursor-pointer"
            >
              Have a different query? Contact our clinical desk directly.
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
