/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  Home,
  CheckCircle2,
  Calendar,
  Users,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

// --- Components ---

const LotusIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22C12 22 17 18 19 15C21 12 20 8 17 8C15 8 13 10 12 12C11 10 9 8 7 8C4 8 3 12 5 15C7 18 12 22 12 22Z" />
    <path d="M12 22C12 22 7 18 5 15C3 12 4 8 7 8C9 8 11 10 12 12C13 10 15 8 17 8C20 8 21 12 19 15C17 18 12 22 12 22Z" />
    <path d="M12 18V12" />
  </svg>
);

const LotusDivider = () => (
  <div className="flex justify-center py-12 opacity-25">
    <LotusIcon className="w-12 h-12 text-accent-gold" />
  </div>
);

const SectionHead = ({ badge, title, subtitle, align = "left" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
  >
    {badge && (
      <span className="font-body font-semibold text-[11px] uppercase tracking-[0.14em] text-accent-gold mb-4 block">
        {badge}
      </span>
    )}
    <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="font-body text-lg text-text-muted max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const PillButton = ({ children, variant = "filled", className = "" }) => {
  const base = "px-6 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-200 h-12 flex items-center justify-center";
  const variants = {
    filled: "bg-cta-bg text-cta-text hover:bg-cta-hover hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(184,134,11,0.35)] active:scale-[0.98]",
    outline: "border border-border text-text-primary hover:bg-surface active:scale-[0.98]"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const ImagePlaceholder = ({ label, src, className = "", children }: { label: string, src?: string, className?: string, children?: React.ReactNode }) => (
  <div 
    aria-label={label}
    className={`relative bg-surface overflow-hidden group ${className}`}
  >
    {src ? (
      <img 
        src={src} 
        alt={label}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    ) : (
      <div className="absolute inset-0 bg-accent-gold/5 group-hover:bg-accent-gold/10 transition-colors duration-500" />
    )}
    
    {/* Subtle Temple Arch Overlay on Hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none flex items-end justify-center z-10">
       <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-accent-gold">
         <path d="M10 90 Q 50 10 90 90 L 10 90" fill="none" stroke="currentColor" strokeWidth="2" />
       </svg>
    </div>
    {children}
  </div>
);

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Process", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const headlineWords = "Designing Homes That Feel Like Tirupati.".split(" ");

  return (
    <div className="min-h-screen relative selection:bg-accent-gold/20 selection:text-text-primary">
      {/* Background Motifs */}
      <div className="fixed inset-0 pointer-events-none kolam-bg z-0" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[120px] md:text-[160px] italic opacity-[0.03] pointer-events-none select-none text-accent-gold whitespace-nowrap z-0">
        మీ ఇల్లు దేవాలయం లాంటిది
      </div>

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'frosted-nav py-3' : 'bg-white/10 py-6'}`}>
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-2xl text-text-primary leading-none">Tirumala Spaces</span>
              <span className="font-body text-[10px] text-text-muted mt-1 uppercase tracking-[0.2em] font-semibold">Interior Design · Tirupati</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-body font-medium text-[13px] transition-all duration-200 relative group ${link.name === 'Home' ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-accent-gold transition-all duration-200 ${link.name === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <PillButton className="hidden sm:flex shadow-lg shadow-accent-gold/20">Book Free Home Visit</PillButton>
            <button 
              className="lg:hidden p-2 text-text-primary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-brand-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <LotusIcon className="w-8 h-8 text-accent-gold" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-text-primary" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="font-display font-medium text-3xl text-text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <PillButton variant="filled" className="w-full">Book Free Home Visit</PillButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative pt-[160px] pb-24 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-accent-gold" />
              <span className="font-body font-semibold text-[11px] uppercase tracking-[0.2em] text-accent-gold">
                Interior Design · Tirupati District
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-[72px] text-text-primary leading-[1.05] mb-6">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                  className={`inline-block mr-[0.25em] ${word === "Tirupati." ? "text-accent-gold italic" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <p className="font-body text-lg text-text-muted max-w-[480px] leading-relaxed mb-8">
              From vastu-compliant pooja rooms to open-plan family halls — we craft interiors that honour the sacred and the everyday, for Tirupati families and NRI homeowners.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <PillButton variant="filled">Book Consultation</PillButton>
              <PillButton variant="outline">View Our Projects</PillButton>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-white bg-surface shadow-sm overflow-hidden" />
                ))}
              </div>
              <span className="font-body font-medium text-[13px] text-text-muted">
                1,100+ Families Across Tirupati, Chittoor & Nellore
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-full min-h-[500px]"
            >
              <div className="absolute inset-x-0 -bottom-6 -right-6 w-full h-full border border-accent-gold/20 rounded-tr-[40px] rounded-bl-[40px] pointer-events-none" />
              <ImagePlaceholder 
                label="NRI family in newly designed white-and-gold living room, brass lamp on marble side table, Tirupati"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaAIdOklrzccRPgEEJ3zRzZouRHZD13uqZdHnL6lUDHRmHzCB4ady8kIZChOy2qkZMU8sMTiAxV_Qyqf3dqDzMN2n19wyLuy4dPNDzoAgSL5SMvoEp7SFgs4RkINRXn-kf8OjCZlngzUx6mlRlbyqIad5UueP_Pm0NKdLDpSYZpBhg-e6m5PjzTrSpbB3GW-rCtJrXOWWtsOxkADsIG6IIrlQ4kX0H8SkMsf6RVdZpNUkoo015G7Cq1TnEzpRyPJfH4BkMhmXmdhI"
                className="h-full w-full rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-2xl"
              >
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                 <div className="relative z-20 w-full mx-6 p-6 bg-white/90 backdrop-blur rounded-2xl border border-white/50 mt-auto mb-8">
                    <div className="text-[10px] text-accent-gold font-bold uppercase tracking-widest mb-1">Featured Project</div>
                    <div className="font-display text-2xl">The Heritage Villa, Tirupati East</div>
                    <div className="text-[11px] text-text-muted mt-2">Marble floors · Teak Pooja Room · Vastu Compliant</div>
                   </div>
              </ImagePlaceholder>

              <div className="absolute bottom-8 left-8 z-30">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-white/88 backdrop-blur-md rounded-full border border-border shadow-sm">
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                  <span className="font-body font-semibold text-xs text-text-primary tracking-tight">350+ Projects Completed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RECENT WORK STRIP */}
      <section className="py-12 border-y border-border/20 overflow-hidden bg-white/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-12 flex-1">
              {[
                "Vastu-Compliant 3BHK Transformation · Tirupati East",
                "Pooja Room & Mandapam Design Trends · Tirupati",
                "How We Designed a Dharamshala Lobby in Chittoor"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-brand-white/20" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-accent-ochre font-body font-semibold uppercase tracking-widest leading-none mb-1">Recent Report</span>
                    <h4 className="font-body font-medium text-sm text-text-primary group-hover:text-accent-gold transition-colors flex items-center gap-2">
                      {text}
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 lg:pt-0 border-t lg:border-t-0 border-border/50 lg:pl-12">
               <div className="flex items-center -space-x-3 shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-brand-white bg-surface shadow-sm" />
                ))}
              </div>
              <h3 className="font-display font-semibold text-2xl text-text-primary whitespace-nowrap">
                1,100+ Satisfied Families
              </h3>
            </div>
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* SERVICES */}
      <section className="py-24 px-gutter max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHead 
              badge="Our Services"
              title="Discover The Quality Of Our Work Through Real Tirupati Homes."
              subtitle="Every home in Tirupati tells a story — a pooja room that anchors morning prayers, a verandah where evenings are spent with family, a kitchen that feeds three generations. We design around your life, not against it."
            />
            
            <div className="space-y-6 mb-10">
              {[
                "Vastu-compliant layouts for spiritual harmony",
                "Traditional craftsmanship fused with modern luxury",
                "End-to-end management for stress-free delivery"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                  <span className="font-body font-medium text-[15px] text-text-primary">{item}</span>
                </div>
              ))}
            </div>

            <PillButton variant="filled">Get Started</PillButton>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[600px]">
            <ImagePlaceholder 
              label="Telugu couple with interior designer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDBVkxjC50aK7I4vEB18RM-KRoFSH8IyMqy3hAnMqdhXC208yHJp88HF8mU6xpn2nR_wukpxgeDiZzwdAvgitrKBydUu1cG58L4_kvoXVnS7EhGinC-eylUHdd8_vobGLFA9mvBh7dnvEK3Ju5sZoFyAh2MCLC5K2IvcdT9G3dctL4rVxRfbt1sNMMZehtTACGqRZVTYqNMlydJFtSh5Vh5YZNrMQpOWMbKgEXhE9DYEXwRjgfV7eKvsRZQiNn_KI7ZiWhVc_KMbk"
              className="row-span-2 rounded-[16px] shadow-lg"
            />
            <ImagePlaceholder 
              label="Pooja room with carved teak"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02BZsbRH_7RM8h2FBXR_m4nykYxP-YFcS8i7v6_YmXlboJHfyVDcYWG1wNPlwVkbhiimtYSBAv-mDN9j4IvLSyiTZ4IC4BymfOuU6SkZhhC8bSgMUcz23vvt4Pe_j_nyX5JkaOMN-SHDqwUtrzwmzvnH0ks0itu8odxgF6Zm_jt9AiaiOcsgZBCkVczurdHzT2gDvifiefJzUjNaRsRSKuhhqqQAP_yh_Qrhv-DmCoV9Gr-_ZwTkm0LdydK3Tc_Pv9JiM_zj37Pc"
              className="rounded-[16px] shadow-lg"
            />
            <ImagePlaceholder 
              label="Modern open kitchen"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNywtStyW4UOWVboCVvaYrPRQjcIA-U_M9rVfdwahNuRzGhLFayoteMDf2rPhjlMgf5ObqAO6kHAWYuxqzXtRjpcQHK_o_51Ypftaz6NWfrp5mUPGVYtAJi9cqZGnLDw3Z95t34DQP-S0pjsXFkoOmGUWZtD5upmei0hN1W0yQ2pJjSgDj1tQxQ24PQKUEXOh5dV01HYiLZ-tYdWDeeYqfrKHVuFaGnAduHXYFL-y21JHbReqnbf3RQ1XjsjCGOO_W0UM4gznoODc"
              className="rounded-[16px] shadow-lg"
            />
            <div className="col-span-2 mt-4">
              <ImagePlaceholder 
                label="Children's bedroom"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1MuV557bjFdXdeHxr1F3GQkfCAyjqtfNRq6HVOUn3JWv6ZNv2BbpfzZW-iYbCXnhsNVtdmILVTdSNv3JzwYB7mTVsqyHuQlIi5GguFCG9LHAigadEUyRwbxyRfTkQ5SjNcfBDqtQTBIeT11LGYd_d5mmfVwMBV1uTcuTVy9yvdhP4oO054CzPwJXbPUEPwPFqLArNsqJ0xSoDMq7CG_Fx9tbCTbAbsJEL1akTHYkptqNp5A24M13zTF9RBQUcPsdBtwLzJVhNzCU"
                className="h-32 rounded-[16px] shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-surface-dark py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "18+", label: "Years in Tirupati" },
              { num: "350+", label: "Projects Completed" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "60+", label: "Skilled Craftsmen" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`flex flex-col items-center justify-center text-center ${i !== 3 ? 'md:border-r border-accent-gold/20' : ''}`}
              >
                <span className="font-display font-bold text-5xl md:text-6xl text-accent-gold block mb-2 leading-none">
                  {stat.num}
                </span>
                <span className="font-body text-[10px] md:text-[11px] text-brand-white/50 tracking-[0.1em] uppercase font-semibold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 px-gutter max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <SectionHead 
              badge="Portfolio"
              title="Explore Our Latest Projects, Where Tirupati Tradition Meets Modern Living."
              subtitle="Teak, terracotta, temple stone, and natural light — every project we deliver is a conversation between the sacred and the contemporary."
            />
            <PillButton variant="outline">View All Projects</PillButton>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-7 h-[400px]">
              <ImagePlaceholder label="AP grandmother in living room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6W9Qps52D3BCWb14CUEHNc0t6kZVGi-JtEnGzRvEUqxdmjTArMTO998-4VA5phXHAwui5SKK2kp1aqGdSJdVeDXBhMVgtJUAt_aflLL5tX_RkR3uAIlUENYmbIPAGFzdM_g_haWmUv9vfxaJdaSMcmwCSkM6nKhboWhLsgrfsJOy9B1cQz2CuyV41RU4-M519oGS9tuLIQgi6iSDdLOOyVY35qtKf-BPSyUuPDLbzCpzhepddKB8Zlh1YsYv5xWgRRXpMGT7ra8" className="h-full w-full rounded-[16px] shadow-md" />
            </div>
            <div className="col-span-5 flex flex-col gap-4">
               <div className="h-[192px]">
                 <ImagePlaceholder label="Master bedroom carved headboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1MuV557bjFdXdeHxr1F3GQkfCAyjqtfNRq6HVOUn3JWv6ZNv2BbpfzZW-iYbCXnhsNVtdmILVTdSNv3JzwYB7mTVsqyHuQlIi5GguFCG9LHAigadEUyRwbxyRfTkQ5SjNcfBDqtQTBIeT11LGYd_d5mmfVwMBV1uTcuTVy9yvdhP4oO054CzPwJXbPUEPwPFqLArNsqJ0xSoDMq7CG_Fx9tbCTbAbsJEL1akTHYkptqNp5A24M13zTF9RBQUcPsdBtwLzJVhNzCU" className="h-full w-full rounded-[16px] shadow-md" />
               </div>
               <div className="h-[192px]">
                 <ImagePlaceholder label="Dining area stone floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCibh0DXbZZoS8YomWud8phzieykIwr3ZNU0_ijxZbIzky2eW8u4Sw5W0LXKT-uyXL788zsJgtUKRR1UzcjLKquGQ0ACnxlCxc3QEWd_EsYV9vhieqexY9PW6e6Nw-prDmxie-bVTg-BgGbBHkou178xAz3PWoCOv2sOzubWbjM6hnub2AjhUQ2SGnJ7ECwf52Z5k8FFXHrUfh1KMxfspNDBcHKGsR0oEtbKEqBeZODemKxaLFolgVyC45HEpHpJwvMfQuZ8HIF6dI" className="h-full w-full rounded-[16px] shadow-md" />
               </div>
            </div>
          </div>
        </div>

        {/* Featured Project */}
        <div className="bg-surface rounded-[24px] p-8 md:p-12 overflow-hidden shadow-sm border border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ImagePlaceholder label="White marble living room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADK0ZNYSozTv4qTQonA4wmCAfV2_Hfi-lmIPJNBi1vSr3bqPH3uXaDrxtA4GjzNrS2IZZSCrHDFOIjHhHqJpjiA4RuJmn-XcLYstwV1szZEC4bfKNPacKGOOJiBs2VIE4ULQ6M7MGK27435QkcxTiOtLdTsGWmqF8g6DN_ljKSw2yoehlDS2y0gJkwNcIiKgbb4_Ruki9cClEkDIwnWKXZGmx4Zs01OdsPk6wa_L60wQK2296mlpuknZkL9cugjzLMu87hTpax3NE" className="h-[400px] rounded-[16px]" />
            <div>
              <span className="font-body font-semibold text-[10px] uppercase tracking-widest bg-accent-gold text-white px-3 py-1 rounded inline-block mb-4">
                Featured · 2024
              </span>
              <h3 className="font-display text-4xl text-text-primary mb-6">
                Luxury Family Home — Tirupati East, 3BHK
              </h3>
              <p className="font-body text-text-muted leading-relaxed mb-8">
                A vastu-compliant family home designed for three generations. Rayalaseema granite flooring, carved teak pooja room, and an open-plan family hall flooded with natural light.
              </p>
              <a href="#" className="font-body font-semibold text-accent-gold flex items-center gap-2 group">
                View More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* FEATURE CARDS & TESTIMONIALS */}
      <section className="py-24 px-gutter max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Testimonials */}
          <div className="lg:col-span-7">
            <SectionHead 
              title="Truly Professional — Delivered Our Dream Home On Time."
              subtitle="Our clients appreciate our commitment to vastu compliance, timely delivery, and the warmth we bring to every space — from Tirupati flats to Chittoor villas."
            />
            
            <div className="space-y-12">
              {[
                {
                  quote: "They understood our need for a proper pooja room and still made the living hall feel modern. Our home finally feels like it belongs in Tirupati.",
                  author: "Lakshmi Devi Reddy",
                  role: "Homeowner · Tirupati Rural",
                  badges: ["Vastu Compliant", "On Time"]
                },
                {
                  quote: "We are NRIs who visit once a year. They managed everything remotely — 3D walkthroughs, WhatsApp updates, zero stress. Exceptional team.",
                  author: "Venkateswara Rao & Sudha",
                  role: "NRI Homeowners"
                }
              ].map((t, i) => (
                <div key={i} className="relative pl-12 border-l border-border/50">
                  <div className="absolute left-0 top-0 text-accent-gold opacity-30 text-4xl font-display">“</div>
                  <p className="font-display italic text-2xl text-text-primary mb-6">
                    {t.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-surface" />
                      <div>
                        <h4 className="font-body font-semibold text-sm text-text-primary leading-tight">{t.author}</h4>
                        <span className="font-body text-xs text-text-muted">{t.role}</span>
                      </div>
                    </div>
                    {t.badges && (
                      <div className="flex gap-2">
                        {t.badges.map(b => (
                          <span key={b} className="text-[10px] font-body font-semibold uppercase tracking-wider text-accent-gold bg-accent-gold/5 px-2 py-1 rounded">
                            {b} ✦
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Cards */}
          <div className="lg:col-span-5 space-y-6">
            {[
              { title: "Luxury Modern Living Room — Tirupati", img: "Telugu family in bright living room", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuADK0ZNYSozTv4qTQonA4wmCAfV2_Hfi-lmIPJNBi1vSr3bqPH3uXaDrxtA4GjzNrS2IZZSCrHDFOIjHhHqJpjiA4RuJmn-XcLYstwV1szZEC4bfKNPacKGOOJiBs2VIE4ULQ6M7MGK27435QkcxTiOtLdTsGWmqF8g6DN_ljKSw2yoehlDS2y0gJkwNcIiKgbb4_Ruki9cClEkDIwnWKXZGmx4Zs01OdsPk6wa_L60wQK2296mlpuknZkL9cugjzLMu87hTpax3NE" },
              { title: "Elegant Pooja Room & Mandapam Design", img: "Carved teak pooja room", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC02BZsbRH_7RM8h2FBXR_m4nykYxP-YFcS8i7v6_YmXlboJHfyVDcYWG1wNPlwVkbhiimtYSBAv-mDN9j4IvLSyiTZ4IC4BymfOuU6SkZhhC8bSgMUcz23vvt4Pe_j_nyX5JkaOMN-SHDqwUtrzwmzvnH0ks0itu8odxgF6Zm_jt9AiaiOcsgZBCkVczurdHzT2gDvifiefJzUjNaRsRSKuhhqqQAP_yh_Qrhv-DmCoV9Gr-_ZwTkm0LdydK3Tc_Pv9JiM_zj37Pc" }
            ].map((card, i) => (
              <div key={i} className="bg-surface rounded-[16px] p-6 border-l-[3px] border-accent-gold flex flex-col gap-4">
                <h4 className="font-display font-semibold text-xl text-text-primary">{card.title}</h4>
                <ImagePlaceholder label={card.img} src={card.src} className="h-32 rounded-[12px]" />
                <a href="#" className="font-body font-semibold text-xs text-accent-gold flex items-center gap-2 group mt-2">
                  View More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
            
            <div className="bg-accent-gold rounded-[16px] p-8 text-brand-white">
              <h3 className="font-display text-3xl mb-4">Ready to Redesign Your Home?</h3>
              <p className="font-body text-sm text-brand-white/80 mb-8 leading-relaxed">
                Tell us about your space — we'll bring the vision to life, vastu and all.
              </p>
              <button className="w-full bg-surface-dark text-brand-white px-6 py-4 rounded-full font-body font-semibold text-sm tracking-wide uppercase hover:bg-black transition-colors shadow-lg shadow-black/20">
                Book Free Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-surface-dark pt-24 pb-10 text-brand-white">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <LotusIcon className="w-8 h-8 text-accent-gold" />
                <span className="font-display font-semibold text-2xl">Tirumala Spaces</span>
              </div>
              <p className="font-display italic text-lg text-brand-white/60 mb-8">
                మీ ఇల్లు దేవాలయం లాంటిది
              </p>
              <p className="font-body text-xs text-brand-white/40 leading-relaxed uppercase tracking-widest">
                “Your home is like a temple.”
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-body font-bold text-sm uppercase tracking-widest mb-8 text-accent-gold">Explore</h4>
              <div className="flex flex-col gap-4">
                {["Services", "Portfolio", "About Us", "Our Process", "Blog", "Contact"].map(l => (
                  <a key={l} href="#" className="font-body text-sm text-brand-white/70 hover:text-brand-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-body font-bold text-sm uppercase tracking-widest mb-8 text-accent-gold">Visit Us</h4>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent-gold shrink-0" />
                  <p className="font-body text-sm text-brand-white/70 leading-relaxed">
                    Tirumala Spaces, Door No. 12-4,<br />
                    Leela Mahal Road, Tirupati – 517501
                  </p>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                  <p className="font-body text-sm text-brand-white/70 leading-relaxed">
                    hello@tirumala.spaces
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                  <p className="font-body text-sm text-brand-white/70 leading-relaxed">
                    +91 98765 43210
                  </p>
                </div>
                <a href="#" className="flex items-center gap-2 font-body text-sm text-[#25D366] hover:brightness-110 transition-all font-semibold">
                  <MessageCircle className="w-5 h-5" /> Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-body font-bold text-sm uppercase tracking-widest mb-8 text-accent-gold">Inspiration</h4>
              <p className="font-body text-sm text-brand-white/70 mb-6 leading-relaxed">
                Interior inspiration for Tirupati homes — delivered monthly.
              </p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-transparent border border-border/30 rounded-lg px-4 py-3 font-body text-sm text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:border-accent-gold transition-colors"
                />
                <button className="bg-accent-gold text-surface-dark px-6 py-3 rounded-lg font-body font-bold text-sm tracking-wide uppercase hover:brightness-110 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="h-24 w-full md:w-64 bg-brand-white/5 rounded-xl overflow-hidden grayscale opacity-30 pointer-events-none">
              {/* Maps Placeholder */}
              <div className="w-full h-full flex items-center justify-center font-body text-[10px] uppercase tracking-widest">
                Google Maps Implementation
              </div>
            </div>
            <p className="font-body text-[11px] text-brand-white/40 tracking-widest uppercase">
              © 2025 Tirumala Spaces, Tirupati. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-[100] group flex items-center"
      >
        <div className="pulse-ring w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        <div className="absolute right-full mr-4 bg-white text-text-primary px-4 py-2 rounded-lg shadow-xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap font-body font-semibold text-xs border border-border/50">
          Chat with us · Usually replies in 5 mins
        </div>
      </a>
    </div>
  );
}
