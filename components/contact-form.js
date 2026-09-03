'use client';
import { useEffect, useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { contact } from '../data/site-config';

const initial = { name: '', organization: '', phone: '', email: '', eventType: '', participants: '', location: '', date: '', budget: '', message: '' };
const labels = { name: 'Your name', organization: 'Organization / cooperative name', phone: 'Phone number', email: 'Email address', eventType: 'What are you planning?', participants: 'Number of participants', location: 'Preferred location', date: 'Tentative date', budget: 'Estimated budget', message: 'Tell us a little more' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get('interest');
    if (interest) setForm((current) => ({ ...current, eventType: 'Custom Experience', message: `I would like to know more about ${interest}.` }));
  }, []);

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    ['name', 'phone', 'email', 'eventType', 'participants'].forEach((key) => { if (!form[key].trim()) next[key] = 'Please complete this field.'; });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (Object.keys(next).length) { setErrors(next); return; }

    setErrors({});
    const message = [
      'Hello Happigo, I would like to plan an experience.',
      `Name: ${form.name}`,
      form.organization && `Organization: ${form.organization}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Plan: ${form.eventType}`,
      `Participants: ${form.participants}`,
      form.location && `Preferred location: ${form.location}`,
      form.date && `Tentative date: ${form.date}`,
      form.budget && `Estimated budget: ${form.budget}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/91${contact.phones[0]}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('success');
    setForm(initial);
  };

  if (status === 'success') return <div className="form-success" role="status"><CheckCircle2 size={45}/><h3>Your enquiry is ready.</h3><p>WhatsApp has been opened with your Happigo enquiry. Send the prepared message to continue with the team.</p><button className="button button--green" onClick={() => setStatus('idle')}>Send another enquiry</button></div>;

  return <form className="enquiry-form" noValidate onSubmit={submit}>{Object.keys(labels).map((key) => <label className={key === 'message' ? 'form-full' : ''} key={key}>{labels[key]}{key === 'eventType' ? <select name={key} value={form[key]} onChange={update} aria-invalid={Boolean(errors[key])}><option value="">Choose one</option><option>Co-op Event</option><option>Corporate Offsite</option><option>Group Tour</option><option>Custom Experience</option></select> : key === 'message' ? <textarea name={key} value={form[key]} onChange={update} rows="4" placeholder="A few details help us make the first reply useful."/> : <input type={key === 'email' ? 'email' : key === 'date' ? 'date' : key === 'participants' ? 'number' : 'text'} name={key} value={form[key]} onChange={update} aria-invalid={Boolean(errors[key])}/>} {errors[key] && <small className="form-error">{errors[key]}</small>}</label>)}<button className="button button--yellow form-submit">Send enquiry <Send size={16}/></button><p className="form-note">Your enquiry opens securely in WhatsApp so you can review it before sending.</p></form>;
}
