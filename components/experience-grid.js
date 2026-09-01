'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/site-config';
import { SectionTitle } from './reveal';
const filters = ['All Experiences', 'Nature Escapes', 'Cultural Trails', 'Adventure', 'Spiritual Journeys', 'Heritage', 'Community Events'];
export default function ExperienceGrid({ title = <>Explore <i>Experiences</i></>, intro = 'Go somewhere new. Come home closer.' }) {
  const [active, setActive] = useState('All Experiences');
  const visible = active === 'All Experiences' ? experiences : experiences.filter((item) => item.type === active);
  return <section className="experiences section section--green" id="experiences"><div className="content-wrap"><SectionTitle eyebrow="GO WITH YOUR PEOPLE" title={title} text={intro} light/><div className="experience-filters" aria-label="Experience filters">{filters.map((filter) => <button onClick={() => setActive(filter)} className={filter === active ? 'is-active' : ''} key={filter}>{filter}</button>)}</div><motion.div className="postcard-grid" layout>{visible.map((item, index) => <motion.article className="postcard" key={item.id} layout initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .94 }} transition={{ duration: .35 }} whileHover={{ y: -9, rotate: index % 2 ? 1 : -1 }}><div className="postcard__image"><Image src={item.image} alt={`${item.title} destination in ${item.region}`} fill sizes="(max-width: 720px) 88vw, (max-width: 1100px) 45vw, 30vw"/><span className="postcard__stamp">HAPPIGO<br/>ROUTE</span></div><div className="postcard__body"><p>{item.region}</p><h3>{item.title}</h3><span>{item.note}</span><Link href={`/contact?interest=${encodeURIComponent(item.title)}`} aria-label={`Enquire about ${item.title}`}><ArrowUpRight size={20}/></Link></div></motion.article>)}</motion.div><div className="section-link"><Link href="/destinations">See all destinations <ArrowUpRight size={17}/></Link></div></div></section>;
}
