'use client';
import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function SectionTitle({ eyebrow, title, text, light = false, align = 'left' }) {
  return <Reveal className={`section-title ${light ? 'section-title--light' : ''} ${align === 'center' ? 'section-title--center' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-copy">{text}</p>}</Reveal>;
}
