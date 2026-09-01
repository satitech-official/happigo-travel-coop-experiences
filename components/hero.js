'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Compass, MoveRight, Plane } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RouteReveal from './route-reveal';

export default function Hero() {
  const root = useRef(null); const reduce = useReducedMotion();
  useLayoutEffect(() => {
    if (reduce || !root.current) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to('.hero-art__mountain--far', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to('.hero-art__photo', { yPercent: -10, rotate: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to('.hero-art__compass', { rotate: 18, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to('.hero-art__plane', { x: 14, y: -9, rotate: -6, repeat: -1, yoyo: true, duration: 2.8, ease: 'sine.inOut' });
      gsap.to('.hero-art__tag', { y: -7, rotate: -5, repeat: -1, yoyo: true, duration: 2.4, ease: 'sine.inOut' });
      gsap.to('.hero-art__sun', { scale: 1.045, repeat: -1, yoyo: true, duration: 3.2, ease: 'sine.inOut' });
      gsap.to('.hero-art__orbit', { rotate: 360, repeat: -1, duration: 22, ease: 'none' });
    }, root); return () => ctx.revert();
  }, [reduce]);
  return <section className="hero paper-grain" ref={root}>
    <div className="hero-copy"><motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>A LAXMI VENTURES COMPANY</motion.p><h1><motion.span initial={{ opacity: 0, y: 65 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .14, ease: [0.22, 1, 0.36, 1] }}>Travel.</motion.span><motion.span initial={{ opacity: 0, y: 65 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .24, ease: [0.22, 1, 0.36, 1] }}>Connect.</motion.span><motion.span className="sun-text" initial={{ opacity: 0, y: 65 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .34, ease: [0.22, 1, 0.36, 1] }}>Celebrate.</motion.span></h1><motion.p className="hero-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .47 }}>Curated group journeys and cooperative events that turn a shared calendar into a shared story.</motion.p><motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}><Link href="/experiences" className="button button--green">Explore Experiences <MoveRight size={17}/></Link><Link href="/co-op-events" className="text-link">Co-op Events <ArrowDownRight size={18}/></Link></motion.div></div>
    <motion.div className="hero-art" aria-label="Illustrated travel journal collage" initial={{ opacity: 0, scale: .9, x: 35 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }} onPointerMove={(event) => { if (reduce || event.pointerType === 'touch') return; const bounds = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - bounds.left) / bounds.width - .5; const y = (event.clientY - bounds.top) / bounds.height - .5; gsap.to(event.currentTarget.querySelector('.hero-art__photo'), { x: x * 14, y: y * 12, duration: .55, overwrite: 'auto' }); gsap.to(event.currentTarget.querySelector('.hero-art__compass'), { x: x * -10, y: y * -9, duration: .55, overwrite: 'auto' }); }} onPointerLeave={(event) => { if (reduce) return; gsap.to(event.currentTarget.querySelector('.hero-art__photo'), { x: 0, y: 0, duration: .7 }); gsap.to(event.currentTarget.querySelector('.hero-art__compass'), { x: 0, y: 0, duration: .7 }); }}><div className="hero-art__sun"/><div className="hero-art__orbit"/><div className="hero-art__map">INDIA<br/><small>FIELD NOTES</small></div><div className="hero-art__mountain hero-art__mountain--far"/><div className="hero-art__mountain hero-art__mountain--near"/><div className="hero-art__road"/><div className="hero-art__photo"><Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=90" alt="Friends enjoying a group journey" fill sizes="(max-width: 760px) 70vw, 360px" priority/><span>TOGETHER / 2026</span></div><div className="hero-art__tag"><Image src="/images/happigo-logo-crop.png" alt="Happigo logo" width={58} height={58}/><b>HAPPIGO</b><small>ADMIT ONE</small></div><div className="hero-art__stamp">INDORE<br/>EXPRESS</div><div className="hero-art__compass"><Compass size={52}/><span>N</span></div><Plane className="hero-art__plane" size={26} fill="currentColor"/><span className="hero-art__flight-note">DEPARTURE / IND</span><RouteReveal className="hero-art__route"/><div className="hero-art__plant">❧</div></motion.div>
    <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
  </section>;
}
