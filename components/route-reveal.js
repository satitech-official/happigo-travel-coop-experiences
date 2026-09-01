'use client';
import { useLayoutEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default function RouteReveal({ className = '' }) {
  const root = useRef(null); const reduced = useReducedMotion();
  useLayoutEffect(() => {
    if (reduced || !root.current) return undefined;
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const ctx = gsap.context(() => {
      gsap.fromTo('.route-dash', { strokeDashoffset: 520 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top 80%', end: 'bottom 35%', scrub: 1 } });
      gsap.to('.route-plane', { motionPath: { path: '.route-path', align: '.route-path', autoRotate: true, alignOrigin: [0.5, 0.5] }, scrollTrigger: { trigger: root.current, start: 'top 78%', end: 'bottom 25%', scrub: 1 } });
    }, root);
    return () => ctx.revert();
  }, [reduced]);
  return <svg ref={root} className={`route-svg ${className}`} viewBox="0 0 800 240" aria-hidden="true"><path className="route-path" d="M35 176 C170 20, 270 228, 405 105 S630 10, 760 96" fill="none"/><path className="route-dash" d="M35 176 C170 20, 270 228, 405 105 S630 10, 760 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 10"/><g className="route-plane" transform="translate(35 176)"><path d="M0 -8 L18 0 L0 8 L4 1 L-10 0 L4 -1 Z" fill="currentColor"/></g></svg>;
}
