'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/site-config';
import { SectionTitle } from './reveal';
export default function Testimonials() { return <section className="testimonials section"><div className="content-wrap"><SectionTitle eyebrow="WORDS TO BE REPLACED WITH APPROVED FEEDBACK" title={<>Notes from the <i>journey.</i></>} text="Representative placeholder copy, ready for your community’s real stories."/><div className="note-stack">{testimonials.map((item, index) => <motion.article className="journal-note" key={item.name} initial={{ opacity: 0, y: 24, rotate: index - 2 }} whileInView={{ opacity: 1, y: 0, rotate: index - 2 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -7, rotate: 0 }}><Quote size={28}/><p>“{item.quote}”</p><footer><strong>{item.name}</strong><span>{item.type} / {item.place}</span></footer></motion.article>)}</div></div></section>; }
