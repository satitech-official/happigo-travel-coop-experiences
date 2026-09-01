'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Boxes, Camera, Globe2, Mail, Phone, Sparkles, WandSparkles } from 'lucide-react';
import { venus, VENUS_WEBSITE_URL } from '../data/site-config';

export default function VenusSection() {
  return <section className="venus-section section" id="venus-events"><div className="content-wrap venus-layout"><motion.a className="venus-banner" href={VENUS_WEBSITE_URL} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -28, rotate: -2 }} whileInView={{ opacity: 1, x: 0, rotate: -1 }} whileHover={{ y: -7, rotate: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }}><Image src="/images/venus-banner.jpeg" alt="Open the Venus Event & Suppliers live website" fill sizes="(max-width: 780px) 91vw, 49vw"/><span className="venus-banner__stamp">LAXMI<br/>VENTURES</span><span className="venus-banner__live">LIVE WEBSITE <ArrowUpRight size={14}/></span></motion.a><div className="venus-copy"><p className="eyebrow">OUR SISTER CONCERN</p><h2>Meet <i>Venus.</i><br/>Made for moments<br/>that matter.</h2><p>{venus.description}</p><div className="venus-services"><span><WandSparkles/> Event production</span><span><Boxes/> Event supplies</span><span><Sparkles/> Celebrations, beautifully executed</span></div><div className="venus-actions"><a className="button button--yellow" href={VENUS_WEBSITE_URL} target="_blank" rel="noopener noreferrer"><Globe2 size={16}/> Visit Venus website</a><a className="text-link text-link--light" href={`mailto:${venus.email}`}><Mail size={16}/> Start an event brief <ArrowUpRight size={16}/></a></div><a className="venus-social" href={venus.instagram} target="_blank" rel="noopener noreferrer"><Camera size={15}/> Instagram {venus.instagramLabel} <ArrowUpRight size={14}/></a><p className="venus-contact">{venus.location} · {venus.phones.join(' · ')}<br/>Facebook: {venus.facebookLabel}</p></div></div></section>;
}
