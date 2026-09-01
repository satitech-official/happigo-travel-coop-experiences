import { MessageCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import ContactForm from './contact-form';
import { brand, contact } from '../data/site-config';
const whatsapp = `https://wa.me/91${contact.phones[0]}?text=${encodeURIComponent(contact.whatsappMessage)}`;
export default function ContactSection() { return <section className="contact-section section" id="contact"><div className="content-wrap contact-layout"><div className="contact-copy"><p className="eyebrow">START A NEW CHAPTER</p><h2>Tell us where<br/><i>together</i> could take you.</h2><p>Share the shape of your gathering. We will bring the route, details and just-right moments to life.</p><div className="contact-quick"><a href={`tel:+91${contact.phones[0]}`}><PhoneCall/> Call +91 {contact.phones[0]}</a><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle/> WhatsApp Happigo</a></div><span className="contact-copy__place">{brand.location} / Creating routes across India</span></div><div className="form-paper"><ContactForm/></div></div></section>; }
