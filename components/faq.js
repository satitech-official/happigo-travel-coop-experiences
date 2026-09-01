'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/site-config';
import { SectionTitle } from './reveal';
export default function Faq() { const [open, setOpen] = useState(0); return <section className="faq section section--paper"><div className="content-wrap faq-layout"><SectionTitle eyebrow="GOOD TO KNOW" title={<>Questions before<br/><i>the journey?</i></>} text="We are always happy to talk through a detail."/><div className="accordion">{faqs.map(([question, answer], index) => <article className={open === index ? 'accordion__item is-open' : 'accordion__item'} key={question}><h3><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} aria-controls={`faq-${index}`}>{question}{open === index ? <Minus/> : <Plus/>}</button></h3><AnimatePresence initial={false}>{open === index && <motion.div id={`faq-${index}`} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}><p>{answer}</p></motion.div>}</AnimatePresence></article>)}</div></div></section>; }
