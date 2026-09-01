'use client';

import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Compass, MapPin, Plane, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function PageIntro({ eyebrow, title, text, cta = 'Begin a conversation' }) {
  const reduce = useReducedMotion();
  const loop = reduce ? {} : { y: [0, -12, 0], rotate: [-5, -2, -5] };

  return <section className="page-intro paper-grain"><div className="content-wrap"><div className="page-intro__visual" aria-hidden="true"><motion.div className="page-intro__orbit" animate={reduce ? {} : { rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}/><motion.div className="page-intro__postcard" animate={loop} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}><span>HAPPIGO / FIELD NOTE</span><b>MAKE THE<br/>MOMENT MOVE.</b><small><MapPin size={12}/> INDIA / 2026</small></motion.div><motion.div className="page-intro__ticket" animate={reduce ? {} : { y: [0, 9, 0], rotate: [9, 12, 9] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}><Sparkles size={19}/><span>GOOD<br/>THINGS<br/>AHEAD</span></motion.div><motion.div className="page-intro__compass" animate={reduce ? {} : { rotate: [0, 16, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}><Compass size={42}/><i>N</i></motion.div><Plane className="page-intro__plane" size={28} fill="currentColor"/><span className="page-intro__route">INDORE → EVERYWHERE</span></div><div className="page-intro__copy"><motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .42 }}>{eyebrow}</motion.p><motion.h1 initial={{ opacity: 0, y: 42, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: .72, delay: .08, ease: [0.22, 1, 0.36, 1] }}>{title}</motion.h1><motion.p className="page-intro__text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .22 }}>{text}</motion.p><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .34 }}><Link href="/contact" className="button button--green">{cta}<ArrowUpRight size={17}/></Link></motion.div></div><span className="page-intro__mark">✦</span><ArrowDown className="page-intro__down"/></div></section>;
}
