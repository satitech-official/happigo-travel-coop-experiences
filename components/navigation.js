'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { brand, contact, navigation } from '../data/site-config';

const whatsapp = `https://wa.me/91${contact.phones[0]}?text=${encodeURIComponent(contact.whatsappMessage)}`;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    scroll(); window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <>
    <header className={`site-nav ${scrolled ? 'site-nav--compact' : ''}`}>
      <Link href="/" className="brand-mark" aria-label="Happigo home" onClick={() => setOpen(false)}><Image className="brand-mark__logo" src={`${basePath}/images/happigo-logo-crop.png`} alt="Happigo, a Laxmi Ventures company" width={54} height={54} priority/><span><b>{brand.name}</b><small>travel journal</small></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => <div className="nav-item" key={item.href}>
          <Link href={item.href}>{item.label}{item.children && <ChevronDown size={13} strokeWidth={2.5} />}</Link>
          {item.children && <div className="nav-dropdown">{item.children.map((child) => <Link href={item.href} key={child}>{child}</Link>)}</div>}
        </div>)}
      </nav>
      <Link href="/contact" className="connect-btn magnetic">Let&apos;s Connect <span>↗</span></Link>
      <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu /></button>
    </header>
    <AnimatePresence>
      {open && <motion.div className="mobile-menu" initial={{ clipPath: 'circle(0% at 90% 5%)' }} animate={{ clipPath: 'circle(150% at 90% 5%)' }} exit={{ clipPath: 'circle(0% at 90% 5%)' }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>
        <div className="mobile-menu__head"><span className="eyebrow">HAPPIGO / MENU</span><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
        <nav aria-label="Mobile navigation">{navigation.map((item, i) => <motion.div key={item.href} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .12 + i * .06 }}><Link href={item.href} onClick={() => setOpen(false)}>{item.label}<span>0{i + 1}</span></Link></motion.div>)}</nav>
        <div className="mobile-menu__actions"><a href={`tel:+91${contact.phones[0]}`}><Phone size={18} /> Call Happigo</a><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div>
        <p>Travel • Explore • Be Happy<br/><em>A Laxmi Ventures Company</em></p>
      </motion.div>}
    </AnimatePresence>
  </>;
}
