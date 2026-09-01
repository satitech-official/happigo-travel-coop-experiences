'use client';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { coOpEvents } from '../data/site-config';
import { SectionTitle } from './reveal';

export default function CoopEvents({ compact = false }) {
  const items = compact ? coOpEvents.slice(0, 4) : coOpEvents;
  return <section className="coops section section--green contour-bg" id="co-op-events"><div className="content-wrap"><SectionTitle eyebrow="THE HAPPIGO WAY OF GATHERING" title={<>Co-op <i>Events</i></>} text="Stronger Together. Celebrate as One." light/><div className="ticket-rail" role="list">{items.map((event, index) => { const Icon = Icons[event.icon] || Icons.Sparkles; return <motion.article className="ticket" role="listitem" key={event.title} initial={{ opacity: 0, y: 30, rotate: (index % 2 ? 2 : -2) }} whileInView={{ opacity: 1, y: 0, rotate: (index % 2 ? 1.5 : -1.5) }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5, delay: index * .06 }} whileHover={{ y: -10, rotate: 0 }}><div className="ticket__cut ticket__cut--top"/><div className="ticket__number">0{index + 1}</div><Icon className="ticket__icon" size={31} strokeWidth={1.5}/><h3>{event.title}</h3><p>{event.text}</p><Link href={`/contact?interest=${encodeURIComponent(event.title)}`} aria-label={`Enquire about ${event.title}`} className="round-arrow"><ArrowUpRight size={18}/></Link><span className="ticket__stamp">HAPPIGO<br/>APPROVED</span><div className="ticket__cut ticket__cut--bottom"/></motion.article>; })}</div><Link className="button button--yellow" href="/co-op-events">View All Co-op Events <ArrowUpRight size={17}/></Link></div></section>;
}
