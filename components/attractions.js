'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPinned, Sparkles } from 'lucide-react';
import { attractions } from '../data/site-config';
import { SectionTitle } from './reveal';

export default function Attractions() {
  return <section className="attractions section paper-grain"><div className="content-wrap"><div className="attractions__head"><SectionTitle eyebrow="THE HAPPIEST PART OF THE MAP" title={<>Centres of <i>attraction.</i></>} text="A journey feels special when the details give people something to talk about long after they return."/><div className="attractions__seal"><MapPinned size={24}/><span>HANDPICKED<br/>FOR YOUR PEOPLE</span></div></div><div className="attraction-grid">{attractions.map((item, index) => <motion.article className="attraction-card" key={item.title} initial={{ opacity: 0, y: 28, rotate: index === 1 ? 2 : -2 }} whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 1 : -1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: index * .08 }} whileHover={{ y: -10, rotate: 0 }}><div className="attraction-card__photo"><Image src={item.image} alt={item.title} fill sizes="(max-width: 720px) 85vw, 33vw"/><span><Sparkles size={14}/> HAPPIGO PICK</span></div><div className="attraction-card__body"><p>{item.kicker}</p><h3>{item.title}</h3><span>{item.text}</span><Link href={`/contact?interest=${encodeURIComponent(item.title)}`}>Make it part of our plan <ArrowUpRight size={17}/></Link></div></motion.article>)}</div></div></section>;
}
